// Run after `npm run build`. Checks the rendered contract, without a browser.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

const home = readFileSync(".next/server/app/index.html", "utf8");
const jsonLd = (html) => [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  .flatMap((match) => JSON.parse(match[1]));
const escaped = (text) => renderToStaticMarkup(createElement("span", null, text)).slice(6, -7);
assert.equal([...home.matchAll(/<h1\b/g)].length, 1, "one homepage H1");
assert.match(home, /<link rel="canonical" href="https:\/\/www\.usevyra\.com"/);
assert.match(home, /<title>Vyra: AI Video Editor That Edits Your Real Footage by Chat<\/title>/);

const faqs = jsonLd(home).find((item) => item["@type"] === "FAQPage")?.mainEntity;
const controls = [...home.matchAll(/<details\b[^>]*name="home-faq"[^>]*>([\s\S]*?)<\/details>/g)];
assert.equal(faqs?.length, 7, "seven schema answers");
assert.equal(controls.length, faqs.length, "each FAQ works as a native disclosure before hydration");
for (const [i, control] of controls.entries()) {
  assert.match(control[1], /<summary\b/);
  assert.ok(control[1].includes(escaped(faqs[i].name)), "visible question matches schema");
  assert.ok(control[1].includes(escaped(faqs[i].acceptedAnswer.text)), "visible answer matches schema");
}

const context = {};
runInNewContext(readFileSync(".next/server/app/page_client-reference-manifest.js", "utf8"), context);
const modules = Object.keys(context.__RSC_MANIFEST["/page"].clientModules);
for (const component of ["FAQ.tsx", "Footer.tsx", "Alternatives.tsx"]) {
  assert.ok(!modules.some((name) => name.endsWith(`/src/components/${component}`)), `${component} remains server-rendered`);
}
for (const match of home.matchAll(/<script\b[^>]*\bsrc="[^" ]+"[^>]*>/g)) {
  assert.match(match[0], /\b(?:async|defer|nomodule)\b/i, "no parser-blocking modern script");
}
for (const path of [
  "how-to/add-captions-to-videos-on-iphone",
  "answers/can-chatgpt-edit-videos",
  "features/reference-style-matching",
]) {
  const html = readFileSync(`.next/server/app/${path}.html`, "utf8");
  const breadcrumb = jsonLd(html).find((item) => item["@type"] === "BreadcrumbList");
  assert.ok(breadcrumb?.itemListElement.length >= 2, `${path} retains its real breadcrumb trail`);
}
console.log("Homepage audit checks passed: native FAQs, matching schema, metadata, server sections, scripts and inner-page breadcrumbs.");

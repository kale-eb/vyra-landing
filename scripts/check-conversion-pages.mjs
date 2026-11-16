// Run after the production build. Validate the shared entry template and corrected facts.
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
function* files(dir) { for (const e of readdirSync(dir, { withFileTypes: true })) { const p = join(dir, e.name); if (e.isDirectory()) yield* files(p); else if (p.endsWith(".html")) yield p; } }
let checked = 0;
for (const file of files(".next/server/app")) {
  const html = readFileSync(file, "utf8");
  if (!html.includes("data-opening-answer")) continue;
  const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
  assert.ok(article, `${file}: article exists`);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${file}: single H1`);
  assert.ok(html.includes('rel="canonical"'), `${file}: canonical`);
  assert.ok(!/<meta name="robots" content="[^"]*noindex/.test(html), `${file}: remains indexable`);
  const nav = html.match(/<nav\b[\s\S]*?<\/nav>/)?.[0];
  assert.ok(nav, `${file}: navigation`);
  assert.ok(!nav.includes("hidden sm:block"), `${file}: CTA is not hidden on phones`);
  const isSupport = article.includes("Get help with this problem");
  const isApi = article.includes("Check API access and setup");
  if (isSupport || isApi) {
    assert.ok(nav.includes(isApi ? '/docs/api' : '/app-support'), `${file}: specialist destination`);
    assert.ok(!article.match(/data-cta="(?:web-signup|app-store)"/), `${file}: no sales CTA replaces help/API intent`);
  } else {
    assert.ok(nav.includes('data-placement="navigation"'), `${file}: tracked navigation action`);
    assert.ok(article.includes('data-placement="header"'), `${file}: early tracked action`);
    assert.ok(html.includes('data-placement="footer"'), `${file}: closing tracked action`);
  }
  const media = article.indexOf("<iframe");
  if (media >= 0) {
    const body = article.indexOf("</header>");
    assert.ok(body < media, `${file}: opening answer precedes media`);
    const faq = article.indexOf('id="mobile-faq-heading"');
    if (faq >= 0) assert.ok(faq < media, `${file}: visible FAQ precedes optional media`);
    const firstInstructions = Math.min(...[article.indexOf("<ol"), article.indexOf("<pre")].filter(x => x >= 0));
    if (Number.isFinite(firstInstructions)) assert.ok(firstInstructions < media, `${file}: instructions before Instagram`);
  }
  checked++;
}
assert.ok(checked > 500, `review broad template coverage, got ${checked}`);
const compare = readFileSync(".next/server/app/compare/vyra-vs-capcut.html", "utf8");
assert.ok(compare.includes("EditPilot"));
assert.ok(compare.includes("CapCut × Codex"));
assert.ok(compare.includes("native"));
assert.ok(!compare.includes("CapCut timed out after 4"));
for (const slug of ["capcut-vs-veed", "capcut-vs-descript", "canva-vs-filmora"]) {
  const html = readFileSync(`.next/server/app/compare/${slug}.html`, "utf8");
  assert.ok(html.includes("Web and iPhone app"), `${slug}: generated third column inherits corrected platform`);
  if (slug.startsWith("capcut")) assert.ok(!/Neither CapCut nor [^.]*lets you edit by typing/.test(html), `${slug}: no obsolete chat claim`);
}
console.log(`Conversion layout and factual inheritance checks passed on ${checked} rendered entries.`);

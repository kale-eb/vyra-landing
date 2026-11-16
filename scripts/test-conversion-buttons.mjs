import assert from "node:assert/strict";
import vm from "node:vm";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { transpileModule, ModuleKind, ScriptTarget, JsxEmit } from "typescript";
const require = createRequire(import.meta.url);

function load(file, blocked = false) {
  const calls = [];
  const exports = {};
  const { outputText } = transpileModule(readFileSync(file, "utf8"), {
    compilerOptions: { module: ModuleKind.CommonJS, target: ScriptTarget.ES2022, jsx: JsxEmit.ReactJSX },
  });
  vm.runInNewContext(outputText, { exports, require(name) {
    if (name === "react/jsx-runtime") return require(name);
    if (name === "@vercel/analytics") return { track: (...args) => { if (blocked) throw Error("blocked"); calls.push(["vercel", ...args]); } };
    if (name === "./MetaPixel") return { trackLead: (...args) => { if (blocked) throw Error("blocked"); calls.push(["meta", ...args]); } };
    if (name === "@/lib/marketing-analytics") return { marketingAnalytics: { capture: (...args) => { calls.push(["posthog", ...args]); return Promise.resolve(); } } };
    throw Error(`Unexpected import ${name}`);
  } });
  return { Component: exports.default, calls };
}
for (const [file, destination, event] of [
  ["src/components/WebSignupButton.tsx", "https://app.usevyra.com/signup", "web_signup_clicked"],
  ["src/components/IosAppButton.tsx", "https://apps.apple.com/us/app/vyra-ai-video-editor/id6808889012", "app_store_clicked"],
]) {
  for (const blocked of [false, true]) {
    const { Component, calls } = load(file, blocked);
    for (const placement of ["navigation", "header", "footer"]) {
      const link = Component({ sourcePage: "/how-to/example", placement, compact: placement === "navigation" });
      assert.equal(link.type, "a");
      assert.equal(link.props.href, destination, "the destination remains a usable native link");
      assert.equal(link.props["data-source-page"], "/how-to/example");
      assert.doesNotThrow(() => link.props.onClick(), "provider errors cannot interrupt navigation");
      const last = calls.filter(([provider]) => provider === "posthog").at(-1);
      assert.equal(last[1], event);
      assert.equal(last[2].source_page, "/how-to/example");
      assert.equal(last[2].placement, placement);
      assert.equal(Object.keys(last[2]).length, 2, "only public route and placement are captured");
    }
    assert.equal(calls.filter(([provider]) => provider === "posthog").length, 3);
    assert.equal(calls.filter(([provider]) => provider === "meta").length, blocked ? 0 : 3);
    assert.equal(calls.filter(([provider]) => provider === "vercel").length, blocked ? 0 : 3);
  }
}
console.log("Conversion buttons pass destination, placement, explicit tracking and blocked-provider checks.");

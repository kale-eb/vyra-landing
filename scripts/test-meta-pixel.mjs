import assert from "node:assert/strict";
import vm from "node:vm";
import { readFileSync } from "node:fs";
import { transpileModule, ModuleKind, ScriptTarget } from "typescript";

// Exercise the real component with a delayed vendor SDK and client navigation.
const { outputText } = transpileModule(readFileSync("src/components/MetaPixel.tsx", "utf8"), {
  compilerOptions: { module: ModuleKind.CommonJS, target: ScriptTarget.ES2022 },
});
let pathname = "/";
const searchParams = {};
const dependencies = [];
let hook = 0;
const scripts = [];
const window = {};
const exports = {};
const context = vm.createContext({
  exports, window,
  document: {
    createElement: () => ({}),
    getElementsByTagName: () => [],
    head: { appendChild: (script) => scripts.push(script) },
  },
  require(name) {
    if (name === "react") return { useEffect(effect, deps) {
      const index = hook++;
      if (!dependencies[index] || deps.some((dep, i) => dep !== dependencies[index][i])) {
        dependencies[index] = deps;
        effect();
      }
    } };
    if (name === "next/navigation") return {
      usePathname: () => pathname,
      useSearchParams: () => searchParams,
    };
    throw Error(`Unexpected import ${name}`);
  },
});
vm.runInContext(outputText, context);
const render = () => { hook = 0; exports.default(); };
render();
assert.equal(scripts.length, 1);
assert.equal(scripts[0].async, true);
assert.equal(scripts[0].src, "https://connect.facebook.net/en_US/fbevents.js");
exports.trackLead("iPhone CTA");
const calls = [];
let automatic = true;
// Simulate the vendor receiving its queued commands after the first CTA.
const receive = (...args) => {
  calls.push(args);
  if (args[0] === "set" && args[1] === "autoConfig") automatic = args[2];
  if (args[0] === "init") assert.equal(automatic, false, "manual mode must be set before vendor initialization");
};
for (const args of window.fbq.queue) receive(...args);
window.fbq.callMethod = receive;
render();
assert.equal(calls.filter(([command]) => command === "init").length, 1);
assert.equal(calls.filter(([, event]) => event === "PageView").length, 1);
pathname = "/mcp";
render();
exports.trackLead("Web signup CTA");
assert.equal(scripts.length, 1, "navigation must not inject a second SDK");
assert.equal(calls.filter(([, event]) => event === "PageView").length, 2, "explicit route PageViews remain");
assert.deepEqual(calls.filter(([, event]) => event === "Lead").map((call) => call[2].content_name), ["iPhone CTA", "Web signup CTA"]);
context.window = undefined;
assert.doesNotThrow(() => exports.trackLead());
console.log("Meta Pixel manual-mode, delayed SDK, navigation and explicit Lead checks passed");

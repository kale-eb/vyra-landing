import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { transpileModule, ModuleKind, ScriptTarget } from "typescript";

const { outputText } = transpileModule(readFileSync("src/lib/marketing-analytics.ts", "utf8"), {
  compilerOptions: { module: ModuleKind.ESNext, target: ScriptTarget.ES2022 },
});
const { createMarketingAnalytics } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);

let loads = 0;
const calls = [];
const client = {
  init: (...args) => calls.push(["init", ...args]),
  capture: (...args) => calls.push(["capture", ...args]),
};
globalThis.window = {};
let resolveLoad;
const analytics = createMarketingAnalytics({
  key: "test-key",
  host: "https://test.invalid",
  load: () => { loads++; return new Promise((resolve) => { resolveLoad = resolve; }); },
});
assert.equal(loads, 0, "constructing the helper does not load the SDK");
const first = analytics.capture("app_store_clicked", { source_page: "/ai-video-editor-app", placement: "header" });
const second = analytics.capture("faq_opened", { source_page: "/how-to/example", question: "How?" });
const idle = analytics.init();
assert.equal(loads, 1, "early clicks and idle startup share a single SDK load");
assert.equal(calls.length, 0, "early events wait for the SDK");
resolveLoad(client);
await Promise.all([first, second, idle]);
assert.equal(calls.filter((call) => call[0] === "init").length, 1);
assert.equal(calls[0][1], "test-key");
assert.deepEqual(calls[0][2], {
  api_host: "https://test.invalid", autocapture: true, capture_heatmaps: true,
  capture_dead_clicks: true, capture_pageview: true, capture_pageleave: true,
  disable_session_recording: false,
});
assert.deepEqual(calls.slice(1), [
  ["capture", "app_store_clicked", { source_page: "/ai-video-editor-app", placement: "header" }],
  ["capture", "faq_opened", { source_page: "/how-to/example", question: "How?" }],
]);
await analytics.init();
assert.equal(loads, 1, "subsequent initialization does not reinitialize");

let disabledLoads = 0;
const disabled = createMarketingAnalytics({ load: async () => { disabledLoads++; return client; } });
await disabled.capture("ignored", {});
assert.equal(disabledLoads, 0, "no project key means no SDK request");
delete globalThis.window;
const server = createMarketingAnalytics({ key: "test-key", load: async () => { disabledLoads++; return client; } });
await server.init();
assert.equal(disabledLoads, 0, "server rendering does not initialize browser analytics");

globalThis.window = {};
let attempts = 0;
const retry = createMarketingAnalytics({ key: "test-key", load: async () => {
  if (++attempts === 1) throw new Error("blocked SDK");
  return client;
} });
await retry.capture("blocked", {});
await retry.capture("recovered", {});
assert.equal(attempts, 2, "a later interaction can retry a failed load");
assert.equal(calls.at(-1)[1], "recovered");
delete globalThis.window;
console.log("Analytics tests passed: deferred load, early clicks, single init, unchanged options, disabled/server paths and failure recovery.");

// Checks the Vyra API's OpenAPI spec (src/content/openapi.json) against the docs that describe the same API
// (src/app/docs/api/page.tsx, src/content/api-reference.md, src/lib/vyra-api.ts) and, given the app's
// repository, against the API's code: its routes, request fields, enums, limits, prices, webhook events and
// error codes. Fails on any drift.
//
//   node scripts/check-openapi.mjs                                   # the spec and the docs only
//   node scripts/check-openapi.mjs --backend "../marketing app"      # and the API's code on origin/main
//   node scripts/check-openapi.mjs --backend "../marketing app" --ref HEAD
//
// Run it after any change to the API or its docs. The API's code is in the Vyra app repository under
// v2/backend/routes/publicApi.js and v2/backend/services/publicApi/; v2/docs/vyra-api.md there is its
// internal reference. Validate the spec itself with `npx @redocly/cli lint src/content/openapi.json`.
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const read = (file) => fs.readFileSync(path.join(ROOT, file), "utf8");
const args = process.argv.slice(2);
const option = (name) => (args.includes(name) ? args[args.indexOf(name) + 1] : null);
const backend = option("--backend");
const ref = option("--ref") || "origin/main";

// In the API, not yet public. Guides are held until they can be used in production; vyra-landing #73 adds
// their docs, and whoever merges it adds them to the spec and removes them here.
const HELD = {
  routes: ["POST /v1/guides", "GET /v1/guides", "GET /v1/guides/{id}", "DELETE /v1/guides/{id}"],
  fields: ["guides"],
  codes: ["INVALID_GUIDES", "TOO_MANY_GUIDES", "GUIDE_NOT_FOUND", "GUIDE_FROM_THIS_VIDEO", "GUIDES_NOT_AVAILABLE", "VIDEO_REQUIRED", "GUIDE_LIMIT"],
};
// Codes the API's caller-facing files name that a caller never sees as such.
const NOT_CALLER_CODES = {
  API_PRICE_LIST_INVALID: "a broken price list setting, answered as 500 INTERNAL",
  FAILED: "listed in the spec's FailureCode as the fallback",
};

const problems = [];
const fail = (message) => problems.push(message);
const same = (label, expected, actual) => {
  const a = [...new Set(expected)].sort();
  const b = [...new Set(actual)].sort();
  const missing = a.filter((x) => !b.includes(x));
  const extra = b.filter((x) => !a.includes(x));
  if (missing.length) fail(`${label}: missing from the spec: ${missing.join(", ")}`);
  if (extra.length) fail(`${label}: in the spec but not the code: ${extra.join(", ")}`);
};

/* ── The spec on its own ─────────────────────────────────────────── */

const spec = JSON.parse(read("src/content/openapi.json"));
if (!/^3\.1\.\d+$/.test(spec.openapi)) fail(`openapi is ${spec.openapi}, not 3.1.x`);

const resolve = (pointer) => pointer.slice(2).split("/").reduce((node, key) => node?.[key.replace(/~1/g, "/").replace(/~0/g, "~")], spec);
(function refs(node, at) {
  if (Array.isArray(node)) return node.forEach((child, i) => refs(child, `${at}/${i}`));
  if (!node || typeof node !== "object") return;
  if (typeof node.$ref === "string" && resolve(node.$ref) === undefined) fail(`${at}: $ref ${node.$ref} does not resolve`);
  for (const [key, child] of Object.entries(node)) refs(child, `${at}/${key}`);
})(spec, "#");

const operations = [];
for (const [route, item] of Object.entries(spec.paths)) {
  for (const [method, op] of Object.entries(item)) {
    operations.push({ key: `${method.toUpperCase()} ${route}`, op });
    if (!op.operationId) fail(`${method.toUpperCase()} ${route} has no operationId`);
    for (const name of route.match(/\{([^}]+)\}/g) || []) {
      if (!(op.parameters || []).some((p) => p.in === "path" && `{${p.name}}` === name)) fail(`${method.toUpperCase()} ${route} does not declare ${name}`);
    }
  }
}
const ids = operations.map((o) => o.op.operationId);
if (new Set(ids).size !== ids.length) fail("operationIds are not unique");

const schemas = spec.components.schemas;
const enumOf = (name) => schemas[name].anyOf?.find((s) => s.enum)?.enum ?? schemas[name].enum;
const specCodes = new Set([...enumOf("ErrorCode"), ...enumOf("FailureCode")]);
const specEvents = Object.keys(spec.webhooks || {});

/* ── The spec against the docs ───────────────────────────────────── */

const lib = read("src/lib/vyra-api.ts");
const apiBase = lib.match(/API_BASE = "([^"]+)"/)[1];
if (spec.servers[0].url !== apiBase) fail(`servers[0].url is ${spec.servers[0].url}; src/lib/vyra-api.ts says ${apiBase}`);
const bands = [...lib.matchAll(/maxSeconds: (\d+), low: (\d+), high: (\d+)/g)].map((m) => m.slice(1).map(Number));
const share = Object.fromEntries([...lib.matchAll(/(portion|full): ([\d.]+)/g)].map((m) => [m[1], Number(m[2])]));

const md = read("src/content/api-reference.md");
const page = read("src/app/docs/api/page.tsx");
const usd = (cents) => `$${(cents / 100).toFixed(2)}`;
for (const [maxSeconds, low, high] of bands) {
  if (!new RegExp(`^\\| ${maxSeconds} \\([^)]*\\) \\| \\${usd(low)} \\| \\${usd(high)} \\|$`, "m").test(md)) {
    fail(`api-reference.md has no fee row "${maxSeconds} | ${usd(low)} | ${usd(high)}"`);
  }
}
const fee = (base, cuts, scope) => base + Math.ceil(base * share[scope] * (cuts - 1) - 1e-9);
for (const cuts of [1, 2, 3, 5, 10, 20]) {
  const row = `| ${cuts} | ${[fee(bands[0][1], cuts, "portion"), fee(bands[0][1], cuts, "full"), fee(bands[0][2], cuts, "portion"), fee(bands[0][2], cuts, "full")].map(usd).join(" | ")} |`;
  if (!md.includes(row)) fail(`api-reference.md has no variation row "${row}"`);
}
for (const { key } of operations) if (!md.includes(`\`${key}\``)) fail(`api-reference.md's Calls table does not list ${key}`);
for (const event of specEvents) if (!md.includes(`\`${event}\``)) fail(`api-reference.md does not name the webhook event ${event}`);
for (const event of specEvents) if (!page.includes(`<C>${event}</C>`)) fail(`/docs/api does not name the webhook event ${event}`);
// Every code the docs page names is in the spec and the Markdown.
const pageCodes = [...page.matchAll(/list=\{\[([^\]]+)\]\}/g)].flatMap((m) => [...m[1].matchAll(/"([A-Z_.]+)"/g)].map((c) => c[1]));
for (const code of pageCodes.filter((c) => !c.endsWith("..."))) {
  if (!specCodes.has(code)) fail(`/docs/api names ${code}, which the spec does not`);
  if (!md.includes(`\`${code}\``)) fail(`/docs/api names ${code}, which api-reference.md does not`);
}
for (const field of Object.keys(schemas.CreateVideoRequest.properties)) {
  if (!md.includes(`\`${field}\``)) fail(`api-reference.md does not describe the create field ${field}`);
}

/* ── The spec against the API's code ─────────────────────────────── */

if (backend) {
  const show = (file) => execFileSync("git", ["-C", backend, "show", `${ref}:${file}`], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  const B = "v2/backend/";
  const routes = show(`${B}routes/publicApi.js`);
  const request = show(`${B}services/publicApi/request.js`);
  const pricing = show(`${B}services/publicApi/pricing.js`);
  const videos = show(`${B}services/publicApi/videos.js`);
  const uploads = show(`${B}services/publicApi/uploads.js`);
  const usage = show(`${B}services/publicApi/usage.js`);
  const runner = show(`${B}services/publicApi/runner.js`);
  const auth = show(`${B}middleware/apiKeyAuth.js`);
  const server = show(`${B}api-server.js`);

  // Routes: the router is mounted at /v1.
  if (!/app\.use\('\/v1', require\('\.\/routes\/publicApi'\)/.test(server)) fail("api-server.js no longer mounts routes/publicApi at /v1");
  const codeRoutes = [...routes.matchAll(/router\.(get|post|put|patch|delete)\('([^']+)'/g)]
    .map((m) => `${m[1].toUpperCase()} /v1${m[2].replace(/:(\w+)/g, "{$1}")}`);
  for (const held of HELD.routes) if (operations.some((o) => o.key === held)) fail(`${held} is in the spec and in HELD; remove it from HELD`);
  same("Routes", codeRoutes.filter((r) => !HELD.routes.includes(r)), operations.map((o) => o.key));

  // Request fields.
  const setOf = (source, name) => [...source.match(new RegExp(`${name} = new Set\\(\\[([^\\]]+)\\]`))[1].matchAll(/'([a-z_]+)'/g)].map((m) => m[1]);
  const notHeld = (list) => list.filter((f) => !HELD.fields.includes(f));
  same("POST /v1/videos fields", notHeld(setOf(request, "KNOWN")), Object.keys(schemas.CreateVideoRequest.properties));
  same("POST /v1/videos/{id}/revisions fields", notHeld(setOf(request, "REVISION_FIELDS")), Object.keys(schemas.RevisionRequest.properties));
  if (!/key !== 'resolution'/.test(request)) fail("exportRequest takes fields other than resolution now");

  // Enums.
  const frozen = (source, name) => [...source.match(new RegExp(`${name} = Object\\.freeze\\(\\[([^\\]]+)\\]`))[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
  same("aspect_ratio", frozen(request, "ASPECT_RATIOS"), schemas.CreateVideoRequest.properties.aspect_ratio.enum);
  same("resolution", frozen(request, "RESOLUTIONS"), schemas.Resolution.enum);
  same("list status", frozen(request, "LIST_STATUSES"), spec.paths["/v1/videos"].get.parameters.find((p) => p.name === "status").schema.enum);
  same("video status", frozen(request, "LIST_STATUSES").filter((s) => s !== "working"), schemas.VideoStatus.enum);
  same("effort", frozen(pricing, "EFFORTS"), schemas.Effort.enum);
  same("variation_scope", frozen(pricing, "VARIATION_SCOPES"), schemas.CreateVideoRequest.properties.variation_scope.enum);

  // Limits.
  const number = (source, name) => Number(source.match(new RegExp(`${name}\\s*[=:]\\s*([\\d_]+)`))[1].replace(/_/g, ""));
  const props = schemas.CreateVideoRequest.properties;
  const check = (label, code, spec) => { if (code !== spec) fail(`${label}: code ${code}, spec ${spec}`); };
  check("footage entries", number(request, "MAX_FOOTAGE_ITEMS"), props.footage.maxItems);
  check("prompt length", number(request, "MAX_PROMPT"), props.prompt.maxLength);
  check("variation_brief length", number(request, "MAX_BRIEF"), props.variation_brief.maxLength);
  check("references", number(pricing, "references"), props.references.maxItems);
  check("variations", number(pricing, "variations"), props.variations.maximum);
  check("default max_seconds", number(pricing, "defaultMaxSeconds"), props.max_seconds.default);
  check("files per upload", number(uploads, "MAX_FILES"), schemas.UploadRequest.properties.files.maxItems);
  check("calls a minute", number(routes, "CALLS_PER_WINDOW"), 3000);
  if (!/footageMs: 3 \* 60 \* 60 \* 1000/.test(pricing)) fail("The footage limit is no longer 3 hours");
  if (!/express\.json\(\{ limit: '1mb' \}\)/.test(routes)) fail("The body limit is no longer 1 MB");

  // Prices.
  const codeBands = [...pricing.matchAll(/maxSeconds: (\d+), low: (\d+), high: (\d+)/g)].map((m) => m.slice(1).map(Number));
  if (JSON.stringify(codeBands) !== JSON.stringify(bands)) fail(`Fee bands differ: code ${JSON.stringify(codeBands)}, src/lib/vyra-api.ts ${JSON.stringify(bands)}`);
  const codeShare = pricing.match(/variationShare: Object\.freeze\(\{ portion: ([\d.]+), full: ([\d.]+) \}\)/);
  if (Number(codeShare[1]) !== share.portion || Number(codeShare[2]) !== share.full) fail(`Variation shares differ: code ${codeShare.slice(1)}, src/lib/vyra-api.ts ${JSON.stringify(share)}`);
  const revision = pricing.match(/revision: Object\.freeze\(\{ low: (\d+), high: (\d+) \}\)/).slice(1).map(Number);
  if (!md.includes(`| Each later revision of a cut | ${usd(revision[0])} | ${usd(revision[1])} |`)) fail(`Revision fee is ${revision.map(usd)} in code`);
  if (!/perVideoMinute: 2,/.test(pricing) || !/perAudioMinute: 1,/.test(pricing)) fail("Per-minute media prices changed");

  // Webhook events: every one the runner sends is in the spec.
  const literal = [...runner.matchAll(/'(video\.[a-z_]+)'/g)].map((m) => m[1]);
  const templated = /`video\.\$\{operation\.kind === 'revise' \? 'revision' : 'export'\}_failed`/.test(runner) ? ["video.revision_failed", "video.export_failed"] : [];
  same("Webhook events", [...literal, ...templated], specEvents);

  // Error codes: every code a caller can get from these files is in the spec.
  const codesIn = (source) => [
    ...source.matchAll(/(?:refuse|invalid|failure|badRange)\(\s*(?:res,\s*)?(?:\d{3},\s*)?'([A-Z][A-Z_]+)'/g),
    ...source.matchAll(/code: '([A-Z][A-Z_]+)'/g),
    ...source.matchAll(/\? '([A-Z][A-Z_]+)' : '([A-Z][A-Z_]+)'/g),
  ].flatMap((m) => m.slice(1).filter(Boolean));
  const callerCodes = new Set([routes, auth, request, pricing, videos, uploads, usage, runner].flatMap(codesIn));
  callerCodes.add("INSUFFICIENT_BALANCE");
  for (const code of callerCodes) {
    if (!specCodes.has(code) && !HELD.codes.includes(code) && !NOT_CALLER_CODES[code]) fail(`The API can answer ${code}, which the spec does not list`);
  }
  // And every code the spec lists still exists somewhere in the backend.
  const everyCode = new Set(execFileSync("git", ["-C", backend, "grep", "-h", "-o", "-w", "-E", "[A-Z][A-Z0-9_]{3,}", ref, "--", "v2/backend"], { encoding: "utf8", maxBuffer: 256 * 1024 * 1024 }).split("\n"));
  for (const code of specCodes) if (!everyCode.has(code)) fail(`The spec lists ${code}, which the backend no longer has`);
}

if (problems.length) {
  console.error(`OpenAPI check failed (${problems.length}):\n- ${problems.join("\n- ")}`);
  process.exit(1);
}
console.log(`OpenAPI check passed: ${operations.length} calls, ${specEvents.length} webhook events, ${specCodes.size} codes${backend ? `, against ${ref} of ${backend}` : " (docs only; pass --backend to check the API's code)"}.`);

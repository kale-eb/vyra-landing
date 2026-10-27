// Ping IndexNow (Bing, Naver, Seznam, Yep) with every URL in the sitemap.
// Usage: node scripts/indexnow-ping.mjs [sitemap-url]
// The key file is served from public/<key>.txt on www.usevyra.com.
const KEY = process.env.INDEXNOW_KEY ?? (await import("node:fs")).readdirSync("public").find((f) => /^[0-9a-f]{32}\.txt$/.test(f))?.replace(/\.txt$/, "");
if (!KEY) throw new Error("No IndexNow key file in public/ and INDEXNOW_KEY unset");
const SITEMAP = process.argv[2] ?? "https://www.usevyra.com/sitemap.xml";
const xml = await (await fetch(SITEMAP)).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
// A sitemap index lists child sitemaps; expand one level.
const pageUrls = [];
for (const u of urls) {
  if (u.endsWith(".xml")) {
    const child = await (await fetch(u)).text();
    pageUrls.push(...[...child.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((x) => !x.endsWith(".xml")));
  } else {
    pageUrls.push(u);
  }
}
const unique = [...new Set(pageUrls)];
console.log(`Pinging IndexNow with ${unique.length} URLs`);
for (let i = 0; i < unique.length; i += 10000) {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: "www.usevyra.com", key: KEY, keyLocation: `https://www.usevyra.com/${KEY}.txt`, urlList: unique.slice(i, i + 10000) }),
  });
  console.log(`Batch ${i / 10000 + 1}: HTTP ${res.status}`);
}

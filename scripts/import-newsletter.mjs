// Downloads every image referenced by the newsletter posts into public/newsletter/<slug>/
// and writes src/content/newsletter/<slug>.html with local image paths.
// Run: node scripts/import-newsletter.mjs
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const META = path.join(ROOT, "src/content/newsletter/meta.json");
const RAW = path.join(ROOT, "src/content/newsletter/raw");
const OUT = path.join(ROOT, "src/content/newsletter");
const PUB = path.join(ROOT, "public/newsletter");

const posts = JSON.parse(fs.readFileSync(META, "utf8"));

async function download(url, dest) {
  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) return true;
  const res = await fetch(url);
  if (!res.ok) {
    console.warn("  failed", res.status, url);
    return false;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
  return true;
}

function fileName(url, i) {
  const base = decodeURIComponent(new URL(url).pathname.split("/").pop() || `image-${i}`)
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${String(i).padStart(2, "0")}-${base}`;
}

for (const p of posts) {
  console.log(p.slug);
  let html = fs.readFileSync(path.join(RAW, `${p.slug}.html`), "utf8");
  const dir = path.join(PUB, p.slug);
  let i = 0;

  // thumbnail
  const thumbName = "00-cover" + path.extname(new URL(p.thumbnail).pathname);
  if (await download(p.thumbnail, path.join(dir, thumbName))) p.cover = `/newsletter/${p.slug}/${thumbName}`;

  // inline images
  const urls = [...html.matchAll(/data-src="([^"]+)"/g)].map((m) => m[1]);
  for (const url of urls) {
    i++;
    const name = fileName(url, i);
    const ok = await download(url, path.join(dir, name));
    const local = ok ? `/newsletter/${p.slug}/${name}` : url;
    html = html.replace(`data-src="${url}"`, `src="${local}" loading="lazy"`);
  }
  // youtube embeds
  html = html.replace(
    /<div class="youtube" data-youtube="([A-Za-z0-9_-]+)"><\/div>/g,
    '<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/$1" title="Vyra demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>'
  );
  fs.writeFileSync(path.join(OUT, `${p.slug}.html`), html.trim() + "\n");
}
fs.writeFileSync(META, JSON.stringify(posts, null, 2) + "\n");
console.log("done");

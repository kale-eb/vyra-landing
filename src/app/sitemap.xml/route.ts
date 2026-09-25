import { childSitemaps, renderUrlset, type SitemapUrl } from "@/lib/sitemaps";

export const dynamic = "force-static";

/* Flat sitemap with every canonical URL, for crawlers that do not follow a sitemap index.
   The segmented index lives at /sitemap-index.xml and both are listed in robots.txt. */
export function GET() {
  const seen = new Set<string>();
  const all: SitemapUrl[] = [];
  for (const [name, urls] of Object.entries(childSitemaps())) {
    if (name === "video") continue;
    for (const u of urls) {
      if (seen.has(u.loc)) continue;
      seen.add(u.loc);
      all.push({ loc: u.loc, lastmod: u.lastmod });
    }
  }
  return new Response(renderUrlset(all), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

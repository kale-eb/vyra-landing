import { reelEmbedUrl, resolveReels } from "@/lib/reels";
import { SITE_URL, SECTION_KEYS, getEntries, type SectionKey } from "@/lib/content";
import { posts } from "@/app/blog/[slug]/data";
import reviews from "@/content/reviews.json";
import { getNewsletterPosts } from "@/lib/newsletter";

export type SitemapVideo = { title: string; description: string; contentLoc?: string; playerLoc?: string; thumbnail: string; uploadDate: string };
export type SitemapUrl = { loc: string; lastmod: string; video?: SitemapVideo; videos?: SitemapVideo[] };

const STATIC_LASTMOD = "2026-09-24";

const CORE_STATIC: SitemapUrl[] = [
  { loc: "/", lastmod: STATIC_LASTMOD },
  { loc: "/pricing", lastmod: STATIC_LASTMOD },
  { loc: "/about", lastmod: STATIC_LASTMOD },
  ...((reviews as unknown[]).length ? [{ loc: "/reviews", lastmod: STATIC_LASTMOD }] : []),
  { loc: "/docs", lastmod: "2026-05-26" },
  { loc: "/docs/guide", lastmod: "2026-05-26" },
  { loc: "/docs/first-project", lastmod: "2026-05-26" },
  { loc: "/docs/mcp", lastmod: "2026-05-26" },
  { loc: "/app-support", lastmod: STATIC_LASTMOD },
  { loc: "/author/sulan", lastmod: STATIC_LASTMOD },
  { loc: "/privacy", lastmod: "2026-02-03" },
  { loc: "/terms", lastmod: "2026-02-03" },
];

function sectionUrls(section: SectionKey): SitemapUrl[] {
  const entries = getEntries(section);
  const latest = entries.reduce((m, e) => (e.updated > m ? e.updated : m), "2026-09-24");
  return [
    { loc: `/${section}`, lastmod: latest },
    ...entries.map((e) => ({ loc: e.url, lastmod: e.updated })),
  ];
}

/** Child sitemap names and their URL lists. Only non-empty children are listed in the index. */
export function childSitemaps(): Record<string, SitemapUrl[]> {
  const product = getEntries("product").map((e) => ({ loc: e.url, lastmod: e.updated }));
  const out: Record<string, SitemapUrl[]> = {
    core: [...CORE_STATIC, ...product, ...sectionUrls("features"), ...sectionUrls("templates")],
    tools: sectionUrls("tools"),
    compare: [...sectionUrls("compare"), ...sectionUrls("alternatives")],
    for: sectionUrls("for"),
    formats: sectionUrls("formats"),
    "how-to": sectionUrls("how-to"),
    prompts: sectionUrls("prompts"),
    answers: sectionUrls("answers"),
    tutorials: sectionUrls("tutorials"),
    glossary: [{ loc: "/glossary", lastmod: getEntries("glossary").reduce((m, e) => (e.updated > m ? e.updated : m), "2026-09-24") }],
    newsletter: [
      { loc: "/newsletter", lastmod: getNewsletterPosts()[0]?.date ?? STATIC_LASTMOD },
      ...getNewsletterPosts().map((p) => ({ loc: `/newsletter/${p.slug}`, lastmod: p.date })),
    ],
    blog: [
      { loc: "/blog", lastmod: "2026-05-26" },
      ...posts
        .filter((p) => !p.slug.startsWith("vyra-vs-"))
        .map((p) => ({ loc: `/blog/${p.slug}`, lastmod: new Date(p.publishedAt).toISOString().slice(0, 10) })),
    ],
  };
  const video: SitemapUrl[] = SECTION_KEYS.concat()
    .flatMap((s) => getEntries(s))
    .concat(getEntries("product"))
    .filter((e) => e.video || e.reels.length)
    .map((e) => {
      const videos: SitemapVideo[] = [];
      if (e.video) {
        videos.push({ title: e.title, description: e.description, contentLoc: e.video, thumbnail: `${SITE_URL}/og-image.png`, uploadDate: e.updated });
      }
      for (const r of resolveReels(e.reels)) {
        videos.push({
          title: r.title,
          description: `${r.title}. Instagram reel by Sulan Zhang (@sulansart), example on ${e.title}.`,
          playerLoc: reelEmbedUrl(r.id),
          thumbnail: `${SITE_URL}/og-image.png`,
          uploadDate: r.date,
        });
      }
      return { loc: e.url, lastmod: e.updated, videos };
    });
  if (video.length) out.video = video;
  return out;
}

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function renderUrlset(urls: SitemapUrl[]): string {
  const hasVideo = urls.some((u) => u.video || u.videos?.length);
  const ns = `xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"${hasVideo ? ' xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"' : ""}`;
  const body = urls
    .map((u) => {
      const list = [...(u.video ? [u.video] : []), ...(u.videos ?? [])];
      const v = list
        .map(
          (vid) =>
            `\n    <video:video>\n      <video:thumbnail_loc>${esc(vid.thumbnail)}</video:thumbnail_loc>\n      <video:title>${esc(vid.title)}</video:title>\n      <video:description>${esc(vid.description)}</video:description>\n      ${vid.contentLoc ? `<video:content_loc>${esc(vid.contentLoc)}</video:content_loc>` : `<video:player_loc>${esc(vid.playerLoc!)}</video:player_loc>`}\n      <video:publication_date>${vid.uploadDate}</video:publication_date>\n      <video:family_friendly>yes</video:family_friendly>\n    </video:video>`,
        )
        .join("");
      return `  <url>\n    <loc>${esc(SITE_URL + u.loc)}</loc>\n    <lastmod>${u.lastmod}</lastmod>${v}\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset ${ns}>\n${body}\n</urlset>\n`;
}

export function renderIndex(): string {
  const children = childSitemaps();
  const body = Object.entries(children)
    .filter(([, urls]) => urls.length > 0)
    .map(([name, urls]) => {
      const lastmod = urls.reduce((m, u) => (u.lastmod > m ? u.lastmod : m), "2026-01-01");
      return `  <sitemap>\n    <loc>${SITE_URL}/sitemaps/${name}.xml</loc>\n    <lastmod>${lastmod}</lastmod>\n  </sitemap>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</sitemapindex>\n`;
}

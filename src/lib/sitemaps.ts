import { SITE_URL, SECTION_KEYS, getEntries, type SectionKey } from "@/lib/content";
import { posts } from "@/app/blog/[slug]/data";

export type SitemapUrl = { loc: string; lastmod: string; video?: { title: string; description: string; contentLoc: string; thumbnail: string; uploadDate: string } };

const STATIC_LASTMOD = "2026-09-24";

const CORE_STATIC: SitemapUrl[] = [
  { loc: "/", lastmod: STATIC_LASTMOD },
  { loc: "/pricing", lastmod: STATIC_LASTMOD },
  { loc: "/docs", lastmod: "2026-05-26" },
  { loc: "/docs/guide", lastmod: "2026-05-26" },
  { loc: "/docs/first-project", lastmod: "2026-05-26" },
  { loc: "/docs/mcp", lastmod: "2026-05-26" },
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
    core: [...CORE_STATIC, ...product, ...sectionUrls("features")],
    compare: [...sectionUrls("compare"), ...sectionUrls("alternatives")],
    best: sectionUrls("best"),
    for: sectionUrls("for"),
    formats: sectionUrls("formats"),
    "how-to": sectionUrls("how-to"),
    prompts: sectionUrls("prompts"),
    answers: sectionUrls("answers"),
    tutorials: sectionUrls("tutorials"),
    glossary: sectionUrls("glossary"),
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
    .filter((e) => e.video)
    .map((e) => ({
      loc: e.url,
      lastmod: e.updated,
      video: {
        title: e.title,
        description: e.description,
        contentLoc: e.video!,
        thumbnail: `${SITE_URL}/og-image.png`,
        uploadDate: e.updated,
      },
    }));
  if (video.length) out.video = video;
  return out;
}

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function renderUrlset(urls: SitemapUrl[]): string {
  const hasVideo = urls.some((u) => u.video);
  const ns = `xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"${hasVideo ? ' xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"' : ""}`;
  const body = urls
    .map((u) => {
      const v = u.video
        ? `\n    <video:video>\n      <video:thumbnail_loc>${esc(u.video.thumbnail)}</video:thumbnail_loc>\n      <video:title>${esc(u.video.title)}</video:title>\n      <video:description>${esc(u.video.description)}</video:description>\n      <video:content_loc>${esc(u.video.contentLoc)}</video:content_loc>\n      <video:publication_date>${u.video.uploadDate}</video:publication_date>\n      <video:family_friendly>yes</video:family_friendly>\n    </video:video>`
        : "";
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

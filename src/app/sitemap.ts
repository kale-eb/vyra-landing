import type { MetadataRoute } from "next";

const SITE_URL = "https://usevyra.com";

// Real change dates per page. Update when the page actually changes.
// Avoid using `new Date()` everywhere — it regenerates on every build and
// produces a fake freshness signal that crawlers learn to discount.
const LAST_MODIFIED = {
  home: new Date("2026-05-17"),
  docsIndex: new Date("2026-05-17"),
  docsFirstProject: new Date("2026-05-17"),
  docsGuide: new Date("2026-05-17"),
  docsMcp: new Date("2026-05-17"),
  privacy: new Date("2026-02-03"),
  terms: new Date("2026-02-03"),
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: LAST_MODIFIED.home,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/docs`,
      lastModified: LAST_MODIFIED.docsIndex,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/docs/mcp`,
      lastModified: LAST_MODIFIED.docsMcp,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/docs/first-project`,
      lastModified: LAST_MODIFIED.docsFirstProject,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/docs/guide`,
      lastModified: LAST_MODIFIED.docsGuide,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: LAST_MODIFIED.privacy,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: LAST_MODIFIED.terms,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

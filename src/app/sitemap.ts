import type { MetadataRoute } from "next";
import { comparisons } from "./blog/[slug]/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts: MetadataRoute.Sitemap = comparisons.map((c) => ({
    url: `https://usevyra.com/blog/${c.slug}`,
    lastModified: new Date(c.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://usevyra.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://usevyra.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts,
    {
      url: "https://usevyra.com/privacy",
      lastModified: new Date("2026-02-03"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://usevyra.com/terms",
      lastModified: new Date("2026-02-03"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

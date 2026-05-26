import type { MetadataRoute } from "next";
import { posts } from "./blog/[slug]/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `https://www.usevyra.com/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://www.usevyra.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.usevyra.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts,
    {
      url: "https://www.usevyra.com/privacy",
      lastModified: new Date("2026-02-03"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.usevyra.com/terms",
      lastModified: new Date("2026-02-03"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

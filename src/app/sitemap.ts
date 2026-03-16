import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://usevyra.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
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

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.mj-plastics.com",
      lastModified: new Date("2026-07-26"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

import type { MetadataRoute } from "next";
import { getAllSkillSlugs } from "@/features/skills/utils/data";

const rawBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  process.env.SITE_URL?.trim() ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
  "http://localhost:3000";

const baseUrl = rawBaseUrl.endsWith("/")
  ? rawBaseUrl.slice(0, -1)
  : rawBaseUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const skillSlugs = getAllSkillSlugs();

  const staticRoutes = [
    "/",
    "/skills",
    "/docs",
  ];

  const skillRoutes = skillSlugs.map((slug) => `/skills/${slug}`);

  return [...staticRoutes, ...skillRoutes].map((route) => ({
    url: new URL(route, baseUrl).toString(),
    lastModified,
  }));
}

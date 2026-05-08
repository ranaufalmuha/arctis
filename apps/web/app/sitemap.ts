import type { MetadataRoute } from "next";
import { DOCS_NAV } from "@/features/docs/data/nav";

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

  const docRoutes = DOCS_NAV.flatMap((group) =>
    group.items.map((item) => item.href),
  );

  const staticRoutes = ["/", "/docs"];

  return [...staticRoutes, ...docRoutes].map((route) => ({
    url: new URL(route, baseUrl).toString(),
    lastModified,
  }));
}

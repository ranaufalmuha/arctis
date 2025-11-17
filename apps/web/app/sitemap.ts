import type { MetadataRoute } from "next";

const rawBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  process.env.SITE_URL?.trim() ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
  "http://localhost:3000";

const baseUrl = rawBaseUrl.endsWith("/")
  ? rawBaseUrl.slice(0, -1)
  : rawBaseUrl;

const routes = [
  "/",
  "/docs",
  "/docs/backgrounds/noise",
  "/docs/backgrounds/stars",
  "/docs/components/button",
  "/docs/components/code-block",
  "/docs/components/hero",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route, baseUrl).toString(),
    lastModified,
  }));
}

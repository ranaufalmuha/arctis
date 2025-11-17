import type { MetadataRoute } from "next";

const rawBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  process.env.SITE_URL?.trim() ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
  "http://localhost:3000";

const baseUrl = rawBaseUrl.endsWith("/")
  ? rawBaseUrl.slice(0, -1)
  : rawBaseUrl;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

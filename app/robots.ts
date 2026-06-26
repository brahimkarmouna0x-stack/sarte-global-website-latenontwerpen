import type { MetadataRoute } from "next";

import { SITE } from "@/constants";

const SITE_URL = SITE.url;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow all crawlers; block internal/API paths
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // Allow major AI search crawlers explicitly — improves Gemini, ChatGPT,
      // Claude and Perplexity AI Overview visibility
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

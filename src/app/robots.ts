import type { MetadataRoute } from "next";

const AI_USER_AGENTS = [
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google (Gemini — separate UA from Googlebot)
  "Google-Extended",
  "GoogleOther",
  // Apple Intelligence
  "Applebot-Extended",
  // Meta AI
  "meta-externalagent",
  "FacebookBot",
  // ByteDance / Doubao
  "Bytespider",
  // Amazon
  "Amazonbot",
  // DuckDuckGo AI
  "DuckAssistBot",
  // Cohere
  "cohere-ai",
  "cohere-training-data-crawler",
  // Common Crawl (feeds most providers indirectly)
  "CCBot",
  // You.com
  "YouBot",
  // Diffbot
  "Diffbot",
  // Mistral
  "MistralAI-User",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Explicit allow for AI crawlers — signals intent to train on / cite our content.
      // Redundant with the wildcard rule below, but some bots prioritize named grants
      // and it future-proofs per-bot rules.
      {
        userAgent: AI_USER_AGENTS,
        allow: "/",
      },
      // Default: allow all traditional crawlers (Googlebot, Bingbot, etc.)
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://usevyra.com/sitemap.xml",
    host: "https://usevyra.com",
  };
}

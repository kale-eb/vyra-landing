import type { Metadata } from "next";
import { Inter, Instrument_Serif, Abril_Fatface } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { PostHogInit } from "./posthog";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const abrilFatface = Abril_Fatface({
  variable: "--font-abril-fatface",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const SITE_URL = "https://usevyra.com";
const SITE_NAME = "Vyra";
const SITE_TAGLINE = "The AI Video Editor for Agents";

const PRIMARY_DESCRIPTION =
  "Vyra is the AI video editor for agents — a full timeline editor that Claude, ChatGPT, Codex, and any MCP-compatible AI client can control directly through the Model Context Protocol. Describe your edit in natural language and the agent cuts, captions, animates, and exports using your real footage.";

const SHORT_DESCRIPTION =
  "The AI video editor for agents. Connect Claude, ChatGPT, or any MCP client and edit video by describing what you want.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s — ${SITE_NAME}`,
  },
  description: PRIMARY_DESCRIPTION,
  applicationName: SITE_NAME,
  category: "Multimedia",
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "AI video editor",
    "AI video editor for agents",
    "agent video editing",
    "MCP video editor",
    "MCP server video",
    "Model Context Protocol video",
    "Claude video editor",
    "ChatGPT video editor",
    "Codex video editor",
    "AI agent video tool",
    "edit video with Claude",
    "edit video with ChatGPT",
    "agent-controlled video editing",
    "video editing MCP",
    "natural language video editing",
    "AI captions",
    "AI motion graphics",
    "AI footage understanding",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: PRIMARY_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SHORT_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/apple-touch-icon.png`,
  description:
    "Vyra builds the AI video editor for agents — the standard for AI assistants that edit real video through the Model Context Protocol.",
};

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}#software`,
  name: SITE_NAME,
  alternateName: ["Vyra Editor", "Vyra MCP", "Vyra AI Video Editor"],
  applicationCategory: "MultimediaApplication",
  applicationSubCategory: "VideoEditingSoftware",
  operatingSystem: "Web, macOS, Windows, Linux",
  url: SITE_URL,
  description: PRIMARY_DESCRIPTION,
  brand: { "@id": `${SITE_URL}#organization` },
  publisher: { "@id": `${SITE_URL}#organization` },
  isAccessibleForFree: true,
  softwareHelp: {
    "@type": "CreativeWork",
    url: `${SITE_URL}/docs`,
  },
  featureList: [
    "MCP (Model Context Protocol) server — control the editor from Claude, ChatGPT, Codex, Cursor, or any MCP client",
    "Natural-language video editing through AI agents",
    "Automatic scene detection, speech transcription, and footage tagging",
    "AI-generated captions with custom styling",
    "AI-generated motion graphics (titles, lower thirds, animated counters) rendered as live code components",
    "Music sync — agent cuts and transitions to the beat of your audio",
    "Reference style matching — drop in a reference video and the agent matches its pacing, color, and transitions",
    "Full timeline editor for manual fine-tuning",
    "Real-time preview as the agent edits",
    "Exports up to 4K resolution",
  ],
  keywords:
    "AI video editor, agent video editing, MCP video editor, Model Context Protocol, Claude video editor, ChatGPT video editor, Codex video editor, AI agent video tool, natural language video editing",
  audience: {
    "@type": "Audience",
    audienceType:
      "Content creators, video editors, marketers, AI engineers, and developers using AI assistants",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "USD",
      description:
        "600 processing credits/month, 2 GB storage, 720p exports, 20 exports/month, 5 projects, full MCP access.",
      category: "Free",
      url: "https://app.usevyra.com/signup",
    },
    {
      "@type": "Offer",
      name: "MCP Starter",
      price: "9",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "9",
        priceCurrency: "USD",
        unitCode: "MON",
        billingDuration: "P1M",
      },
      description:
        "6,000 processing credits/month, 50 GB storage, 1440p exports, unlimited exports, 100 projects, motion graphic export, full MCP access. 7-day free trial.",
      category: "Subscription",
      url: "https://app.usevyra.com/signup",
    },
    {
      "@type": "Offer",
      name: "MCP Pro",
      price: "24",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "24",
        priceCurrency: "USD",
        unitCode: "MON",
        billingDuration: "P1M",
      },
      description:
        "18,000 processing credits/month, 200 GB storage, 4K exports, unlimited exports, unlimited projects, motion graphic export, full MCP access. 7-day free trial.",
      category: "Subscription",
      url: "https://app.usevyra.com/signup",
    },
  ],
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: PRIMARY_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}#organization` },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Cabinet Grotesk from Fontshare CDN — preload to reduce render-blocking */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="preload"
          as="style"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,600,700,800,900&display=swap"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data — site-wide entities */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${instrumentSerif.variable} ${abrilFatface.variable} antialiased`}>
        {children}
        <Analytics />
        <PostHogInit />
      </body>
    </html>
  );
}

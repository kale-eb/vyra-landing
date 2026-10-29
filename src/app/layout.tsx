import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { PostHogInit } from "./posthog";
import MetaPixel from "@/components/MetaPixel";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.usevyra.com"),
  verification: { google: "d4RYrl9eNXy1sRsvk1AqjqKIneHWBfawBFZsHF6f2TQ" },
  title: "Vyra: AI Video Editor That Edits Your Real Footage by Chat",
  description:
    "Turn raw footage into finished videos in minutes. An AI editor that works with your footage, understands your content, and gives you full control.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "AI video editor",
    "video editing",
    "AI editing",
    "automatic video editing",
    "video creator",
    "content creation",
    "video captions",
    "social media video",
  ],
  authors: [{ name: "Vyra" }],
  creator: "Vyra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.usevyra.com",
    siteName: "Vyra",
    title: "Vyra - AI Video Editor",
    description:
      "Turn raw footage into finished videos in minutes. An AI editor that works with your footage, understands your content, and gives you full control.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vyra - AI Video Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vyra - AI Video Editor",
    description:
      "Turn raw footage into finished videos in minutes. AI-powered editing with full control.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://www.usevyra.com" },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Cabinet Grotesk is self-hosted; @font-face lives in globals.css */}
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/CabinetGrotesk-Variable.woff2"
          crossOrigin="anonymous"
        />
        {/* Organization + WebSite JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://www.usevyra.com/#organization",
                name: "Vyra",
                alternateName: ["Vyra AI", "Vyra AI Video Editor", "usevyra"],
                // Vyra is also a place name in Gujarat; this keeps AI answers from mixing the two up.
                disambiguatingDescription:
                  "Vyra is an AI video editor company (Y Combinator F26) based in San Francisco, not the town of Vyara in Gujarat, India.",
                url: "https://www.usevyra.com",
                logo: { "@type": "ImageObject", url: "https://www.usevyra.com/vyra-logo.png" },
                sameAs: [
                  "https://www.ycombinator.com/companies/vyra",
                  "https://apps.apple.com/us/app/vyra-ai-video-editor/id6808889012",
                  "https://www.instagram.com/app.usevyra/",
                  "https://www.youtube.com/@VyraVideo",
                  "https://discord.com/invite/mFWxyvg4Nj",
                ],
                founder: [
                  { "@type": "Person", name: "Sulan Zhang", url: "https://www.usevyra.com/author/sulan" },
                  { "@type": "Person", name: "Caleb Pong", sameAs: ["https://www.linkedin.com/in/cjpong/"] },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.usevyra.com/#website",
                name: "Vyra",
                url: "https://www.usevyra.com",
                publisher: { "@id": "https://www.usevyra.com/#organization" },
              },
            ]),
          }}
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Vyra",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "Web, iOS 17 or later",
              description:
                "AI-powered video editor that turns raw footage into finished videos in minutes.",
              url: "https://www.usevyra.com",
              downloadUrl: "https://apps.apple.com/us/app/vyra-ai-video-editor/id6808889012",
              publisher: { "@id": "https://www.usevyra.com/#organization" },
              // Plain facts AI answers keep getting wrong. Keep in step with src/content/pricing.ts.
              additionalProperty: [
                { "@type": "PropertyValue", name: "Free trial", value: "3-day free trial on the web app" },
                { "@type": "PropertyValue", name: "Free tier", value: "iPhone app: 100 free credits for new accounts, 720p exports with a watermark" },
                { "@type": "PropertyValue", name: "Platforms", value: "Web browser (Mac, Windows) and iPhone. No Android app" },
                { "@type": "PropertyValue", name: "Edits", value: "The user's own footage. Vyra does not generate video" },
                { "@type": "PropertyValue", name: "AI", value: "Built-in AI chat, or Claude, ChatGPT, and Cursor over MCP" },
              ],
              offers: [
                {
                  "@type": "Offer",
                  price: "54",
                  priceCurrency: "USD",
                  name: "Vyra AI Starter",
                  description: "Built-in AI editor, 6,000 processing credits, 100 GB storage, 1,000 exports/month, 1440p",
                },
                {
                  "@type": "Offer",
                  price: "129",
                  priceCurrency: "USD",
                  name: "Vyra AI Pro",
                  description: "Built-in AI editor, 20,000 processing credits, 500 GB storage, 1,000 exports/month, 4K",
                },
                {
                  "@type": "Offer",
                  price: "24",
                  priceCurrency: "USD",
                  name: "MCP Starter",
                  description: "6,000 processing credits, 100 GB storage, 1,000 exports/month, 1440p",
                },
                {
                  "@type": "Offer",
                  price: "65",
                  priceCurrency: "USD",
                  name: "MCP Pro",
                  description: "20,000 processing credits, 500 GB storage, 1,000 exports/month, 4K",
                },
              ],
            }),
          }}
        />
        {/*
          Favente creator-recruitment embed. In the root layout's <head> so it
          loads on every page; the recruit button only renders where the
          #favente-recruit container exists (the home pricing section, via
          FaventeRecruit). data-email is empty because this marketing site has
          no signed-in session. Design tokens were measured from the rendered
          home page: white pricing-style card surface, #111111 text, solid
          #6490D0 pill CTAs, soft card shadows, Inter body type.
        */}
        <script
          async
          src="https://api.favente.so/embed/vyra/init.js"
          data-mode="inline"
          data-container-id="favente-recruit"
          data-email=""
          data-accent="#6490D0"
          data-bg="#ffffff"
          data-ink="#111111"
          data-style="soft"
          data-btn="solid"
          data-radius="pill"
          data-shadow="soft"
          data-font="inherit"
        />
      </head>
      <body className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
        {children}
        <Analytics />
        <PostHogInit />
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
      </body>
    </html>
  );
}

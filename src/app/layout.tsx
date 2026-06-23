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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.usevyra.com"),
  title: "Vyra — AI Video Editor",
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
    title: "Vyra — AI Video Editor",
    description:
      "Turn raw footage into finished videos in minutes. An AI editor that works with your footage, understands your content, and gives you full control.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vyra — AI Video Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vyra — AI Video Editor",
    description:
      "Turn raw footage into finished videos in minutes. AI-powered editing with full control.",
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
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Vyra",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "Web",
              description:
                "AI-powered video editor that turns raw footage into finished videos in minutes.",
              url: "https://www.usevyra.com",
              offers: [
                {
                  "@type": "Offer",
                  price: "24",
                  priceCurrency: "USD",
                  name: "MCP Starter",
                  description: "6,000 processing credits, 100 GB storage, unlimited exports, 1440p",
                },
                {
                  "@type": "Offer",
                  price: "65",
                  priceCurrency: "USD",
                  name: "MCP Pro",
                  description: "20,000 processing credits, 500 GB storage, unlimited exports, 4K",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "150",
              },
            }),
          }}
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

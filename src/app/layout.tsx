import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://usevyra.com"),
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
    url: "https://usevyra.com",
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
        {/* Cabinet Grotesk from Fontshare CDN */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
        {/* Instrument Serif from Google Fonts — editorial italic display */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Instrument+Serif:ital@0;1&display=swap"
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
              url: "https://usevyra.com",
              offers: [
                {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  name: "Free",
                  description: "200 credits, 30 exports per month",
                },
                {
                  "@type": "Offer",
                  price: "40",
                  priceCurrency: "USD",
                  name: "Plus",
                  description: "2,300 credits, 1,000 exports per month",
                },
                {
                  "@type": "Offer",
                  price: "95",
                  priceCurrency: "USD",
                  name: "Pro",
                  description: "6,000 credits, 1,000 exports per month",
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
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

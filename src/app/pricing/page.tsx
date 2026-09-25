import type { Metadata } from "next";
import Link from "next/link";
import DirectoryNav from "@/components/directory/DirectoryNav";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/content";

const TITLE = "Vyra pricing: MCP plans from $24/mo, built-in AI plans from $54/mo";
const DESCRIPTION =
  "Vyra costs $24/mo (MCP Starter) or $65/mo (MCP Pro) with your own Claude, ChatGPT, or Cursor subscription, and $54/mo (AI Starter) or $129/mo (AI Pro) with the built-in AI. Free to start.";

export const metadata: Metadata = {
  title: `${TITLE} | Vyra`,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/pricing`,
    siteName: "Vyra",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Vyra pricing" }],
  },
};

import { PLANS, PRICING_FAQ as FAQ } from "@/content/pricing";


export default function PricingPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Vyra",
      description: DESCRIPTION,
      brand: { "@type": "Brand", name: "Vyra" },
      offers: PLANS.map((p) => ({
        "@type": "Offer",
        name: p.name,
        price: String(p.price),
        priceCurrency: "USD",
        url: `${SITE_URL}/pricing`,
        description: `${p.ai}. ${p.credits}, ${p.storage}, ${p.exports}, ${p.quality}.`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Vyra", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Pricing", item: `${SITE_URL}/pricing` },
      ],
    },
  ];

  return (
    <>
      {jsonLd.map((o, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }} />
      ))}
      <DirectoryNav crumbs={[{ label: "Pricing", href: "/pricing" }]} />
      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24">
        <h1
          className="mb-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Pricing
        </h1>
        <p className="mb-12 max-w-2xl text-[17px] leading-relaxed text-[var(--foreground-muted)]">
          Bring the AI you already pay for, or use ours. Free to start, cancel anytime.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p) => (
            <div key={p.name} className="flex flex-col rounded-2xl border border-[var(--surface-border)] bg-white p-6">
              <h2 className="text-[15px] font-semibold text-[var(--foreground)]">{p.name}</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-[var(--foreground)]">
                ${p.price}
                <span className="text-[14px] font-medium text-[var(--foreground-subtle)]">/mo</span>
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-[var(--foreground-muted)]">{p.ai}</p>
              <ul className="mt-5 space-y-2 text-[13px] text-[var(--foreground-muted)]">
                <li>{p.credits}</li>
                <li>{p.storage}</li>
                <li>{p.exports}</li>
                <li>{p.quality}</li>
              </ul>
              <a
                href="https://app.usevyra.com/signup"
                className="mt-6 rounded-full bg-[var(--foreground)] px-4 py-2.5 text-center text-[13px] font-semibold text-white"
              >
                Start free
              </a>
            </div>
          ))}
        </div>

        <section className="mt-16 max-w-3xl">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[var(--foreground)]">FAQ</h2>
          <div className="space-y-6">
            {FAQ.map((f) => (
              <div key={f.q}>
                <h3 className="mb-2 text-[16px] font-semibold text-[var(--foreground)]">{f.q}</h3>
                <p className="text-[15px] leading-relaxed text-[var(--foreground-muted)]">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-12 text-[13px] text-[var(--foreground-subtle)]">
          Compare plans against other editors on{" "}
          <Link href="/compare" className="underline underline-offset-2">
            /compare
          </Link>{" "}
          or see how the MCP plans work on{" "}
          <Link href="/mcp" className="underline underline-offset-2">
            /mcp
          </Link>
          .
        </p>
      </main>
      <Footer />
    </>
  );
}

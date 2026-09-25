import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DirectoryNav from "@/components/directory/DirectoryNav";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/content";
import reviews from "@/content/reviews.json";

/* Reviews page. Reads src/content/reviews.json. Ships only when at least one
   review with permission is present; otherwise it 404s and stays out of the
   sitemap. Shape: { name, handle?, url?, role, quote, rating?, date, format? } */

type Review = {
  name: string;
  handle?: string;
  url?: string;
  role: string;
  quote: string;
  rating?: number;
  date: string;
  format?: string;
};

const DESCRIPTION = "What creators say after editing real footage with Vyra: quotes from vloggers, podcasters, founders, and artists, with names and links.";

export const metadata: Metadata = {
  title: "Vyra reviews from creators | Vyra",
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/reviews` },
  robots: (reviews as Review[]).length ? undefined : { index: false, follow: true },
};

export default function ReviewsPage() {
  const items = reviews as Review[];
  if (!items.length) notFound();
  const rated = items.filter((r) => typeof r.rating === "number");
  const avg = rated.length ? rated.reduce((s, r) => s + (r.rating ?? 0), 0) / rated.length : null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Vyra",
    url: SITE_URL,
    ...(avg
      ? { aggregateRating: { "@type": "AggregateRating", ratingValue: avg.toFixed(1), ratingCount: rated.length, bestRating: 5 } }
      : {}),
    review: items.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name, ...(r.url ? { url: r.url } : {}) },
      reviewBody: r.quote,
      datePublished: r.date,
      ...(typeof r.rating === "number" ? { reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 } } : {}),
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DirectoryNav crumbs={[{ label: "Reviews", href: "/reviews" }]} />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <p className="mb-3 text-[13px] font-medium tracking-wide text-[var(--foreground-subtle)] uppercase">Reviews</p>
        <h1
          className="mb-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          What creators say about Vyra
        </h1>
        <p className="mb-10 text-[17px] leading-relaxed text-[var(--foreground-muted)]">{DESCRIPTION}</p>
        <div className="space-y-4">
          {items.map((r, i) => (
            <blockquote key={i} className="rounded-2xl border border-[var(--surface-border)] bg-white p-6">
              <p className="text-[16px] leading-relaxed text-[var(--foreground)]">&ldquo;{r.quote}&rdquo;</p>
              <footer className="mt-4 text-[13px] text-[var(--foreground-muted)]">
                {r.url ? (
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--foreground)] underline underline-offset-2">
                    {r.name}
                  </a>
                ) : (
                  <span className="font-semibold text-[var(--foreground)]">{r.name}</span>
                )}
                {r.handle ? ` (${r.handle})` : ""} · {r.role}
                {r.format ? ` · ${r.format}` : ""} · {r.date}
              </footer>
            </blockquote>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

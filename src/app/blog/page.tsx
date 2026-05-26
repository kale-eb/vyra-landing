import type { Metadata } from "next";
import Link from "next/link";
import { comparisons } from "./[slug]/data";

const SITE_URL = "https://usevyra.com";

export const metadata: Metadata = {
  title: "Blog — Vyra",
  description:
    "Comparisons and guides for AI video editing. How Vyra stacks up against CapCut, Descript, VEED, and more.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    siteName: "Vyra",
    title: "Blog — Vyra",
    description:
      "Comparisons and guides for AI video editing. How Vyra stacks up against CapCut, Descript, VEED, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vyra Blog",
      },
    ],
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--surface-border)] bg-white/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-2xl backdrop-saturate-150">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center px-6">
          <Link
            href="/"
            className="text-[22px] font-extrabold tracking-tight text-[var(--foreground)]"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Vyra
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1
          className="mb-3 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Blog
        </h1>
        <p className="mb-12 text-[15px] text-[var(--foreground-muted)]">
          Comparisons and writing on AI video editing.
        </p>

        <div className="space-y-3">
          {comparisons.map((c) => (
            <Link
              key={c.slug}
              href={`/blog/${c.slug}`}
              className="group block rounded-xl border border-[var(--surface-border)] bg-white p-5 transition-all duration-200 hover:border-[var(--surface-border-hover)] hover:shadow-md hover:shadow-black/[0.03]"
            >
              <p className="mb-1 text-[12px] font-medium tracking-wide text-[var(--foreground-subtle)] uppercase">
                Vyra vs {c.competitor}
              </p>
              <h2 className="mb-1.5 text-[16px] font-semibold text-[var(--foreground)] group-hover:text-[var(--brand-blue)]">
                {c.title}
              </h2>
              <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">
                {c.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 border-t border-[var(--surface-border)] pt-8">
          <Link
            href="/"
            className="text-[14px] text-[var(--foreground-subtle)] transition-colors hover:text-[var(--foreground-muted)]"
          >
            &larr; Back to home
          </Link>
        </div>
      </main>
    </>
  );
}

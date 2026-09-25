import type { Metadata } from "next";
import Link from "next/link";
import DirectoryNav from "@/components/directory/DirectoryNav";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/content";
import { getNewsletterPosts } from "@/lib/newsletter";

const TITLE = "Viral by Vyra";
const DESCRIPTION = "Sulan's weekly letters on making content as an artist and founder. Posting for the first time, hooks, flow state, friends who don't support you, and growing slowly.";

export const metadata: Metadata = {
  title: `${TITLE} | Vyra`,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/newsletter` },
  openGraph: { type: "website", url: `${SITE_URL}/newsletter`, siteName: "Vyra", title: TITLE, description: DESCRIPTION, images: [{ url: "/og-image.png", width: 1200, height: 630, alt: TITLE }] },
};

export default function NewsletterIndex() {
  const posts = getNewsletterPosts();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/newsletter`,
    author: { "@type": "Person", name: "Sulan Zhang", url: `${SITE_URL}/author/sulan` },
    blogPost: posts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `${SITE_URL}/newsletter/${p.slug}`, datePublished: p.date })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DirectoryNav crumbs={[{ label: "Newsletter", href: "/newsletter" }]} />
      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24">
        <p className="mb-3 text-[13px] font-medium tracking-wide text-[var(--foreground-subtle)] uppercase">Newsletter</p>
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
          {TITLE}
        </h1>
        <p className="mb-4 max-w-2xl text-[16px] leading-relaxed text-[var(--foreground-muted)]">{DESCRIPTION}</p>
        <p className="mb-12 text-[14px] text-[var(--foreground-subtle)]">
          New letters go out by email first.{" "}
          <a href="https://newsletter.usevyra.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[var(--foreground)]">
            Subscribe
          </a>
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} href={`/newsletter/${p.slug}`} className="group block overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-white transition-all duration-200 hover:border-[var(--surface-border-hover)] hover:shadow-md hover:shadow-black/[0.03]">
              {p.cover && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.cover} alt={p.title} className="aspect-[16/9] w-full object-cover" loading="lazy" />
              )}
              <div className="p-5">
                <p className="mb-2 text-[12px] text-[var(--foreground-subtle)]">Issue {p.issue} · {p.date}</p>
                <h2 className="mb-1 text-[16px] font-semibold text-[var(--foreground)] group-hover:text-[var(--brand-blue)]">{p.title}</h2>
                <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">{p.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

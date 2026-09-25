import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DirectoryNav from "@/components/directory/DirectoryNav";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/content";
import { getNewsletterPost, getNewsletterPosts } from "@/lib/newsletter";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getNewsletterPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getNewsletterPost(slug);
  if (!p) return {};
  const url = `${SITE_URL}/newsletter/${p.slug}`;
  return {
    title: `${p.title} | Viral by Vyra`,
    description: p.subtitle,
    alternates: { canonical: url },
    openGraph: { type: "article", url, siteName: "Vyra", title: p.title, description: p.subtitle, publishedTime: p.date, authors: ["Sulan Zhang"], images: [{ url: p.cover ?? "/og-image.png", alt: p.title }] },
    twitter: { card: "summary_large_image", title: p.title, description: p.subtitle, images: [p.cover ?? "/og-image.png"] },
  };
}

export default async function NewsletterPost({ params }: Params) {
  const { slug } = await params;
  const p = getNewsletterPost(slug);
  if (!p) notFound();
  const all = getNewsletterPosts();
  const idx = all.findIndex((x) => x.slug === p.slug);
  const newer = all[idx - 1];
  const older = all[idx + 1];
  const url = `${SITE_URL}/newsletter/${p.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: p.title,
      alternativeHeadline: p.subtitle,
      description: p.subtitle,
      url,
      datePublished: p.date,
      dateModified: p.date,
      image: p.cover ? `${SITE_URL}${p.cover}` : `${SITE_URL}/og-image.png`,
      author: { "@type": "Person", name: "Sulan Zhang", url: `${SITE_URL}/author/sulan`, sameAs: ["https://www.instagram.com/sulansart"] },
      publisher: { "@type": "Organization", name: "Vyra", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/vyra-logo.png` } },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      isPartOf: { "@type": "Blog", name: "Viral by Vyra", url: `${SITE_URL}/newsletter` },
      wordCount: p.words,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Vyra", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Newsletter", item: `${SITE_URL}/newsletter` },
        { "@type": "ListItem", position: 3, name: p.title, item: url },
      ],
    },
  ];

  return (
    <>
      {jsonLd.map((o, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }} />
      ))}
      <DirectoryNav crumbs={[{ label: "Newsletter", href: "/newsletter" }]} />
      <main className="mx-auto max-w-2xl px-6 pt-32 pb-24">
        <article>
          <header className="mb-8">
            <p className="mb-3 text-[13px] font-medium tracking-wide text-[var(--foreground-subtle)] uppercase">
              Viral by Vyra · Issue {p.issue}
            </p>
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              {p.title}
            </h1>
            <p className="text-[17px] leading-relaxed text-[var(--foreground-muted)]">{p.subtitle}</p>
            <p className="mt-4 text-[13px] text-[var(--foreground-subtle)]">
              By{" "}
              <Link href="/author/sulan" className="underline underline-offset-2 hover:text-[var(--foreground)]">
                Sulan Zhang
              </Link>{" "}
              · {p.date} · first sent by email
            </p>
          </header>
          {p.cover && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.cover} alt={p.title} className="mb-10 w-full rounded-2xl border border-[var(--surface-border)]" />
          )}
          <div className="newsletter-body" dangerouslySetInnerHTML={{ __html: p.html }} />
        </article>

        <nav className="mt-16 grid gap-3 border-t border-[var(--surface-border)] pt-8 sm:grid-cols-2">
          {older && (
            <Link href={`/newsletter/${older.slug}`} className="rounded-xl border border-[var(--surface-border)] bg-white p-4 text-[14px] hover:border-[var(--surface-border-hover)]">
              <span className="block text-[11px] text-[var(--foreground-subtle)] uppercase">Earlier</span>
              <span className="font-semibold text-[var(--foreground)]">{older.title}</span>
            </Link>
          )}
          {newer && (
            <Link href={`/newsletter/${newer.slug}`} className="rounded-xl border border-[var(--surface-border)] bg-white p-4 text-[14px] hover:border-[var(--surface-border-hover)] sm:text-right">
              <span className="block text-[11px] text-[var(--foreground-subtle)] uppercase">Later</span>
              <span className="font-semibold text-[var(--foreground)]">{newer.title}</span>
            </Link>
          )}
        </nav>
        <p className="mt-8 text-center text-[13px] text-[var(--foreground-subtle)]">
          Get the next one by email at{" "}
          <a href="https://newsletter.usevyra.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
            newsletter.usevyra.com
          </a>
        </p>
      </main>
      <Footer />
    </>
  );
}

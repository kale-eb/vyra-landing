import type { Metadata } from "next";
import Link from "next/link";
import DirectoryNav from "@/components/directory/DirectoryNav";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/content";
import { KIND_LABEL, formatDate, getListedPosts } from "@/lib/blog";

export const revalidate = 60;

const TITLE = "Blog";
const DESCRIPTION = "Product updates and writing from the team building Vyra.";

export const metadata: Metadata = {
  title: `${TITLE} | Vyra`,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    siteName: "Vyra",
    title: `${TITLE} | Vyra`,
    description: DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Vyra Blog" }],
  },
};

export default async function BlogIndexPage() {
  const posts = await getListedPosts();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Vyra Blog",
    description: DESCRIPTION,
    url: `${SITE_URL}/blog`,
    publisher: { "@type": "Organization", name: "Vyra", url: SITE_URL },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}${p.url}`,
      datePublished: p.date,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DirectoryNav crumbs={[{ label: "Blog", href: "/blog" }]} />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1
          className="mb-3 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          {TITLE}
        </h1>
        <p className="mb-12 text-[16px] leading-relaxed text-[var(--foreground-muted)]">{DESCRIPTION}</p>

        {posts.length > 0 ? (
          <div className="space-y-4">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={p.url}
                className="group flex flex-col gap-5 rounded-2xl border border-[var(--surface-border)] bg-white p-5 transition-all duration-200 hover:border-[var(--surface-border-hover)] hover:shadow-md hover:shadow-black/[0.03] sm:flex-row sm:items-center"
              >
                {p.cover && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.cover}
                    alt=""
                    className="aspect-[16/9] w-full shrink-0 rounded-xl border border-[var(--surface-border)] object-cover sm:w-56"
                    loading="lazy"
                  />
                )}
                <div className="min-w-0">
                  <p className="mb-2 text-[12px] text-[var(--foreground-muted)]">
                    <span className="font-semibold tracking-wide text-[var(--brand-blue)] uppercase">
                      {KIND_LABEL[p.kind]}
                    </span>
                    <span className="mx-1.5 text-[var(--foreground-subtle)]">·</span>
                    <time dateTime={p.date}>{formatDate(p.date)}</time>
                  </p>
                  <h2 className="mb-1.5 text-[18px] leading-snug font-semibold text-[var(--foreground)] group-hover:text-[var(--brand-blue)]">
                    {p.title}
                  </h2>
                  <p className="text-[14px] leading-relaxed text-[var(--foreground-muted)]">{p.description}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-[15px] text-[var(--foreground-muted)]">No posts yet.</p>
        )}
      </main>
      <Footer />
    </>
  );
}

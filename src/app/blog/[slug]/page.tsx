import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { comparisons, getComparison, type Section } from "./data";

const SITE_URL = "https://usevyra.com";

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) return {};

  const url = `${SITE_URL}/blog/${comparison.slug}`;

  return {
    title: comparison.title,
    description: comparison.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: comparison.title,
      description: comparison.description,
      siteName: "Vyra",
      publishedTime: comparison.publishedAt,
      authors: ["Vyra"],
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: comparison.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: comparison.title,
      description: comparison.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) notFound();

  const url = `${SITE_URL}/blog/${comparison.slug}`;
  const others = comparisons.filter((c) => c.slug !== comparison.slug);
  const faqSection = comparison.sections.find((s) => s.kind === "faq");

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: comparison.title,
    description: comparison.description,
    datePublished: comparison.publishedAt,
    dateModified: comparison.publishedAt,
    author: { "@type": "Organization", name: "Vyra", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Vyra",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/vyra-logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${SITE_URL}/og-image.png`,
  };

  const faqSchema =
    faqSection && faqSection.kind === "faq"
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqSection.items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--surface-border)] bg-white/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-2xl backdrop-saturate-150">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center gap-4 px-6">
          <Link
            href="/"
            className="text-[22px] font-extrabold tracking-tight text-[var(--foreground)]"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Vyra
          </Link>
          <span className="text-[var(--foreground-subtle)]">/</span>
          <Link
            href="/blog"
            className="text-[13px] font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
          >
            Blog
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <article>
          <header className="mb-10">
            <p className="mb-3 text-[13px] font-medium tracking-wide text-[var(--foreground-subtle)] uppercase">
              Vyra vs {comparison.competitor}
            </p>
            <h1
              className="mb-6 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              {comparison.title}
            </h1>
            <div className="space-y-4 text-[16px] leading-relaxed text-[var(--foreground-muted)]">
              {comparison.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </header>

          <div className="space-y-10 text-[15px] leading-[1.8] text-[var(--foreground-muted)]">
            {comparison.sections.map((section, i) => (
              <SectionRenderer key={i} section={section} />
            ))}
          </div>
        </article>

        {/* See also */}
        <aside className="mt-16 border-t border-[var(--surface-border)] pt-10">
          <h2 className="mb-4 text-[13px] font-semibold tracking-wide text-[var(--foreground-subtle)] uppercase">
            See also
          </h2>
          <div className="space-y-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/blog/${o.slug}`}
                className="group block rounded-xl border border-[var(--surface-border)] bg-white p-5 transition-all duration-200 hover:border-[var(--surface-border-hover)] hover:shadow-md hover:shadow-black/[0.03]"
              >
                <h3 className="mb-1 text-[15px] font-semibold text-[var(--foreground)] group-hover:text-[var(--brand-blue)]">
                  {o.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">
                  {o.description}
                </p>
              </Link>
            ))}
            <Link
              href="/"
              className="group block rounded-xl border border-[var(--surface-border)] bg-white p-5 transition-all duration-200 hover:border-[var(--surface-border-hover)] hover:shadow-md hover:shadow-black/[0.03]"
            >
              <h3 className="mb-1 text-[15px] font-semibold text-[var(--foreground)] group-hover:text-[var(--brand-blue)]">
                Try Vyra
              </h3>
              <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">
                The AI-first video editor any agent can drive. Free to start.
              </p>
            </Link>
          </div>
        </aside>

        <div className="mt-12 border-t border-[var(--surface-border)] pt-8">
          <Link
            href="/blog"
            className="text-[14px] text-[var(--foreground-subtle)] transition-colors hover:text-[var(--foreground-muted)]"
          >
            &larr; Back to blog
          </Link>
        </div>
      </main>
    </>
  );
}

function SectionRenderer({ section }: { section: Section }) {
  if (section.kind === "prose") {
    return (
      <section>
        {section.heading && (
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
            {section.heading}
          </h2>
        )}
        <div className="space-y-4">
          {section.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
    );
  }

  if (section.kind === "table") {
    return (
      <section>
        {section.heading && (
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
            {section.heading}
          </h2>
        )}
        {section.caption && (
          <p className="mb-4 text-[14px] text-[var(--foreground-subtle)]">
            {section.caption}
          </p>
        )}
        <div className="overflow-x-auto rounded-xl border border-[var(--surface-border)] bg-white">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr className="border-b border-[var(--surface-border)] bg-[var(--surface)]">
                {section.headers.map((h, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="px-4 py-3 text-left text-[13px] font-semibold text-[var(--foreground)]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className="border-b border-[var(--surface-border)] last:border-b-0"
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-3 align-top ${
                        ci === 0
                          ? "font-medium text-[var(--foreground)]"
                          : "text-[var(--foreground-muted)]"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  if (section.kind === "faq") {
    return (
      <section>
        {section.heading && (
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
            {section.heading}
          </h2>
        )}
        <div className="space-y-6">
          {section.items.map((item, i) => (
            <div key={i}>
              <h3 className="mb-2 text-[16px] font-semibold text-[var(--foreground)]">
                {item.q}
              </h3>
              <p className="text-[15px] leading-relaxed text-[var(--foreground-muted)]">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return null;
}

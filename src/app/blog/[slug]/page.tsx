import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost, type Section, type FeatureIcon } from "./data";

const SITE_URL = "https://www.usevyra.com";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      siteName: "Vyra",
      publishedTime: post.publishedAt,
      authors: ["Vyra"],
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const others = posts.filter((p) => p.slug !== post.slug);
  const faqSection = post.sections.find((s) => s.kind === "faq");

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
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
              {post.kicker}
            </p>
            <h1
              className="mb-6 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              {post.title}
            </h1>
            <div className="space-y-4 text-[16px] leading-relaxed text-[var(--foreground-muted)]">
              {post.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </header>

          <div className="space-y-10 text-[15px] leading-[1.8] text-[var(--foreground-muted)]">
            {post.sections.map((section, i) => (
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

  if (section.kind === "list") {
    const ListTag = section.ordered ? "ol" : "ul";
    return (
      <section>
        {section.heading && (
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
            {section.heading}
          </h2>
        )}
        <ListTag
          className={`space-y-3 pl-6 ${
            section.ordered ? "list-decimal" : "list-disc"
          } marker:text-[var(--foreground-subtle)]`}
        >
          {section.items.map((item, i) => (
            <li key={i} className="pl-1">
              {item}
            </li>
          ))}
        </ListTag>
      </section>
    );
  }

  if (section.kind === "featureList") {
    return (
      <section>
        {section.heading && (
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
            {section.heading}
          </h2>
        )}
        <div className="grid gap-3 sm:grid-cols-2">
          {section.items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-[var(--surface-border)] bg-white p-5"
            >
              {item.icon && (
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground-muted)]">
                  <FeatureIconSvg name={item.icon} />
                </div>
              )}
              <h3 className="mb-1.5 text-[15px] font-semibold text-[var(--foreground)]">
                {item.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[var(--foreground-muted)]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (section.kind === "steps") {
    return (
      <section>
        {section.heading && (
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
            {section.heading}
          </h2>
        )}
        <ol className="space-y-3">
          {section.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-4 rounded-xl border border-[var(--surface-border)] bg-white p-5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-blue)] text-[14px] font-bold text-white">
                {i + 1}
              </div>
              <div>
                <h3 className="mb-1 text-[15px] font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[var(--foreground-muted)]">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  if (section.kind === "flowDiagram") {
    return (
      <section>
        <div className="overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-gradient-to-br from-[var(--surface)] to-white p-6 sm:p-8">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-stretch sm:justify-between sm:gap-3">
            {/* Sources column */}
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:min-w-[140px]">
              {section.sources.map((s) => (
                <div
                  key={s}
                  className="rounded-lg border border-[var(--surface-border)] bg-white px-4 py-2.5 text-center text-[13px] font-semibold text-[var(--foreground)] shadow-sm"
                >
                  {s}
                </div>
              ))}
            </div>

            {/* Arrow → MCP */}
            <FlowConnector />

            {/* MCP node */}
            <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-[var(--brand-blue)]/30 bg-[var(--brand-blue)]/10 px-5 py-4 text-center">
              <div className="text-[10px] font-bold tracking-wider text-[var(--brand-blue)] uppercase">
                Protocol
              </div>
              <div className="text-[18px] font-bold text-[var(--foreground)]">
                {section.via}
              </div>
            </div>

            {/* Arrow → Vyra */}
            <FlowConnector />

            {/* Target */}
            <div className="flex flex-col items-center justify-center rounded-xl border border-[var(--surface-border)] bg-[var(--foreground)] px-6 py-4 text-center text-white sm:min-w-[140px]">
              <div className="text-[10px] font-bold tracking-wider text-white/60 uppercase">
                Editor
              </div>
              <div
                className="text-[20px] font-extrabold tracking-tight"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {section.target}
              </div>
            </div>
          </div>
          {section.caption && (
            <p className="mt-6 text-center text-[13px] text-[var(--foreground-muted)]">
              {section.caption}
            </p>
          )}
        </div>
      </section>
    );
  }

  if (section.kind === "costCompare") {
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
        <div className="grid gap-3 sm:grid-cols-3">
          {section.columns.map((col, i) => (
            <div
              key={i}
              className={`flex flex-col rounded-xl border p-5 ${
                col.highlight
                  ? "border-[var(--brand-blue)]/40 bg-gradient-to-b from-[var(--brand-blue)]/10 to-white shadow-sm"
                  : "border-[var(--surface-border)] bg-white"
              }`}
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="text-[13px] font-semibold tracking-wide text-[var(--foreground-subtle)] uppercase">
                  {col.label}
                </div>
                {col.highlight && (
                  <span className="rounded-full bg-[var(--brand-blue)] px-2 py-0.5 text-[10px] font-bold text-white">
                    BEST
                  </span>
                )}
              </div>
              <div
                className={`mb-3 text-[28px] font-extrabold tracking-tight ${
                  col.highlight
                    ? "text-[var(--foreground)]"
                    : "text-[var(--foreground)]"
                }`}
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {col.price}
                <span className="text-[14px] font-medium text-[var(--foreground-subtle)]">
                  /mo
                </span>
              </div>
              <ul className="mb-3 space-y-1 text-[13px] text-[var(--foreground-muted)]">
                {col.breakdown.map((line, j) => (
                  <li key={j}>{line}</li>
                ))}
              </ul>
              {col.note && (
                <p className="mt-auto text-[12px] leading-relaxed text-[var(--foreground-subtle)]">
                  {col.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }

  return null;
}

function FlowConnector() {
  return (
    <div className="flex items-center justify-center sm:flex-1">
      <svg
        className="hidden h-3 w-full text-[var(--surface-border-hover)] sm:block"
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
        fill="none"
      >
        <line
          x1="0"
          y1="6"
          x2="92"
          y2="6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <path d="M88 1 L98 6 L88 11 Z" fill="currentColor" />
      </svg>
      <svg
        className="block h-6 w-3 text-[var(--surface-border-hover)] sm:hidden"
        viewBox="0 0 12 24"
        fill="none"
      >
        <line
          x1="6"
          y1="0"
          x2="6"
          y2="18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <path d="M1 16 L6 22 L11 16 Z" fill="currentColor" />
      </svg>
    </div>
  );
}

function FeatureIconSvg({ name }: { name: FeatureIcon }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" />
        </svg>
      );
    case "build":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="3" rx="0.5" />
          <rect x="3" y="11" width="13" height="3" rx="0.5" />
          <rect x="3" y="16" width="16" height="3" rx="0.5" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...common}>
          <path d="M12 3 L13.5 9 L19.5 10.5 L13.5 12 L12 18 L10.5 12 L4.5 10.5 L10.5 9 Z" />
          <path d="M19 16 L19.7 18 L21.7 18.7 L19.7 19.4 L19 21.4 L18.3 19.4 L16.3 18.7 L18.3 18 Z" />
        </svg>
      );
    case "reference":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="11" height="11" rx="1.5" />
          <rect x="10" y="10" width="11" height="11" rx="1.5" />
        </svg>
      );
    case "captions":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M7 10h3M7 14h3M13 10h4M13 14h4" />
        </svg>
      );
  }
}

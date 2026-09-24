import Link from "next/link";
import Markdown from "./Markdown";
import DirectoryNav from "./DirectoryNav";
import Footer from "@/components/Footer";
import {
  SITE_URL,
  SECTIONS,
  extractFaq,
  extractRelated,
  extractSteps,
  resolveUrl,
  type Entry,
  type SectionKey,
} from "@/lib/content";

const AUTHOR = {
  "@type": "Person",
  name: "Sulan Zhang",
  url: `${SITE_URL}/author/sulan`,
  sameAs: ["https://www.instagram.com/sulansart"],
  jobTitle: "Co-founder, Vyra",
};

const PUBLISHER = {
  "@type": "Organization",
  name: "Vyra",
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/vyra-logo.png` },
};

function buildJsonLd(entry: Entry) {
  const url = `${SITE_URL}${entry.url}`;
  const faqs = extractFaq(entry.body);
  const sectionMeta = entry.section === "product" ? null : SECTIONS[entry.section as SectionKey];
  const schemaKind = entry.section === "product" ? "WebPage" : sectionMeta!.schema;

  const crumbs = [
    { name: "Vyra", item: SITE_URL },
    ...(sectionMeta ? [{ name: sectionMeta.label, item: `${SITE_URL}/${sectionMeta.key}` }] : []),
    { name: entry.title, item: url },
  ];
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
  };

  const graph: Record<string, unknown>[] = [breadcrumb];

  const base = {
    "@context": "https://schema.org",
    name: entry.title,
    headline: entry.title,
    description: entry.description,
    url,
    datePublished: entry.updated,
    dateModified: entry.updated,
    author: AUTHOR,
    publisher: PUBLISHER,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${SITE_URL}/og-image.png`,
  };

  const steps = schemaKind === "HowTo" ? extractSteps(entry.body) : [];
  if (schemaKind === "HowTo" && steps.length >= 2) {
    graph.push({
      ...base,
      "@type": "HowTo",
      step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, text: s })),
    });
  } else if (schemaKind === "HowTo") {
    // No usable numbered steps in the body: fall back to Article so the markup stays valid.
    graph.push({ ...base, "@type": "Article" });
  } else if (schemaKind === "DefinedTerm") {
    graph.push({
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      name: String(entry.data.term ?? entry.title),
      description: entry.description,
      url,
      inDefinedTermSet: { "@type": "DefinedTermSet", name: "Vyra video editing glossary", url: `${SITE_URL}/glossary` },
    });
  } else if (schemaKind === "WebPage") {
    graph.push({ ...base, "@type": "WebPage" });
  } else {
    graph.push({ ...base, "@type": "Article" });
  }

  if (faqs.length) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  if (entry.video) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: entry.title,
      description: entry.description,
      thumbnailUrl: `${SITE_URL}/og-image.png`,
      uploadDate: entry.updated,
      contentUrl: entry.video,
    });
  }

  return graph;
}

/** The header already shows the description; drop a leading bold paragraph that repeats it. */
function stripLeadingSummary(body: string, description: string): string {
  const m = body.match(/^\*\*([\s\S]+?)\*\*\s*\n/);
  if (!m) return body;
  const norm = (s: string) => s.replace(/\s+/g, " ").replace(/[.…]+$/, "").trim().toLowerCase();
  const lead = norm(m[1]);
  const desc = norm(description.replace(/\.\.\.$/, ""));
  if (lead === desc || lead.startsWith(desc) || desc.startsWith(lead)) {
    return body.slice(m[0].length).trimStart();
  }
  return body;
}

function Meta({ entry }: { entry: Entry }) {
  const bits: string[] = [];
  const d = entry.data;
  if (typeof d.typical_length === "string") bits.push(`Length ${d.typical_length}`);
  if (typeof d.aspect === "string") bits.push(String(d.aspect));
  if (typeof d.difficulty === "string") bits.push(String(d.difficulty));
  if (typeof d.level === "string") bits.push(String(d.level));
  if (typeof d.reading_time === "string" || typeof d.reading_time === "number") bits.push(`${d.reading_time} min read`);
  return (
    <p className="mb-4 text-[13px] font-medium tracking-wide text-[var(--foreground-subtle)] uppercase">
      {[entry.section === "product" ? "Product" : SECTIONS[entry.section as SectionKey].label, ...bits].join(" · ")}
    </p>
  );
}

export default function DirectoryPage({ entry }: { entry: Entry }) {
  const sectionMeta = entry.section === "product" ? null : SECTIONS[entry.section as SectionKey];
  const related = extractRelated(entry.body, entry.url)
    .map(resolveUrl)
    .filter((r): r is NonNullable<typeof r> => !!r)
    .slice(0, 6);
  const jsonLd = buildJsonLd(entry);
  const crumbs = sectionMeta ? [{ label: sectionMeta.label, href: `/${sectionMeta.key}` }] : [];

  return (
    <>
      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }} />
      ))}
      <DirectoryNav crumbs={crumbs} />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <article>
          <header className="mb-10">
            <Meta entry={entry} />
            <h1
              className="mb-5 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              {entry.title}
            </h1>
            <p className="text-[17px] leading-relaxed text-[var(--foreground-muted)]">{entry.description}</p>
            <p className="mt-4 text-[13px] text-[var(--foreground-subtle)]">
              By{" "}
              <Link href="/author/sulan" className="underline underline-offset-2 hover:text-[var(--foreground)]">
                Sulan Zhang
              </Link>
              , co-founder of Vyra · Updated {entry.updated}
              {entry.example && (
                <>
                  {" "}
                  · Example:{" "}
                  <a href={entry.example} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                    @sulansart
                  </a>
                </>
              )}
            </p>
          </header>

          {entry.facts.length > 0 && (
            <dl className="mb-10 grid gap-x-6 gap-y-3 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-6 sm:grid-cols-2">
              {entry.facts.map((f) => {
                const i = f.indexOf(":");
                const label = i > 0 ? f.slice(0, i).trim() : "";
                const value = i > 0 ? f.slice(i + 1).trim() : f;
                return (
                  <div key={f} className="min-w-0">
                    {label && (
                      <dt className="text-[11px] font-semibold tracking-wide text-[var(--foreground-subtle)] uppercase">{label}</dt>
                    )}
                    <dd className="text-[14px] leading-relaxed text-[var(--foreground)]">{value}</dd>
                  </div>
                );
              })}
            </dl>
          )}

          {entry.video && (
            <video
              className="mb-10 w-full rounded-xl border border-[var(--surface-border)]"
              src={entry.video}
              controls
              playsInline
              preload="metadata"
            />
          )}

          <Markdown source={stripLeadingSummary(entry.body, entry.description)} />
        </article>

        {related.length > 0 && (
          <aside className="mt-16 border-t border-[var(--surface-border)] pt-10">
            <h2 className="mb-4 text-[13px] font-semibold tracking-wide text-[var(--foreground-subtle)] uppercase">
              Related
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.url}
                  href={r.url}
                  className="group block rounded-xl border border-[var(--surface-border)] bg-white p-5 transition-all duration-200 hover:border-[var(--surface-border-hover)] hover:shadow-md hover:shadow-black/[0.03]"
                >
                  <h3 className="mb-1 text-[15px] font-semibold text-[var(--foreground)] group-hover:text-[var(--brand-blue)]">
                    {r.title}
                  </h3>
                  {r.description && (
                    <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">{r.description}</p>
                  )}
                </Link>
              ))}
            </div>
          </aside>
        )}

        <div className="mt-12 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-8 text-center">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-[var(--foreground)]">Try it on your footage</h2>
          <p className="mb-5 text-[15px] text-[var(--foreground-muted)]">
            Upload raw footage, describe the edit, and get a first cut in minutes. Free to start.
          </p>
          <a
            href="https://app.usevyra.com/signup"
            className="inline-block rounded-full bg-[var(--foreground)] px-6 py-3 text-[14px] font-semibold text-white"
          >
            Start editing with Vyra
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}

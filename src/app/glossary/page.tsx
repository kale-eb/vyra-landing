import type { Metadata } from "next";
import Link from "next/link";
import DirectoryNav from "@/components/directory/DirectoryNav";
import Markdown from "@/components/directory/Markdown";
import Footer from "@/components/Footer";
import { SECTIONS, SITE_URL, getEntries } from "@/lib/content";

/* One page for the whole glossary. Each term is an anchor (#slug); the old
   /glossary/<slug> URLs redirect here. */

const meta = SECTIONS.glossary;

export const metadata: Metadata = {
  title: `${meta.title} | Vyra`,
  description: meta.description,
  alternates: { canonical: `${SITE_URL}/glossary` },
  openGraph: { type: "website", url: `${SITE_URL}/glossary`, siteName: "Vyra", title: meta.title, description: meta.description, images: [{ url: "/og-image.png", width: 1200, height: 630, alt: meta.title }] },
};

export default function GlossaryPage() {
  const terms = getEntries("glossary");
  const letters = [...new Set(terms.map((t) => t.title[0].toUpperCase()))].sort();
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "DefinedTermSet",
      name: "Vyra video editing glossary",
      url: `${SITE_URL}/glossary`,
      hasDefinedTerm: terms.map((t) => ({
        "@type": "DefinedTerm",
        "@id": `${SITE_URL}/glossary#${t.slug}`,
        name: String(t.data.term ?? t.title),
        description: t.description,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Vyra", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Glossary", item: `${SITE_URL}/glossary` },
      ],
    },
  ];

  return (
    <>
      {jsonLd.map((o, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(o) }} />
      ))}
      <DirectoryNav crumbs={[{ label: "Glossary", href: "/glossary" }]} />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
          {meta.title}
        </h1>
        <p className="mb-6 text-[16px] leading-relaxed text-[var(--foreground-muted)]">{meta.description}</p>
        <p className="mb-12 text-[13px] text-[var(--foreground-subtle)]">
          {letters.map((l, i) => (
            <span key={l}>
              {i > 0 && " · "}
              <a href={`#letter-${l}`} className="hover:text-[var(--foreground)]">{l}</a>
            </span>
          ))}
          {" · "}
          {terms.length} terms
        </p>

        {letters.map((l) => (
          <section key={l} id={`letter-${l}`} className="mb-10 scroll-mt-24">
            <h2 className="mb-4 text-[13px] font-semibold tracking-wide text-[var(--foreground-subtle)] uppercase">{l}</h2>
            <dl className="space-y-6">
              {terms
                .filter((t) => t.title[0].toUpperCase() === l)
                .map((t) => (
                  <div key={t.slug} id={t.slug} className="scroll-mt-24 rounded-xl border border-[var(--surface-border)] bg-white p-5">
                    <dt className="mb-1 text-[16px] font-semibold text-[var(--foreground)]">
                      <a href={`#${t.slug}`} className="hover:text-[var(--brand-blue)]">{t.title}</a>
                    </dt>
                    <dd className="text-[14px] leading-relaxed text-[var(--foreground-muted)]">
                      <p className="mb-2 text-[var(--foreground)]">{t.description}</p>
                      <Markdown source={t.body.replace(/^\*\*[^*]+\*\*\s*\n?/, "")} />
                    </dd>
                  </div>
                ))}
            </dl>
          </section>
        ))}

        <p className="mt-6 text-[13px] text-[var(--foreground-subtle)]">
          Put a term to work:{" "}
          <Link href="/how-to" className="underline underline-offset-2">how-to guides</Link>,{" "}
          <Link href="/formats" className="underline underline-offset-2">formats</Link>,{" "}
          <Link href="/prompts" className="underline underline-offset-2">prompts</Link>.
        </p>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import DirectoryNav from "@/components/directory/DirectoryNav";
import Footer from "@/components/Footer";
import { SITE_URL, getEntries } from "@/lib/content";

const DESCRIPTION =
  "Sulan Zhang is a co-founder of Vyra and a painter who posts at @sulansart. She writes the guides on this site from her own footage.";

export const metadata: Metadata = {
  title: "Sulan Zhang, co-founder of Vyra | Vyra",
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/author/sulan` },
};

export default function AuthorPage() {
  const recent = [...getEntries("formats"), ...getEntries("how-to"), ...getEntries("prompts")]
    .filter((e) => e.example)
    .slice(0, 8);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sulan Zhang",
    url: `${SITE_URL}/author/sulan`,
    jobTitle: "Co-founder",
    worksFor: { "@type": "Organization", name: "Vyra", url: SITE_URL },
    sameAs: ["https://www.instagram.com/sulansart", "https://www.instagram.com/app.usevyra/"],
    description: DESCRIPTION,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DirectoryNav crumbs={[{ label: "Author", href: "/author/sulan" }]} />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <p className="mb-3 text-[13px] font-medium tracking-wide text-[var(--foreground-subtle)] uppercase">Author</p>
        <h1
          className="mb-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Sulan Zhang
        </h1>
        <p className="text-[17px] leading-relaxed text-[var(--foreground-muted)]">{DESCRIPTION}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--foreground-muted)]">
          Sulan builds Vyra in San Francisco and posts painting videos, vlogs, and talking heads to{" "}
          <a href="https://www.instagram.com/sulansart" target="_blank" rel="noopener noreferrer" className="text-[var(--brand-blue)] underline underline-offset-2">
            @sulansart
          </a>
          . Most of them are cut in Vyra. The guides here use them as examples.
          {/* TODO: Sulan to expand bio and add headshot at /public/sulan.jpg */}
        </p>

        {recent.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-4 text-[13px] font-semibold tracking-wide text-[var(--foreground-subtle)] uppercase">
              Guides with her examples
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {recent.map((e) => (
                <Link
                  key={e.url}
                  href={e.url}
                  className="group block rounded-xl border border-[var(--surface-border)] bg-white p-5 transition-all hover:border-[var(--surface-border-hover)] hover:shadow-md hover:shadow-black/[0.03]"
                >
                  <h3 className="mb-1 text-[15px] font-semibold text-[var(--foreground)] group-hover:text-[var(--brand-blue)]">{e.title}</h3>
                  <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">{e.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

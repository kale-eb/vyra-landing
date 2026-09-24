import Link from "next/link";
import DirectoryNav from "./DirectoryNav";
import Footer from "@/components/Footer";
import { SECTIONS, SITE_URL, type Entry, type SectionKey } from "@/lib/content";

export default function DirectoryHub({ section, entries }: { section: SectionKey; entries: Entry[] }) {
  const meta = SECTIONS[section];
  const groups = new Map<string, Entry[]>();
  for (const e of entries) {
    const g = typeof e.data.subcategory === "string" ? String(e.data.subcategory) : "";
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g)!.push(e);
  }
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: meta.title,
    description: meta.description,
    url: `${SITE_URL}/${section}`,
    hasPart: entries.map((e) => ({ "@type": "WebPage", name: e.title, url: `${SITE_URL}${e.url}` })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DirectoryNav crumbs={[{ label: meta.label, href: `/${section}` }]} />
      <main className="mx-auto max-w-5xl px-6 pt-32 pb-24">
        <h1
          className="mb-3 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          {meta.title}
        </h1>
        <p className="mb-12 max-w-2xl text-[16px] leading-relaxed text-[var(--foreground-muted)]">{meta.description}</p>

        {[...groups.entries()].map(([group, items]) => (
          <section key={group || "all"} className="mb-12">
            {group && (
              <h2 className="mb-4 text-[13px] font-semibold tracking-wide text-[var(--foreground-subtle)] uppercase">
                {group.replace(/-/g, " ")}
              </h2>
            )}
            <div className="grid gap-3 sm:grid-cols-2">
              {items.map((e) => (
                <Link
                  key={e.url}
                  href={e.url}
                  className="group block rounded-xl border border-[var(--surface-border)] bg-white p-5 transition-all duration-200 hover:border-[var(--surface-border-hover)] hover:shadow-md hover:shadow-black/[0.03]"
                >
                  <h3 className="mb-1 text-[15px] font-semibold text-[var(--foreground)] group-hover:text-[var(--brand-blue)]">
                    {e.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">{e.description}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <nav className="mt-8 border-t border-[var(--surface-border)] pt-8 text-[13px] text-[var(--foreground-subtle)]">
          Browse:{" "}
          {Object.values(SECTIONS).map((s, i) => (
            <span key={s.key}>
              {i > 0 && " · "}
              <Link href={`/${s.key}`} className="hover:text-[var(--foreground)]">
                {s.label}
              </Link>
            </span>
          ))}
        </nav>
      </main>
      <Footer />
    </>
  );
}

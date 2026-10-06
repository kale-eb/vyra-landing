import Link from "next/link";
import DirectoryNav from "./DirectoryNav";
import Footer from "@/components/Footer";
import { SECTIONS, SITE_URL, type Entry, type SectionKey } from "@/lib/content";

function groupEntries(section: SectionKey, entries: Entry[]): { label: string; items: Entry[] }[] {
  const meta = SECTIONS[section];
  if (meta.groups) {
    const bySlug = new Map(entries.map((e) => [e.slug, e]));
    const used = new Set<string>();
    const out = meta.groups
      .map((g) => ({ label: g.label, items: g.slugs.map((s) => bySlug.get(s)).filter((e): e is Entry => !!e) }))
      .filter((g) => g.items.length > 0);
    out.forEach((g) => g.items.forEach((e) => used.add(e.slug)));
    const rest = entries.filter((e) => !used.has(e.slug));
    if (rest.length) out.push({ label: "More", items: rest });
    return out;
  }
  const groups = new Map<string, Entry[]>();
  for (const e of entries) {
    const g = typeof e.data.subcategory === "string" ? String(e.data.subcategory).replace(/-/g, " ") : "";
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g)!.push(e);
  }
  return [...groups.entries()].map(([label, items]) => ({ label, items }));
}

export default function DirectoryHub({ section, entries }: { section: SectionKey; entries: Entry[] }) {
  const meta = SECTIONS[section];
  const groups = groupEntries(section, entries);
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
        <p className="mb-4 max-w-2xl text-[16px] leading-relaxed text-[var(--foreground-muted)]">{meta.description}</p>
        {meta.intro && (
          <p className="mb-10 max-w-2xl text-[15px] leading-relaxed text-[var(--foreground-muted)]">{meta.intro}</p>
        )}
        {groups.length > 1 && (
          <p className="mb-10 text-[13px] text-[var(--foreground-subtle)]">
            {groups.map((g, i) => (
              <span key={g.label}>
                {i > 0 && " · "}
                <a href={`#${g.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="hover:text-[var(--foreground)]">
                  {g.label}
                </a>
              </span>
            ))}
          </p>
        )}

        {groups.map((g) => (
          <section key={g.label || "all"} id={g.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="mb-12 scroll-mt-24">
            {g.label && (
              <h2 className="mb-4 text-[13px] font-semibold tracking-wide text-[var(--foreground-subtle)] uppercase">{g.label}</h2>
            )}
            <div className="grid gap-3 sm:grid-cols-2">
              {g.items.map((e) => (
                <Link
                  key={e.url}
                  href={e.url}
                  className="group block rounded-xl border border-[var(--surface-border)] bg-white p-5 transition-all duration-200 hover:border-[var(--surface-border-hover)] hover:shadow-md hover:shadow-black/[0.03]"
                >
                  <h3 className="mb-1 text-[15px] font-semibold text-[var(--foreground)] group-hover:text-[var(--brand-blue)]">
                    {e.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">{e.description}</p>
                  {e.reels.length > 0 && (
                    <p className="mt-3 text-[11px] font-semibold tracking-wide text-[var(--foreground-subtle)] uppercase">
                      ▶ {e.reels.length} real {e.reels.length === 1 ? "example" : "examples"}
                    </p>
                  )}
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

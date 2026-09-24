import Link from "next/link";
import { SECTIONS, getEntries } from "@/lib/content";

/* Server component. Links the homepage into every directory hub and a few
   high-value pages so crawlers reach the whole tree from the root. */
export default function ExploreDirectory() {
  const picks = [
    ...getEntries("product").map((e) => e),
    ...getEntries("best").slice(0, 3),
    ...getEntries("how-to").slice(0, 3),
  ];
  const hubs = Object.values(SECTIONS);

  return (
    <section className="relative border-t border-[var(--surface-border)] bg-[var(--surface)] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2
          className="mb-3 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Learn the craft, then prompt it
        </h2>
        <p className="mb-10 max-w-2xl text-[15px] leading-relaxed text-[var(--foreground-muted)]">
          Guides to every short-form format, how-to pages on hooks, pacing, captions, and framing, a copy-paste prompt
          library, and honest comparisons with every other editor. Written from our own footage.
        </p>

        <div className="mb-10 flex flex-wrap gap-2">
          {hubs.map((h) => (
            <Link
              key={h.key}
              href={`/${h.key}`}
              className="rounded-full border border-[var(--surface-border)] bg-white px-4 py-2 text-[13px] font-medium text-[var(--foreground)] transition-colors hover:border-[var(--foreground-subtle)]"
            >
              {h.label}
            </Link>
          ))}
          <Link
            href="/about"
            className="rounded-full border border-[var(--surface-border)] bg-white px-4 py-2 text-[13px] font-medium text-[var(--foreground)] transition-colors hover:border-[var(--foreground-subtle)]"
          >
            About us
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {picks.map((e) => (
            <Link
              key={e.url}
              href={e.url}
              className="group block rounded-xl border border-[var(--surface-border)] bg-white p-5 transition-all duration-200 hover:border-[var(--surface-border-hover)] hover:shadow-md hover:shadow-black/[0.03]"
            >
              <h3 className="mb-1 text-[14px] font-semibold text-[var(--foreground)] group-hover:text-[var(--brand-blue)]">
                {e.title}
              </h3>
              <p className="line-clamp-2 text-[13px] leading-relaxed text-[var(--foreground-muted)]">{e.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

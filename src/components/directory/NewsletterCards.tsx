import Link from "next/link";
import type { NewsletterPost } from "@/lib/newsletter";

/* Pulls a few issues of Sulan's newsletter into a page, with the cover and her own words. */
export default function NewsletterCards({ posts }: { posts: NewsletterPost[] }) {
  if (!posts.length) return null;
  return (
    <section className="my-10">
      <h2 className="mb-4 text-[13px] font-semibold tracking-wide text-[var(--foreground-subtle)] uppercase">
        From Sulan&apos;s newsletter
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/newsletter/${p.slug}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-[var(--surface-border)] bg-white transition-all duration-200 hover:border-[var(--surface-border-hover)] hover:shadow-md hover:shadow-black/[0.03]"
          >
            {p.cover && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.cover} alt="" loading="lazy" className="aspect-[2/1] w-full object-cover" />
            )}
            <div className="p-5">
              <p className="mb-1 text-[11px] font-semibold tracking-wide text-[var(--foreground-subtle)] uppercase">Issue {p.issue}</p>
              <h3 className="mb-2 text-[15px] font-semibold text-[var(--foreground)] group-hover:text-[var(--brand-blue)]">{p.title}</h3>
              {p.excerpt && <p className="text-[13px] leading-relaxed text-[var(--foreground-muted)]">{p.excerpt}</p>}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

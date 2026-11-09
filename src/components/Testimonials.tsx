import Link from "next/link";
import Reveal from "./Reveal";
import reviews from "@/content/reviews.json";

/* Testimonial wall on the homepage. Reads src/content/reviews.json, the same
   file /reviews uses, so a quote only ever lives in one place. Every entry is
   a real, public quote with a link to where it was said. */

type Review = {
  name: string;
  handle?: string;
  url?: string;
  role: string;
  title?: string;
  quote: string;
  date: string;
  format?: string;
  source?: "app-store" | "press" | "x" | "instagram" | "creator" | "founder";
  avatar?: string;
  followers?: string;
  /** Required when there's a relationship: paid partner, friend, investor. Shown on the card. */
  disclosure?: string;
};

// Pastel title bars, cycled card by card.
const BARS = [
  "from-[#cfe7d3] to-[#e9f4ea]",
  "from-[#cddcf2] to-[#e8eff9]",
  "from-[#f2d6d6] to-[#f9eaea]",
  "from-[#f1e6c9] to-[#f8f2e3]",
  "from-[#d6e4ea] to-[#ebf2f5]",
  "from-[#ead9cc] to-[#f5ece5]",
];

// Initial avatars for people without a photo, in the same pastels as the title bars.
const DOTS = [
  "bg-[#cfe7d3] text-[#3f6b47]",
  "bg-[#cddcf2] text-[#3c5a86]",
  "bg-[#f2d6d6] text-[#8a4848]",
  "bg-[#f1e6c9] text-[#7a6330]",
  "bg-[#d6e4ea] text-[#3f6170]",
  "bg-[#ead9cc] text-[#7a5640]",
];

function Card({ r, i }: { r: Review; i: number }) {
  const body = (
    <article className="overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-white shadow-[0_6px_20px_rgba(35,65,105,0.06)] transition-colors duration-200 hover:border-[var(--surface-border-hover)]">
      <div className={`flex items-center bg-gradient-to-r px-4 py-2.5 ${BARS[i % BARS.length]}`}>
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center gap-3">
          {r.avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={r.avatar} alt="" className="h-10 w-10 rounded-full object-cover" loading="lazy" />
          ) : (
            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[15px] font-bold ${DOTS[i % DOTS.length]}`}>
              {r.name.charAt(0).toUpperCase()}
            </span>
          )}
          <div className="min-w-0">
            <p className="truncate text-[15px] font-semibold text-[var(--foreground)]">{r.name}</p>
            <p className="text-[13px] leading-snug text-[var(--foreground-subtle)]">{r.handle ?? r.role}</p>
            {r.followers && <p className="text-[13px] leading-snug text-[var(--foreground-subtle)]">{r.followers}</p>}
          </div>
        </div>
        {r.title && <p className="mb-1.5 text-[15px] font-semibold text-[var(--foreground)]">{r.title}</p>}
        <p className="text-[15px] leading-[1.6] text-[var(--foreground-muted)]">{r.quote}</p>
        {r.format && <p className="mt-4 text-[12px] text-[var(--foreground-subtle)]">{r.format}</p>}
        {r.disclosure && <p className="mt-2 text-[12px] italic text-[var(--foreground-subtle)]">{r.disclosure}</p>}
      </div>
    </article>
  );
  return (
    <div className="mb-5 break-inside-avoid">
      {r.url ? (
        <a href={r.url} target="_blank" rel="noopener noreferrer" className="block">
          {body}
        </a>
      ) : (
        body
      )}
    </div>
  );
}

export default function Testimonials() {
  const items = reviews as Review[];
  if (!items.length) return null;
  // Creator quotes first, press last, so the wall reads as people before publications.
  const order: Record<string, number> = { creator: 0, founder: 0, x: 1, instagram: 1, "app-store": 2, press: 3 };
  const sorted = [...items].sort((a, b) => (order[a.source ?? "creator"] ?? 0) - (order[b.source ?? "creator"] ?? 0));
  return (
    <section className="relative px-6 py-20 md:py-28" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2
            id="testimonials-title"
            className="mb-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            What creators say about Vyra
          </h2>
          <p className="mb-12 max-w-2xl text-[17px] leading-relaxed text-[var(--foreground-muted)]">
            Real reviews from creators, founders, App Store users, and the press, word for word.
          </p>
        </Reveal>
        {/* Natural card heights pack into columns without stretching short quotes. */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {sorted.map((r, i) => (
            <Card key={`${r.name}-${r.date}`} r={r} i={i} />
          ))}
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-3 rounded-2xl border border-[var(--surface-border)] bg-white px-6 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-[15px] text-[var(--foreground-muted)]">
            <span className="font-bold text-[var(--foreground)]">5.0 on the App Store</span>
          </p>
          <Link href="/reviews" className="text-[15px] font-semibold text-[var(--foreground)] underline underline-offset-4">
            Read every review
          </Link>
        </div>
      </div>
    </section>
  );
}

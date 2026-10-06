import { reelEmbedUrl, reelUrl, type Reel } from "@/lib/reels";

/* Real reels from @sulansart, embedded with Instagram's own player.
   The iframe is lazy, so it costs nothing until it scrolls into view. */
export default function ReelStrip({ reels, heading }: { reels: Reel[]; heading?: string }) {
  if (!reels.length) return null;
  return (
    <section className="my-10">
      <div className="mb-4 flex items-baseline justify-between gap-4">
        <h2 className="text-[13px] font-semibold tracking-wide text-[var(--foreground-subtle)] uppercase">
          {heading ?? "Real examples from @sulansart"}
        </h2>
        <a
          href="https://www.instagram.com/sulansart"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] text-[var(--foreground-subtle)] underline underline-offset-2 hover:text-[var(--foreground)]"
        >
          More on Instagram
        </a>
      </div>
      <div className={`grid gap-4 ${reels.length > 1 ? "sm:grid-cols-2" : "sm:max-w-sm"}`}>
        {reels.map((r) => (
          <figure key={r.id} className="m-0 min-w-0">
            <div className="overflow-hidden rounded-xl border border-[var(--surface-border)] bg-white">
              <iframe
                src={reelEmbedUrl(r.id)}
                title={r.title}
                loading="lazy"
                allow="encrypted-media; picture-in-picture"
                allowFullScreen
                className="block w-full"
                style={{ height: 660, border: 0 }}
              />
            </div>
            <figcaption className="mt-2 text-[13px] leading-snug text-[var(--foreground-muted)]">
              <a href={reelUrl(r.id)} target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--foreground)] hover:underline">
                {r.title}
              </a>
              <span className="text-[var(--foreground-subtle)]"> · {r.views} views</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

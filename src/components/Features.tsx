"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const STORAGE_BASE =
  "https://pub-afda0198369e4e9d96b647ae8d8f963e.r2.dev/showcase";
const LANDING_BASE =
  "https://pub-afda0198369e4e9d96b647ae8d8f963e.r2.dev/landing";
const FOOTAGE_BASE = `${LANDING_BASE}/footage`;

const FOOTAGE_CLIPS = [
  { src: `${FOOTAGE_BASE}/pizza.jpg`, label: "Restaurant dinner", tags: ["food", "indoor"] },
  { src: `${FOOTAGE_BASE}/hotpot.jpg`, label: "Hot pot close-up", tags: ["food", "reaction"] },
  { src: `${FOOTAGE_BASE}/painting.jpg`, label: "Art studio session", tags: ["art", "studio"] },
  { src: `${FOOTAGE_BASE}/snowboard.jpg`, label: "Halfpipe trick", tags: ["sports", "aerial"] },
  { src: `${FOOTAGE_BASE}/selfiewalk.jpg`, label: "Selfie walk", tags: ["selfie", "winter"] },
  { src: `${FOOTAGE_BASE}/dance.jpg`, label: "Dance performance", tags: ["stage", "group"] },
];

function AutoVideo({ src, contain }: { src: string; contain?: boolean }) {
  return (
    <video
      src={src}
      muted
      autoPlay
      loop
      playsInline
      className={`h-full w-full ${contain ? "object-contain" : "object-cover"}`}
    />
  );
}

const FEATURES: {
  id: string;
  title: string;
  description: string;
  tryPrompt?: string;
  media: React.ReactNode;
}[] = [
  {
    id: "motion-graphics",
    title: "Motion Graphics",
    description:
      "Animated titles, lower thirds, and counters, generated as code and rendered live on your timeline.",
    tryPrompt: "Make me an animated title card",
    media: (
      <div className="aspect-video bg-black">
        <AutoVideo src={`${LANDING_BASE}/mg-cooking-quest.mp4`} contain />
      </div>
    ),
  },
  {
    id: "footage-understanding",
    title: "Footage Understanding",
    description:
      "Every clip is analyzed: scenes detected, speech transcribed, subjects tagged. Edits follow what's actually in your footage.",
    tryPrompt: "Find the best moments and cut them together",
    media: (
      <div className="grid grid-cols-3 gap-2.5 bg-[var(--surface)] p-4">
        {FOOTAGE_CLIPS.map((clip) => (
          <div
            key={clip.src}
            className="overflow-hidden rounded-lg border border-[var(--surface-border)] bg-white shadow-sm"
          >
            <div className="aspect-video overflow-hidden">
              <img src={clip.src} alt={clip.label} className="h-full w-full object-cover" />
            </div>
            <div className="px-2 py-1.5">
              <p className="truncate text-[9px] font-medium text-[var(--foreground)]">
                {clip.label}
              </p>
              <div className="mt-1 flex flex-wrap gap-1">
                {clip.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--brand-blue)]/[0.08] px-1.5 py-0.5 text-[7px] font-medium text-[var(--brand-blue)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "music-sync",
    title: "Music Sync",
    description:
      "Vyra finds the beats in your track and lands every cut on the rhythm.",
    tryPrompt: "Sync the cuts to the beat drops",
    media: (
      <div className="aspect-video bg-black">
        <AutoVideo src={`${STORAGE_BASE}/music-sync-preview.mp4`} contain />
      </div>
    ),
  },
  {
    id: "reference-style",
    title: "Reference Style",
    description:
      "Drop in a reference video and Vyra applies its pacing, color, and transitions to your footage.",
    tryPrompt: "Match the style and pacing of this reference",
    media: (
      <div className="grid grid-cols-2 bg-black">
        <div className="relative aspect-[4/5]">
          <AutoVideo src={`${STORAGE_BASE}/reference-style-original.mp4`} />
          <span className="absolute left-2 top-2 rounded bg-black/60 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-white/80">
            Reference
          </span>
        </div>
        <div className="relative aspect-[4/5]">
          <AutoVideo src={`${STORAGE_BASE}/reference-style-result.mp4`} />
          <span className="absolute left-2 top-2 rounded bg-black/60 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-white/80">
            Your footage
          </span>
        </div>
      </div>
    ),
  },
];

export default function Features() {
  const pinRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(FEATURES.length - 1, Math.floor(v * FEATURES.length)));
  });

  return (
    <section id="features" className="relative pt-16 pb-20 md:pb-0 px-6">
      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-0"
        >
          <h2
            className="mb-5 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            What your AI can do
          </h2>
          <p className="mx-auto max-w-lg text-[15px] leading-relaxed text-[var(--foreground-muted)]">
            Every tool in the editor is available through natural language.
          </p>
        </motion.div>

        {/* ---- Desktop: pinned scroller, FLORA-style ---- */}
        <div ref={pinRef} className="relative hidden h-[300vh] md:-mt-28 md:block">
          <div className="sticky top-0 flex h-screen items-center">
            <div className="grid w-full grid-cols-5 items-center gap-14">
              {/* Left: feature list, active one lights up */}
              <div className="col-span-2 flex flex-col gap-7">
                {FEATURES.map((f, i) => (
                  <h3
                    key={f.id}
                    className={`text-3xl font-bold tracking-tight transition-colors duration-300 lg:text-4xl ${
                      i === active
                        ? "text-[var(--foreground)]"
                        : "text-[var(--foreground)]/[0.22]"
                    }`}
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {f.title}
                  </h3>
                ))}
              </div>

              {/* Right: swapping media + caption */}
              <div className="col-span-3">
                <div className="relative h-[400px]">
                  {FEATURES.map((f, i) => (
                    <div
                      key={f.id}
                      className="absolute inset-0 flex items-center transition-opacity duration-400"
                      style={{
                        opacity: i === active ? 1 : 0,
                        pointerEvents: i === active ? "auto" : "none",
                      }}
                    >
                      <div className="w-full overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-white shadow-sm">
                        {f.media}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 min-h-[72px]">
                  <p className="text-[15px] leading-relaxed text-[var(--foreground-muted)]">
                    {FEATURES[active].description}
                  </p>
                  {FEATURES[active].tryPrompt && (
                    <a
                      href="https://app.usevyra.com/signup"
                      className="mt-3 inline-flex items-center gap-2 rounded-full border border-[var(--surface-border)] bg-white px-4 py-1.5 shadow-sm transition-all duration-200 hover:border-[var(--brand-blue)]/40 hover:shadow-md"
                    >
                      <span className="text-[12px] text-[var(--foreground-subtle)]">Try:</span>
                      <span className="text-[13px] text-[var(--foreground-muted)]">
                        &ldquo;{FEATURES[active].tryPrompt}&rdquo;
                      </span>
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-[var(--brand-blue)]">
                        <path d="M3.5 8h9m0 0L9 4.5M12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---- Mobile: simple stacked rows ---- */}
        <div className="flex flex-col gap-16 md:hidden">
          {FEATURES.map((feature) => (
            <div key={feature.id}>
              <h3
                className="text-2xl font-bold tracking-tight text-[var(--foreground)]"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {feature.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--foreground-muted)]">
                {feature.description}
              </p>
              <div className="mt-4 overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-white shadow-sm">
                {feature.media}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="pb-8 pt-6 text-center text-[12px] text-[var(--foreground-subtle)] md:pb-16">
          Everything above was made by Vyra&apos;s AI. The only human input was
          a prompt.
        </p>
      </div>
    </section>
  );
}

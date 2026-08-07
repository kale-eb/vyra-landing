"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import LazyVideo from "./LazyVideo";

const STORAGE_BASE =
  "https://pub-afda0198369e4e9d96b647ae8d8f963e.r2.dev/showcase";
const LANDING_BASE =
  "https://pub-afda0198369e4e9d96b647ae8d8f963e.r2.dev/landing";

/** Poster frames live alongside the videos, named after the file. */
function posterFor(src: string) {
  const name = src.split("/").pop()?.replace(/\.mp4$/, "");
  return name ? `/images/posters/${name}.jpg` : undefined;
}

function AutoVideo({ src, contain }: { src: string; contain?: boolean }) {
  return (
    <LazyVideo
      src={src}
      poster={posterFor(src)}
      className={`h-full w-full ${contain ? "object-contain" : "object-cover"}`}
    />
  );
}

/* Deterministic bar heights so SSR and client render identically */
function barH(i: number, min: number, max: number) {
  return min + (((i * 37 + 11) % 53) / 53) * (max - min);
}

/* Footage understanding: live analysis over a real frame */
function AnalysisMedia() {
  return (
    <div className="flex h-[400px] gap-2.5 bg-[var(--surface)] p-4 md:gap-3 md:p-5">
      <div className="relative h-full min-w-0 flex-1 overflow-hidden rounded-xl">
        <AutoVideo src="/videos/footage-understanding.mp4" />
        {/* Scanning sweep */}
        <motion.div
          animate={{ left: ["0%", "99%"] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
          className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-transparent via-[var(--brand-blue)]/70 to-transparent"
        />
        {/* Tag chips */}
        <div className="absolute left-3 top-3 flex gap-1.5">
          {["vlog", "indoors", "speech"].map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: -6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.25, duration: 0.4 }}
              className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium text-[var(--foreground)] shadow-sm backdrop-blur-sm"
            >
              {t}
            </motion.span>
          ))}
        </div>
        {/* Subject detection box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, type: "spring", stiffness: 260, damping: 20 }}
          /* Starts lower on phones so its "person" label clears the tag chips,
             which sit much closer to the box in a narrow frame. */
          className="absolute left-[30%] top-[17%] h-[74%] w-[40%] md:top-[4%] md:h-[92%]"
        >
          {/* Gentle drift sells the box as live tracking on the talking head */}
          <motion.div
            animate={{
              opacity: [1, 0.55, 1],
              x: [0, 4, -3, 2, 0],
              y: [0, 3, -2, 4, 0],
            }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-full rounded-md border-2 border-[var(--brand-blue)]"
          />
          <span className="absolute -top-5 left-0 rounded bg-[var(--brand-blue)] px-1.5 py-0.5 text-[9px] font-semibold text-white">
            person
          </span>
        </motion.div>
        {/* Transcript strip with living waveform */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-lg bg-black/55 px-3 py-2 backdrop-blur-sm">
          <span className="flex items-end gap-[2px]">
            {Array.from({ length: 7 }, (_, i) => (
              <motion.span
                key={i}
                animate={{ scaleY: [0.4, 1, 0.55, 0.9, 0.4] }}
                transition={{ duration: 1.6 + (i % 3) * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.12 }}
                className="w-[2px] origin-bottom rounded-full bg-white/70"
                style={{ height: `${barH(i, 5, 12)}px` }}
              />
            ))}
          </span>
          <span className="truncate text-[11px] text-white/85">
            &ldquo;vlogs that usually take hours to edit... edited in under an hour&rdquo;
          </span>
        </div>
      </div>
      {/* Scene strip */}
      <div className="flex h-full w-[78px] shrink-0 flex-col gap-2 md:w-[96px]">
        {["scene-1", "scene-2", "scene-3"].map((f, i) => (
          <motion.div
            key={f}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.4 }}
            className="relative flex-1 overflow-hidden rounded-lg"
          >
            <img src={`/images/boston/${f}.jpg`} alt="" className="h-full w-full object-cover" />
            <span className="absolute bottom-1 left-1 rounded bg-black/55 px-1.5 py-0.5 text-[8px] font-medium text-white/85">
              Scene {i + 1}
            </span>
          </motion.div>
        ))}
        <span className="rounded-full border border-[var(--surface-border)] bg-white px-2 py-1 text-center text-[9px] font-medium text-[var(--foreground-muted)]">
          9 clips &middot; speech &#10003;
        </span>
      </div>
    </div>
  );
}

/* Music sync: cropped video + a live track bar showing cuts on beats */
const SEGMENTS = [13, 8, 11, 7, 14, 9, 12, 8, 11, 7];

/* The one video on the page with sound. Unmuting restarts playback so
   the listener hears the cuts land on the beats from the top. */
function MusicSyncVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  return (
    <div className="relative h-full w-full">
      <LazyVideo
        videoRef={ref}
        src="/videos/music-sync.mp4"
        poster="/images/posters/music-sync.jpg"
        muted={muted}
        className="h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={() => {
          const v = ref.current;
          if (!v) return;
          const nextMuted = !muted;
          setMuted(nextMuted);
          v.muted = nextMuted;
          if (!nextMuted) {
            v.currentTime = 0;
            v.play();
          }
        }}
        className="absolute bottom-3 right-3 flex cursor-pointer items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-sm transition-colors duration-200 hover:bg-black/80"
      >
        {muted ? (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5 6 9H2v6h4l5 4V5z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5 6 9H2v6h4l5 4V5z" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        )}
        {muted ? "Unmute" : "Mute"}
      </button>
    </div>
  );
}

function MusicSyncMedia() {
  return (
    <div className="flex h-[400px] flex-col gap-3 bg-[var(--surface)] p-5">
      <div className="min-h-0 flex-1 overflow-hidden rounded-xl">
        <MusicSyncVideo />
      </div>
      {/* Track bar */}
      <div className="relative shrink-0 overflow-hidden rounded-xl bg-[#0e0e0e] px-3 pb-3 pt-2.5">
        {/* Clip segments, split on the beats */}
        <div className="mb-2 flex h-5 gap-[3px]">
          {SEGMENTS.map((w, i) => (
            <div
              key={i}
              style={{ width: `${w}%` }}
              className={`h-full rounded-[4px] ${i % 2 ? "bg-[#b3a5ef]" : "bg-[#a988f0]"}`}
            />
          ))}
        </div>
        {/* Mirrored waveform, full track width, beats glowing on the grid */}
        <div className="flex h-12 w-full items-center gap-[2px]">
          {Array.from({ length: 72 }, (_, i) => {
            const beat = i % 8 === 3;
            const h = 8 + (((i * 37 + 11) % 53) / 53) * 22 * (0.6 + 0.4 * Math.sin(i / 4));
            return beat ? (
              <motion.span
                key={i}
                animate={{ scaleY: [1, 0.7, 1] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (i % 5) * 0.2,
                }}
                className="min-w-0 flex-1 rounded-full bg-[#5fd4ea] shadow-[0_0_8px_rgba(95,212,234,0.7)]"
                style={{ height: 44 }}
              />
            ) : (
              <span
                key={i}
                className="min-w-0 flex-1 rounded-full bg-white/30"
                style={{ height: `${h}px` }}
              />
            );
          })}
        </div>
        {/* Playhead sweeping in time */}
        <motion.div
          animate={{ left: ["2%", "98%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1 top-1 w-[2px] rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"
        />
      </div>
    </div>
  );
}

/* Captions: real captioned export + transcript filling itself in */
const CAPTION_LINES = [
  { t: "0:00", text: "big bag" },
  { t: "0:02", text: "wow" },
  { t: "0:03", text: "fit check" },
  { t: "0:04", text: "oh my god" },
];

function CaptionsMedia() {
  return (
    <div className="flex h-[400px] items-center justify-center gap-3 bg-[var(--surface)] p-4 md:gap-4 md:p-5">
      {/* Percentage width on phones; the intrinsic 9:16 width plus a fixed
          240px column used to run past the card edge. */}
      <div className="h-full w-[40%] shrink-0 overflow-hidden rounded-xl shadow-lg shadow-black/15 md:w-auto">
        <LazyVideo
          src="/videos/captions-fitcheck.mp4"
          poster="/images/posters/captions-fitcheck.jpg"
          className="h-full w-full object-cover md:w-auto"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2 md:w-[240px] md:flex-none">
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-1.5 self-start rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-emerald-600 shadow-sm"
        >
          <svg width="9" height="9" viewBox="0 0 16 16" fill="none">
            <path d="M13 4.5L6.5 11L3 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          31 captions synced in seconds
        </motion.span>
        {CAPTION_LINES.map((line, i) => (
          <motion.div
            key={line.t}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.35, duration: 0.4 }}
            className="flex items-baseline gap-2 rounded-lg border border-[var(--surface-border)] bg-white px-3 py-2 shadow-sm"
          >
            <span className="text-[9px] font-medium tabular-nums text-[var(--foreground-subtle)]">
              {line.t}
            </span>
            <span className="text-[12px] leading-snug text-[var(--foreground)]">
              {line.text}
            </span>
          </motion.div>
        ))}
        <div className="mt-1 flex flex-wrap gap-1.5">
          {["Serif", "Bold", "Karaoke"].map((s, i) => (
            <span
              key={s}
              className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
                i === 0
                  ? "bg-[var(--foreground)] text-white"
                  : "border border-[var(--surface-border)] bg-white text-[var(--foreground-muted)]"
              }`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
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
      <div className="aspect-video">
        <AutoVideo src="/videos/shake-mg.mp4" />
      </div>
    ),
  },
  {
    id: "footage-understanding",
    title: "Footage Understanding",
    description:
      "Every clip is analyzed: scenes detected, speech transcribed, subjects tagged. Edits follow what's actually in your footage.",
    tryPrompt: "Find the best moments and cut them together",
    media: <AnalysisMedia />,
  },
  {
    id: "music-sync",
    title: "Music Sync",
    description:
      "Vyra finds the beats in your track and lands every cut on the rhythm.",
    tryPrompt: "Sync the cuts to the beat drops",
    media: <MusicSyncMedia />,
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
  {
    id: "captions",
    title: "Instant Captions",
    description:
      "Every word timed to your speech and styled to your edit. Serif, bold, karaoke, any look you can name.",
    tryPrompt: "Add captions in a serif font",
    media: <CaptionsMedia />,
  },
];

export default function Features() {
  const pinRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Measure live on every scroll: framer's useScroll caches element bounds,
  // which go stale when media loads shift the layout and desync the scroller.
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = pinRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        if (total <= 0) return;
        const p = Math.min(1, Math.max(0, -rect.top / total));
        setActive(
          Math.min(FEATURES.length - 1, Math.floor(p * FEATURES.length))
        );
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="features" className="relative pt-16 pb-4 md:pb-0 px-6">
      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <Reveal
          y={24}
          blur={8}
          className="mb-12 text-center md:mb-0"
        >
          <h2
            className="mb-5 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            What your AI <span className="serif-italic font-normal">can do</span>
          </h2>
          <p className="mx-auto max-w-lg text-[16px] leading-relaxed text-[var(--foreground-muted)] md:text-[17px]">
            If you can describe it, Vyra can edit it.
          </p>
        </Reveal>

        {/* ---- Desktop: pinned scroller, FLORA-style ---- */}
        <div ref={pinRef} className="relative hidden h-[270vh] md:-mt-28 md:block">
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
                    <span className="mr-3 text-[14px] font-medium tabular-nums align-middle opacity-40">0{i + 1}</span>
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
        <div className="flex flex-col gap-12 md:hidden">
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
        <p className="pb-8 pt-6 text-center text-[12px] text-[var(--foreground-subtle)] md:-mt-32 md:pb-12">
          Everything above was made by Vyra&apos;s AI. The only human input was
          a prompt.
        </p>
      </div>
    </section>
  );
}

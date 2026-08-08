"use client";

import { motion } from "framer-motion";
import LazyVideo from "./LazyVideo";
import Reveal from "./Reveal";


/* Gentle infinite bob, offset per element so nothing moves in lockstep */
function Float({
  children,
  delay = 0,
  duration = 5,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -7, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function DotGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.35]"
      style={{
        backgroundImage:
          "radial-gradient(rgba(0,0,0,0.22) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    />
  );
}

function UploadVisual() {
  const thumbs = [
    { src: "/images/art/art-1.jpg", cls: "left-[2%] top-[2%] rotate-[-4deg]", analyzed: true, d: 5.2 },
    { src: "/images/art/art-2.jpg", cls: "right-[2%] top-[12%] rotate-[3deg]", analyzed: true, d: 6.1 },
    { src: "/images/art/art-5.jpg", cls: "left-[8%] top-[34%] rotate-[2deg]", analyzed: false, d: 5.7 },
    { src: "/images/art/art-6.jpg", cls: "right-[8%] top-[44%] rotate-[-3deg]", analyzed: true, d: 6.6 },
  ];
  return (
    <div className="relative h-full w-full">
      {thumbs.map((t, i) => (
        <Float key={t.src} delay={i * 0.8} duration={t.d} className={`absolute w-[46%] ${t.cls}`}>
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg shadow-black/15 ring-1 ring-black/5">
            <img src={t.src} alt="" className="h-full w-full object-cover" />
            {t.analyzed && (
              <span className="absolute bottom-1.5 left-1.5 flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[8px] font-medium text-white/85 backdrop-blur-sm">
                <svg width="7" height="7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" />
                </svg>
                analyzed
              </span>
            )}
          </div>
        </Float>
      ))}
      <Float delay={0.4} duration={5.9} className="absolute bottom-[2%] left-1/2 w-[74%] -translate-x-1/2">
        <div className="rounded-xl border border-[var(--surface-border)] bg-white px-4 py-3 shadow-md shadow-black/[0.06]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[var(--foreground-muted)]">IMG_7264.mov</span>
            <span className="text-[9px] text-[var(--foreground-subtle)]">uploading&hellip;</span>
          </div>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-black/[0.08]">
            <motion.div
              animate={{ width: ["18%", "86%"] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="h-full rounded-full bg-[var(--foreground)]/70"
            />
          </div>
        </div>
      </Float>
    </div>
  );
}

function AskVisual() {
  return (
    <div className="relative h-full w-full">
      <Float delay={0} duration={5.4} className="absolute left-[2%] right-[10%] top-[4%]">
        <div className="rounded-2xl rounded-tl-sm border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 shadow-md shadow-black/[0.05]">
          <p className="text-[13px] leading-relaxed text-[var(--foreground)]">
            Cut my clips to the beat and add captions
          </p>
        </div>
      </Float>

      <div className="absolute left-[4%] top-[38%] flex flex-col gap-2">
        <p className="text-[12px] text-[var(--foreground-muted)]">
          On it. Watching your 9 clips now.
        </p>
        <p className="text-[12px] text-[var(--foreground-muted)]">
          Beat map ready. Cutting on the drops.
        </p>
        <div className="flex items-center gap-1.5 pt-0.5">
          <span className="h-1 w-1 animate-pulse rounded-full bg-[var(--foreground-subtle)]" />
          <span className="h-1 w-1 animate-pulse rounded-full bg-[var(--foreground-subtle)] [animation-delay:150ms]" />
          <span className="h-1 w-1 animate-pulse rounded-full bg-[var(--foreground-subtle)] [animation-delay:300ms]" />
        </div>
      </div>

      {/* Vyra cursor, FLORA-style collaborative pointer */}
      <motion.div
        animate={{ x: [0, 26, -12, 0], y: [0, -16, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[14%] top-[58%]"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#4553ee">
          <path d="M4 2l16 7.6-7 2.2-3 6.8L4 2z" />
        </svg>
        <span className="ml-3 rounded-full bg-gradient-to-r from-[#2735b5] to-[#4553ee] px-2.5 py-0.5 text-[10px] font-semibold text-white shadow-md">
          Vyra
        </span>
      </motion.div>

      <div className="absolute bottom-[2%] left-[2%] right-[2%]">
        <div className="flex items-center gap-2 rounded-xl border border-[var(--surface-border)] bg-white px-3.5 py-2.5 shadow-sm">
          <span className="text-[13px] leading-none text-[var(--foreground-subtle)]">+</span>
          <span className="text-[12px] text-[var(--foreground-subtle)]">Ask anything...</span>
          <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-[var(--foreground)]">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13" />
              <path d="M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

function ExportVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <Float delay={0.2} duration={6.2} className="relative h-[86%] max-w-full">
        <div className="relative aspect-[9/16] h-full max-w-full overflow-hidden rounded-2xl bg-[#12111a] shadow-xl shadow-black/20 ring-1 ring-black/10">
          <LazyVideo
            src="https://pub-afda0198369e4e9d96b647ae8d8f963e.r2.dev/landing/sulan1.mp4"
            poster="/images/posters/sulan1.jpg"
            className="h-full w-full object-cover"
          />
        </div>
      </Float>

      <Float delay={0.9} duration={5.1} className="absolute right-[4%] top-[3%]">
        <span className="rounded-full bg-[var(--foreground)] px-3 py-1 text-[11px] font-semibold text-white shadow-lg">
          Export
        </span>
      </Float>

      <Float delay={1.4} duration={5.6} className="absolute bottom-[3%] left-1/2 w-max -translate-x-1/2">
        <div className="flex items-center gap-2 rounded-full border border-[var(--surface-border)] bg-white/85 px-3.5 py-1.5 shadow-md backdrop-blur-md">
          <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600">
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
              <path d="M13 4.5L6.5 11L3 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Export ready
          </span>
          <span className="h-3 w-px bg-black/10" />
          <span className="text-[10px] text-[var(--foreground-subtle)]">
            TikTok &middot; Reels &middot; Shorts
          </span>
        </div>
      </Float>
    </div>
  );
}

const STEPS = [
  {
    num: "01",
    title: "Upload",
    captionTitle: "Drop in raw footage",
    caption: "Vyra watches and understands every frame.",
    visual: <UploadVisual />,
  },
  {
    num: "02",
    title: "Ask",
    captionTitle: "Edit by talking",
    caption: "Editing is a conversation now. Say it, watch it happen.",
    visual: <AskVisual />,
  },
  {
    num: "03",
    title: "Export",
    captionTitle: "Export in one click",
    caption: "Or let your agent run the whole edit and export on its own.",
    visual: <ExportVisual />,
  },
];

export default function Steps() {
  return (
    <section className="relative px-6 py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.05] blur-[120px]"
          style={{ background: "var(--brand-blue)" }}
        />
      </div>
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-4 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} y={28} duration={0.45} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.21, 0.68, 0.35, 1] }}
                /* The visuals position their pieces in percentages, so the card
                   needs a real height on phones too - an auto-height card
                   collapsed them into each other. */
                className="relative flex h-[clamp(430px,64vh,500px)] flex-col overflow-hidden rounded-3xl border border-[var(--surface-border)] bg-white p-6 shadow-sm sm:p-7 md:h-[clamp(480px,62vh,560px)]"
              >
              <DotGrid />
              <div className="relative flex items-baseline gap-2.5 pb-3 md:pb-4">
                <span
                  className="text-4xl font-medium tracking-tight text-[var(--foreground)]/[0.16] sm:text-5xl md:text-6xl"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {step.num}
                </span>
                <span
                  className="text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {step.title}
                </span>
              </div>
              <div className="relative min-h-0 flex-1 py-3">
                {step.visual}
              </div>
              <div className="relative pt-4 md:pt-5">
                <p
                  className="text-[18px] font-semibold text-[var(--foreground)] md:text-[19px]"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {step.captionTitle}
                </p>
                <p className="mt-1 text-[13.5px] leading-relaxed text-[var(--foreground-muted)]">
                  {step.caption}
                </p>
              </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

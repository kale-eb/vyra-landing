"use client";

import { motion } from "framer-motion";

const FOOTAGE_BASE =
  "https://pub-afda0198369e4e9d96b647ae8d8f963e.r2.dev/landing/footage";

/* Full-bleed dark app panels, matching the hero editor's look */

function UploadMini() {
  const thumbs = [
    { src: `${FOOTAGE_BASE}/painting.jpg`, analyzed: true },
    { src: `${FOOTAGE_BASE}/dance.jpg`, analyzed: true },
    { src: `${FOOTAGE_BASE}/selfiewalk.jpg`, analyzed: true },
    { src: `${FOOTAGE_BASE}/snowboard.jpg`, analyzed: false },
    { src: `${FOOTAGE_BASE}/hotpot.jpg`, analyzed: false },
  ];
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl bg-[#0e0e0e]">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
        <span className="text-[11px] font-medium text-white/70">Footage</span>
        <span className="text-[10px] text-white/30">9 clips</span>
      </div>
      <div className="grid flex-1 grid-cols-2 content-start gap-2 p-3">
        {thumbs.map((t) => (
          <div key={t.src} className="relative aspect-video overflow-hidden rounded-lg">
            <img src={t.src} alt="" className="h-full w-full object-cover" />
            {t.analyzed && (
              <span className="absolute bottom-1 left-1 flex items-center gap-1 rounded bg-black/60 px-1.5 py-0.5 text-[8px] font-medium text-white/80">
                <svg width="7" height="7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" />
                </svg>
                analyzed
              </span>
            )}
          </div>
        ))}
        <div className="flex aspect-video flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed border-white/[0.15] bg-white/[0.03]">
          <span className="text-[9px] text-white/40">IMG_7264.mov</span>
          <div className="h-1 w-3/5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[72%] rounded-full bg-white/60" />
          </div>
          <span className="text-[8px] text-white/25">uploading&hellip;</span>
        </div>
      </div>
    </div>
  );
}

function AskMini() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl bg-[#0e0e0e]">
      <div className="flex gap-1 p-1.5">
        <span className="flex-1 rounded-md py-1.5 text-center text-[11px] text-white/40">
          Footage
        </span>
        <span className="flex-1 rounded-md bg-gradient-to-r from-[#2735b5] to-[#4553ee] py-1.5 text-center text-[11px] font-semibold text-white">
          Vyra AI
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-end gap-2.5 px-3.5 py-3">
        <div className="rounded-xl bg-white/[0.07] px-3.5 py-2.5">
          <p className="text-[12px] leading-relaxed text-white/90">
            Cut my clips to the beat and add captions
          </p>
        </div>
        <p className="text-[11px] leading-snug text-white/55">
          On it. Watching your 9 clips now.
        </p>
        <p className="text-[11px] leading-snug text-white/55">
          Beat map ready. Cutting on the drops.
        </p>
        <div className="flex items-center gap-1.5 pl-0.5">
          <span className="h-1 w-1 animate-pulse rounded-full bg-white/50" />
          <span className="h-1 w-1 animate-pulse rounded-full bg-white/50 [animation-delay:150ms]" />
          <span className="h-1 w-1 animate-pulse rounded-full bg-white/50 [animation-delay:300ms]" />
        </div>
      </div>
      <div className="px-3.5 pb-3.5">
        <div className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2.5">
          <span className="text-[13px] leading-none text-white/30">+</span>
          <span className="text-[12px] text-white/25">Ask anything...</span>
          <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-white">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13" />
              <path d="M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

function ExportMini() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl bg-[#0e0e0e]">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>
        <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-black">
          Export
        </span>
      </div>
      <div className="flex flex-1 items-center justify-center gap-4 p-4">
        <div className="aspect-[9/16] h-full max-h-[230px] overflow-hidden rounded-lg bg-black">
          <img src="/images/colorwheel/cw-4.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[13px] font-medium text-white/90">
            color wheel trend
          </span>
          <span className="text-[11px] text-white/40">1080p &middot; 15s &middot; 24 MB</span>
          <div className="h-1 w-28 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-full rounded-full bg-emerald-400/80" />
          </div>
          <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400">
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
              <path d="M13 4.5L6.5 11L3 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Ready to post
          </span>
          <div className="mt-1 flex gap-1.5">
            {["TikTok", "Reels", "Shorts"].map((p) => (
              <span key={p} className="rounded-full bg-white/[0.07] px-2 py-0.5 text-[9px] text-white/50">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  {
    num: "01",
    title: "Upload",
    caption: "Drop in your raw clips. Vyra watches and understands every frame.",
    visual: <UploadMini />,
  },
  {
    num: "02",
    title: "Ask",
    caption: "Describe the edit in plain English. The AI cuts, syncs, and styles.",
    visual: <AskMini />,
  },
  {
    num: "03",
    title: "Export",
    caption: "Tweak anything on the timeline, then ship it anywhere.",
    visual: <ExportMini />,
  },
];

export default function Steps() {
  return (
    <section className="relative flex flex-col justify-center px-6 py-16 md:min-h-screen">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-4 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.21, 0.68, 0.35, 1] }}
              className="flex flex-col rounded-2xl border border-[var(--surface-border)] bg-white p-6 shadow-sm md:min-h-[72vh]"
            >
              <div className="flex items-baseline gap-2.5 px-1 pb-5">
                <span
                  className="text-5xl font-bold tracking-tight text-[var(--foreground)]/[0.18] md:text-6xl"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {step.num}
                </span>
                <span
                  className="text-5xl font-bold tracking-tight text-[var(--foreground)] md:text-6xl"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {step.title}
                </span>
              </div>
              <div className="flex min-h-[300px] flex-1 pb-5">
                {step.visual}
              </div>
              <p className="text-[14px] leading-relaxed text-[var(--foreground-muted)]">
                {step.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

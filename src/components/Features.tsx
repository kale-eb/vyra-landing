"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AudioWaveform } from "./AudioWaveform";

const STORAGE_BASE =
  "https://uskviqibopshckqsmyvk.supabase.co/storage/v1/object/public/demo-assets/showcase";

interface TimeRemapVariant {
  label: string;
  videoUrl: string;
  curvePath: string;
}

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  mediaUrl?: string;
  mediaType?: "video" | "image";
  timeRemapOriginal?: string;
  timeRemapVariants?: TimeRemapVariant[];
  referenceOriginal?: string;
  referenceResult?: string;
  maskBefore?: string;
  maskAfter?: string;
  showWaveform?: boolean;
}

const FEATURES: FeatureCard[] = [
  {
    id: "smart-masks",
    title: "Smart Masks",
    description:
      "Click any object or ask the AI to mask it — it tracks frame-by-frame. Isolate subjects, remove backgrounds, or apply effects to specific areas.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7V5a2 2 0 012-2h2" />
        <path d="M17 3h2a2 2 0 012 2v2" />
        <path d="M21 17v2a2 2 0 01-2 2h-2" />
        <path d="M7 21H5a2 2 0 01-2-2v-2" />
        <line x1="7" y1="12" x2="17" y2="12" />
      </svg>
    ),
    maskBefore: `${STORAGE_BASE}/smart-masks-before.mp4`,
    maskAfter: `${STORAGE_BASE}/smart-masks-after.mp4`,
  },
  {
    id: "time-remap",
    title: "Time Remapping",
    description:
      "Speed ramps, slow motion, and reverse — all with smooth interpolation. Create dramatic moments by bending time with a simple prompt.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    timeRemapOriginal: `${STORAGE_BASE}/time-remap-original.mp4`,
    timeRemapVariants: [
      {
        label: "Fast \u2192 Slow \u2192 Fast",
        videoUrl: `${STORAGE_BASE}/time-remap-curve1.mp4`,
        curvePath: "M 10 90 C 26 26, 74 74, 90 10",
      },
      {
        label: "Slow \u2192 Fast \u2192 Slow \u2192 Fast",
        videoUrl: `${STORAGE_BASE}/time-remap-curve2.mp4`,
        curvePath: "M 10 90 Q 50 10, 90 90",
      },
    ],
  },
  {
    id: "reference-style",
    title: "Match Reference Style",
    description:
      "Drop in a reference video and the AI analyzes its pacing, color, and transitions — then applies that same style to your footage.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="15.5" r="2.5" />
        <circle cx="8.5" cy="15.5" r="2.5" />
        <path d="M13.5 9v1.5a2 2 0 01-2 2h-1a2 2 0 00-2 2V15" />
        <path d="M13.5 9v1.5a2 2 0 002 2h1a2 2 0 012 2V15" />
      </svg>
    ),
    referenceOriginal: `${STORAGE_BASE}/reference-style-original.mp4`,
    referenceResult: `${STORAGE_BASE}/reference-style-result.mp4`,
  },
  {
    id: "music-sync",
    title: "Music Sync",
    description:
      "The AI detects beats and energy in your audio track, then automatically cuts and transitions your footage to match the rhythm.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    mediaUrl: `${STORAGE_BASE}/music-sync-preview.mp4`,
    mediaType: "video",
    showWaveform: true,
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const [selectedRemapIndex, setSelectedRemapIndex] = useState<number | null>(null);
  const [showingReferenceResult, setShowingReferenceResult] = useState(false);
  const [showingMaskAfter, setShowingMaskAfter] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const card = FEATURES[activeIndex];

  const goTo = useCallback((i: number) => {
    setActiveIndex(i);
    setSelectedRemapIndex(null);
    setShowingReferenceResult(false);
    setShowingMaskAfter(false);
  }, []);

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % FEATURES.length);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo((activeIndex - 1 + FEATURES.length) % FEATURES.length);
  }, [activeIndex, goTo]);

  return (
    <section id="features" className="relative py-28 px-6">
      <div className="relative mx-auto max-w-5xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]"
          >
            Features
          </motion.p>
          <h2
            className="mb-5 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Everything you need
          </h2>
          <p className="mx-auto max-w-lg text-[15px] leading-relaxed text-[var(--foreground-muted)]">
            Powerful capabilities that stay out of your way until you need them.
          </p>
        </motion.div>

        {/* Feature carousel */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            {/* Left arrow */}
            <button
              onClick={goPrev}
              className="flex-none flex items-center justify-center w-10 h-10 rounded-full border border-[var(--surface-border)] bg-white text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:border-[var(--surface-border-hover)] hover:shadow-md transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Card */}
            <div className="flex-1 min-w-0 overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-white shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col md:flex-row min-h-[320px]"
                >
                  {/* Media side */}
                  <div className="flex-1 min-w-0 max-h-[400px] flex items-center justify-center bg-black/[0.02] overflow-hidden">
                    {card.maskBefore ? (
                      /* Smart masks: both videos always mounted, toggle visibility */
                      <div className="relative w-full h-full">
                        <video
                          src={card.maskBefore}
                          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${!showingMaskAfter ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                          muted
                          autoPlay
                          loop
                          playsInline
                        />
                        <video
                          src={card.maskAfter}
                          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${showingMaskAfter ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                          muted
                          autoPlay
                          loop
                          playsInline
                        />
                      </div>
                    ) : card.timeRemapOriginal ? (
                      /* Time remap: swap via key to force reload */
                      <div className="relative w-full h-full">
                        <video
                          key={selectedRemapIndex === null ? "original" : `variant-${selectedRemapIndex}`}
                          ref={videoRef}
                          src={
                            selectedRemapIndex === null
                              ? card.timeRemapOriginal
                              : card.timeRemapVariants![selectedRemapIndex].videoUrl
                          }
                          className="w-full h-full object-contain"
                          muted
                          autoPlay
                          loop
                          playsInline
                        />
                      </div>
                    ) : card.referenceOriginal ? (
                      /* Reference style: both videos always mounted, toggle visibility */
                      <div className="relative w-full h-full">
                        <video
                          src={card.referenceOriginal}
                          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${!showingReferenceResult ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                          muted
                          autoPlay
                          loop
                          playsInline
                        />
                        <video
                          src={card.referenceResult}
                          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${showingReferenceResult ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                          muted
                          autoPlay
                          loop
                          playsInline
                        />
                      </div>
                    ) : card.mediaUrl && card.mediaType === "video" ? (
                      /* Generic video (music sync) with optional waveform */
                      <div className={`relative w-full h-full ${card.showWaveform ? "flex flex-col" : ""}`}>
                        <video
                          ref={videoRef}
                          src={card.mediaUrl}
                          className={card.showWaveform ? "flex-1 min-h-0 w-full object-contain" : "w-full h-full object-contain"}
                          muted={muted}
                          autoPlay
                          loop
                          playsInline
                        />
                        {card.showWaveform && card.mediaUrl && (
                          <AudioWaveform
                            audioUrl={card.mediaUrl}
                            videoRef={videoRef}
                            className="h-16 flex-none border-t border-black/[0.04]"
                          />
                        )}
                        <button
                          onClick={() => setMuted((m) => !m)}
                          className={`absolute ${card.showWaveform ? "bottom-[72px]" : "bottom-3"} left-3 flex items-center gap-1.5 rounded-md bg-black/50 backdrop-blur-sm px-2 py-1.5 text-white/80 hover:text-white transition-colors`}
                        >
                          {muted ? (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                              <line x1="23" y1="9" x2="17" y2="15" />
                              <line x1="17" y1="9" x2="23" y2="15" />
                            </svg>
                          ) : (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                              <path d="M19.07 4.93a10 10 0 010 14.14" />
                              <path d="M15.54 8.46a5 5 0 010 7.07" />
                            </svg>
                          )}
                          {muted && <span className="text-xs font-medium">Tap to unmute</span>}
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-3 text-[var(--foreground-subtle)]">
                        <div className="w-16 h-16 rounded-2xl bg-[var(--surface)] border border-[var(--surface-border)] flex items-center justify-center">
                          {card.icon}
                        </div>
                        <span className="text-xs">Preview coming soon</span>
                      </div>
                    )}
                  </div>

                  {/* Text side */}
                  <div className="w-full md:w-80 flex-none flex flex-col justify-center px-8 py-8 border-t md:border-t-0 md:border-l border-[var(--surface-border)]">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-[var(--brand-blue)]/[0.08] border border-[var(--brand-blue)]/[0.12] flex items-center justify-center text-[var(--brand-blue)]">
                        {card.icon}
                      </div>
                      <h3
                        className="text-lg font-bold text-[var(--foreground)]"
                        style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                      >
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-[14px] leading-relaxed text-[var(--foreground-muted)]">
                      {card.description}
                    </p>

                    {/* Smart masks before/after toggle */}
                    {card.maskBefore && (
                      <div className="mt-5">
                        <p className="text-[12px] text-[var(--foreground-subtle)] mb-2">Compare before and after:</p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setShowingMaskAfter(false)}
                            className={`flex-1 rounded-lg border px-4 py-3 transition-all cursor-pointer ${
                              !showingMaskAfter
                                ? "border-black/[0.2] bg-black/[0.05] shadow-sm ring-1 ring-black/[0.03]"
                                : "border-[var(--surface-border)] hover:border-[var(--surface-border-hover)] hover:bg-black/[0.02]"
                            }`}
                          >
                            <span className={`text-xs font-medium uppercase tracking-wider block mb-1 ${!showingMaskAfter ? "text-[var(--foreground)]" : "text-[var(--foreground-subtle)]"}`}>
                              Before
                            </span>
                            <span className={`text-sm ${!showingMaskAfter ? "text-[var(--foreground)]" : "text-[var(--foreground-muted)]"}`}>
                              Original
                            </span>
                          </button>
                          <button
                            onClick={() => setShowingMaskAfter(true)}
                            className={`flex-1 rounded-lg border px-4 py-3 transition-all cursor-pointer ${
                              showingMaskAfter
                                ? "border-black/[0.2] bg-black/[0.05] shadow-sm ring-1 ring-black/[0.03]"
                                : "border-[var(--surface-border)] hover:border-[var(--surface-border-hover)] hover:bg-black/[0.02]"
                            }`}
                          >
                            <span className={`text-xs font-medium uppercase tracking-wider block mb-1 ${showingMaskAfter ? "text-[var(--foreground)]" : "text-[var(--foreground-subtle)]"}`}>
                              After
                            </span>
                            <span className={`text-sm ${showingMaskAfter ? "text-[var(--foreground)]" : "text-[var(--foreground-muted)]"}`}>
                              Masked
                            </span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Time remap curve selectors */}
                    {card.timeRemapVariants && (
                      <div className="mt-5">
                        <p className="text-[12px] text-[var(--foreground-subtle)] mb-2">Click a curve to try it:</p>
                        <div className="flex gap-2">
                          {card.timeRemapVariants.map((variant, i) => (
                            <button
                              key={i}
                              onClick={() => setSelectedRemapIndex(i)}
                              className={`relative flex-1 rounded-lg border p-2.5 transition-all cursor-pointer ${
                                selectedRemapIndex === i
                                  ? "border-black/[0.2] bg-black/[0.05] shadow-sm ring-1 ring-black/[0.03]"
                                  : "border-[var(--surface-border)] hover:border-[var(--surface-border-hover)] hover:bg-black/[0.02]"
                              }`}
                            >
                              {selectedRemapIndex !== i && (
                                <span className="absolute top-1 right-1.5 text-[9px] font-medium text-[var(--foreground-subtle)] uppercase tracking-wider">
                                  Try
                                </span>
                              )}
                              <svg viewBox="0 0 100 100" className="w-full h-12">
                                <path
                                  d={variant.curvePath}
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  className={selectedRemapIndex === i ? "text-[var(--foreground)]" : "text-[var(--foreground-muted)]"}
                                />
                              </svg>
                              <span className={`text-[11px] mt-1.5 block font-medium ${selectedRemapIndex === i ? "text-[var(--foreground)]" : "text-[var(--foreground-subtle)]"}`}>
                                {variant.label}
                              </span>
                            </button>
                          ))}
                        </div>
                        {selectedRemapIndex !== null && (
                          <button
                            onClick={() => setSelectedRemapIndex(null)}
                            className="mt-2 text-[12px] text-[var(--foreground-subtle)] hover:text-[var(--foreground-muted)] transition-colors font-medium"
                          >
                            &larr; Reset to original
                          </button>
                        )}
                      </div>
                    )}

                    {/* Reference style toggle */}
                    {card.referenceOriginal && (
                      <div className="mt-5">
                        <p className="text-[12px] text-[var(--foreground-subtle)] mb-2">Compare before and after:</p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setShowingReferenceResult(false)}
                            className={`flex-1 rounded-lg border px-4 py-3 transition-all cursor-pointer ${
                              !showingReferenceResult
                                ? "border-black/[0.2] bg-black/[0.05] shadow-sm ring-1 ring-black/[0.03]"
                                : "border-[var(--surface-border)] hover:border-[var(--surface-border-hover)] hover:bg-black/[0.02]"
                            }`}
                          >
                            <span className={`text-xs font-medium uppercase tracking-wider block mb-1 ${!showingReferenceResult ? "text-[var(--foreground)]" : "text-[var(--foreground-subtle)]"}`}>
                              Reference
                            </span>
                            <span className={`text-sm ${!showingReferenceResult ? "text-[var(--foreground)]" : "text-[var(--foreground-muted)]"}`}>
                              Original
                            </span>
                          </button>
                          <button
                            onClick={() => setShowingReferenceResult(true)}
                            className={`flex-1 rounded-lg border px-4 py-3 transition-all cursor-pointer ${
                              showingReferenceResult
                                ? "border-black/[0.2] bg-black/[0.05] shadow-sm ring-1 ring-black/[0.03]"
                                : "border-[var(--surface-border)] hover:border-[var(--surface-border-hover)] hover:bg-black/[0.02]"
                            }`}
                          >
                            <span className={`text-xs font-medium uppercase tracking-wider block mb-1 ${showingReferenceResult ? "text-[var(--foreground)]" : "text-[var(--foreground-subtle)]"}`}>
                              Result
                            </span>
                            <span className={`text-sm ${showingReferenceResult ? "text-[var(--foreground)]" : "text-[var(--foreground-muted)]"}`}>
                              AI-Styled
                            </span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right arrow */}
            <button
              onClick={goNext}
              className="flex-none flex items-center justify-center w-10 h-10 rounded-full border border-[var(--surface-border)] bg-white text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:border-[var(--surface-border-hover)] hover:shadow-md transition-all"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {FEATURES.map((f, i) => (
              <button
                key={f.id}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-6 bg-[var(--brand-blue)]"
                    : "w-1.5 bg-[var(--foreground-subtle)]/30 hover:bg-[var(--foreground-subtle)]/50"
                }`}
              />
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-center text-[12px] text-[var(--foreground-subtle)] mt-4">
            Every result shown above was generated entirely by Vyra&apos;s AI agent — the only human input was a prompt.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

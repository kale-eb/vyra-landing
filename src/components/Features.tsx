"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { AudioWaveform } from "./AudioWaveform";

const STORAGE_BASE =
  "https://pub-afda0198369e4e9d96b647ae8d8f963e.r2.dev/showcase";

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
  mgVideos?: { label: string; url: string; fit?: "contain" | "cover"; scale?: number }[];
  showWaveform?: boolean;
  tryPrompt?: string;
  gridClass?: string;
}

const FEATURES: FeatureCard[] = [
  {
    id: "motion-graphics",
    title: "Motion Graphics",
    description:
      "The AI generates animated titles, lower thirds, data visualizations, and more — written as code components and rendered in real-time on your timeline.",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    mgVideos: [
      { label: "Title Card", url: "https://pub-afda0198369e4e9d96b647ae8d8f963e.r2.dev/landing/mg-cooking-quest.mp4", fit: "contain" as const },
      { label: "Podcast Title", url: "https://pub-afda0198369e4e9d96b647ae8d8f963e.r2.dev/landing/mg-lower-third.mp4", fit: "cover" as const, scale: 0.75 },
      { label: "Animated Counter", url: "https://pub-afda0198369e4e9d96b647ae8d8f963e.r2.dev/landing/mg-counter.mp4", fit: "cover" as const },
    ],
    gridClass: "md:col-span-2",
  },
  {
    id: "footage-understanding",
    title: "Understands Your Footage",
    description:
      "Vyra analyzes every clip — detecting scenes, transcribing speech, identifying objects and people. Your AI assistant sees what's actually in your footage and makes editing decisions based on real content, not guesses.",
    tryPrompt: '"Find the best moments and cut them together"',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "music-sync",
    title: "Music Sync",
    description:
      "The AI detects beats and energy in your audio track, then automatically cuts and transitions your footage to match the rhythm.",
    tryPrompt: '"Sync the cuts to the beat drops"',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    mediaUrl: `${STORAGE_BASE}/music-sync-preview.mp4`,
    mediaType: "video",
    showWaveform: true,
  },
  {
    id: "reference-style",
    title: "Match Reference Style",
    description:
      "Drop in a reference video and the AI analyzes its pacing, color, and transitions — then applies that same style to your footage.",
    tryPrompt: '"Match the style and pacing of this reference"',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
    id: "captions",
    title: "AI Captions",
    description:
      "AI generates and syncs captions from speech, placed on the timeline automatically. Style them with a prompt — bold, minimal, animated, anything.",
    tryPrompt: '"Add captions in bold white"',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M7 15h4" />
        <path d="M13 15h4" />
        <path d="M7 11h10" />
      </svg>
    ),
  },
];

function MotionGraphicsCard({ card }: { card: FeatureCard }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const videos = card.mgVideos || [];

  return (
    <div className="flex flex-col md:flex-row h-full">
      {/* Video */}
      <div className="relative flex-1 min-h-[340px] bg-black overflow-hidden">
        {videos.map((v, i) => (
          <video
            key={v.url}
            src={v.url}
            className={`absolute inset-0 w-full h-full transition-opacity duration-200 ${
              i === activeIdx ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            style={{
              objectFit: v.fit || "contain",
              transform: v.scale ? `scale(${v.scale})` : undefined,
            }}
            muted
            autoPlay
            loop
            playsInline
          />
        ))}
      </div>
      {/* Text + selector */}
      <div className="w-full md:w-72 flex-none flex flex-col justify-center p-5 border-t md:border-t-0 md:border-l border-[var(--surface-border)]">
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
        <p className="text-[14px] leading-relaxed text-[var(--foreground-muted)] mb-4">
          {card.description}
        </p>
        {/* Type selector buttons */}
        <div className="flex flex-col gap-2">
          {videos.map((v, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`rounded-lg border px-3 py-2.5 text-left transition-all cursor-pointer ${
                i === activeIdx
                  ? "border-black/[0.2] bg-black/[0.05] shadow-sm ring-1 ring-black/[0.03]"
                  : "border-[var(--surface-border)] hover:border-[var(--surface-border-hover)] hover:bg-black/[0.02]"
              }`}
            >
              <span
                className={`text-[13px] font-medium ${
                  i === activeIdx ? "text-[var(--foreground)]" : "text-[var(--foreground-muted)]"
                }`}
              >
                {v.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function SmartMaskCard({ card }: { card: FeatureCard }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Media */}
      <div className="relative flex-1 min-h-[340px] bg-black/[0.02] overflow-hidden">
        <video
          src={card.maskBefore}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
            !showAfter ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          muted
          autoPlay
          loop
          playsInline
        />
        <video
          src={card.maskAfter}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
            showAfter ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          muted
          autoPlay
          loop
          playsInline
        />
        {/* Prompt overlay */}
      </div>
      {/* Text + controls */}
      <div className="w-full md:w-72 flex-none flex flex-col justify-center p-5 border-t md:border-t-0 md:border-l border-[var(--surface-border)]">
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
        <p className="text-[14px] leading-relaxed text-[var(--foreground-muted)] mb-4">
          {card.description}
        </p>
        {/* Before/After toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setShowAfter(false)}
            className={`flex-1 rounded-lg border px-4 py-3 transition-all cursor-pointer ${
              !showAfter
                ? "border-black/[0.2] bg-black/[0.05] shadow-sm ring-1 ring-black/[0.03]"
                : "border-[var(--surface-border)] hover:border-[var(--surface-border-hover)] hover:bg-black/[0.02]"
            }`}
          >
            <span
              className={`text-xs font-medium uppercase tracking-wider block mb-1 ${
                !showAfter
                  ? "text-[var(--foreground)]"
                  : "text-[var(--foreground-subtle)]"
              }`}
            >
              Before
            </span>
            <span
              className={`text-sm ${
                !showAfter
                  ? "text-[var(--foreground)]"
                  : "text-[var(--foreground-muted)]"
              }`}
            >
              Original
            </span>
          </button>
          <button
            onClick={() => setShowAfter(true)}
            className={`flex-1 rounded-lg border px-4 py-3 transition-all cursor-pointer ${
              showAfter
                ? "border-black/[0.2] bg-black/[0.05] shadow-sm ring-1 ring-black/[0.03]"
                : "border-[var(--surface-border)] hover:border-[var(--surface-border-hover)] hover:bg-black/[0.02]"
            }`}
          >
            <span
              className={`text-xs font-medium uppercase tracking-wider block mb-1 ${
                showAfter
                  ? "text-[var(--foreground)]"
                  : "text-[var(--foreground-subtle)]"
              }`}
            >
              After
            </span>
            <span
              className={`text-sm ${
                showAfter
                  ? "text-[var(--foreground)]"
                  : "text-[var(--foreground-muted)]"
              }`}
            >
              Masked
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

const FOOTAGE_BASE = "https://pub-afda0198369e4e9d96b647ae8d8f963e.r2.dev/landing/footage";

const FOOTAGE_CLIPS = [
  { src: `${FOOTAGE_BASE}/pizza.jpg`, label: "Restaurant dinner", tags: ["food", "indoor", "pizza"], duration: "0:02" },
  { src: `${FOOTAGE_BASE}/hotpot.jpg`, label: "Hot pot close-up", tags: ["food", "reaction", "dining"], duration: "0:05" },
  { src: `${FOOTAGE_BASE}/painting.jpg`, label: "Art studio session", tags: ["art", "creative", "studio"], duration: "0:25" },
  { src: `${FOOTAGE_BASE}/snowboard.jpg`, label: "Halfpipe trick", tags: ["snowboard", "aerial", "sports"], duration: "0:03" },
  { src: `${FOOTAGE_BASE}/selfiewalk.jpg`, label: "Selfie walk", tags: ["selfie", "walking", "winter"], duration: "0:05" },
  { src: `${FOOTAGE_BASE}/dance.jpg`, label: "Dance performance", tags: ["stage", "energetic", "group"], duration: "0:14" },
];

function FootageUnderstandingCard({ card }: { card: FeatureCard }) {
  return (
    <div className="flex flex-col h-full">
      <div className="relative bg-[var(--surface)] p-5 overflow-hidden">
        {/* Real footage thumbnail grid with analysis tags */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {FOOTAGE_CLIPS.map((clip, i) => (
            <div key={i} className="group relative rounded-lg bg-white border border-[var(--surface-border)] overflow-hidden shadow-sm transition-shadow hover:shadow-md">
              <div className="relative aspect-video overflow-hidden">
                <img src={clip.src} alt={clip.label} className="w-full h-full object-cover" />
                {/* Duration badge */}
                <span className="absolute bottom-1 right-1 rounded bg-black/60 px-1.5 py-0.5 text-[9px] font-medium text-white">
                  {clip.duration}
                </span>
                {/* Play icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-6 w-6 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 16 16" fill="none"><path d="M5 3l8 5-8 5V3z" fill="white"/></svg>
                  </div>
                </div>
              </div>
              <div className="px-2 py-1.5">
                <p className="text-[10px] sm:text-[9px] font-medium text-[var(--foreground)] truncate">{clip.label}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {clip.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[var(--brand-blue)]/[0.08] px-1.5 py-0.5 text-[8px] sm:text-[7px] font-medium text-[var(--brand-blue)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Analysis summary pills — inline so they never overlap thumbnails */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-white border border-[var(--surface-border)] px-2.5 py-1 text-[10px] font-medium text-[var(--foreground-muted)]">
            6 clips analyzed
          </span>
          <span className="rounded-full bg-white border border-[var(--surface-border)] px-2.5 py-1 text-[10px] font-medium text-[var(--foreground-muted)]">
            Speech transcribed
          </span>
          <span className="rounded-full bg-white border border-[var(--surface-border)] px-2.5 py-1 text-[10px] font-medium text-[var(--foreground-muted)]">
            18 tags generated
          </span>
        </div>
      </div>
      <div className="flex-1 p-5">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-8 h-8 rounded-lg bg-[var(--brand-blue)]/[0.08] border border-[var(--brand-blue)]/[0.12] flex items-center justify-center text-[var(--brand-blue)]">
            {card.icon}
          </div>
          <h3 className="text-lg font-bold text-[var(--foreground)]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
            {card.title}
          </h3>
        </div>
        <p className="text-[14px] leading-relaxed text-[var(--foreground-muted)]">
          {card.description}
        </p>
      </div>
    </div>
  );
}

function TimeRemapCard({ card }: { card: FeatureCard }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col h-full">
      {/* Media */}
      <div className="relative aspect-[4/3] bg-black/[0.02] overflow-hidden">
        <video
          key={
            selectedIndex === null ? "original" : `variant-${selectedIndex}`
          }
          src={
            selectedIndex === null
              ? card.timeRemapOriginal
              : card.timeRemapVariants![selectedIndex].videoUrl
          }
          className="w-full h-full object-contain"
          muted
          autoPlay
          loop
          playsInline
        />
      </div>
      {/* Text + curve selectors */}
      <div className="flex-1 p-5">
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
        <p className="text-[14px] leading-relaxed text-[var(--foreground-muted)] mb-4">
          {card.description}
        </p>
        {/* Curve selectors */}
        <p className="text-[12px] text-[var(--foreground-subtle)] mb-2">
          Click a curve to try it:
        </p>
        <div className="flex gap-2">
          {card.timeRemapVariants!.map((variant, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`relative flex-1 rounded-lg border p-2.5 transition-all cursor-pointer ${
                selectedIndex === i
                  ? "border-black/[0.2] bg-black/[0.05] shadow-sm ring-1 ring-black/[0.03]"
                  : "border-[var(--surface-border)] hover:border-[var(--surface-border-hover)] hover:bg-black/[0.02]"
              }`}
            >
              {selectedIndex !== i && (
                <span className="absolute top-1 right-1.5 text-[9px] font-medium text-[var(--foreground-subtle)] uppercase tracking-wider">
                  Try
                </span>
              )}
              <svg viewBox="0 0 100 100" className="w-full h-10">
                <path
                  d={variant.curvePath}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={
                    selectedIndex === i
                      ? "text-[var(--foreground)]"
                      : "text-[var(--foreground-muted)]"
                  }
                />
              </svg>
              <span
                className={`text-[10px] mt-1 block font-medium ${
                  selectedIndex === i
                    ? "text-[var(--foreground)]"
                    : "text-[var(--foreground-subtle)]"
                }`}
              >
                {variant.label}
              </span>
            </button>
          ))}
        </div>
        {selectedIndex !== null && (
          <button
            onClick={() => setSelectedIndex(null)}
            className="mt-2 text-[12px] text-[var(--foreground-subtle)] hover:text-[var(--foreground-muted)] transition-colors font-medium"
          >
            &larr; Reset to original
          </button>
        )}
      </div>
    </div>
  );
}

function MusicSyncCard({ card }: { card: FeatureCard }) {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="flex flex-col h-full">
      <div className="relative aspect-video bg-black/[0.02] overflow-hidden">
        <video
          ref={videoRef}
          src={card.mediaUrl}
          className="w-full h-full object-contain"
          muted={muted}
          autoPlay
          loop
          playsInline
        />
        <button
          onClick={() => setMuted((m) => !m)}
          className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-md bg-black/50 backdrop-blur-sm px-2 py-1.5 text-white/80 hover:text-white transition-colors"
        >
          {muted ? (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 010 14.14" />
              <path d="M15.54 8.46a5 5 0 010 7.07" />
            </svg>
          )}
          {muted && (
            <span className="text-xs font-medium">Tap to unmute</span>
          )}
        </button>
        <div className="absolute bottom-3 right-3 rounded-lg bg-white/90 backdrop-blur-sm border border-[var(--surface-border)] px-3 py-2 text-[12px]">
          <span className="text-[var(--foreground-subtle)]">Try: </span>
          <span className="text-[var(--foreground-muted)]">
            {card.tryPrompt}
          </span>
        </div>
      </div>
      {/* Waveform */}
      {card.showWaveform && card.mediaUrl && (
        <AudioWaveform
          audioUrl={card.mediaUrl}
          videoRef={videoRef}
          className="h-16 flex-none border-t border-black/[0.04]"
        />
      )}
      <div className="flex-1 p-5">
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
      </div>
    </div>
  );
}

function ReferenceStyleCard({ card }: { card: FeatureCard }) {
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="relative flex-1 min-h-[340px] bg-black/[0.02] overflow-hidden">
        <video
          src={card.referenceOriginal}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
            !showResult ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          muted
          autoPlay
          loop
          playsInline
        />
        <video
          src={card.referenceResult}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
            showResult ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          muted
          autoPlay
          loop
          playsInline
        />
      </div>
      <div className="w-full md:w-80 flex-none flex flex-col justify-center p-6 md:p-8 border-t md:border-t-0 md:border-l border-[var(--surface-border)]">
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
        <p className="text-[14px] leading-relaxed text-[var(--foreground-muted)] mb-4">
          {card.description}
        </p>
        {/* Before/After toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setShowResult(false)}
            className={`flex-1 rounded-lg border px-3 py-2.5 transition-all cursor-pointer ${
              !showResult
                ? "border-black/[0.2] bg-black/[0.05] shadow-sm ring-1 ring-black/[0.03]"
                : "border-[var(--surface-border)] hover:border-[var(--surface-border-hover)] hover:bg-black/[0.02]"
            }`}
          >
            <span
              className={`text-xs font-medium uppercase tracking-wider block mb-0.5 ${
                !showResult
                  ? "text-[var(--foreground)]"
                  : "text-[var(--foreground-subtle)]"
              }`}
            >
              Reference
            </span>
            <span
              className={`text-[13px] ${
                !showResult
                  ? "text-[var(--foreground)]"
                  : "text-[var(--foreground-muted)]"
              }`}
            >
              Original
            </span>
          </button>
          <button
            onClick={() => setShowResult(true)}
            className={`flex-1 rounded-lg border px-3 py-2.5 transition-all cursor-pointer ${
              showResult
                ? "border-black/[0.2] bg-black/[0.05] shadow-sm ring-1 ring-black/[0.03]"
                : "border-[var(--surface-border)] hover:border-[var(--surface-border-hover)] hover:bg-black/[0.02]"
            }`}
          >
            <span
              className={`text-xs font-medium uppercase tracking-wider block mb-0.5 ${
                showResult
                  ? "text-[var(--foreground)]"
                  : "text-[var(--foreground-subtle)]"
              }`}
            >
              Result
            </span>
            <span
              className={`text-[13px] ${
                showResult
                  ? "text-[var(--foreground)]"
                  : "text-[var(--foreground-muted)]"
              }`}
            >
              AI-Styled
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

function CaptionsCard({ card }: { card: FeatureCard }) {
  return (
    <div className="flex flex-col h-full">
      {/* Illustration area */}
      <div className="relative aspect-video bg-black/[0.02] overflow-hidden flex items-center justify-center">
        {/* Mock caption preview */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-1.5">
            <div className="rounded bg-[var(--foreground)] px-4 py-1.5">
              <span className="text-[14px] font-bold text-white">
                This is what your captions
              </span>
            </div>
            <div className="rounded bg-[var(--foreground)] px-4 py-1.5">
              <span className="text-[14px] font-bold text-white">
                will look like
              </span>
            </div>
          </div>
          {/* Timeline hint */}
          <div className="mt-2 flex gap-1">
            {[3, 2, 4, 2, 3, 2, 4, 3].map((w, i) => (
              <div
                key={i}
                className="h-2 rounded-sm bg-amber-400/40"
                style={{ width: `${w * 8}px` }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 p-5">
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
      </div>
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.68, 0.35, 1] as const },
  },
};

export default function Features() {
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
            Capabilities
          </motion.p>
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

        {/* Bento grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-5 md:grid-cols-2"
        >
          {/* Row 1: Smart Masks — full width */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-white shadow-sm"
          >
            <MotionGraphicsCard card={FEATURES[0]} />
          </motion.div>

          {/* Row 2: Time Remap (tall) + Music Sync */}
          <motion.div
            variants={cardVariants}
            className="overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-white shadow-sm"
          >
            <FootageUnderstandingCard card={FEATURES[1]} />
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-white shadow-sm"
          >
            <MusicSyncCard card={FEATURES[2]} />
          </motion.div>

          {/* Row 3: Reference Style — full width */}
          <motion.div
            variants={cardVariants}
            className="md:col-span-2 overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-white shadow-sm"
          >
            <ReferenceStyleCard card={FEATURES[3]} />
          </motion.div>

        </motion.div>

        {/* Disclaimer */}
        <p className="text-center text-[12px] text-[var(--foreground-subtle)] mt-6">
          Every result shown above was generated entirely by Vyra&apos;s AI
          agent — the only human input was a prompt.
        </p>
      </div>
    </section>
  );
}

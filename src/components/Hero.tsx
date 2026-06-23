"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import BrowserFrame from "./BrowserFrame";

const SCROLL_VIDEO_URL =
  "https://pub-afda0198369e4e9d96b647ae8d8f963e.r2.dev/landing/hero-mcp-demo.mp4";

const TYPEWRITER_CLIENTS = ["Claude", "ChatGPT", "Gemini", "AI assistant"];

function useClientTypewriter() {
  const [displayed, setDisplayed] = useState("");
  const [settled, setSettled] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      // Initial delay
      await wait(700);
      if (cancelled) return;

      for (let w = 0; w < TYPEWRITER_CLIENTS.length; w++) {
        if (cancelled) return;
        const word = TYPEWRITER_CLIENTS[w];
        const isLast = w === TYPEWRITER_CLIENTS.length - 1;
        setWordIndex(w);

        // Type each character
        for (let i = 1; i <= word.length; i++) {
          if (cancelled) return;
          setDisplayed(word.slice(0, i));
          await wait(90);
        }

        if (isLast) {
          // Final word — settle
          setSettled(true);
          return;
        }

        // Hold the word
        await wait(1200);
        if (cancelled) return;

        // Delete each character
        for (let i = word.length - 1; i >= 0; i--) {
          if (cancelled) return;
          setDisplayed(word.slice(0, i));
          await wait(50);
        }

        // Pause before next word
        await wait(500);
      }
    }

    run();
    return () => { cancelled = true; };
  }, []);

  const isProviderName = !settled && wordIndex < TYPEWRITER_CLIENTS.length - 1;
  return { displayed, settled, isProviderName, wordIndex };
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoDuration = useRef(0);
  const { displayed, settled, isProviderName, wordIndex } = useClientTypewriter();

  // Scroll-linked zoom on the sky background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const handleVideoLoaded = useCallback(() => {
    if (videoRef.current) {
      videoDuration.current = videoRef.current.duration;
      videoRef.current.currentTime = 0;
    }
  }, []);

  // Scroll-scrub video — plays from page top to just past the hero
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const section = sectionRef.current;
        const video = videoRef.current;
        if (!section || !video) return;
        const dur = videoDuration.current || video.duration;
        if (!dur || isNaN(dur)) return;
        videoDuration.current = dur;
        // Map scroll from top of page (0) to bottom of hero section (1)
        const sectionBottom = section.offsetTop + section.offsetHeight;
        const progress = Math.max(0, Math.min(1, window.scrollY / (sectionBottom * 0.7)));
        video.currentTime = progress * dur;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center overflow-hidden px-6 pt-16"
    >
      {/* ---- Painted sky background ---- */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[65%]">
        <motion.div
          className="absolute top-0 left-1/2 w-full min-w-[120%] -translate-x-1/2 origin-top h-full"
          style={{
            scale: bgScale,
            maskImage:
              "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        >
          <Image
            src="/hero-bg.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="120vw"
          />
        </motion.div>
      </div>

      {/* Soft fog behind content */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-[70%]">
        <div
          className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[90%] h-[60%] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(245,243,240,0.65) 0%, rgba(245,243,240,0.3) 40%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center pt-12 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mb-5"
        >
          <span className="block text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-[-0.02em] text-[var(--foreground)]">
            <span className="font-black tracking-[-0.03em]">Your </span>
            {isProviderName ? (
              <>
                {wordIndex === 1 ? (
                  <span className="font-black tracking-[-0.03em]">
                    <span className="text-[var(--foreground)]">{displayed.slice(0, Math.min(displayed.length, 4))}</span>
                    <span style={{ color: "#10a37f" }}>{displayed.slice(4)}</span>
                  </span>
                ) : (
                  <span
                    className="font-black tracking-[-0.03em]"
                    style={
                      wordIndex === 0
                        ? { color: "#e07a3a" }
                        : wordIndex === 2
                          ? {
                              background: "linear-gradient(135deg, #4285f4, #9b72cb, #d96570, #d2a544)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundSize: "200% 200%",
                              animation: "gemini-shimmer 2s ease infinite",
                            }
                          : undefined
                    }
                  >
                    {displayed}
                  </span>
                )}
                {!settled && (
                  <span
                    className="inline-block w-[2px] h-[0.85em] ml-[2px] align-middle"
                    style={{
                      animation: "blink 0.7s step-end infinite",
                      backgroundColor:
                        wordIndex === 0 ? "#e07a3a"
                        : wordIndex === 1 ? "#10a37f"
                        : wordIndex === 2 ? "#9b72cb"
                        : "var(--brand-blue)",
                    }}
                  />
                )}
                <span className="font-black tracking-[-0.03em]"> subscription</span>
              </>
            ) : (
              <>
                <span className="serif-italic font-normal">
                  {displayed}
                </span>
                {!settled && (
                  <span
                    className="inline-block w-[2px] h-[0.85em] ml-[2px] align-middle"
                    style={{
                      animation: "blink 0.7s step-end infinite",
                      backgroundColor: "var(--brand-blue)",
                    }}
                  />
                )}
              </>
            )}
          </span>
          <span className="block text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-black tracking-[-0.03em] text-[var(--foreground)]">
            now edits video.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mb-6 max-w-lg text-[15px] leading-[1.7] font-normal text-[var(--foreground-muted)]"
        >
          Connect Vyra to Claude, ChatGPT, or any MCP client. Describe your
          edit in natural language — the AI does the rest.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="https://app.usevyra.com/signup"
            className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-7 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[var(--brand-blue)]/20"
          >
            Get Started Free
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M3.5 8h9m0 0L9 4.5M12.5 8 9 11.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Works with */}
          <div className="flex items-center gap-2 text-[13px]">
            <span className="text-[var(--foreground-subtle)] mr-1">
              Works with
            </span>
            {["Claude", "ChatGPT", "Any MCP Client"].map((badge, i) => (
              <span key={badge} className="flex items-center gap-2">
                <span className="rounded-full border border-[var(--surface-border)] px-3 py-1 font-medium text-[var(--foreground-muted)] transition-all duration-200 hover:border-[var(--surface-border-hover)] hover:text-[var(--foreground)]">
                  {badge}
                </span>
                {i < 2 && (
                  <span className="text-[var(--foreground-subtle)]">
                    &middot;
                  </span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Hero visual — browser frame + floating chat */}
      <div
        ref={videoContainerRef}
        className="relative z-10 mx-auto mt-8 w-full max-w-6xl px-4 pb-16 md:pb-48 md:translate-x-[6%] md:-translate-y-2"
      >
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.9,
            ease: [0.21, 0.68, 0.35, 1],
          }}
          className="relative"
        >
          {/* Subtle glow */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute top-1/3 left-1/2 h-[300px] w-[80%] -translate-x-1/2 rounded-full opacity-[0.06] blur-[100px]"
              style={{ background: "var(--brand-blue)" }}
            />
          </div>

          {/* Main editor in browser frame */}
          <BrowserFrame>
            <video
              ref={videoRef}
              src={SCROLL_VIDEO_URL}
              muted
              playsInline
              preload="metadata"
              onLoadedMetadata={handleVideoLoaded}
              className="w-full"
            />
          </BrowserFrame>

          {/* Floating chat window — Claude Desktop style */}
          <motion.div
            initial={{ opacity: 0, y: 20, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4, ease: [0.21, 0.68, 0.35, 1] }}
            className="absolute -bottom-40 -left-16 z-20 hidden w-[340px] rounded-xl border border-[#3d3830]/60 bg-[#2d2a25] shadow-2xl shadow-black/30 sm:-left-28 sm:w-[400px] md:block"
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-3.5 py-2 bg-[#272420] rounded-t-xl">
              <div className="flex gap-1.5">
                <div className="h-[9px] w-[9px] rounded-full bg-[#ff5f57]" />
                <div className="h-[9px] w-[9px] rounded-full bg-[#febc2e]" />
                <div className="h-[9px] w-[9px] rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-[10px] text-white/25 font-medium">Video editing session</span>
              </div>
            </div>

            {/* Tab bar */}
            <div className="flex items-center gap-1 px-3.5 py-1.5 border-b border-white/[0.05]">
              <span className="rounded-md px-2 py-0.5 text-[9px] text-white/25">Chat</span>
              <span className="rounded-md px-2 py-0.5 text-[9px] bg-[#e09850]/[0.12] text-[#e09850]/80 font-medium">Cowork</span>
              <span className="rounded-md px-2 py-0.5 text-[9px] text-white/25">&lt;/&gt; Code</span>
            </div>

            {/* Chat content */}
            <div className="p-3.5 flex flex-col gap-2.5">
              {/* User message */}
              <div className="flex justify-end">
                <div className="rounded-2xl rounded-tr-sm bg-white/[0.08] px-3.5 py-2 max-w-[85%]">
                  <p className="text-[12px] leading-relaxed text-white/80">
                    Make a color wheel trend montage with my clips, add bilingual captions and a motion graphic intro
                  </p>
                </div>
              </div>

              {/* Tool calls */}
              <div className="flex flex-col gap-1">
                <p className="text-white/25 text-[10px]">Used 4 tools</p>
                <div className="flex items-center gap-1.5 rounded-md bg-white/[0.03] border border-white/[0.04] px-2.5 py-1.5">
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4" stroke="#e09850" strokeWidth="1.5" strokeLinecap="round"/><path d="M4 4h8v8" stroke="#e09850" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-[10px] text-white/35">addMedia</span>
                  <span className="text-[8px] text-white/20 ml-auto bg-white/[0.05] rounded px-1.5 py-0.5">Result</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-md bg-white/[0.03] border border-white/[0.04] px-2.5 py-1.5">
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4" stroke="#e09850" strokeWidth="1.5" strokeLinecap="round"/><path d="M4 4h8v8" stroke="#e09850" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-[10px] text-white/35">addCaptions</span>
                  <span className="text-[8px] text-white/20 ml-auto bg-white/[0.05] rounded px-1.5 py-0.5">Result</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-md bg-white/[0.03] border border-white/[0.04] px-2.5 py-1.5">
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4" stroke="#e09850" strokeWidth="1.5" strokeLinecap="round"/><path d="M4 4h8v8" stroke="#e09850" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-[10px] text-white/35">addMotionGraphic</span>
                  <span className="text-[8px] text-white/20 ml-auto bg-white/[0.05] rounded px-1.5 py-0.5">Result</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-md bg-white/[0.03] border border-white/[0.04] px-2.5 py-1.5">
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4" stroke="#e09850" strokeWidth="1.5" strokeLinecap="round"/><path d="M4 4h8v8" stroke="#e09850" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-[10px] text-white/35">addEffect</span>
                  <span className="text-[8px] text-white/20 ml-auto bg-white/[0.05] rounded px-1.5 py-0.5">Result</span>
                </div>
              </div>

              {/* Done + response */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5">
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M13.5 4.5L6.5 11.5L2.5 7.5" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-white/40 text-[10px]">Done</span>
                </div>
                <p className="text-[12px] leading-relaxed text-white/55">
                  Built the montage with 8 clips on the timeline. Added bilingual captions (EN + ZH), a color wheel motion graphic intro, and the Elegant Editorial style. Ready to preview.
                </p>
              </div>

              {/* Input bar */}
              <div className="mt-1 rounded-xl bg-white/[0.03] border border-white/[0.05] px-3 py-2 flex items-center justify-between">
                <span className="text-white/15 text-[10px]">Write a message...</span>
                <span className="text-white/10 text-[9px]">Sonnet 4.6</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
        @keyframes gemini-shimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}

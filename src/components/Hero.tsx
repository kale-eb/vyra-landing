"use client";

import { useRef, useState, useEffect, useCallback, FormEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BrowserFrame from "./BrowserFrame";

const SCROLL_VIDEO_URL =
  "https://uskviqibopshckqsmyvk.supabase.co/storage/v1/object/public/demo-assets/landing/scroll-demo.mp4";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoDuration = useRef(0);
  const [prompt, setPrompt] = useState("");

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
      console.log("[Hero] video loaded, duration:", videoDuration.current);
    }
  }, []);

  // Native scroll listener for video scrubbing
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const container = videoContainerRef.current;
        const video = videoRef.current;
        if (!container || !video) return;
        // Use ref if set, otherwise read directly from video element
        const dur = videoDuration.current || video.duration;
        if (!dur || isNaN(dur)) return;
        videoDuration.current = dur;
        const rect = container.getBoundingClientRect();
        const start = window.innerHeight;
        const end = -rect.height;
        const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
        video.currentTime = progress * dur;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = prompt.trim();
    if (trimmed) {
      window.location.href =
        "https://app.usevyra.com/signup?prompt=" + encodeURIComponent(trimmed);
    } else {
      window.location.href = "https://app.usevyra.com/signup";
    }
  }

  return (
    <section ref={sectionRef} className="relative flex flex-col items-center overflow-hidden px-6 pt-16">
      {/* ---- Painted sky background ---- */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[65%]">
        <motion.img
          src="/hero-bg.jpg"
          alt=""
          className="absolute top-0 left-1/2 w-full min-w-[120%] -translate-x-1/2 origin-top object-cover h-full"
          style={{
            scale: bgScale,
            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        />
      </div>

      {/* Soft white fog behind content — fades the sky gently */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-[70%]">
        <div
          className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[90%] h-[60%] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(245,243,240,0.65) 0%, rgba(245,243,240,0.3) 40%, transparent 70%)",
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
          <span
            className="block text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] font-black tracking-[-0.03em] text-[var(--foreground)]"
          >
            Your footage,
          </span>
          <span
            className="block text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-[-0.02em] text-[var(--foreground)]"
          >
            <span className="serif-italic font-normal">edited</span>
            <span className="font-black tracking-[-0.03em]">
              {" "}in minutes
            </span>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mb-6 text-[15px] leading-[1.7] font-normal text-[var(--foreground-muted)]"
        >
          An AI editor that works with your footage, understands your content, and gives you full control.
        </motion.p>

        {/* Input CTA group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex w-full max-w-xl flex-col items-center gap-4"
        >
          <form
            onSubmit={handleSubmit}
            className="flex w-full items-center rounded-full border border-[var(--surface-border)] bg-white p-1.5 shadow-lg shadow-black/[0.04] transition-all duration-300 focus-within:border-[var(--brand-blue)]/30 focus-within:shadow-[0_0_0_3px_rgba(90,138,239,0.1)]"
          >
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the video you want to make..."
              className="flex-1 bg-transparent px-5 py-2.5 text-[15px] text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none"
            />
            <button
              type="submit"
              className="btn-shimmer flex shrink-0 items-center gap-1.5 rounded-full bg-[var(--brand-blue)] px-5 py-2.5 text-[14px] font-semibold text-white transition-all duration-300 hover:shadow-md"
            >
              Start editing
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3.5 8h9m0 0L9 4.5M12.5 8 9 11.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>

          {/* Or upload files */}
          <div className="flex items-center gap-3 text-[14px]">
            <span className="text-[var(--foreground-subtle)]">or</span>
            <a
              href="https://app.usevyra.com/signup"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--surface-border)] px-4 py-1.5 font-medium text-[var(--foreground-muted)] transition-all duration-200 hover:border-[var(--surface-border-hover)] hover:text-[var(--foreground)]"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 10V2m0 0L5 5m3-3 3 3M2.5 11v1.5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Upload files
            </a>
          </div>

        </motion.div>
      </div>

      {/* Floating product shot — scroll-scrubbed video */}
      <div ref={videoContainerRef} className="relative z-10 mx-auto mt-10 w-full max-w-6xl px-4 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.9, ease: [0.21, 0.68, 0.35, 1] }}
        className="relative"
      >
        {/* Subtle glow behind the browser frame */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute top-1/3 left-1/2 h-[300px] w-[80%] -translate-x-1/2 rounded-full opacity-[0.06] blur-[100px]"
            style={{ background: "var(--brand-blue)" }}
          />
        </div>

        <BrowserFrame>
          <video
            ref={videoRef}
            src={SCROLL_VIDEO_URL}
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={handleVideoLoaded}
            className="w-full"
          />
        </BrowserFrame>
      </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import BrowserFrame from "./BrowserFrame";
import VideoPlaceholder from "./VideoPlaceholder";

export default function Hero() {
  const [prompt, setPrompt] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = prompt.trim();
    if (trimmed) {
      window.location.href =
        "https://app.usevyra.com?prompt=" + encodeURIComponent(trimmed);
    } else {
      window.location.href = "https://app.usevyra.com";
    }
  }

  return (
    <section className="relative flex flex-col items-center overflow-hidden px-6 pt-16">
      {/* ---- Painted sky background ---- */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="absolute top-0 left-1/2 w-[120%] -translate-x-1/2"
          style={{
            maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
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
            className="block text-[clamp(2.25rem,5.5vw,4rem)] leading-[0.95] font-black tracking-[-0.03em] text-[var(--foreground)]"
          >
            Your footage,
          </span>
          <span
            className="block text-[clamp(2.25rem,5.5vw,4rem)] leading-[0.95] tracking-[-0.02em] text-[var(--foreground)]"
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
              href="https://app.usevyra.com"
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

      {/* Floating product shot */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.9, ease: [0.21, 0.68, 0.35, 1] }}
        className="relative z-10 mx-auto mt-10 w-full max-w-5xl px-4 pb-12"
      >
        {/* Subtle glow behind the browser frame */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute top-1/3 left-1/2 h-[300px] w-[80%] -translate-x-1/2 rounded-full opacity-[0.06] blur-[100px]"
            style={{ background: "var(--brand-blue)" }}
          />
        </div>

        <BrowserFrame>
          <VideoPlaceholder label="Product demo video" aspectRatio="16/9" />
        </BrowserFrame>
      </motion.div>
    </section>
  );
}

"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import EditorMockup, { type ClientKey } from "./EditorMockup";

const CLIENTS: { key: ClientKey; label: string; logo: string | null }[] = [
  { key: "vyra", label: "Vyra AI", logo: null },
  { key: "claude", label: "Claude", logo: "/logos/claude.svg" },
  { key: "chatgpt", label: "ChatGPT", logo: "/logos/openai.svg" },
  { key: "mcp", label: "Any MCP Client", logo: "/logos/mcp.svg" },
];

const TYPED_HEADLINE = "Finished video out.";

function useHeadlineTypewriter() {
  const [displayed, setDisplayed] = useState("");
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      // Initial delay
      await wait(700);
      if (cancelled) return;

      // Type each character
      for (let i = 1; i <= TYPED_HEADLINE.length; i++) {
        if (cancelled) return;
        setDisplayed(TYPED_HEADLINE.slice(0, i));
        await wait(90);
      }

      // Let the cursor blink briefly, then settle
      await wait(1200);
      if (!cancelled) setSettled(true);
    }

    run();
    return () => { cancelled = true; };
  }, []);

  return { displayed, settled };
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const { displayed, settled } = useHeadlineTypewriter();

  // Scroll-linked zoom on the sky background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Scroll-driven editor story: the mockup pins while progress 0->1 plays
  // the chat -> thinking -> timeline assembly -> reply sequence.
  const { scrollYProgress: storyScroll } = useScroll({
    target: storyRef,
    offset: ["start 0.55", "end 0.95"],
  });
  const [storyProgress, setStoryProgress] = useState(0);
  useMotionValueEvent(storyScroll, "change", (v) => setStoryProgress(v));

  const [client, setClient] = useState<ClientKey>("vyra");

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center overflow-x-clip px-6 pt-16"
    >
      {/* ---- Painted sky background ---- */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[110vh]">
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
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-[120vh]">
        <div
          className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[90%] h-[60%] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(245,243,240,0.65) 0%, rgba(245,243,240,0.3) 40%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center pt-10 text-center md:pt-14">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mb-5"
        >
          <span className="block text-[clamp(2rem,5vw,3.75rem)] leading-[0.95] font-extrabold tracking-[-0.03em] text-[var(--foreground)]">
            Raw footage in.
          </span>
          <span className="block text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.02em] text-[var(--foreground)]">
            <span className="serif-italic font-normal">{displayed}</span>
            {!settled && (
              <span
                className="inline-block w-[2px] h-[0.85em] ml-[2px] align-middle"
                style={{
                  animation: "blink 0.7s step-end infinite",
                  backgroundColor: "var(--brand-blue)",
                }}
              />
            )}
          </span>
        </motion.h1>

        {/* Subtext - two short lines, FLORA-style */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mb-7 text-[16px] leading-[1.6] text-[var(--foreground-muted)] md:text-[17px]"
        >
          <span className="block">
            Describe your edit naturally, get a finished draft in minutes.
          </span>
          <span className="block">Every editing tool, one conversation.</span>
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
            Get started for free
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

          {/* Client switcher - changes the editor preview below */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[13px]">
            <span className="text-[var(--foreground-subtle)] mr-1">
              Edit with
            </span>
            {CLIENTS.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setClient(c.key)}
                className={`flex cursor-pointer items-center gap-1.5 rounded-full border px-3 py-1 font-medium transition-all duration-200 ${
                  client === c.key
                    ? "border-[var(--brand-blue)]/50 bg-[var(--brand-blue)]/[0.06] text-[var(--brand-blue)]"
                    : "border-[var(--surface-border)] text-[var(--foreground-muted)] hover:border-[var(--surface-border-hover)] hover:text-[var(--foreground)]"
                }`}
              >
                {c.logo && (
                  <Image src={c.logo} alt="" width={13} height={13} />
                )}
                {c.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Hero visual - the Vyra editor, pinned while scroll plays the story */}
      <div
        ref={storyRef}
        className="relative z-10 mx-auto mt-10 h-[145vh] w-full max-w-5xl px-0 sm:px-4 md:mt-12"
      >
        <div className="sticky top-16 md:top-20">
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

            <EditorMockup progress={storyProgress} client={client} />
          </motion.div>
        </div>
      </div>
      <div className="h-8 md:h-10" />

      <style jsx>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

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
  // Quantize before it hits React state. The raw motion value fires on every
  // scroll frame; re-rendering the whole mockup that often drops frames on
  // phones. The story beats sit on ~0.02 boundaries, so 1/200 loses nothing.
  const [storyProgress, setStoryProgress] = useState(0);
  useMotionValueEvent(storyScroll, "change", (v) => {
    const q = Math.round(v * 200) / 200;
    setStoryProgress((prev) => (prev === q ? prev : q));
  });

  const [client, setClient] = useState<ClientKey>("vyra");

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center overflow-x-clip px-6 pt-16"
    >
      {/* ---- Painted sky background ---- */}
      {/* Shorter + less overscan than the image's cover crop wants, so more
          of the panorama is visible (reads as zoomed out) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[85vh]">
        <motion.div
          className="absolute top-0 left-1/2 w-full min-w-[110%] -translate-x-1/2 origin-top h-full"
          style={{
            scale: bgScale,
            // Promoted up front: rescaling a masked full-bleed image on every
            // scroll frame otherwise repaints on the main thread and tears.
            willChange: "transform",
            backfaceVisibility: "hidden",
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
        <h1
          className="rise mb-5"
          style={
            {
              "--rise-y": "30px",
              "--rise-blur": "6px",
              "--rise-delay": "0.35s",
            } as React.CSSProperties
          }
        >
          <span className="block text-[clamp(2.25rem,10.5vw,3rem)] leading-[0.95] font-extrabold tracking-[-0.03em] text-[var(--foreground)] md:text-[clamp(3rem,5vw,3.75rem)]">
            Raw footage in.
          </span>
          <span className="block text-[clamp(2.25rem,10.5vw,3rem)] leading-[1.05] tracking-[-0.02em] text-[var(--foreground)] md:text-[clamp(3rem,5vw,3.75rem)]">
            {/* The typed text is decorative; the full line is exposed once,
                unstyled, so crawlers and screen readers get the whole H1 even
                before the typewriter has run. */}
            <span className="serif-italic font-normal" aria-hidden="true">
              {displayed}
            </span>
            <span className="sr-only">{TYPED_HEADLINE}</span>
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
        </h1>

        {/* Subtext - two short lines, FLORA-style */}
        <p
          className="rise mb-7 text-pretty text-[15px] leading-[1.65] text-[var(--foreground-muted)] md:text-[15px]"
          style={
            {
              "--rise-y": "20px",
              "--rise-dur": "0.6s",
              "--rise-delay": "0.55s",
            } as React.CSSProperties
          }
        >
          {/* Three balanced lines on phones; the first two rejoin on desktop
              so it stays the original two-line subhead there. */}
          <span className="block">
            Describe your edit naturally.{" "}
            <span className="block md:inline">
              Get a finished draft in minutes.
            </span>
          </span>
          <span className="block">Every editing tool, one conversation.</span>
        </p>

        {/* CTA */}
        <div
          className="rise flex flex-col items-center gap-4"
          style={
            {
              "--rise-y": "20px",
              "--rise-dur": "0.6s",
              "--rise-delay": "0.7s",
            } as React.CSSProperties
          }
        >
          <a
            href="https://app.usevyra.com/signup"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-7 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[var(--brand-blue)]/20"
          >
            Get started for free
          </a>
        </div>
      </div>

      {/* Hero visual - the Vyra editor, pinned while scroll plays the story */}
      <div
        ref={storyRef}
        className="relative z-10 mx-auto mt-8 h-[115vh] w-full max-w-5xl px-0 sm:px-4 md:mt-12 md:h-[145vh]"
      >
        {/* Clears the 72px navbar so the pinned mockup never tucks under it.
            translateZ keeps the pinned card on its own compositor layer, so
            mobile Safari repaints it cleanly instead of flashing mid-scroll. */}
        <div
          className="sticky top-[84px] md:top-20"
          style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
        >
          <div
            className="rise relative"
            style={
              {
                "--rise-y": "60px",
                "--rise-scale": "0.96",
                "--rise-dur": "1s",
                "--rise-delay": "0.9s",
              } as React.CSSProperties
            }
          >
            {/* Subtle glow */}
            <div className="pointer-events-none absolute inset-0">
              <div
                className="absolute top-1/3 left-1/2 h-[300px] w-[80%] -translate-x-1/2 rounded-full opacity-[0.06] blur-[100px]"
                style={{ background: "var(--brand-blue)" }}
              />
            </div>

            <EditorMockup progress={storyProgress} client={client} />

            {/* Client switcher - swaps the editor preview above */}
            <div
              className="rise mt-4 flex flex-wrap items-center justify-center gap-1.5 px-4 text-[12px] md:mt-5 md:gap-2 md:text-[13px]"
              style={
                {
                  "--rise-y": "12px",
                  "--rise-dur": "0.6s",
                  "--rise-delay": "1.15s",
                } as React.CSSProperties
              }
            >
              <span className="mr-0.5 w-full text-center text-[var(--foreground-subtle)] sm:w-auto sm:text-left md:mr-1">
                Edit with
              </span>
              {CLIENTS.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setClient(c.key)}
                  className={`flex cursor-pointer items-center gap-1.5 rounded-full border px-2.5 py-1 font-medium transition-all duration-200 md:px-3 ${
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
          </div>
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

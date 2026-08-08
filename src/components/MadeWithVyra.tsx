"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useInView,
  animate,
} from "framer-motion";
import Reveal from "./Reveal";
import LazyVideo from "./LazyVideo";

const COUNT_RPC =
  "https://uskviqibopshckqsmyvk.supabase.co/rest/v1/rpc/public_user_count";
const COUNT_KEY = "sb_publishable_aAeaDWrJlNNTiJbdh6nGKA_yUVUT_6P";

/* Live user count: seeds from the server-fetched value, refetches every
   60s so it climbs on its own, and counts up fluidly when scrolled into
   view or when a fresh number arrives. */
function LiveCount({ initial }: { initial: number | null }) {
  const [target, setTarget] = useState<number | null>(initial);
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState<string | null>(null);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "160px" });

  useEffect(() => {
    let alive = true;
    const fetchCount = async () => {
      try {
        const res = await fetch(COUNT_RPC, {
          method: "POST",
          headers: { apikey: COUNT_KEY, "Content-Type": "application/json" },
          body: "{}",
        });
        if (!res.ok) return;
        const n = await res.json();
        if (alive && typeof n === "number") setTarget(n);
      } catch {
        /* keep last known value */
      }
    };
    fetchCount();
    const id = setInterval(fetchCount, 60_000);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (!inView || target == null) return;
    const controls = animate(mv, target, {
      duration: 1.8,
      ease: [0.21, 0.68, 0.35, 1],
    });
    return () => controls.stop();
  }, [inView, target, mv]);

  useMotionValueEvent(mv, "change", (v) =>
    setDisplay(Math.round(v).toLocaleString())
  );

  return (
    <span ref={ref} className="tabular-nums">
      {display ?? (target != null ? target.toLocaleString() : "26,000+")}
    </span>
  );
}

const STORAGE_BASE =
  "https://pub-afda0198369e4e9d96b647ae8d8f963e.r2.dev/landing";

const examples = [
  { src: `${STORAGE_BASE}/caleb1.mp4`, poster: "/images/posters/caleb1.jpg", aspect: "9/16", label: "first time cooking" },
  { src: `${STORAGE_BASE}/sulan1.mp4`, poster: "/images/posters/sulan1.jpg", aspect: "9/16", label: "painting final all-nighter" },
  { src: `${STORAGE_BASE}/aaa.mp4`, poster: "/images/posters/aaa.jpg", aspect: "9/16", label: "color wheel trend" },
  { src: `${STORAGE_BASE}/export1.mp4`, poster: "/images/posters/export1.jpg", aspect: "16/9", label: "snowboard edit" },
  { src: `${STORAGE_BASE}/boston-vlog.mp4`, poster: "/images/posters/boston-vlog.jpg", aspect: "16/9", label: "week in boston" },
];

export default function MadeWithVyra({
  userCount = null,
}: {
  userCount?: number | null;
}) {
  // Start on sulan1 so both visible neighbors are vertical and the stage is symmetric
  const [active, setActive] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const total = examples.length;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-advance every 4s unless paused
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!pausedRef.current) next();
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next]);

  // Compute position relative to active: -2, -1, 0, +1, +2
  function getOffset(index: number) {
    let diff = index - active;
    // Wrap around for circular positioning
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  }

  return (
    <section className="relative py-20 px-6 md:py-28">
      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <Reveal
          y={24}
          blur={8}
          className="mb-12 text-center md:mb-16"
        >
          <h2
            className="mb-5 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Made with Vyra
          </h2>
          <p className="mx-auto max-w-md text-[16px] leading-relaxed text-[var(--foreground-muted)] md:text-[17px]">
            Real content from real creators. From raw footage to published in
            minutes.
          </p>
        </Reveal>

        {/* Focus carousel */}
        <div
          className="relative"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          {/* Card stage - fixed height, overflow hidden to clip far cards */}
          <div className="relative mx-auto flex h-[360px] items-center justify-center overflow-hidden sm:h-[480px]">
            {examples.map((example, i) => {
              const offset = getOffset(i);
              const isActive = offset === 0;
              const absOffset = Math.abs(offset);

              // Only render cards within visible range (drop neighbors on mobile)
              const maxVisible = isMobile ? 1 : 2;
              if (absOffset > maxVisible) return null;

              // Position, scale, blur based on distance from center
              const translateX = offset * (isMobile ? 140 : 240);
              const scale = isActive ? 1 : absOffset === 1 ? 0.82 : 0.65;
              const blur = isActive ? 0 : absOffset === 1 ? 3 : 8;
              const opacity = isActive ? 1 : absOffset === 1 ? 0.55 : 0.25;
              const zIndex = isActive ? 30 : absOffset === 1 ? 20 : 10;

              // Kept clear of the screen edges on phones so the neighbouring
              // cards read as a deliberate peek instead of a clipped card.
              const wideWidth = isMobile ? 288 : 600;
              const portraitWidth = isMobile ? 168 : 260;

              return (
                <motion.div
                  key={example.src}
                  animate={{
                    x: translateX,
                    scale,
                    opacity,
                    filter: `blur(${blur}px)`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 30,
                  }}
                  className="absolute cursor-pointer"
                  style={{
                    zIndex,
                    width: example.aspect === "16/9" ? wideWidth : portraitWidth,
                  }}
                  onClick={() => {
                    if (offset === 1) next();
                    else if (offset === -1) prev();
                  }}
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl bg-black transition-shadow duration-300 ${
                      isActive ? "shadow-xl shadow-black/[0.08]" : "shadow-sm"
                    }`}
                  >
                    <LazyVideo
                      src={example.src}
                      poster={example.poster}
                      className={`w-full object-cover ${example.aspect === "16/9" ? "aspect-[16/9]" : "aspect-[9/16]"}`}
                    />
                    {/* Project label, FLORA-style asset metadata */}
                    <motion.span
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm"
                    >
                      {example.label}
                    </motion.span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {examples.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 bg-[var(--brand-blue)]"
                    : "w-1.5 bg-[var(--foreground-subtle)]/30 hover:bg-[var(--foreground-subtle)]/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* User count banner, stacked on the gallery */}
          <Reveal
            y={16}
            duration={0.5}
            className="mx-auto mt-10 max-w-xl rounded-2xl border border-[var(--surface-border)] bg-white px-6 py-4 text-center shadow-sm"
          >
            <p className="text-[15px] text-[var(--foreground-muted)]">
              <span className="font-bold text-[var(--foreground)]">
                <LiveCount initial={userCount} /> creators
              </span>{" "}
              and counting.{" "}
              <a
                href="https://app.usevyra.com/signup"
                className="whitespace-nowrap font-medium text-[var(--brand-blue)] underline underline-offset-2 hover:opacity-80"
              >
                Join them
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

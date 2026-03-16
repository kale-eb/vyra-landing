"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const STORAGE_BASE =
  "https://uskviqibopshckqsmyvk.supabase.co/storage/v1/object/public/demo-assets/landing";

const examples = [
  { src: `${STORAGE_BASE}/caleb1.mp4`, aspect: "9/16" },
  { src: `${STORAGE_BASE}/sulan1.mp4`, aspect: "9/16" },
  { src: `${STORAGE_BASE}/export1.mp4`, aspect: "16/9" },
  { src: `${STORAGE_BASE}/boston-vlog.mp4`, aspect: "16/9" },
];

export default function MadeWithVyra() {
  const [active, setActive] = useState(0);
  const total = examples.length;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);

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
    <section className="relative py-28 px-6">
      <div className="relative mx-auto max-w-6xl">
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
            Gallery
          </motion.p>
          <h2
            className="mb-5 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Made with Vyra
          </h2>
          <p className="mx-auto max-w-md text-[15px] leading-relaxed text-[var(--foreground-muted)]">
            Real content from real creators. From raw footage to published in
            minutes.
          </p>
        </motion.div>

        {/* Focus carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8 }}
          className="relative"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          {/* Card stage — fixed height, overflow hidden to clip far cards */}
          <div className="relative mx-auto flex h-[480px] items-center justify-center overflow-hidden">
            {examples.map((example, i) => {
              const offset = getOffset(i);
              const isActive = offset === 0;
              const absOffset = Math.abs(offset);

              // Only render cards within visible range
              if (absOffset > 2) return null;

              // Position, scale, blur based on distance from center
              const translateX = offset * 240;
              const scale = isActive ? 1 : absOffset === 1 ? 0.82 : 0.65;
              const blur = isActive ? 0 : absOffset === 1 ? 3 : 8;
              const opacity = isActive ? 1 : absOffset === 1 ? 0.55 : 0.25;
              const zIndex = isActive ? 30 : absOffset === 1 ? 20 : 10;

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
                    width: example.aspect === "16/9" ? 600 : 260,
                  }}
                  onClick={() => {
                    if (offset === 1) next();
                    else if (offset === -1) prev();
                  }}
                >
                  <div
                    className={`overflow-hidden rounded-2xl border bg-black shadow-sm transition-shadow duration-300 ${
                      isActive
                        ? "border-[var(--surface-border-hover)] shadow-xl shadow-black/[0.08]"
                        : "border-[var(--surface-border)]"
                    }`}
                  >
                    <video
                      src={example.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={`w-full object-cover ${example.aspect === "16/9" ? "aspect-[16/9]" : "aspect-[9/16]"}`}
                    />
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
        </motion.div>
      </div>
    </section>
  );
}

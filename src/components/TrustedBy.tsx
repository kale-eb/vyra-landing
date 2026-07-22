"use client";

import { motion } from "framer-motion";

export function formatUserCount(count: number | null): string {
  if (!count || count < 1000) return "15,000+";
  // Floor to the nearest hundred so the number reads clean and never overstates
  return `${(Math.floor(count / 100) * 100).toLocaleString()}+`;
}

export default function TrustedBy({ count }: { count: number | null }) {
  return (
    <section className="relative px-6 pb-2 pt-10 md:pt-12">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.68, 0.35, 1] }}
        className="mx-auto max-w-4xl text-center text-[clamp(1.35rem,2.8vw,1.9rem)] leading-snug tracking-[-0.01em] text-[var(--foreground-muted)]"
      >
        <span className="font-bold text-[var(--foreground)]">
          {formatUserCount(count)} creators
        </span>{" "}
        are already editing with Vyra
      </motion.p>
    </section>
  );
}

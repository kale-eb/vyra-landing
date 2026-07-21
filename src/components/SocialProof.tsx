"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
  return (
    <section className="relative px-6 pb-4 pt-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.68, 0.35, 1] }}
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <p className="text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.15] tracking-[-0.03em] text-[var(--foreground)]">
          <span className="font-extrabold">15,000 creators</span>{" "}
          <span className="text-[var(--foreground-muted)] font-normal">
            are already editing with Vyra
          </span>
        </p>
      </motion.div>
    </section>
  );
}

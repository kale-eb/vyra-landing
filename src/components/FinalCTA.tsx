"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-36 px-6">
      {/* Subtle light background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute bottom-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 translate-y-1/4 rounded-full opacity-[0.04] blur-[140px]"
          style={{ background: "var(--brand-blue)" }}
        />
        <div
          className="absolute top-0 left-1/2 h-[250px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.03] blur-[100px]"
          style={{ background: "rgba(120, 100, 255, 0.8)" }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <span
            className="block text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] font-extrabold tracking-[-0.03em] text-[var(--foreground)]"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Your first video
          </span>
          <span
            className="block text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] font-extrabold tracking-[-0.03em] text-[var(--foreground)]"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            takes five minutes.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-12 text-[17px] leading-relaxed text-[var(--foreground-muted)]"
        >
          Upload your footage and see the difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://app.usevyra.com"
            className="btn-shimmer inline-flex items-center rounded-full bg-[var(--brand-blue)] px-8 py-4 text-[16px] font-semibold text-white shadow-md shadow-[var(--brand-blue)]/15 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--brand-blue)]/25"
          >
            Get started free
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 16"
              fill="none"
              className="ml-2.5"
            >
              <path
                d="M3.5 8h9m0 0L9 4.5M12.5 8 9 11.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

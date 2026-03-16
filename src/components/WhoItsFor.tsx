"use client";

import { motion } from "framer-motion";

const painPoints = [
  {
    headline: "You're a creator, not an editor",
    description:
      "You have great content but editing is the bottleneck. You'd rather spend time on what you're actually good at.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
      </svg>
    ),
  },
  {
    headline: "You're paying $40 per video",
    description:
      "And waiting days for revisions. Get it done yourself in five minutes with full control over every cut.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    headline: "You gave up on Premiere",
    description:
      "Complex editors aren't built for people who just need a finished video. Vyra is built exactly for that.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="m15 9-6 6M9 9l6 6" />
      </svg>
    ),
  },
  {
    headline: "You're not making videos at all",
    description:
      "The barrier felt too high, so your content stays unmade. It doesn't have to be that way.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m16 6 4 14" />
        <path d="M12 6v14" />
        <path d="M8 8v12" />
        <path d="M4 4v16" />
      </svg>
    ),
  },
];

export default function WhoItsFor() {
  return (
    <section className="relative py-36 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section heading — left-aligned for editorial feel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]"
          >
            Who it&apos;s for
          </motion.p>
          <h2
            className="mb-5 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Sound{" "}
            <span className="serif-italic font-normal">familiar?</span>
          </h2>
          <p className="max-w-lg text-[16px] leading-relaxed text-[var(--foreground-muted)]">
            Vyra is built for people who need video but don&apos;t want to
            become video editors.
          </p>
        </motion.div>

        {/* Pain point cards — 2x2 grid */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] p-7 transition-all duration-400 hover:border-[var(--surface-border-hover)] sm:p-8"
            >
              {/* Hover glow — subtle top-left radial */}
              <div className="pointer-events-none absolute -top-20 -left-20 h-40 w-40 rounded-full bg-[var(--brand-blue)] opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-[0.06]" />

              {/* Icon */}
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--surface-border)] bg-[var(--surface-elevated)] text-[var(--brand-blue)]">
                {point.icon}
              </div>

              <h3
                className="mb-3 text-[18px] font-bold text-[var(--foreground)]"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {point.headline}
              </h3>

              <p className="text-[14px] leading-[1.7] text-[var(--foreground-muted)]">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

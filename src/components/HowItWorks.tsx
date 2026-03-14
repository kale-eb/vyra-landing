"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Upload your footage",
    description:
      "Drag in your raw clips. Any format, any length. Vyra analyzes speech, scenes, and objects automatically.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Tell it what you want",
    description:
      "Pick a template or describe your edit in plain English. The AI builds a structured edit with cuts, pacing, and captions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Export in minutes",
    description:
      "Review the edit, make changes in chat or on the timeline, then export. The whole process takes under five minutes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 px-6">
      <div className="relative mx-auto max-w-5xl">
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
            How it works
          </motion.p>
          <h2
            className="mb-5 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Three steps. Five minutes.
          </h2>
        </motion.div>

        {/* Compact horizontal strip — 3 columns */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-center text-center"
            >
              {/* Number + Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--surface-border)] bg-white text-[var(--brand-blue)] shadow-sm">
                {step.icon}
              </div>

              {/* Step number */}
              <span
                className="mb-2 text-[12px] font-bold uppercase tracking-[0.15em] text-[var(--brand-blue)]"
              >
                Step {step.number}
              </span>

              {/* Title */}
              <h3
                className="mb-2 text-lg font-bold text-[var(--foreground)]"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="max-w-xs text-[14px] leading-[1.65] text-[var(--foreground-muted)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

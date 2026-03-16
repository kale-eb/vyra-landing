"use client";

import { motion } from "framer-motion";

const columns = [
  {
    title: "Traditional Editors",
    items: [
      "Hours learning Premiere",
      "Complex timeline management",
      "Steep learning curve",
      "Months to get proficient",
    ],
    highlighted: false,
    rotate: -2,
  },
  {
    title: "With Vyra",
    items: [
      "Upload to export in 5 minutes",
      "AI handles the technical work",
      "Full control when you need it",
      "No editing skills required",
    ],
    highlighted: true,
    rotate: 0,
  },
  {
    title: "Hiring an Editor",
    items: [
      "$30-40 per video",
      "Days waiting for revisions",
      "No control over the process",
      "Expensive to iterate",
    ],
    highlighted: false,
    rotate: 2,
  },
];

function CheckCircle() {
  return (
    <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[var(--foreground)]">
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
        <path
          d="M13 5L6.5 12L3 8.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function DashCircle() {
  return (
    <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[var(--surface)]">
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
        <path
          d="M4.5 8h7"
          stroke="var(--foreground-subtle)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export default function Alternatives() {
  return (
    <section className="relative py-28 px-6 bg-[var(--surface)]">
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
            Compare
          </motion.p>
          <h2
            className="mb-5 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Alternatives are{" "}
            <motion.span
              initial={{ rotate: 10, y: -4 }}
              whileInView={{ rotate: 3.5, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50, damping: 8, delay: 0.4 }}
              className="inline-block origin-top-left font-normal"
              style={{ fontFamily: "var(--font-abril-fatface), 'Abril Fatface', serif" }}
            >
              expensive
            </motion.span>{" "}
            and slow
          </h2>
          <p className="mx-auto max-w-lg text-[15px] leading-relaxed text-[var(--foreground-muted)]">
            Whether you learn a pro tool or hire someone, the current options
            cost too much time and money.
          </p>
        </motion.div>

        {/* Outer container card */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="rounded-[28px] border border-[var(--surface-border)] bg-white px-6 py-10 shadow-xl shadow-black/[0.03] sm:px-10 sm:py-12"
        >
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-stretch md:justify-center md:gap-5 lg:gap-6">
            {columns.map((col, colIndex) => (
              <motion.div
                key={col.title}
                initial={{
                  opacity: 0,
                  y: 40,
                  rotate: col.rotate * 2,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: col.rotate,
                }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: colIndex * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                }}
                className={`w-full max-w-sm flex-1 rounded-2xl border bg-white shadow-md shadow-black/[0.03] ${
                  col.highlighted
                    ? "relative z-10 border-[var(--surface-border-hover)] shadow-lg shadow-black/[0.06]"
                    : "border-[var(--surface-border)]"
                }`}
              >
                {/* Column header */}
                <div className="flex items-center justify-between border-b border-[var(--surface-border)] px-6 py-4">
                  <h3
                    className={`text-[16px] font-bold ${
                      col.highlighted
                        ? "text-[var(--foreground)]"
                        : "text-[var(--foreground-muted)]"
                    }`}
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                  >
                    {col.title}
                  </h3>
                  {col.highlighted && <CheckCircle />}
                </div>

                {/* Item rows */}
                <div className="flex flex-col gap-1 p-3">
                  {col.items.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-3 rounded-xl px-4 py-3"
                    >
                      {col.highlighted ? <CheckCircle /> : <DashCircle />}
                      <span
                        className={`text-[14px] ${
                          col.highlighted
                            ? "font-medium text-[var(--foreground)]"
                            : "text-[var(--foreground-muted)]"
                        }`}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

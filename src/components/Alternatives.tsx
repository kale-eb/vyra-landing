"use client";

import { motion } from "framer-motion";

const columns = [
  {
    title: "Traditional Editors",
    items: [
      "Weeks to learn, hours per edit",
      "Manual cutting, syncing, captioning",
      "You scrub through every clip yourself",
      "Complex timelines, endless menus",
    ],
    highlighted: false,
  },
  {
    title: "With Vyra",
    items: [
      "Edit by chatting, with built-in AI or your own",
      "AI sees and understands your footage",
      "Full editor when you need control",
      "One conversation, start to finish",
    ],
    highlighted: true,
  },
  {
    title: "Other AI Video Tools",
    items: [
      "Generic templates, no real footage",
      "Limited to short clips",
      "No fine-grained control",
      "Can't iterate on edits",
    ],
    highlighted: false,
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
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2
            className="mb-5 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Alternatives are expensive and slow
          </h2>
          <p className="mx-auto max-w-lg text-[16px] leading-relaxed text-[var(--foreground-muted)] md:text-[17px]">
            Learning a pro tool or hiring an editor costs too much time and
            money.
          </p>
        </motion.div>

        {/* Outer container card */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-[var(--surface-border)] bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-12"
        >
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-stretch md:justify-center md:gap-5 lg:gap-6">
            {columns.map((col, colIndex) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: colIndex * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                }}
                className={`w-full max-w-sm flex-1 rounded-2xl border bg-white shadow-sm ${
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

"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "Your clips, not stock",
    body: "Vyra works on the footage you shot. Nothing is invented or replaced.",
  },
  {
    title: "It watches before it cuts",
    body: "Every clip is analyzed for scenes, speech, and subjects, so the edit follows what is actually there.",
  },
  {
    title: "A timeline underneath",
    body: "Every AI decision lands on a real timeline you can open, adjust, and override.",
  },
];

export default function RealFootage() {
  return (
    <section className="relative border-y border-[var(--surface-border)] bg-[var(--surface)] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center text-[clamp(1.35rem,2.6vw,1.85rem)] leading-[1.35] tracking-[-0.02em] text-[var(--foreground)]"
        >
          Most AI video tools generate footage that never happened. Vyra edits{" "}
          <span className="serif-italic">the footage you actually shot.</span>
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
          }}
          className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8"
        >
          {points.map(({ title, body }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.21, 0.68, 0.35, 1] as const },
                },
              }}
              className="text-center sm:text-left"
            >
              <div className="mx-auto mb-4 h-px w-8 bg-[var(--brand-blue)] sm:mx-0" />
              <h3 className="mb-2 text-[15px] font-semibold tracking-[-0.01em] text-[var(--foreground)]">
                {title}
              </h3>
              <p className="text-[14px] leading-[1.65] text-[var(--foreground-muted)]">
                {body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

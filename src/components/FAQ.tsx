"use client";

import { motion } from "framer-motion";
import { FAQS as faqs } from "@/lib/faqs";

export default function FAQ() {
  return (
    <section className="relative py-28 px-6">
      <div className="relative mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column — heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
              FAQ
            </p>
            <h2
              className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Frequently asked questions
            </h2>
          </motion.div>

          {/* Right column — Q&A cards */}
          <div className="flex flex-col gap-4 lg:col-span-8">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-[var(--surface-border)] bg-white p-6 sm:p-7"
              >
                <h3
                  className="mb-2.5 text-[16px] font-bold text-[var(--foreground)]"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {faq.question}
                </h3>
                <p className="text-[14px] leading-[1.7] text-[var(--foreground-muted)]">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 px-6 md:py-36">
      {/* Background gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--brand-blue)]/[0.03] to-transparent" />
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07] blur-[120px]"
          style={{ background: "var(--brand-blue)" }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal y={24} duration={0.7} className="mb-6">
          <span
            className="block text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] font-extrabold tracking-[-0.03em] text-[var(--foreground)]"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Your next video is
          </span>
          <span className="serif-italic block text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-[1.05] tracking-[-0.02em] text-[var(--foreground)]">
            a conversation away.
          </span>
        </Reveal>

        <Reveal
          y={20}
          duration={0.6}
          delay={0.15}
          className="mb-12 text-[17px] leading-relaxed text-[var(--foreground-muted)]"
        >
          Go from footage to finished in minutes.
        </Reveal>

        <Reveal y={20} duration={0.6} delay={0.3}>
          <a
            href="https://app.usevyra.com/signup"
            className="inline-flex items-center rounded-full bg-[var(--brand-blue)] px-8 py-4 text-[16px] font-semibold text-white shadow-md shadow-[var(--brand-blue)]/15 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--brand-blue)]/25"
          >
            Get started for free
          </a>
        </Reveal>
      </div>
    </section>
  );
}

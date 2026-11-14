import Reveal from "./Reveal";

import { HOME_FAQS as faqs } from "./faq-data";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details name="home-faq" className="group rounded-2xl border border-[var(--surface-border)] bg-white transition-colors duration-200 hover:border-[var(--surface-border-hover)]">
      <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 sm:px-7 [&::-webkit-details-marker]:hidden">
        <h3
          className="text-[16px] font-bold text-[var(--foreground)]"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          {question}
        </h3>
        <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center text-[var(--foreground-subtle)] transition-transform duration-200 group-open:rotate-45">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </summary>
      <p className="px-6 pb-6 text-[14px] leading-[1.7] text-[var(--foreground-muted)] sm:px-7">
        {answer}
      </p>
    </details>
  );
}

export default function FAQ() {
  return (
    <section className="relative py-20 px-6 md:py-28">
      <div className="relative mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column - heading */}
          <Reveal
            y={24}
            blur={8}
            className="lg:col-span-4"
          >
            <h2
              className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Frequently asked questions
            </h2>
          </Reveal>

          {/* Right column - accordion */}
          <div className="flex flex-col gap-4 lg:col-span-8">
            {faqs.map((faq, i) => (
              <Reveal key={i} y={20} duration={0.5} delay={i * 0.06}>
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

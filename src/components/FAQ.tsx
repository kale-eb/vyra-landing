"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const faqs = [
  {
    question: "What is Vyra?",
    answer:
      "Vyra is a video editor you control by chatting with AI. Describe your edit in your own words and the AI handles cuts, captions, effects, and more, all using your real footage. Use Vyra's built-in AI chat, or connect your own assistant like Claude or ChatGPT via MCP.",
  },
  {
    question: "Do I need an AI subscription to use Vyra?",
    answer:
      "No. Vyra AI plans include a built-in AI editor right in the app, so no external AI subscription is needed. If you already pay for Claude, ChatGPT, or another MCP client, the MCP plans let you bring your own AI at a lower price.",
  },
  {
    question: "What is MCP?",
    answer:
      "MCP (Model Context Protocol) lets AI assistants connect to external tools. Vyra uses MCP so Claude, ChatGPT, or any compatible client can control the editor directly.",
  },
  {
    question: "Which AI clients work with Vyra?",
    answer:
      "Any MCP-compatible client works. We’ve tested with Claude (Anthropic), ChatGPT, and several open-source clients. If your client supports MCP, it works with Vyra.",
  },
  {
    question: "Do I need editing experience?",
    answer:
      "Not at all. Most users go from upload to export in under 5 minutes. The AI handles the technical work, and you can always open the full timeline editor for fine-grained control.",
  },
  {
    question: "How is this different from other AI video tools?",
    answer:
      "Most AI video tools generate synthetic content. Vyra edits your real footage. It understands what’s in your clips and makes intelligent editing decisions, not templates.",
  },
  {
    question: "Can I try Vyra before paying?",
    answer:
      "Yes. Getting started is free, so you can see if Vyra fits your workflow before committing. Cancel anytime.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl border border-[var(--surface-border)] bg-white transition-colors duration-200 hover:border-[var(--surface-border-hover)]">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
      >
        <h3
          className="text-[16px] font-bold text-[var(--foreground)]"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          {question}
        </h3>
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center text-[var(--foreground-subtle)] transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1v12M1 7h12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.21, 0.68, 0.35, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-[14px] leading-[1.7] text-[var(--foreground-muted)] sm:px-7">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { track } from "@vercel/analytics";
import posthog from "posthog-js";
import Markdown from "./Markdown";

export default function MobileFaq({ items, sourcePage }: { items: { q: string; a: string }[]; sourcePage: string }) {
  const opened = useRef(new Set<string>());

  return (
    <section aria-labelledby="mobile-faq-heading" className="mt-12">
      <h2 id="mobile-faq-heading" className="mb-4 text-2xl font-semibold tracking-tight">FAQ</h2>
      <div className="divide-y divide-[var(--surface-border)] rounded-xl border border-[var(--surface-border)] px-5">
        {items.map((item) => (
          <details
            key={item.q}
            className="py-4"
            onToggle={(event) => {
              if (!event.currentTarget.open || opened.current.has(item.q)) return;
              opened.current.add(item.q);
              const properties = { source_page: sourcePage, question: item.q };
              track("FAQ opened", properties);
              if (process.env.NEXT_PUBLIC_POSTHOG_KEY) posthog.capture("faq_opened", properties);
            }}
          >
            <summary className="cursor-pointer text-[15px] font-semibold leading-relaxed text-[var(--foreground)] focus-visible:outline-2 focus-visible:outline-offset-4">
              {item.q}
            </summary>
            <Markdown source={item.a} />
          </details>
        ))}
      </div>
    </section>
  );
}

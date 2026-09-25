"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { trackLead } from "./MetaPixel";
import { PLANS } from "@/content/pricing";

export default function Pricing() {
  const groups = [
    { key: "mcp", label: "Bring your own AI", note: "For people who already pay for Claude, ChatGPT, or Cursor." },
    { key: "vyra-ai", label: "Vyra AI", note: "Everything in one app. No other subscription needed." },
  ] as const;

  return (
    <section id="pricing" className="relative scroll-mt-20 px-6 py-20 md:py-28">
      <div className="relative mx-auto max-w-6xl">
        <Reveal y={24} blur={8} className="mb-12 text-center">
          <h2
            className="mb-5 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Simple <span className="serif-italic font-normal">pricing</span>
          </h2>
          <p className="mx-auto max-w-lg text-[16px] leading-relaxed text-[var(--foreground-muted)] md:text-[17px]">
            Free to start. Bring the AI you already pay for, or use ours.
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {groups.map((g) => (
            <Reveal key={g.key} y={24} blur={8}>
              <div className="rounded-2xl border border-[var(--surface-border)] bg-white p-6 sm:p-8">
                <h3 className="text-[15px] font-semibold text-[var(--foreground)]">{g.label}</h3>
                <p className="mt-1 mb-6 text-[13px] text-[var(--foreground-muted)]">{g.note}</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {PLANS.filter((p) => p.group === g.key).map((p) => (
                    <div
                      key={p.name}
                      className={`flex flex-col rounded-xl border p-5 ${
                        p.highlight ? "border-[var(--brand-blue)] shadow-[0_0_0_3px_rgba(75,119,240,0.08)]" : "border-[var(--surface-border)]"
                      }`}
                    >
                      <p className="text-[14px] font-semibold text-[var(--foreground)]">{p.name}</p>
                      <p className="mt-2 text-3xl font-bold tracking-tight text-[var(--foreground)]">
                        ${p.price}
                        <span className="text-[13px] font-medium text-[var(--foreground-subtle)]">/mo</span>
                      </p>
                      <ul className="mt-4 space-y-1.5 text-[13px] text-[var(--foreground-muted)]">
                        <li>{p.credits}</li>
                        <li>{p.storage}</li>
                        <li>{p.quality}</li>
                      </ul>
                      <a
                        href="https://app.usevyra.com/signup"
                        onClick={() => trackLead()}
                        className={`mt-5 rounded-full px-4 py-2 text-center text-[13px] font-semibold transition-colors ${
                          p.highlight
                            ? "bg-[var(--foreground)] text-white"
                            : "border border-[var(--surface-border)] text-[var(--foreground)] hover:border-[var(--foreground-subtle)]"
                        }`}
                      >
                        Start free
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-[13px] text-[var(--foreground-subtle)]">
          All plans include 1,000 exports a month.{" "}
          <Link href="/pricing" className="underline underline-offset-2 hover:text-[var(--foreground)]">
            Plan details and FAQ
          </Link>
        </p>
      </div>
    </section>
  );
}

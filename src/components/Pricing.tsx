"use client";

import { motion } from "framer-motion";

interface PricingTier {
  name: string;
  display_name: string;
  monthly_price: number;
  yearly_price: number | null;
  monthly_credits: number;
  monthly_exports: number;
  storage_gb: number;
  max_export_seconds: number;
}

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  highlighted: boolean;
  cta: string;
}

const DESCRIPTIONS: Record<string, string> = {
  free: "Try Vyra with no commitment.",
  plus: "For creators who publish regularly.",
  pro: "For power users and teams.",
};

function formatExportDuration(seconds: number): string {
  const minutes = Math.round(seconds / 60);
  return `${minutes} min`;
}

function buildPlans(tiers: PricingTier[] | null): Plan[] {
  if (!tiers || tiers.length === 0) return FALLBACK_PLANS;

  const tierMap = Object.fromEntries(tiers.map((t) => [t.name, t]));
  const names = ["free", "plus", "pro"];

  return names.map((name) => {
    const tier = tierMap[name];
    if (!tier) {
      const fallback = FALLBACK_PLANS.find((p) => p.name.toLowerCase() === name);
      return fallback || FALLBACK_PLANS[0];
    }

    const isPro = name === "pro";
    const displayPrice = tier.yearly_price
      ? Math.round(tier.yearly_price / 12)
      : tier.monthly_price;

    return {
      name: tier.display_name,
      price: `$${displayPrice}`,
      period: "/mo",
      description: DESCRIPTIONS[name] || "",
      features: [
        { text: `${tier.monthly_credits.toLocaleString()} AI credits`, included: true },
        { text: `${tier.monthly_exports.toLocaleString()} exports per month`, included: true },
        { text: `${tier.storage_gb} GB storage`, included: true },
        { text: `Max ${formatExportDuration(tier.max_export_seconds)} exports`, included: true },
        { text: "Priority processing", included: name !== "free" },
        { text: "Advanced effects", included: isPro },
      ],
      highlighted: name === "plus",
      cta: name === "free" ? "Get started free" : "Get started",
    };
  });
}

const FALLBACK_PLANS: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Try Vyra with no commitment.",
    features: [
      { text: "200 AI credits", included: true },
      { text: "30 exports per month", included: true },
      { text: "10 GB storage", included: true },
      { text: "Max 5 min exports", included: true },
      { text: "Priority processing", included: false },
      { text: "Advanced effects", included: false },
    ],
    highlighted: false,
    cta: "Get started free",
  },
  {
    name: "Plus",
    price: "$55",
    period: "/mo",
    description: "For creators who publish regularly.",
    features: [
      { text: "3,000 AI credits", included: true },
      { text: "1,000 exports per month", included: true },
      { text: "100 GB storage", included: true },
      { text: "Max 15 min exports", included: true },
      { text: "Priority processing", included: true },
      { text: "Advanced effects", included: false },
    ],
    highlighted: true,
    cta: "Get started",
  },
  {
    name: "Pro",
    price: "$105",
    period: "/mo",
    description: "For power users and teams.",
    features: [
      { text: "7,500 AI credits", included: true },
      { text: "1,000 exports per month", included: true },
      { text: "500 GB storage", included: true },
      { text: "Max 30 min exports", included: true },
      { text: "Priority processing", included: true },
      { text: "Advanced effects", included: true },
    ],
    highlighted: false,
    cta: "Get started",
  },
];

export default function Pricing({ tiers }: { tiers?: PricingTier[] | null }) {
  const plans = buildPlans(tiers ?? null);

  return (
    <section id="pricing" className="relative py-28 px-6 bg-[var(--surface)]">
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
            Pricing
          </motion.p>
          <h2
            className="mb-5 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Simple, honest pricing
          </h2>
          <p className="mx-auto max-w-md text-[15px] leading-relaxed text-[var(--foreground-muted)]">
            Start free. Upgrade when you need more. No surprises.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl p-7 transition-all duration-400 sm:p-8 ${
                plan.highlighted
                  ? "border-2 border-[var(--brand-blue)]/30 bg-white shadow-[0_0_40px_rgba(90,138,239,0.08),0_4px_20px_rgba(0,0,0,0.04)]"
                  : "border border-[var(--surface-border)] bg-white hover:border-[var(--surface-border-hover)] hover:shadow-md hover:shadow-black/[0.03]"
              }`}
            >
              {/* Highlighted tier top accent line */}
              {plan.highlighted && (
                <div
                  className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, var(--brand-blue), transparent)",
                  }}
                />
              )}

              {/* Recommended badge */}
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-[var(--brand-blue)] px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md shadow-[var(--brand-blue)]/20">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <div className="mb-6">
                <h3
                  className="mb-1.5 text-lg font-bold text-[var(--foreground)]"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {plan.name}
                </h3>
                <p className="text-[13px] text-[var(--foreground-muted)]">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-7 flex items-baseline gap-1">
                <span
                  className="text-[44px] font-extrabold leading-none tracking-tight text-[var(--foreground)]"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {plan.price}
                </span>
                <span className="text-[14px] text-[var(--foreground-subtle)]">
                  {plan.period}
                </span>
              </div>

              {/* Divider */}
              <div className="mb-6 h-px bg-[var(--surface-border)]" />

              {/* Features list */}
              <ul className="mb-8 flex flex-1 flex-col gap-3.5">
                {plan.features.map((feature, j) => (
                  <li
                    key={j}
                    className={`flex items-start gap-3 text-[13px] ${
                      feature.included
                        ? "text-[var(--foreground-muted)]"
                        : "text-[var(--foreground-subtle)] opacity-50"
                    }`}
                  >
                    {feature.included ? (
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="mt-[1px] shrink-0 text-[var(--brand-blue)]"
                      >
                        <path
                          d="M13.25 4.75 6 12 2.75 8.75"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="mt-[1px] shrink-0 text-[var(--foreground-subtle)]"
                      >
                        <path
                          d="M4 8h8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <a
                href="https://app.usevyra.com/signup"
                className={`flex items-center justify-center rounded-xl px-4 py-3 text-[14px] font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? "btn-shimmer bg-[var(--brand-blue)] text-white shadow-md shadow-[var(--brand-blue)]/15 hover:shadow-lg hover:shadow-[var(--brand-blue)]/25"
                    : "border border-[var(--surface-border)] text-[var(--foreground)] hover:border-[var(--surface-border-hover)] hover:bg-[var(--surface)]"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Sub-note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center text-[13px] text-[var(--foreground-subtle)]"
        >
          All plans include unlimited projects. No credit card required to start.
        </motion.p>
      </div>
    </section>
  );
}

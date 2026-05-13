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
  max_export_resolution?: number;
  max_projects?: number;
  processing_credits?: number;
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
  trialNote?: string;
}

const DESCRIPTIONS: Record<string, string> = {
  free: "Get started with basic editing.",
  mcp_starter: "For creators who publish regularly.",
  mcp_pro: "For professionals and teams.",
};

function formatResolution(height: number): string {
  if (height >= 2160) return "4K";
  if (height >= 1440) return "1440p";
  if (height >= 1080) return "1080p";
  if (height >= 720) return "720p";
  return `${height}p`;
}

function buildPlans(tiers: PricingTier[] | null): Plan[] {
  if (!tiers || tiers.length === 0) return FALLBACK_PLANS;

  const tierMap = Object.fromEntries(tiers.map((t) => [t.name, t]));
  const names = ["free", "mcp_starter", "mcp_pro"];

  // If the API doesn't have our MCP tiers yet, use fallbacks
  if (!tierMap["mcp_starter"] && !tierMap["mcp_pro"]) return FALLBACK_PLANS;
  // If processing_credits aren't populated, use fallbacks
  const starter = tierMap["mcp_starter"];
  if (starter && !starter.processing_credits && !starter.monthly_credits) return FALLBACK_PLANS;

  return names.map((name) => {
    const tier = tierMap[name];
    if (!tier) {
      const fallback = FALLBACK_PLANS.find((p) => p.name.toLowerCase().replace(/\s+/g, "_") === name);
      return fallback || FALLBACK_PLANS[0];
    }

    const isPaid = name !== "free";
    const displayPrice = tier.yearly_price
      ? Math.round(tier.yearly_price / 12)
      : tier.monthly_price;

    const resolution = tier.max_export_resolution
      ? formatResolution(tier.max_export_resolution)
      : name === "mcp_pro" ? "4K" : name === "mcp_starter" ? "1440p" : "720p";

    const exportsText = tier.monthly_exports >= 9999
      ? "Unlimited exports"
      : `${tier.monthly_exports.toLocaleString()} exports/month`;

    const projectsText = (tier.max_projects && tier.max_projects < 9999)
      ? `${tier.max_projects} projects`
      : "Unlimited projects";

    return {
      name: tier.display_name,
      price: `$${displayPrice}`,
      period: "/mo",
      description: DESCRIPTIONS[name] || "",
      features: [
        { text: `${(tier.processing_credits || tier.monthly_credits || 0).toLocaleString()} processing credits`, included: (tier.processing_credits || tier.monthly_credits || 0) > 0 },
        { text: `${tier.storage_gb} GB storage`, included: true },
        { text: `${resolution} export resolution`, included: true },
        { text: exportsText, included: true },
        { text: projectsText, included: true },
        { text: "MCP access", included: true },
      ],
      highlighted: name === "mcp_starter",
      cta: name === "free" ? "Get started free" : "Start free trial",
      trialNote: isPaid ? "7-day free trial" : undefined,
    };
  });
}

const FALLBACK_PLANS: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Get started with basic editing.",
    features: [
      { text: "600 processing credits", included: true },
      { text: "2 GB storage", included: true },
      { text: "720p export resolution", included: true },
      { text: "20 exports/month", included: true },
      { text: "5 projects", included: true },
      { text: "MCP access", included: true },
    ],
    highlighted: false,
    cta: "Get started free",
  },
  {
    name: "MCP Starter",
    price: "$9",
    period: "/mo",
    description: "For creators who publish regularly.",
    features: [
      { text: "6,000 processing credits", included: true },
      { text: "50 GB storage", included: true },
      { text: "1440p export resolution", included: true },
      { text: "Unlimited exports", included: true },
      { text: "Unlimited projects", included: true },
      { text: "MCP access", included: true },
    ],
    highlighted: true,
    cta: "Start free trial",
    trialNote: "7-day free trial",
  },
  {
    name: "MCP Pro",
    price: "$24",
    period: "/mo",
    description: "For professionals and teams.",
    features: [
      { text: "18,000 processing credits", included: true },
      { text: "200 GB storage", included: true },
      { text: "4K export resolution", included: true },
      { text: "Unlimited exports", included: true },
      { text: "Unlimited projects", included: true },
      { text: "MCP access", included: true },
    ],
    highlighted: false,
    cta: "Start free trial",
    trialNote: "7-day free trial",
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

              {/* Trial note */}
              {plan.trialNote && (
                <p className="mb-4 -mt-4 text-[12px] font-medium text-[var(--brand-blue)]">
                  {plan.trialNote}
                </p>
              )}

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
          All plans include MCP access. 7-day free trial on paid plans. No credit card required to start.
        </motion.p>
      </div>
    </section>
  );
}

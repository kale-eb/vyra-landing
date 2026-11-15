// Code links: usevyra.com/i/<CODE> and a creator's usevyra.com/go/<slug>.
// The lookup answers only what the page prints (velocity migration
// 20261115120000_code_link_lookup); redeeming stays in the apps.
const SUPABASE_URL =
  process.env.VYRA_SUPABASE_URL || "https://uskviqibopshckqsmyvk.supabase.co";
const PUBLISHABLE_KEY =
  process.env.VYRA_SUPABASE_PUBLISHABLE_KEY ||
  "sb_publishable_aAeaDWrJlNNTiJbdh6nGKA_yUVUT_6P";

export const APP_ID = "6808889012";
// The developer account's App Store Connect provider token; it is public in every campaign link.
const PROVIDER_TOKEN = "128694142";
export const WEB_SIGNUP_URL = "https://app.usevyra.com/signup";

export type CodeLink = {
  kind: "creator" | "promo" | "credits" | "friend";
  code: string;
  name?: string | null;
  campaign?: string;
  monthlyPercent?: number;
  yearlyPercent?: number;
  planTier?: string;
  planDays?: number;
  credits?: number;
};

const CODE = /^[A-Z0-9]{4,20}$/;
const KINDS = ["creator", "promo", "credits", "friend"];

export function normalizeCode(input: string): string | null {
  const code = input.trim().toUpperCase();
  return CODE.test(code) ? code : null;
}

async function rpc(name: string, body: Record<string, string>): Promise<unknown> {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${name}`, {
      method: "POST",
      headers: { apikey: PUBLISHABLE_KEY, "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
      signal: AbortSignal.timeout(3000),
    });
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}

/** What a code gives, or null when nobody could use it (or the lookup failed). */
export async function resolveCodeLink(input: string): Promise<CodeLink | null> {
  const code = normalizeCode(input);
  if (!code) return null;
  const row = (await rpc("resolve_code_link", { p_code: code })) as CodeLink | null;
  if (!row || typeof row !== "object" || !KINDS.includes(row.kind) || row.code !== code) return null;
  return row;
}

/** Counts the click and answers the App Store campaign token for a /go/ slug. */
export async function campaignToken(slug: string): Promise<string | null> {
  if (!/^[a-z0-9][a-z0-9-]{1,38}[a-z0-9]$/.test(slug)) return null;
  const token = await rpc("resolve_creator_link", { p_slug: slug });
  return typeof token === "string" && token ? token : null;
}

/** A creator's code, when the creator has one that still works. */
export async function creatorCode(slug: string): Promise<string | null> {
  const code = await rpc("creator_link_code", { p_slug: slug });
  return typeof code === "string" ? normalizeCode(code) : null;
}

export function appStoreUrl(campaign?: string | null): string {
  return campaign
    ? `https://apps.apple.com/app/apple-store/id${APP_ID}?${new URLSearchParams({ pt: PROVIDER_TOKEN, ct: campaign, mt: "8" })}`
    : `https://apps.apple.com/app/id${APP_ID}`;
}

const PLAN_NAMES: Record<string, string> = { plus: "Plus", pro: "Pro" };

/** The page's words. Amounts come from the lookup, never from here. */
export function codeOffer(link: CodeLink): { headline: string; detail: string; web: boolean } {
  const firstPayment =
    link.monthlyPercent && link.yearlyPercent
      ? `${link.monthlyPercent}% off your first month or ${link.yearlyPercent}% off your first year`
      : null;
  switch (link.kind) {
    case "creator":
      return {
        headline: `${link.name || "A creator"} gave you ${link.monthlyPercent ? `${link.monthlyPercent}% off` : "a discount on"} Vyra`,
        detail: firstPayment ? `Your code takes ${firstPayment}.` : "Your code takes money off your first payment.",
        web: true,
      };
    case "promo": {
      const plan = link.planTier ? PLAN_NAMES[link.planTier] : null;
      if (plan && link.planDays) {
        return {
          headline: `${link.planDays} ${link.planDays === 1 ? "day" : "days"} of Vyra ${plan}, free`,
          detail: firstPayment ? `Then ${firstPayment} if you stay.` : "No payment needed to start.",
          // The free days are an iPhone plan; the web would only see the discount.
          web: false,
        };
      }
      return {
        headline: link.monthlyPercent ? `${link.monthlyPercent}% off Vyra` : "A discount on Vyra",
        detail: firstPayment ? `Your code takes ${firstPayment}.` : "Your code takes money off your first payment.",
        web: true,
      };
    }
    case "credits":
      return {
        headline: link.credits ? `${link.credits.toLocaleString("en-US")} free Vyra credits` : "Free Vyra credits",
        detail: "Credits pay for the AI's editing work. They are added once you enter the code in the app.",
        web: false,
      };
    case "friend":
      return {
        headline: `${link.name || "A friend"} gave you free Vyra credits`,
        detail: "Enter the code in the app to add free credits to your account.",
        web: false,
      };
  }
}

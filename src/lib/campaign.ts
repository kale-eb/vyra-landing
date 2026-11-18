// The utm_* tags a visitor arrived with, passed on by the buttons that leave
// the site. The web app keeps them as they are and stamps them on checkout.
// Google Play gets them as the install referrer, which the Android app records
// per account. Apple passes on nothing but a campaign token, which App Store
// Connect counts as installs per token, with no accounts.
import { appStoreUrl } from "./code-links";

const KEY = "vyra:utm";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const WEB_APP_HOST = "app.usevyra.com";
// Apple's campaign token holds at most 40 characters.
const CAMPAIGN_TOKEN_LENGTH = 40;

export type Utm = Partial<Record<(typeof UTM_KEYS)[number], string>>;

export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.usevyra.android";

/** What a click from the site says when the visitor came without tags. */
const SITE: Utm = { utm_source: "usevyra.com", utm_medium: "website" };

function pick(source: { get(key: string): string | null | undefined }): Utm | null {
  const utm: Utm = {};
  for (const key of UTM_KEYS) {
    const value = source.get(key);
    if (typeof value === "string" && value.trim()) utm[key] = value.trim().slice(0, 100);
  }
  return Object.keys(utm).length ? utm : null;
}

/** Keeps the tags of the page the visitor landed on for the rest of the visit. */
export function rememberUtm(search: string) {
  const utm = pick(new URLSearchParams(search));
  if (!utm) return;
  try {
    sessionStorage.setItem(KEY, JSON.stringify(utm));
  } catch {
    // Storage can be blocked; the tags on the current URL still count.
  }
}

/** The current page's tags, else the ones the visit started with. */
export function currentUtm(): Utm | null {
  if (typeof window === "undefined") return null;
  const here = pick(new URLSearchParams(window.location.search));
  if (here) return here;
  try {
    const stored: unknown = JSON.parse(sessionStorage.getItem(KEY) ?? "null");
    if (!stored || typeof stored !== "object") return null;
    const values = stored as Record<string, unknown>;
    return pick({ get: (key) => (typeof values[key] === "string" ? (values[key] as string) : null) });
  } catch {
    return null;
  }
}

/** A link to the web app with the visit's tags added, unless it already has its own. */
export function withUtm(href: string, utm: Utm | null = currentUtm()): string {
  if (!utm) return href;
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return href;
  }
  if (url.hostname !== WEB_APP_HOST || UTM_KEYS.some((key) => url.searchParams.has(key))) return href;
  for (const [key, value] of Object.entries(utm)) url.searchParams.set(key, value);
  return url.toString();
}

/** Google Play's listing with the visit's tags as the install referrer. */
export function playStoreLink(utm: Utm | null = currentUtm()): string {
  const referrer = new URLSearchParams(utm ?? SITE).toString();
  return `${PLAY_STORE_URL}&${new URLSearchParams({ referrer })}`;
}

/** The App Store listing under a campaign token named for the visit's source and campaign. */
export function appStoreLink(utm: Utm | null = currentUtm()): string {
  const tagged = utm ? [utm.utm_source, utm.utm_campaign].filter(Boolean).join("-") : "";
  return appStoreUrl((tagged || "website").slice(0, CAMPAIGN_TOKEN_LENGTH));
}

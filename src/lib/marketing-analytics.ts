import type { PostHog } from "posthog-js";

type Client = Pick<PostHog, "init" | "capture">;
type Options = {
  key?: string;
  host?: string;
  load?: () => Promise<Client>;
};

/** Share one deferred SDK load between idle initialization and early clicks. */
export function createMarketingAnalytics({ key, host, load = () => import("posthog-js").then((module) => module.default) }: Options) {
  let ready: Promise<Client> | undefined;

  async function init(): Promise<Client | undefined> {
    if (!key || typeof window === "undefined") return;
    if (!ready) {
      ready = load().then((client) => {
        client.init(key, {
          api_host: host || "https://us.i.posthog.com",
          autocapture: true,
          capture_heatmaps: true,
          capture_dead_clicks: true,
          capture_pageview: true,
          capture_pageleave: true,
          disable_session_recording: false,
        });
        return client;
      }).catch((error) => {
        ready = undefined;
        throw error;
      });
    }
    return ready;
  }

  async function capture(event: string, properties: Record<string, string>) {
    try {
      const client = await init();
      client?.capture(event, properties);
    } catch {
      // Blocked analytics must never interrupt navigation or FAQ interaction.
    }
  }

  return { init, capture };
}

export const marketingAnalytics = createMarketingAnalytics({
  key: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
});

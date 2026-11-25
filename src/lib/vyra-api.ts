import { SITE_URL } from "@/lib/content";

/* The Vyra API's facts that the docs page, its Markdown copy, the OpenAPI spec and llms.txt all use.
   scripts/check-openapi.mjs compares them, and the spec's routes and fields, with the API's code. */

/** Where the API answers. The examples call it $VYRA_API. */
export const API_BASE = "https://vyra-public-api-dd677jigfq-uc.a.run.app";

/** The fee by the band max_seconds falls in, in cents. The same list the API charges with (pricing.js). */
export const BANDS = [
  { maxSeconds: 60, low: 50, high: 100 },
  { maxSeconds: 120, low: 65, high: 125 },
  { maxSeconds: 300, low: 90, high: 175 },
  { maxSeconds: 600, low: 125, high: 250 },
  { maxSeconds: 900, low: 165, high: 325 },
  { maxSeconds: 1800, low: 225, high: 450 },
] as const;

/** Each extra cut's share of the band fee, by variation_scope. */
export const SHARE = { portion: 0.1, full: 0.75 } as const;

export const API_DOCS_URL = `${SITE_URL}/docs/api`;
export const API_MARKDOWN_URL = `${SITE_URL}/docs/api.md`;
export const OPENAPI_URL = `${SITE_URL}/openapi.json`;

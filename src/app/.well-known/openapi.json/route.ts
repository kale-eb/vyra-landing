import spec from "@/content/openapi.json";

export const dynamic = "force-static";

/* The same spec as /openapi.json, at the well-known path some API crawlers check first.
   Served rather than redirected, since some of them do not follow redirects; the Link header names the canonical copy. */
export function GET() {
  return new Response(JSON.stringify(spec, null, 2) + "\n", {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      Link: '<https://www.usevyra.com/openapi.json>; rel="canonical"',
    },
  });
}

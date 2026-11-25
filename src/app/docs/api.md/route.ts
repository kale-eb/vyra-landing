import fs from "node:fs";
import path from "node:path";

export const dynamic = "force-static";

/* The Vyra API guide as plain Markdown, for agents that read the docs before calling the API.
   It says what /docs/api says; the Link header names that page as the canonical copy for search engines. */
export function GET() {
  const body = fs.readFileSync(path.join(process.cwd(), "src/content/api-reference.md"), "utf8");
  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      Link: '<https://www.usevyra.com/docs/api>; rel="canonical", <https://www.usevyra.com/openapi.json>; rel="service-desc"',
    },
  });
}

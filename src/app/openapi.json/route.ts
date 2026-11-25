import spec from "@/content/openapi.json";

export const dynamic = "force-static";

/* The Vyra API's OpenAPI 3.1 description, for agents, SDK generators and API directories.
   The guide for people is /docs/api, and the same guide as Markdown is /docs/api.md.
   Readable from any origin so browser tools (Swagger Editor, Postman's web import) can load it. */
export function GET() {
  return new Response(JSON.stringify(spec, null, 2) + "\n", {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      Link: '<https://www.usevyra.com/docs/api>; rel="service-doc"',
    },
  });
}

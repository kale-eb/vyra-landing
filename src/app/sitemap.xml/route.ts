import { renderIndex } from "@/lib/sitemaps";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderIndex(), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

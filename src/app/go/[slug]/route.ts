// Creator links: usevyra.com/go/<slug> counts the click. A creator with a code
// lands on that code's page (/i/<CODE>), where the visitor picks the iPhone app
// or the web and the App Store button carries the creator's campaign token.
// Every other slug, and any lookup failure, still lands on the App Store.
import { appStoreUrl, campaignToken, creatorCode } from "@/lib/code-links";

export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const slug = (await params).slug.toLowerCase();
  const token = await campaignToken(slug);
  const code = token?.startsWith("ugc_") ? await creatorCode(slug) : null;
  const target = code ? new URL(`/i/${code}`, request.url).toString() : appStoreUrl(token);
  return new Response(null, {
    status: 302,
    headers: { Location: target, "Cache-Control": "no-store" },
  });
}

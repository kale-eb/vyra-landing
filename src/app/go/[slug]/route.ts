// Creator links: usevyra.com/go/<slug> counts the click and sends the visitor
// to the App Store with the creator's campaign token, so App Store Connect
// attributes the install. Unknown slugs and lookup failures still land on the
// App Store, just without attribution.
const RESOLVE_RPC =
  "https://uskviqibopshckqsmyvk.supabase.co/rest/v1/rpc/resolve_creator_link";
const PUBLISHABLE_KEY = "sb_publishable_aAeaDWrJlNNTiJbdh6nGKA_yUVUT_6P";
const APP_ID = "6808889012";
// The developer account's App Store Connect provider token; it is public in every campaign link.
const PROVIDER_TOKEN = "128694142";

export const dynamic = "force-dynamic";

async function campaignToken(slug: string): Promise<string | null> {
  if (!/^[a-z0-9][a-z0-9-]{1,38}[a-z0-9]$/.test(slug)) return null;
  try {
    const res = await fetch(RESOLVE_RPC, {
      method: "POST",
      headers: { apikey: PUBLISHABLE_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ p_slug: slug }),
      cache: "no-store",
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) return null;
    const token = await res.json();
    return typeof token === "string" && token ? token : null;
  } catch {
    return null;
  }
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const token = await campaignToken(slug.toLowerCase());
  const target = token
    ? `https://apps.apple.com/app/apple-store/id${APP_ID}?${new URLSearchParams({ pt: PROVIDER_TOKEN, ct: token, mt: "8" })}`
    : `https://apps.apple.com/app/id${APP_ID}`;
  return new Response(null, {
    status: 302,
    headers: { Location: target, "Cache-Control": "no-store" },
  });
}

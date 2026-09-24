import { childSitemaps, renderUrlset } from "@/lib/sitemaps";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.entries(childSitemaps())
    .filter(([, urls]) => urls.length > 0)
    .map(([name]) => ({ name: `${name}.xml` }));
}

export async function GET(_req: Request, ctx: { params: Promise<{ name: string }> }) {
  const { name } = await ctx.params;
  const key = name.replace(/\.xml$/, "");
  const urls = childSitemaps()[key];
  if (!urls || urls.length === 0) return new Response("Not found", { status: 404 });
  return new Response(renderUrlset(urls), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

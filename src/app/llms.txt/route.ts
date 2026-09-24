import { SECTIONS, SECTION_KEYS, SITE_URL, getEntries } from "@/lib/content";

export const dynamic = "force-static";

/* llms.txt: a plain-text map of the site for AI agents and crawlers.
   One line per page: "- [title](url): description". */
export function GET() {
  const lines: string[] = [];
  lines.push("# Vyra");
  lines.push("");
  lines.push(
    "> Vyra is an AI video editor that edits your real footage from a plain-language description. It transcribes every word and analyzes every scene on upload, then cuts, captions, syncs to music, builds motion graphics, and matches a reference video's style. Use the built-in AI chat, or drive it from Claude, ChatGPT, or Cursor over MCP. Free to start; MCP plans from $24/mo, built-in AI plans from $54/mo."
  );
  lines.push("");
  lines.push("## Core");
  lines.push(`- [Home](${SITE_URL}/): AI video editor that edits your real footage by chat`);
  lines.push(`- [Pricing](${SITE_URL}/pricing): MCP Starter $24/mo, MCP Pro $65/mo, Vyra AI Starter $54/mo, Vyra AI Pro $129/mo`);
  lines.push(`- [About](${SITE_URL}/about): Founded by Sulan and Caleb, two creators from Brown; based in San Francisco; Y Combinator`);
  lines.push(`- [Docs](${SITE_URL}/docs): Getting started, first project, MCP server setup`);
  lines.push(`- [Reviews](${SITE_URL}/reviews): What creators and independent roundups say about Vyra`);
  for (const e of getEntries("product")) lines.push(`- [${e.title}](${SITE_URL}${e.url}): ${e.description}`);
  lines.push("");
  for (const key of SECTION_KEYS) {
    const entries = getEntries(key);
    if (!entries.length) continue;
    const meta = SECTIONS[key];
    lines.push(`## ${meta.label}`);
    lines.push(`- [${meta.title}](${SITE_URL}/${key}): ${meta.description}`);
    for (const e of entries) lines.push(`- [${e.title}](${SITE_URL}${e.url}): ${e.description}`);
    lines.push("");
  }
  lines.push("## Optional");
  lines.push(`- [Sitemap index](${SITE_URL}/sitemap.xml)`);
  lines.push(`- [Author: Sulan Zhang](${SITE_URL}/author/sulan)`);
  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

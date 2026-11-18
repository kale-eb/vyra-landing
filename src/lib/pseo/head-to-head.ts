import type { Entry } from "@/lib/content";
import { bullets, clip, endSentence, lcFirst, tableHeader, tableRows } from "./markdown";
import { latest, makeEntry, type Family, type WrittenReader } from "./entry";

/* /compare/{a}-vs-{b}: two other editors side by side, with Vyra as the third column.
   Dataset: the "At a glance" table and "Choose X if" list on each /compare/vyra-vs-{x} page.
   Those were checked against each tool's own site, so this family never states a fact about a
   competitor that isn't already on a written page. Fix a fact there and every pair updates. */

export const HEAD_TO_HEAD = "head-to-head";

type Tool = {
  key: string;
  slug: string;
  name: string;
  short: string;
  group: string;
  rows: Map<string, string>;
  vyra: Map<string, string>;
  bestFor: string;
  choose: string[];
  updated: string;
  compareUrl: string;
};

/* Who gets paired. Pages only exist for pairs people plausibly search: same kind of editor,
   both widely used, plus a few cross-group matchups. */
const GROUPS: Record<string, string[]> = {
  social: ["capcut", "veed", "canva", "clipchamp", "inshot", "filmora", "kapwing", "captions-app"],
  ai: ["descript", "opus-clip", "invideo", "submagic", "riverside", "runway", "vizard"],
  pro: ["adobe-premiere", "davinci-resolve", "final-cut-pro"],
};

const CROSS_PAIRS: [string, string][] = [
  ["capcut", "adobe-premiere"],
  ["capcut", "davinci-resolve"],
  ["capcut", "descript"],
  ["descript", "adobe-premiere"],
  ["veed", "descript"],
  ["kapwing", "descript"],
  ["capcut", "opus-clip"],
];

/** URL names people type, where the compare filename differs. */
const SLUG_ALIAS: Record<string, string> = { "adobe-premiere": "premiere-pro" };

/** Row label → what having it means, for the "where they differ" list. */
const FEATURE: Record<string, string> = {
  "Edits your real footage": "edits your own footage",
  "Edit by chat / natural language": "lets you edit by typing what you want",
  "Bring your own AI (MCP: Claude, ChatGPT, Cursor)": "connects to Claude, ChatGPT, or Cursor over MCP",
  "Understands footage (transcript + scene analysis)": "transcribes and describes your footage",
  Captions: "has auto captions",
  "Beat sync": "has beat sync",
  "Motion graphics": "makes motion graphics",
  "Reference style matching": "matches a reference video's style",
  "Manual timeline": "has a manual timeline",
};

type Level = "yes" | "no" | "partial";

function level(cell: string): Level {
  if (/^yes\b/i.test(cell)) return "yes";
  if (/^no\b/i.test(cell)) return "no";
  return "partial";
}

/** "Yes, built-in auto-captions" → "built-in auto-captions"; "Partial, X" → "X". */
function detail(cell: string): string {
  return cell.replace(/^(yes|no|partial)\b[,.]?\s*/i, "").trim();
}

function toTool(e: Entry): Tool | null {
  const key = e.slug.replace(/^vyra-vs-/, "");
  const header = tableHeader(e.body, "At a glance");
  const rows = tableRows(e.body, "At a glance");
  if (header.length < 3 || rows.length < 6) return null;
  const toolCol = header.findIndex((h, i) => i > 0 && h !== "Vyra");
  const vyraCol = header.indexOf("Vyra");
  if (toolCol < 1 || vyraCol < 1) return null;
  const tool = new Map<string, string>();
  const vyra = new Map<string, string>();
  for (const r of rows) {
    if (!r[0]) continue;
    tool.set(r[0], r[toolCol] ?? "");
    vyra.set(r[0], r[vyraCol] ?? "");
  }
  const short = header[toolCol].replace(/\s*\(.*\)$/, "");
  const choose = bullets(e.body, `Choose (?!Vyra)[^\\n]* if`);
  const bestFor = tool.get("Best for");
  const group = Object.entries(GROUPS).find(([, keys]) => keys.includes(key))?.[0];
  if (!bestFor || !choose.length || !group) return null;
  return {
    key,
    slug: SLUG_ALIAS[key] ?? key,
    name: e.title.match(/^Vyra vs (.+?) \(/)?.[1] ?? short,
    short,
    group,
    rows: tool,
    vyra,
    bestFor,
    choose,
    updated: e.updated,
    compareUrl: e.url,
  };
}

function pairs(tools: Map<string, Tool>): [Tool, Tool][] {
  const out: [Tool, Tool][] = [];
  const seen = new Set<string>();
  const add = (a?: Tool, b?: Tool) => {
    if (!a || !b || a.key === b.key) return;
    const id = [a.key, b.key].sort().join("|");
    if (seen.has(id)) return;
    seen.add(id);
    out.push([a, b]);
  };
  for (const keys of Object.values(GROUPS)) {
    for (let i = 0; i < keys.length; i++) for (let j = i + 1; j < keys.length; j++) add(tools.get(keys[i]), tools.get(keys[j]));
  }
  for (const [a, b] of CROSS_PAIRS) add(tools.get(a), tools.get(b));
  return out;
}

function has(t: Tool, cell: string, feature: string): string {
  const d = detail(cell).replace(/\s*\(([^)]*)\)/g, ", $1");
  const tail = d ? ` (${lcFirst(d)})` : "";
  const l = level(cell);
  if (l === "yes") return `${t.name} ${feature}${tail}.`;
  if (l === "no") return `${t.name} doesn't${tail}.`;
  return `${t.name} partly does (${lcFirst(d || cell)}).`;
}

function youTo(choice: string): string {
  return lcFirst(choice.replace(/[.]+$/, ""));
}

function body(a: Tool, b: Tool, siblings: { url: string; title: string }[], alternatives: Map<string, string>): string {
  const labels = [...a.rows.keys()].filter((k) => b.rows.has(k));
  const table = [
    `| | ${a.name} | ${b.name} | Vyra |`,
    "| --- | --- | --- | --- |",
    ...labels.map((k) => `| ${k} | ${a.rows.get(k)} | ${b.rows.get(k)} | ${a.vyra.get(k) || b.vyra.get(k) || ""} |`),
  ].join("\n");

  const differ = labels
    .filter((k) => FEATURE[k] && level(a.rows.get(k)!) !== level(b.rows.get(k)!))
    .map((k) => `- **${k}.** ${has(a, a.rows.get(k)!, FEATURE[k])} ${has(b, b.rows.get(k)!, FEATURE[k])}`);

  const chatRow = "Edit by chat / natural language";
  const neitherChats = level(a.rows.get(chatRow) ?? "") === "no" && level(b.rows.get(chatRow) ?? "") === "no";
  const mcpRow = "Bring your own AI (MCP: Claude, ChatGPT, Cursor)";

  const faq: [string, string][] = [
    [`Which is better, ${a.name} or ${b.name}?`, `${a.name} if ${youTo(a.choose[0])}. ${b.name} if ${youTo(b.choose[0])}.`],
  ];
  if (a.rows.has(mcpRow) && b.rows.has(mcpRow)) {
    faq.push([
      `Do ${a.name} and ${b.name} work with Claude or ChatGPT?`,
      `${has(a, a.rows.get(mcpRow)!, "does")} ${has(b, b.rows.get(mcpRow)!, "does")} Vyra connects to Claude, ChatGPT, and Cursor over MCP.`,
    ]);
  }
  faq.push([
    `Can I use ${a.name} and ${b.name} together?`,
    `Yes. You can rough cut in one, export at full resolution, and finish in the other.`,
  ]);

  const related = [
    `- [Vyra vs ${a.name}](${a.compareUrl})`,
    `- [Vyra vs ${b.name}](${b.compareUrl})`,
    ...[a, b]
      .map((t) => [...alternatives.keys()].find((u) => u.startsWith(`/alternatives/${t.slug}-`)))
      .filter((u): u is string => !!u)
      .map((u) => `- [${alternatives.get(u)}](${u})`),
    ...siblings.map((s) => `- [${s.title}](${s.url})`),
  ];

  return [
    `**${lead(a, b)}**`,
    `We pulled every fact here from our own comparisons of each tool with Vyra, which we check against each company's site. Vyra is in the last column so you can see where it fits.`,
    "## At a glance",
    table,
    ...(differ.length ? ["## Where they differ", differ.join("\n")] : []),
    `## Choose ${a.name} if`,
    a.choose.map((c) => `- ${c}`).join("\n"),
    `## Choose ${b.name} if`,
    b.choose.map((c) => `- ${c}`).join("\n"),
    "## Where Vyra fits",
    neitherChats
      ? `Neither ${a.name} nor ${b.name} lets you edit by typing what you want. Vyra does. It transcribes your footage and describes every scene on upload, then makes the cut you describe. You can still open the timeline and adjust it by hand.`
      : `Vyra is the option if you want to describe the edit and get it back made from your own footage. It transcribes and describes every scene on upload, and you can drive it from its own chat or from Claude, ChatGPT, or Cursor.`,
    "## FAQ",
    faq.map(([q, ans]) => `**${q}**\n${ans}`).join("\n\n"),
    "## Related",
    related.join("\n"),
  ].join("\n\n");
}

function lead(a: Tool, b: Tool) {
  return `${a.name} is best for ${lcFirst(a.bestFor.replace(/[.]+$/, ""))}. ${b.name} is best for ${lcFirst(b.bestFor.replace(/[.]+$/, ""))}.`;
}

export const headToHead: Family = {
  key: HEAD_TO_HEAD,
  section: "compare",
  sitemap: "head-to-head",
  build(read: WrittenReader): Entry[] {
    const tools = new Map(
      read("compare")
        .map(toTool)
        .filter((t): t is Tool => !!t)
        .map((t) => [t.key, t]),
    );
    const alternatives = new Map(read("alternatives").map((e) => [e.url, e.title]));
    const written = new Set(read("compare").map((e) => e.slug));
    const all = pairs(tools).filter(([a, b]) => !written.has(`${a.slug}-vs-${b.slug}`));
    const slugOf = ([a, b]: [Tool, Tool]) => `${a.slug}-vs-${b.slug}`;
    const titleOf = ([a, b]: [Tool, Tool]) => `${a.name} vs ${b.name} (2026)`;

    return all.map((pair) => {
      const [a, b] = pair;
      const siblings = all
        .filter((p) => p !== pair && (p.includes(a) || p.includes(b)))
        .slice(0, 4)
        .map((p) => ({ url: `/compare/${slugOf(p)}`, title: titleOf(p) }));
      return makeEntry({
        family: HEAD_TO_HEAD,
        section: "compare",
        slug: slugOf(pair),
        title: `${titleOf(pair)}: which one fits how you edit`,
        description: clip(lead(a, b)),
        updated: latest([a.updated, b.updated]),
        body: body(a, b, siblings, alternatives),
        facts: [
          `${a.short}: ${endSentence(a.bestFor)}`,
          `${b.short}: ${endSentence(b.bestFor)}`,
          ...(a.rows.has("Platform") && b.rows.has("Platform")
            ? [`Platforms: ${a.short} ${lcFirst(a.rows.get("Platform")!)}, ${b.short} ${lcFirst(b.rows.get("Platform")!)}`]
            : []),
        ],
        data: { hubGroup: "Other editors, head to head", tools: [a.key, b.key] },
      });
    });
  },
};

/** Head-to-head URLs that involve a tool, for links from its /compare/vyra-vs-{x} page. */
export function pairsFor(entries: Entry[], toolKey: string): Entry[] {
  return entries.filter((e) => e.generated === HEAD_TO_HEAD && (e.data.tools as string[]).includes(toolKey));
}

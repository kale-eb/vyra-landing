import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export const SITE_URL = "https://www.usevyra.com";

export type SectionKey =
  | "compare"
  | "alternatives"
  | "for"
  | "formats"
  | "how-to"
  | "prompts"
  | "answers"
  | "features"
  | "tutorials"
  | "glossary"
  | "tools"
  | "templates";

export type SectionMeta = {
  key: SectionKey;
  label: string;
  title: string;
  description: string;
  schema: "Article" | "HowTo" | "DefinedTerm" | "WebPage";
};

export const SECTIONS: Record<SectionKey, SectionMeta> = {
  compare: {
    key: "compare",
    label: "Compare",
    title: "Vyra vs other video editors",
    description:
      "Vyra next to CapCut, Descript, VEED, Opus Clip, Adobe, DaVinci Resolve and others. Same footage, same brief.",
    schema: "Article",
  },
  alternatives: {
    key: "alternatives",
    label: "Alternatives",
    title: "Alternatives to popular video editors",
    description:
      "What to use instead of the editor you have now, if you want to describe edits instead of making them.",
    schema: "Article",
  },
  for: {
    key: "for",
    label: "For",
    title: "Vyra for creators, teams, and workflows",
    description:
      "How different kinds of creators use Vyra, with the prompts they run most.",
    schema: "WebPage",
  },
  features: {
    key: "features",
    label: "Features",
    title: "Vyra features",
    description:
      "What Vyra can do with your footage, one feature per page.",
    schema: "WebPage",
  },
  formats: {
    key: "formats",
    label: "Formats",
    title: "Video formats: how to shoot, edit, and prompt each one",
    description:
      "One page per video format. How to shoot it, how to cut it, and the prompt to make it in Vyra.",
    schema: "HowTo",
  },
  "how-to": {
    key: "how-to",
    label: "How-to",
    title: "How-to guides for short-form video",
    description:
      "Hooks, pacing, captions, framing, audio, music. Short guides with real numbers.",
    schema: "HowTo",
  },
  prompts: {
    key: "prompts",
    label: "Prompts",
    title: "Prompt library for AI video editing",
    description:
      "Prompts you can paste into Vyra, from a first rough cut to captions and music.",
    schema: "Article",
  },
  answers: {
    key: "answers",
    label: "Answers",
    title: "Straight answers about AI video editing",
    description:
      "Short answers to the questions people ask about AI editing.",
    schema: "Article",
  },
  tutorials: {
    key: "tutorials",
    label: "Tutorials",
    title: "Vyra tutorials",
    description:
      "Step by step in Vyra, from upload to export.",
    schema: "HowTo",
  },
  tools: {
    key: "tools",
    label: "Tools",
    title: "Video editing tools, one task each",
    description:
      "One job per page. Captions, beat sync, motion graphics, silence removal, reframing, clips.",
    schema: "WebPage",
  },
  templates: {
    key: "templates",
    label: "Templates",
    title: "Vyra templates and styles",
    description:
      "Templates give the agent a structure. Styles set the fonts and colors.",
    schema: "WebPage",
  },
  glossary: {
    key: "glossary",
    label: "Glossary",
    title: "Video editing glossary",
    description:
      "Editing terms in one sentence each, with how they show up in Vyra.",
    schema: "DefinedTerm",
  },
};

export const SECTION_KEYS = Object.keys(SECTIONS) as SectionKey[];

export type Entry = {
  section: SectionKey | "product";
  slug: string;
  url: string;
  title: string;
  description: string;
  updated: string;
  category?: string;
  video?: string;
  example?: string;
  facts: string[];
  data: Record<string, unknown>;
  body: string;
};

const CONTENT_DIR = path.join(process.cwd(), "src/content");

/** Build a lans-style facts list from typed frontmatter when no explicit `facts` is given. */
function deriveFacts(d: Record<string, unknown>): string[] {
  const out: string[] = [];
  const add = (label: string, v: unknown) => {
    if (v === undefined || v === null || v === "") return;
    const s = Array.isArray(v) ? v.map(String).join(", ") : String(v);
    if (/todo/i.test(s)) return;
    out.push(`${label}: ${s}`);
  };
  add("Platforms", d.platforms);
  add("Length", d.typical_length);
  add("Aspect", d.aspect);
  add("Difficulty", d.difficulty);
  add("Gear", d.gear);
  add("Level", d.level);
  if (d.reading_time) add("Read time", `${d.reading_time} min`);
  return out;
}

function readDir(section: SectionKey | "product"): Entry[] {
  const dir = path.join(CONTENT_DIR, section);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      const { data, content } = matter(raw);
      const url = section === "product" ? `/${slug}` : `/${section}/${slug}`;
      const updated = data.updated
        ? new Date(String(data.updated)).toISOString().slice(0, 10)
        : "2026-09-24";
      const video = typeof data.video === "string" && !/todo/i.test(data.video) ? data.video : undefined;
      return {
        section,
        slug,
        url,
        title: String(data.title ?? slug),
        description: String(data.description ?? ""),
        updated,
        category: data.category ? String(data.category) : undefined,
        video,
        example: typeof data.example === "string" ? data.example : undefined,
        facts: Array.isArray(data.facts) ? data.facts.map(String) : deriveFacts(data),
        data,
        body: content.trim(),
      } satisfies Entry;
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

const cache = new Map<string, Entry[]>();

export function getEntries(section: SectionKey | "product"): Entry[] {
  if (!cache.has(section)) cache.set(section, readDir(section));
  return cache.get(section)!;
}

export function getEntry(section: SectionKey | "product", slug: string): Entry | undefined {
  return getEntries(section).find((e) => e.slug === slug);
}

export function getAllEntries(): Entry[] {
  return [...SECTION_KEYS, "product" as const].flatMap((s) => getEntries(s));
}

export type Faq = { q: string; a: string };

/** Pull Q/A pairs out of a "## FAQ" section. Questions are bold lines or ### headings. */
export function extractFaq(body: string): Faq[] {
  const m = body.match(/^## FAQ[^\n]*\n([\s\S]*?)(?=^## |\Z)/m);
  if (!m) return [];
  const block = m[1];
  const lines = block.split("\n");
  const faqs: Faq[] = [];
  let q: string | null = null;
  let a: string[] = [];
  const flush = () => {
    if (q && a.join(" ").trim()) faqs.push({ q, a: a.join(" ").replace(/\s+/g, " ").trim() });
    q = null;
    a = [];
  };
  for (const line of lines) {
    const bold = line.match(/^\*\*(.+?)\*\*\s*(.*)$/);
    const h3 = line.match(/^###\s+(.+)$/);
    if (bold) {
      flush();
      q = bold[1].trim();
      if (bold[2]) a.push(bold[2]);
    } else if (h3) {
      flush();
      q = h3[1].trim();
    } else if (line.trim() === "") {
      // paragraph break inside an answer is fine
    } else if (q) {
      a.push(line.trim());
    }
  }
  flush();
  return faqs;
}

/** First ordered list in the body, for HowTo schema steps. */
export function extractSteps(body: string): string[] {
  const lines = body.split("\n");
  const steps: string[] = [];
  let inList = false;
  for (const line of lines) {
    const m = line.match(/^\s*\d+\.\s+(.+)$/);
    if (m) {
      inList = true;
      steps.push(m[1].replace(/\*\*/g, "").trim());
    } else if (inList && line.trim() === "") {
      continue;
    } else if (inList && !line.match(/^\s+/)) {
      break;
    }
  }
  return steps;
}

/** Internal links in the body, deduped, excluding self. */
export function extractRelated(body: string, selfUrl: string): string[] {
  const out = new Set<string>();
  const re = /\]\((\/[a-z0-9\-\/]+)\)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(body))) {
    if (m[1] !== selfUrl) out.add(m[1]);
  }
  // bare paths in "Related" bullet lists, e.g. "- /formats/vlog"
  const bare = /^\s*[-*]\s+(\/[a-z0-9\-\/]+)\s*$/gm;
  while ((m = bare.exec(body))) {
    if (m[1] !== selfUrl) out.add(m[1]);
  }
  return [...out];
}

/** Resolve an internal URL to an entry (or a static page) for link cards. */
export function resolveUrl(url: string): { url: string; title: string; description?: string } | null {
  const parts = url.split("/").filter(Boolean);
  if (parts.length === 1) {
    const p = getEntry("product", parts[0]);
    if (p) return { url: p.url, title: p.title, description: p.description };
    const statics: Record<string, string> = {
      pricing: "Pricing",
      docs: "Docs",
      blog: "Blog",
    };
    if (statics[parts[0]]) return { url, title: statics[parts[0]] };
    if (SECTIONS[parts[0] as SectionKey]) return { url, title: SECTIONS[parts[0] as SectionKey].title };
    return null;
  }
  if (parts.length === 2) {
    const [section, slug] = parts;
    if (section === "docs") return { url, title: `Docs: ${slug.replace(/-/g, " ")}` };
    if (section === "blog") return { url, title: `Blog: ${slug.replace(/-/g, " ")}` };
    const e = SECTIONS[section as SectionKey] ? getEntry(section as SectionKey, slug) : undefined;
    if (e) return { url: e.url, title: e.title, description: e.description };
  }
  return null;
}

/* Small readers for the hand-written markdown pages. The programmatic families treat those
   pages as their dataset, so a fact is written once and every generated page that uses it
   picks up the edit on the next build. */

/** Body text between `## {heading}` and the next `## `. Heading match is a regex source, anchored at the start. */
export function section(body: string, heading: string): string {
  const re = new RegExp(`^## ${heading}[^\\n]*\\n([\\s\\S]*?)(?=^## |(?![\\s\\S]))`, "m");
  return body.match(re)?.[1].trim() ?? "";
}

/** Top-level `- ` bullets in a section, without the marker. */
export function bullets(body: string, heading: string): string[] {
  return section(body, heading)
    .split("\n")
    .filter((l) => /^- /.test(l))
    .map((l) => l.slice(2).trim());
}

/** Rows of the first markdown table in a section, as arrays of trimmed cells (header and divider dropped). */
export function tableRows(body: string, heading: string): string[][] {
  const lines = section(body, heading)
    .split("\n")
    .filter((l) => l.trim().startsWith("|"));
  return lines
    .map((l) =>
      l
        .trim()
        .replace(/^\||\|$/g, "")
        .split("|")
        .map((c) => c.trim()),
    )
    .filter((cells, i) => i > 0 && !cells.every((c) => /^:?-+:?$/.test(c)));
}

/** Header cells of the first table in a section. */
export function tableHeader(body: string, heading: string): string[] {
  const first = section(body, heading)
    .split("\n")
    .find((l) => l.trim().startsWith("|"));
  return first ? first.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim()) : [];
}

/** A two-column "At a glance" table as a label → value map. */
export function glance(body: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [label, value] of tableRows(body, "At a glance")) {
    if (label && value) out[label] = value;
  }
  return out;
}

/** "Leaving pauses in. Framing too wide." → ["Leaving pauses in", "Framing too wide"] */
export function sentences(s: string): string[] {
  return s
    .split(/(?<=[.!?])\s+(?=[A-Z0-9"“])/)
    .map((x) => x.trim().replace(/[.]+$/, ""))
    .filter(Boolean);
}

const PROPER = /^(Claude|ChatGPT|Cursor|Codex|Underlord|Adobe|Premiere|DaVinci|TikTok|Instagram|YouTube|Reels|Shorts|LinkedIn|Vyra|Canva|Brown)\b/;

/** Lowercase the first letter, except acronyms (POV), camel-case names (CapCut), and known proper nouns. */
export function lcFirst(s: string): string {
  if (/^[A-Z]{2}/.test(s) || /^[A-Z][a-z]+[A-Z]/.test(s) || PROPER.test(s)) return s;
  return s.charAt(0).toLowerCase() + s.slice(1);
}

export function ucFirst(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function endSentence(s: string): string {
  const t = s.trim();
  return /[.!?)"”]$/.test(t) ? t : `${t}.`;
}

/** Trim to a meta description length at a word boundary. */
export function clip(s: string, max = 158): string {
  if (s.length <= max) return s;
  const cut = s.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;.]$/, "")}…`;
}

export function wordCount(markdown: string): number {
  return markdown
    .replace(/```[\s\S]*?```/g, (m) => m.replace(/```/g, ""))
    .replace(/[#*|>`\-\[\]()]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

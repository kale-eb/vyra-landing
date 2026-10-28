import type { Entry, SectionKey } from "@/lib/content";
import type { Family, WrittenReader } from "./entry";
import { promptCrossings } from "./prompt-crossings";
import { headToHead } from "./head-to-head";

/* Programmatic SEO families. Each one turns written pages (its dataset) into more pages through
   a template, with its own quality gate. To add a family, write a Family and list it here.
   content.ts merges the output into getEntries(), so routes, hubs, sitemaps, JSON-LD and
   related links pick generated pages up without further wiring. */
export const FAMILIES: Family[] = [promptCrossings, headToHead];

export function generatedEntries(section: SectionKey, read: WrittenReader): Entry[] {
  const writtenUrls = new Set(read(section).map((e) => e.url));
  return FAMILIES.filter((f) => f.section === section)
    .flatMap((f) => f.build(read))
    .filter((e) => !writtenUrls.has(e.url));
}

/** Child sitemap for a generated entry. Written entries return undefined and stay in their section's sitemap. */
export function sitemapFor(entry: Entry): string | undefined {
  return entry.generated ? FAMILIES.find((f) => f.key === entry.generated)?.sitemap : undefined;
}

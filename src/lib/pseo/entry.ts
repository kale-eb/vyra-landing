import type { Entry, SectionKey } from "@/lib/content";

/** Reads the hand-written entries of a section. Passed in so generators never import content.ts at runtime. */
export type WrittenReader = (section: SectionKey | "product") => Entry[];

export type Family = {
  /** Stable id, stored on each entry as `generated`. */
  key: string;
  section: SectionKey;
  /** Child sitemap the family's pages are listed in, so index coverage can be read per template in Search Console. */
  sitemap: string;
  build(read: WrittenReader): Entry[];
};

export type Link = { url: string; title: string; description?: string };

export function makeEntry(e: {
  family: string;
  section: SectionKey;
  slug: string;
  title: string;
  description: string;
  updated: string;
  body: string;
  facts?: string[];
  reels?: string[];
  crumbs?: { label: string; href: string }[];
  data?: Record<string, unknown>;
}): Entry {
  return {
    section: e.section,
    slug: e.slug,
    url: `/${e.section}/${e.slug}`,
    title: e.title,
    description: e.description,
    updated: e.updated,
    reels: e.reels ?? [],
    newsletter: [],
    facts: e.facts ?? [],
    data: { ...(e.data ?? {}) },
    body: e.body.trim(),
    generated: e.family,
    crumbs: e.crumbs,
  };
}

export function latest(dates: string[]): string {
  return dates.reduce((m, d) => (d > m ? d : m), "2026-01-01");
}

import reels from "@/content/reels.json";

export type Reel = { id: string; views: string; date: string; title: string; tags: string[] };

const BY_ID = new Map<string, Reel>((reels as Reel[]).map((r) => [r.id, r]));

export function getReel(id: string): Reel | undefined {
  return BY_ID.get(id);
}

export function reelUrl(id: string) {
  return `https://www.instagram.com/reel/${id}/`;
}

export function reelEmbedUrl(id: string) {
  return `https://www.instagram.com/reel/${id}/embed/`;
}

/** Resolve a list of ids to known reels, dropping unknown ids. */
export function resolveReels(ids: string[]): Reel[] {
  return ids.map((id) => BY_ID.get(id)).filter((r): r is Reel => !!r);
}

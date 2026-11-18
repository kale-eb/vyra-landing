/* Format × task pairs that already have a hand-written prompt page. The generator skips these,
   links to the written page instead, and next.config.ts redirects the generated path to it.
   This file has no imports so next.config.ts can load it. */
export const PROMPT_OVERRIDES: Record<string, string> = {
  "vlog/rough-cut": "vlog-rough-cut",
  "vlog/music": "vlog-music-and-pacing",
  "podcast-clip/rough-cut": "podcast-clip-selection",
  "podcast-clip/captions": "podcast-clip-captions",
  "talking-head/rough-cut": "talking-head-cleanup",
  "montage/music": "montage-beat-sync",
  "tutorial/captions": "tutorial-captions-and-callouts",
  "product-demo/b-roll": "product-demo-b-roll",
  "day-in-the-life-story/rough-cut": "day-in-the-life-cut",
  "faceless-video/rough-cut": "faceless-video-assembly",
  "storytelling-video/rough-cut": "storytelling-video-structure",
  "ugc-hook-and-demo/rough-cut": "ugc-hook-and-demo-structure",
  "before-after-transformation/rough-cut": "before-after-reveal",
  "travel-recap/rough-cut": "travel-recap-highlight-reel",
};

export function promptOverrideRedirects() {
  return Object.entries(PROMPT_OVERRIDES).map(([pair, slug]) => ({
    source: `/prompts/${pair}`,
    destination: `/prompts/${slug}`,
    permanent: true,
  }));
}

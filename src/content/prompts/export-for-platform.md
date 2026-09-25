---
title: 'Export prompts: TikTok, Reels, Shorts, grid'
description: "An export prompt names each platform, its aspect ratio and resolution, what must stay in frame when the crop changes, and the quality setting."
updated: '2026-09-24'
category: prompts
---

**Name each platform, its ratio and size, what stays in frame when the crop changes, and the quality. One message can make every version.**

## Minimal

```
Export this for TikTok.
```

## Standard

```
Export a 9:16 version at 1080x1920 for TikTok, and a 1:1 version for the Instagram grid where you keep my face centered. Both at high quality.
```

## Full

```
Export three versions of this edit. One, 9:16 at 1080x1920 for TikTok and Reels, keep the captions inside the safe zone so the TikTok UI does not cover them. Two, 1:1 at 1080x1080 for the Instagram grid, keep my face centered and let the edges of the b-roll crop off. Three, 16:9 at 1920x1080 for YouTube, with the captions moved to the bottom third and made 20% smaller. Use the highest quality setting on all three. Name them studio-tiktok, studio-grid, studio-youtube. Do not change any cuts or timing between versions.
```

## What each part does

Each line pairs a platform with a pixel size. "Inside the safe zone" keeps text clear of the app UI. "Keep my face centered and let the edges crop" says what to give up. "Do not change any cuts" keeps the versions identical.

## Fixes

| Symptom | Add to your next message |
| --- | --- |
| Face cut off in the square | "Reframe the 1:1 so my face is centered in every shot." |
| Captions under the TikTok UI | "Raise the captions above the bottom 20% of the frame." |
| File too big | "Medium bitrate, under 50 MB." |
| Timing changed | "Re-export from the same timeline. Do not re-cut." |

## FAQ

**What resolution does Vyra export?**
Up to 1440p on Starter, 4K on Pro. 1080x1920 is what TikTok, Reels, and Shorts want and every plan has it.

**Can I export one project as several ratios?**
Yes. Ask for each in one message. See /prompts/reframe-to-vertical for how the crop works.

## Related

- /prompts/reframe-to-vertical
- /prompts/screen-recording-reframe
- /prompts/captions
- /how-to/repurpose-long-form-to-shorts

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give numbers, not adjectives. "Pauses over half a second," not "snappy."
4. Say what not to add. Zooms, transitions, music, effects.
5. One fix per follow-up message. Ask for a list of changes with timestamps if you want to check.

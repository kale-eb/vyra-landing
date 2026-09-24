---
title: 'Export prompts: TikTok, Reels, Shorts, grid'
description: >-
  An export prompt names each platform, its aspect ratio and resolution, what
  must stay in frame when the crop changes, and the quality setting. One
  message can produce every version.
updated: '2026-09-24'
category: prompts
---

**An export prompt names each platform you are posting to, the aspect ratio and resolution for each, what must stay in frame when the crop changes, and the quality you want. One message can produce every version.**

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
Export three versions of this edit. One: 9:16 at 1080x1920 for TikTok and Reels, keep the captions inside the safe zone so the TikTok UI does not cover them. Two: 1:1 at 1080x1080 for the Instagram grid, keep my face centered and let the edges of the b-roll crop off. Three: 16:9 at 1920x1080 for YouTube, with the captions moved to the bottom third and made 20% smaller. Use the highest quality setting on all three. Name them studio-tiktok, studio-grid, studio-youtube. Do not change any cuts or timing between versions.
```

## What each part does

- "Three versions" sets the count up front so nothing is missed.
- Each line pairs a platform with an aspect ratio and pixel size, which removes the guess.
- "Keep the captions inside the safe zone" protects text from the app overlay.
- "Keep my face centered and let the edges crop off" tells the agent what to sacrifice.
- "Captions moved to the bottom third and 20% smaller" adapts text for the wide frame.
- "Highest quality setting" picks the bitrate.
- "Name them" makes the downloads easy to tell apart.
- "Do not change any cuts or timing" keeps the versions identical in content.

## Fixes

| Symptom | Add to your next message |
| --- | --- |
| Face cut off in the square version | "Reframe the 1:1 so my face is centered in every shot, use a mask if needed." |
| Captions hidden by the TikTok UI | "Raise the captions so the lowest line sits above the bottom 20% of the frame." |
| File too large | "Export at a medium bitrate, target under 50 MB." |
| Wrong resolution | "Export 9:16 at exactly 1080x1920." |
| Timing changed between versions | "Re-export from the same timeline. Do not re-cut." |
| Need a version without captions | "Export a fourth version, 9:16, with all captions removed." |

## FAQ

**What resolution does Vyra export?**
Up to 1440p on Starter plans and up to 4K on Pro plans. Vertical 1080x1920 is the standard for TikTok, Reels, and Shorts and is available on every plan.

**Can I export one project as several aspect ratios?**
Yes. Ask for each version in one message and the agent reframes with masks, keeping the cuts identical.

**How do I keep the subject in frame when going from 16:9 to 9:16?**
Say what to track. "Keep me centered" works for one person; "follow the product" works for demos. See /prompts/reframe-to-vertical for the full reframing prompt.

## Related

- /prompts/reframe-to-vertical
- /prompts/screen-recording-reframe
- /prompts/captions
- /how-to/repurpose-long-form-to-shorts

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.

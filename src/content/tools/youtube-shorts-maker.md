---
title: "YouTube Shorts maker: cut, caption, and export at 1080p vertical"
description: "Vyra turns raw or long-form footage into a vertical Short by description, adds captions, and exports with a YouTube Shorts preset at 1080p and 20 Mbps."
updated: 2026-09-24
category: tools
facts:
  - "Best for: Repurposing long YouTube videos, or shooting vertical for Shorts directly"
  - "Input: Any footage, horizontal or vertical"
  - "Output: 9:16 MP4, YouTube Shorts preset at 1080p and 20 Mbps, or up to 4K"
  - "Time: Minutes per Short after processing (TODO confirm)"
  - "Works with: Built-in chat, Claude, ChatGPT, Cursor over MCP"
  - "Price: Free to start, plans from $24/mo"
---

**A YouTube Shorts maker gets you from footage to a vertical clip under 60 seconds that opens fast and reads without sound. Vyra does the cut from your description, reframes to 9:16 if needed, captions it, and exports with a preset built for Shorts.**

## How it works

1. Upload the source, whether a long video or a set of vertical clips.
2. Describe the Short: length, the moment or claim to open on, what to cut, caption style.
3. The agent cuts, reframes with masks if the source is horizontal, and adds captions.
4. Check the first two seconds and the caption placement at a couple of timestamps.
5. Export with the YouTube Shorts preset.

## What you can control

| Setting | Options |
| --- | --- |
| Length | Up to 60 seconds, or the exact target you give |
| Opening | Start on a quoted line or a described shot |
| Framing | Subject-centered crop, split for two people, PiP for screen |
| Captions | Word-by-word, highlight, or phrase; placed in the safe zone |
| Title | Native text or a generated title card for the first seconds |
| Export | YouTube Shorts preset, 1080p, 20 Mbps, MP4 |

## Prompts to paste

```
Make a 45-second Short from this 12-minute video. Open on the line "most people get this backwards", keep me centered in 9:16, add word-by-word captions above center, and end on the payoff sentence.
```

```
Pull three separate Shorts from this episode, each under 50 seconds, each about a different point. List what each one covers before cutting.
```

```
Export with the YouTube Shorts preset and name the file shorts-pricing-01.
```

## When to use something else

- You want automatic clip discovery with scores across a whole channel back catalog. Opus Clip and Vizard are pipelines for that at volume.
- You are editing on a phone with no computer. Vyra runs in the browser; a mobile-first app like CapCut is closer to hand.
- The Short is a slideshow of images with no footage. Vyra can do it, but a template tool is faster for pure slideshows.

## FAQ

**What does the Shorts preset do?**
It sets 1080p vertical output at 20 Mbps in MP4, which is the balance of quality and size that uploads cleanly.

**Can I go above 1080p?**
Yes. Choose 1440p or 4K in custom settings; Starter plans export up to 1440p and Pro up to 4K.

**Will captions get covered by the Shorts interface?**
Ask for captions above the bottom safe area. The agent places them clear of the overlay.

**Can I make Shorts from Claude or ChatGPT?**
Yes. Over MCP the assistant can cut, reframe, caption, and export with the same preset.

## Related

- /tools/tiktok-video-editor
- /tools/reframe-video-to-vertical
- /how-to/repurpose-long-form-to-shorts
- /prompts/export-for-platform

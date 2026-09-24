---
title: "Picture-in-picture and split-screen video maker"
description: "Vyra places a second video or screen recording in a corner, a split, or a grid using layout presets, timed to the moment you describe, and keeps every cell editable."
updated: 2026-09-24
category: tools
facts:
  - "Best for: Tutorials with a face and a screen, reaction videos, two-person podcasts, before-and-after comparisons"
  - "Input: Two or more videos, or a video and a screen recording"
  - "Output: MP4 up to 4K, or WebM up to 1080p"
  - "Time: Seconds to place a layout (TODO confirm)"
  - "Works with: Built-in chat, Claude, ChatGPT, Cursor over MCP"
  - "Price: Free to start, plans from $24/mo"
---

**Picture-in-picture puts one video inside another; split screen puts two side by side. Vyra does both with layout presets you can ask for by name or describe, so "show the screen recording in the top right at a third of the frame while I talk about it" becomes a timed layout on the timeline.**

## How it works

1. Upload both sources.
2. Describe the arrangement and when it applies, or open the Layouts panel and pick a preset.
3. The agent places the layout for that time range and fills the cells with the clips you named.
4. Adjust cell size or position by prompt, or drag on the canvas.
5. Return to full frame when the section ends, then export.

## What you can control

| Setting | Options |
| --- | --- |
| Layout presets | Split horizontal, split vertical, three horizontal, three vertical, grid 2x2, PiP in any of four corners, feature left, feature right |
| Cell contents | Any clip, image, or screen recording per cell |
| Timing | Start and end of the layout, or tied to a spoken topic |
| Size | Described fraction of the frame for PiP |
| Framing inside cells | Masks to crop each cell to its subject |
| Captions | Placed clear of the cells |

## Prompts to paste

```
When I talk about writing the prompt, show the screen recording of the chat UI as picture-in-picture in the top right, about a third of the frame, for as long as I am on that topic.
```

```
Put both of us side by side in a vertical split for the whole conversation. Crop each cell to the speaker's face and shoulders.
```

```
Make a 2x2 grid of the four painting clips for 5 seconds at the end, then cut to the finished piece full frame.
```

## When to use something else

- You need live multi-camera switching during a recording. That is a capture tool's job; Vyra arranges recorded clips.
- You want the two sources synced automatically by timecode. Vyra syncs multicam by transcript matching, which needs speech in both.
- The layout must animate in complex ways. Use a motion graphic for animated compositions.

## FAQ

**Can the PiP move during the video?**
Yes. Ask for a different corner in a later section, or keyframe its position.

**Can I crop what shows inside a cell?**
Yes. Masks handle cropping, so each cell can be reframed to its subject.

**Will captions overlap the second video?**
Ask for captions clear of the cells and the agent places them in open space.

**Does this work over MCP?**
Yes. Layouts and masks are available to Claude, ChatGPT, or Cursor.

## Related

- /tools/reframe-video-to-vertical
- /formats/app-walkthrough
- /prompts/product-demo-b-roll
- /tools/podcast-clip-maker

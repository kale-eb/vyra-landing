---
title: "Picture-in-picture and split-screen video maker"
description: Vyra puts a second video or screen recording in a corner, a split, or a grid with layout presets, timed to the moment you describe.
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

**Picture-in-picture puts one video inside another. Split screen puts two side by side. Vyra does both with layout presets, so "show the screen recording top right at a third of the frame while I talk about it" becomes a timed layout on the timeline.**

## How it works

1. Upload both sources.
2. Describe the arrangement and when it applies, or pick a preset from the Layouts panel.
3. The agent places the layout for that range and fills the cells with the clips you named.
4. Resize or move cells by prompt, or drag on the canvas.
5. Go back to full frame when the section ends. Export.

## What you can control

| Setting | Options |
| --- | --- |
| Layout presets | Split horizontal, split vertical, three across, three down, 2x2 grid, PiP in any corner, feature left, feature right |
| Cell contents | Any clip, image, or screen recording |
| Timing | Start and end of the layout, or tied to a spoken topic |
| Size | How much of the frame the PiP takes |
| Framing inside cells | Masks to crop each cell to its subject |
| Captions | Kept clear of the cells |

## Prompts to paste

```
When I talk about writing the prompt, show the screen recording of the chat UI as picture-in-picture in the top right, about a third of the frame, for as long as I'm on that topic.
```

```
Put both of us side by side in a vertical split for the whole conversation. Crop each cell to the speaker's face and shoulders.
```

```
Make a 2x2 grid of the four painting clips for 5 seconds at the end, then cut to the finished piece full frame.
```

## When to use something else

- Live multi-camera switching while recording. That's a capture tool. Vyra arranges recorded clips.
- Syncing by timecode. Vyra syncs multicam by matching transcripts, so both need speech.
- Complex animated layouts. Use a motion graphic.

## FAQ

**Can the PiP move during the video?**
Yes. Ask for a different corner later, or keyframe it.

**Can I crop what shows inside a cell?**
Yes. Masks do it.

**Will captions overlap the second video?**
Ask for captions clear of the cells.

## Related

- /tools/reframe-video-to-vertical
- /formats/app-walkthrough
- /prompts/product-demo-b-roll
- /tools/podcast-clip-maker

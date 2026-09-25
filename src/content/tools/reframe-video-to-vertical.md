---
title: "Reframe a 16:9 video to vertical 9:16 without losing the subject"
description: Vyra reframes horizontal footage for TikTok, Reels, and Shorts with masks that follow whatever you say to keep in frame.
updated: 2026-09-24
category: tools
facts:
  - "Best for: Repurposing YouTube, webinar, and screen recordings for vertical platforms"
  - "Input: Any 16:9 or 4:3 video"
  - "Output: 9:16 MP4 up to 4K, or WebM up to 1080p"
  - "Time: Minutes per clip (TODO confirm)"
  - "Works with: Built-in chat, Claude, ChatGPT, Cursor over MCP"
  - "Price: Free to start, plans from $24/mo"
---

**Reframing to vertical means picking which part of the wide frame survives the crop. In Vyra a rectangle mask is the crop. You say what to keep centered, and the speaker stays in frame while a screen recording crops to the part you're pointing at.**

## How it works

1. Upload the horizontal video. Set the canvas to 9:16, or ask the chat to.
2. Say what should stay in frame. The speaker, a product, a region of the screen.
3. The agent applies masks per section so the crop follows the subject.
4. Add captions in the safe area and check a few frames.
5. Export with the Instagram/TikTok or YouTube Shorts preset.

## What you can control

| Setting | Options |
| --- | --- |
| Canvas | 9:16, 1:1, 4:5, or custom |
| Subject | Speaker, product, screen region, or a mix by section |
| Mask shape | Rectangle for a straight crop, other shapes with feathering |
| Per-section framing | Different crop targets at different times |
| Captions | Inside the vertical safe zone |
| Export | 1080p social presets or up to 4K |

## Prompts to paste

```
This is 16:9. Make a 9:16 version that keeps me centered the whole time. When the screen recording is showing, crop to the part of the screen I'm pointing at instead of the whole thing.
```

```
Make a 1:1 version for the grid where my face stays centered, plus a 9:16 version. Export both at 1080p.
```

```
Capture frames at 0:03, 0:15, and 0:40 so I can check nothing important got cropped out.
```

## When to use something else

- You want automatic face tracking with zero instructions. Some tools do one auto pass. Vyra works from your description (TODO confirm auto-tracking scope).
- Two people who both need to stay visible. Use a split layout instead of a crop.
- You need the horizontal version untouched. Reframe on a copy of the project.

## FAQ

**Is there a separate crop tool?**
No. Masks do the cropping. A rectangle mask is a crop.

**Can the crop move during the video?**
Yes. Say what to follow in each section, or keyframe the mask.

**What about text baked into the original?**
It crops with the footage. Rebuild titles as text in the vertical version.

## Related

- /prompts/reframe-to-vertical
- /prompts/screen-recording-reframe
- /how-to/repurpose-long-form-to-shorts
- /tools/picture-in-picture-video-maker

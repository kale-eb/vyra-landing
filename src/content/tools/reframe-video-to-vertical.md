---
title: "Reframe a 16:9 video to vertical 9:16 without losing the subject"
description: "Vyra reframes horizontal footage for TikTok, Reels, and Shorts using masks that follow your description of what to keep, then exports at 1080p or higher."
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

**Reframing to vertical means choosing which part of a wide frame survives the crop to 9:16. Vyra does this with masks: a rectangle mask is the crop, and you tell the agent what to keep centered, so the speaker stays in frame and a screen recording crops to the part you are pointing at.**

## How it works

1. Upload the horizontal video. Resize the canvas to 9:16, or ask the chat to.
2. Describe what should stay in frame: the speaker, a product, the region of a screen recording.
3. The agent applies masks per section so the crop follows the subject through the video.
4. Add captions in the safe area and check the frame at a few timestamps.
5. Export with the Instagram/TikTok or YouTube Shorts preset.

## What you can control

| Setting | Options |
| --- | --- |
| Canvas | 9:16, 1:1, 4:5, or custom |
| Subject | Speaker, product, screen region, or a mix by section |
| Mask shape | Rectangle for a straight crop, other shapes with feathering for special cases |
| Per-section framing | Different crop targets at different timestamps |
| Captions | Placed inside the vertical safe zone |
| Export | 1080p social presets or up to 4K |

## Prompts to paste

```
This is 16:9. Make a 9:16 version that keeps me centered the whole time. When the screen recording is showing, crop to the part of the screen I am pointing at instead of the whole thing.
```

```
Make a 1:1 version for the grid where my face stays centered, plus a 9:16 version. Export both at 1080p.
```

```
Capture frames at 0:03, 0:15, and 0:40 so I can check nothing important is cropped out.
```

## When to use something else

- You want automatic face tracking with no instructions at all. Some tools do a single auto-reframe pass; Vyra works from your description of what to keep and applies masks accordingly (TODO confirm auto-tracking scope).
- The video has two people who both need to stay visible. Use a split layout instead of a crop.
- You need the original horizontal version untouched. Reframe on a copy of the project.

## FAQ

**Is there a separate crop tool?**
No. Masks handle cropping and reframing. A rectangle mask is a crop.

**Can the crop move during the video?**
Yes. Describe what to follow in each section, or keyframe the mask position.

**What about text and graphics from the original?**
Anything baked into the source footage will crop with it. Rebuild titles as native text in the vertical version.

**Does this work from Claude or ChatGPT?**
Yes. The mask and canvas tools are available over MCP.

## Related

- /prompts/reframe-to-vertical
- /prompts/screen-recording-reframe
- /how-to/repurpose-long-form-to-shorts
- /tools/picture-in-picture-video-maker

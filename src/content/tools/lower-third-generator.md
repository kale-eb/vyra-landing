---
title: "Lower third generator: name, handle, or title on screen from one sentence"
description: "Describe the lower third you want and Vyra generates it as an animated motion graphic or native text, timed to the moment you name, and saves it as a preset for reuse."
updated: 2026-09-24
category: tools
facts:
  - "Best for: Talking heads, interviews, podcast clips, tutorials, brand videos"
  - "Input: A sentence describing the text, position, and timing"
  - "Output: An overlay on the timeline, exported in MP4 up to 4K or WebM up to 1080p"
  - "Time: Under a minute (TODO confirm)"
  - "Works with: Built-in chat, Claude, ChatGPT, Cursor over MCP"
  - "Price: Free to start, plans from $24/mo"
---

**A lower third is the small label near the bottom of the frame that says who is talking or what this is. Vyra makes one from a description, either as a native text item you can drag or as an animated motion graphic that slides in, and can save it as a preset for the next video.**

## How it works

1. Say what it should read, where it sits, and when it appears.
2. Choose native text (directly editable, no animation needed) or a motion graphic (animated entrance and exit).
3. The agent places it on the timeline at the time you named.
4. Adjust by prompt or drag it on the canvas.
5. Save as Preset from the Properties panel if you will reuse it.

## What you can control

| Setting | Options |
| --- | --- |
| Text | Name, handle, title, location, any two lines |
| Position | Bottom left, bottom right, or a described spot |
| Timing | Start time and duration, or "while she is introduced" |
| Animation | Slide, fade, or none (native text) |
| Style | Fonts and colors from the project style, or ones you name |
| Presets | Save and reapply from My Presets, or use the built-in lower third presets |

## Prompts to paste

```
Add a lower third with my name and @sulansart for the first 4 seconds. Small, bottom left, simple slide in from the left, white text on a dark bar.
```

```
Put a lower third on the guest when she first speaks at 0:42: her name on line one, "Founder, Studio Lane" on line two. Match the font from the reference video.
```

```
Save that lower third as a preset called guest-tag so I can reuse it on the next clip.
```

## When to use something else

- You need a full broadcast-style graphics package with dozens of variants. A motion design tool is built for that.
- The text is a title over the whole frame, not a label. Use a title card instead.
- You want to edit the animation curve by hand. Motion graphics in Vyra are edited by prompt; native text is edited directly.

## FAQ

**Native text or motion graphic?**
Native text if you want to drag and edit it directly and do not need animation. Motion graphic if you want an entrance and exit.

**Can I use my brand fonts?**
Name them in the prompt or set them in the project style. If a font is unavailable, the agent reports a substitution rather than pretending it loaded.

**Does it work on vertical video?**
Yes. Ask for placement inside the safe zone so the platform overlay does not cover it.

**Does this work over MCP?**
Yes. Claude, ChatGPT, or Cursor can add text or motion graphics with the same controls.

## Related

- /tools/ai-motion-graphics-generator
- /tools/title-card-maker
- /features/motion-graphics
- /prompts/motion-graphics

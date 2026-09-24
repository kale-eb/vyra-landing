---
title: "AI motion graphics generator: animated titles, lower thirds, and charts from a prompt"
description: "Vyra generates code-based motion graphics from a description, places them on your timeline at the time you choose, and lets you change them by asking."
updated: 2026-09-24
category: tools
facts:
  - "Best for: Title cards, lower thirds, animated lists, callouts, data visualizations, branded intros"
  - "Input: A text prompt, optionally a time range and a reference frame"
  - "Output: An animated overlay on the timeline, exported in MP4 up to 4K or WebM up to 1080p"
  - "Time: Under a minute per graphic (TODO confirm)"
  - "Works with: Built-in chat, Claude, ChatGPT, Cursor over MCP"
  - "Price: Free to start, plans from $24/mo"
---

**An AI motion graphics generator builds animated overlays from a description instead of a keyframe editor. In Vyra the graphics are code-based React and Remotion compositions, so a prompt can produce a lower third, a stacked list that reveals as you speak, or an animated chart, and a follow-up sentence can change it.**

## How it works

1. Open the Motion Graphics panel in the left sidebar, or describe the graphic in the chat.
2. Enter what you want and, optionally, the time range where it should appear.
3. Click Generate with AI. The chat route hands the request to a specialized motion graphics sub-agent that writes the animation code.
4. Preview it on the canvas. To change anything, select it and ask: "make the text say Chapter 2" or "slow the entrance down."
5. Save it as a preset from the Properties panel if you will reuse it, then export.

## What you can control

| Setting | Options |
| --- | --- |
| Type | Title card, lower third, list, callout, chart, intro, custom |
| Timing | Start time, duration, entrance and exit behavior |
| Style | Fonts and colors from your chosen style, or ones you name |
| Reference | The sub-agent can capture timeline frames or reference video frames to match a look |
| Reuse | Save as Preset, then apply from My Presets with guidance text |
| Editing | By prompt only; code-based graphics are not edited in a popup |

## Prompts to paste

```
When I list the three tools, animate the three names on screen one at a time as I say them, stacked on the left, bold, white on a dark bar. Keep them all up until I finish the list, then clear them together.
```

```
Add a lower third with my name and @sulansart for the first 4 seconds. Small, bottom left, simple slide in from the left.
```

```
Make an animated bar chart for the numbers I say between 0:20 and 0:32: 40 percent, 25 percent, 35 percent. Bars grow as each number is spoken.
```

## When to use something else

- You want a drag-and-drop template library with hundreds of pre-made animations. Canva and Jitter are built around browsing templates; Vyra is built around describing the graphic.
- You need frame-level manual control over every keyframe. A dedicated motion tool like After Effects gives you that; Vyra's graphics are edited by prompt.
- The graphic is a plain static title. Use Vyra's Text panel, which is faster and directly editable on the canvas.

## FAQ

**Can I edit the generated graphic by hand?**
Not in a popup. Select it on the timeline and tell the chat what to change. Native text, shapes, and layouts stay directly editable.

**Can it match the look of a video I like?**
Yes. Attach a reference video and point to a timestamp with Add to chat. The sub-agent can capture that frame and match its typography and motion.

**Are the graphics rendered on my device?**
Motion graphics are pre-rendered on the server, then the export composites them in your browser with everything else.

**Does this work from Claude or ChatGPT?**
Yes. Over MCP the assistant can request a motion graphic, place it, and revise it the same way.

## Related

- /features/motion-graphics
- /prompts/motion-graphics
- /tools/lower-third-generator
- /tools/title-card-maker

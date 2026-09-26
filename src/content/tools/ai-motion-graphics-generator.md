---
title: "AI motion graphics generator: animated titles, lower thirds, and charts from a prompt"
description: Vyra builds motion graphics from a description, drops them on your timeline where you want, and changes them when you ask.
updated: 2026-09-24
category: tools
facts:
  - "Best for: Title cards, lower thirds, animated lists, callouts, charts, branded intros"
  - "Input: A text prompt, optionally a time range and a reference frame"
  - "Output: An animated overlay on the timeline, exported in MP4 up to 4K or WebM up to 1080p"
  - "Time: Under a minute per graphic (TODO confirm)"
  - "Works with: Built-in chat, Claude, ChatGPT, Cursor over MCP"
  - "Price: Free to start, plans from $24/mo"
reels:
  - DXh8TpouYGm
  - DY4pVwtu3KD
---

**Describe the graphic and Vyra builds it. Under the hood they're code-based React and Remotion compositions, so a prompt can make a lower third, a list that reveals as you speak, or an animated chart. Another sentence changes it.**

## How it works

1. Open the Motion Graphics panel, or describe the graphic in the chat.
2. Say what you want and, if you like, when it should appear.
3. Click Generate with AI. A motion graphics sub-agent writes the animation.
4. Check it on the canvas. To change it, select it and ask. "Make the text say Chapter 2." "Slow the entrance down."
5. Save it as a preset if you'll reuse it. Then export.

## What you can control

| Setting | Options |
| --- | --- |
| Type | Title card, lower third, list, callout, chart, intro, anything you describe |
| Timing | Start, duration, how it enters and exits |
| Style | Fonts and colors from your chosen style, or ones you name |
| Reference | The sub-agent can grab timeline frames or reference video frames to match a look |
| Reuse | Save as Preset, apply from My Presets |
| Editing | By prompt. Code-based graphics aren't edited in a popup |

## Prompts to paste

```
When I list the three tools, animate the three names on screen one at a time as I say them, stacked on the left, bold, white on a dark bar. Keep them all up until I finish the list, then clear them together.
```

```
Add a lower third with my name and @sulansart for the first 4 seconds. Small, bottom left, slide in from the left.
```

```
Make an animated bar chart for the numbers I say between 0:20 and 0:32: 40 percent, 25 percent, 35 percent. Bars grow as each number is spoken.
```

## When to use something else

- You want to browse hundreds of pre-made animations. Canva and Jitter are built for that.
- You need to move every keyframe by hand. After Effects does that. Vyra's graphics are edited by prompt.
- It's just a static title. Use the Text panel. Faster and you can edit it on the canvas.

## FAQ

**Can I edit the graphic by hand?**
Not in a popup. Select it and tell the chat what to change. Plain text, shapes, and layouts stay directly editable.

**Can it match a video I like?**
Yes. Attach a reference, go to a timestamp, click Add to chat. The sub-agent can match that frame's type and motion.

**Where are they rendered?**
Motion graphics are pre-rendered on the server. The export puts them together with everything else in your browser.

## Related

- /features/motion-graphics
- /prompts/motion-graphics
- /tools/lower-third-generator
- /tools/title-card-maker

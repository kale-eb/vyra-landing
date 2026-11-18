---
title: 'Motion graphics prompts: animated text, lists, lower thirds'
description: "A motion graphics prompt names the trigger, what appears, where it sits, the font and colors, how it enters, how long it stays, and how it leaves."
updated: '2026-11-10'
category: prompts
reels:
  - DXh8TpouYGm
---

**Say what appears, when, where, in what font, how it comes in, how long it stays, and how it leaves. Anything you skip, the agent guesses.**

## Minimal

```
Animate the three tool names on screen as I say them.
```

## Standard

```
When I list the three tools, animate the three names on screen one at a time as I say them, stacked on the left side, bold Montserrat, white on a dark bar. Keep them all on screen until I finish the list, then clear them together.
```

Lower third:

```
Add a lower third with my name and "@sulansart" for the first 4 seconds. Simple slide in from the left, small, bottom left corner.
```

## Full

```
This is a 60-second vertical explainer. Three graphics. One, a lower third in the first 4 seconds with "Sulan" on the top line and "@sulansart" below, Montserrat Black for the name, Inter Bold for the handle, white text on a black bar at 80% opacity, bottom left, slide in from the left over 0.3 seconds, slide out the same way. Two, when I say "three things changed", show the three phrases "less footage", "one prompt", "same voice" stacked on the left, each appearing on the word I say it, Montserrat Black, white, no bar, hold all three until I say "and that is it", then clear together with a quick fade. Three, when I say "eighty percent faster", show "80%" large and centered behind me for 2 seconds, Lemon yellow, slight scale up on entry. Nothing else. No stickers, no arrows, no emojis.
```

## What each part does

"Three graphics" fixes the count. Each one has a trigger, so timing follows what you say. Naming the fonts keeps the graphics matching the captions. "Over 0.3 seconds" sets the speed. "Hold all three until" sets the clear point. "Nothing else" stops the extras.

## Three examples to adapt to your footage

These are editing briefs to try in Vyra. Replace the words and timings with your own. Review the result on the timeline before exporting.

### A label beside the thing you are showing

You hold up a brush, but the name goes by too quickly to hear. Put the name beside the brush and leave the painting visible.

```
When I hold up the brush at 0:08, add "Flat brush" in white Inter Bold on a small black bar in the upper left. Fade it in over 0.2 seconds, hold for 2 seconds, then fade out. Keep the text away from my hand and the painting. Leave the existing captions alone.
```

### A list that follows your explanation

Keep each item visible long enough to read. Use the spoken phrase as the trigger, then check that the graphic enters on the right word.

```
When I say "the three changes", show "Shorter intro", "Larger captions" and "Longer final shot" one line at a time as I name them. Stack the lines on the left in white Montserrat Bold. Fade each line in without bouncing. Clear the whole list when I say "here is the result". Keep my face visible on the right.
```

### A title over the finished result

Let people see the finished piece before the process starts. Keep the title short so it does not cover the detail you want them to notice.

```
On the opening shot, add "An afternoon in the studio" in white Montserrat Bold near the top. Fade in over 0.3 seconds and remove it at 0:03. Keep the artwork visible. Do not add another title later in the video.
```

For a whole sequence, use the [explainer motion-graphics prompt](/prompts/explainer-motion-graphics). For an opening title, see the [title-card maker](/tools/title-card-maker).

## Fixes

| Symptom | Add to your next message |
| --- | --- |
| Text covers my face | "Move the graphic to the left third, never over my face." |
| Wrong timing | "Trigger it on the word 'changed' at 0:12." |
| Too flashy | "Replace the bounce with a plain 0.3-second fade." |
| Stays too long | "Clear the list on the word 'it' at 0:19." |

## FAQ

**Do I need After Effects words?**
No. "Slide in from the left, hold, fade out" is enough.

**Can it match my caption style?**
Yes. "Same font, color, and size as the captions." Vyra's defaults are Inter Bold for captions and Montserrat Black for titles.

**What should a motion graphics prompt include?**
Name the exact text, the spoken phrase or timestamp that triggers it, its position, font, colors, entrance, duration and exit. Specify which existing captions or graphics should stay unchanged. A prompt such as "make this more animated" leaves those choices open.

**How do I fix a graphic that appears at the wrong moment?**
Find the moment on the timeline and give Vyra the timestamp and exact phrase. Ask for one timing change at a time, such as "Start the Flat brush label at 0:09 and clear it at 0:11. Leave its style and position unchanged." Play that section again before exporting.

**Are motion graphics the same as generating video footage?**
Here, motion graphics means animated text and graphic elements added to an edit. Vyra edits the footage you supply. It does not generate video footage from a prompt.

## Related

- /prompts/explainer-motion-graphics
- /how-to/make-motion-graphics
- /features/motion-graphics
- /prompts/captions

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give numbers, not adjectives. "Pauses over half a second," not "snappy."
4. Say what not to add. Zooms, transitions, music, effects.
5. One fix per follow-up message. Ask for a list of changes with timestamps if you want to check.

---
title: 'Motion graphics prompts: animated text, lists, lower thirds'
description: >-
  A motion graphics prompt names the trigger, what appears, where it sits, the
  font and colors, how it enters, how long it stays, and how it leaves. Each
  missing detail becomes a guess.
updated: '2026-09-24'
category: prompts
---

**A motion graphics prompt names the trigger (what you say or when), what appears, where it sits, the font and colors, how it enters, how long it stays, and how it leaves. Every one of those you leave out becomes a guess.**

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
This is a 60-second vertical explainer. Three graphics. One: a lower third in the first 4 seconds with "Sulan" on the top line and "@sulansart" below, Montserrat Black for the name, Inter Bold for the handle, white text on a black bar at 80% opacity, bottom left, slide in from the left over 0.3 seconds, slide out the same way. Two: when I say "three things changed", show the three phrases "less footage", "one prompt", "same voice" stacked on the left, each appearing on the word I say it, Montserrat Black, white, no bar, hold all three until I say "and that is it", then clear together with a quick fade. Three: when I say "eighty percent faster", show "80%" large and centered behind me for 2 seconds, Lemon yellow, slight scale up on entry. Nothing else. No stickers, no arrows, no emojis.
```

## What each part does

- "Three graphics" fixes the count.
- Each graphic gets a trigger ("in the first 4 seconds", "when I say"), so timing is tied to speech, not guessed.
- Font names and colors match the project identity, so the graphics look like the captions.
- "Slide in over 0.3 seconds" sets the entrance speed; "slide out the same way" defines the exit.
- "Each appearing on the word I say it" makes the list accumulate in sync with speech.
- "Hold all three until" defines the clear point.
- "Large and centered behind me" places the emphasis graphic and uses the person as foreground.
- "Nothing else. No stickers, no arrows, no emojis" blocks decoration.

## Fixes

| Symptom | Add to your next message |
| --- | --- |
| Text covers my face | "Move the graphic to the left third, never over my face." |
| Appears too early or late | "Trigger it on the word 'changed' at 0:12, not before." |
| Wrong font | "Use Montserrat Black for titles and Inter Bold for everything else." |
| Animation too flashy | "Replace the bounce with a plain 0.3-second fade." |
| List items overlap | "Stack the three items with 20 pixels between lines, left aligned." |
| Graphic stays too long | "Clear the list on the word 'it' at 0:19." |

## FAQ

**Do I need to know After Effects terms?**
No. "Slide in from the left, hold, fade out" is enough. Name the effect you want in plain words and the agent builds it.

**Can the graphic match my caption style?**
Yes. Say "same font, color, and size as the captions" or name the exact faces. Vyra's default faces are Inter Bold for captions and Montserrat Black for titles.

**Can I get a chart or diagram?**
Simple ones, yes. Describe the shape ("a horizontal bar that fills from 0 to 80% over 2 seconds") and the label. Complex data visuals are better built outside and imported.

## Related

- /prompts/explainer-motion-graphics
- /how-to/make-motion-graphics
- /features/motion-graphics
- /prompts/captions

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.

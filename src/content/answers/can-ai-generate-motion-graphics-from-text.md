---
title: Can AI generate motion graphics from a text description?
description: Yes. Describe a lower third, animated list, or callout in plain words and an AI editor builds it as an editable composition timed to your speech, in seconds.
updated: 2026-09-24
category: answers
---

**Yes. Describe the graphic in plain words, such as "animate the three tool names on screen as I say them, stacked left, bold, on a dark bar," and an AI editor builds it as a composition timed to your speech. What you get is editable: the text, colors, timing, and position can be changed afterward. What it will not do is invent a brand identity for you. The more specific the description, the closer the first result.**

## Why

- **Motion graphics are mostly rules.** A lower third is a name, a title, a position, an entrance, and a duration. Rules are what language models are good at turning into code.
- **Timing comes from the transcript.** Because the editor knows when each word is spoken, "show the price when I say it" lands on the right frame without you scrubbing.
- **Compositions are code, not templates.** The agent writes the animation rather than picking from a library, so an unusual layout is as easy as a common one.
- **Native items stay editable.** Text, shapes, and media sit on the timeline as items you can move, resize, and retime by hand.

## What works best

- Lower thirds, title cards, and end cards.
- Animated lists that accumulate as you name items.
- Callouts, arrows, and highlight boxes on screen recordings.
- Kinetic captions that emphasize one line.
- Simple charts and comparison bars.

## What to describe

1. **What it says.** The exact text.
2. **Where it sits.** Top left, under your chin, centered.
3. **When it appears and leaves.** On a spoken word, for a duration, or until the list ends.
4. **How it moves.** Slide in, pop, or no animation.
5. **What it looks like.** Font weight, color, background bar, size relative to the frame.

## Do it in Vyra

```
When I list the three tools, animate each name on screen as I say it, stacked on the left, bold Montserrat, white text on a dark bar. Keep all three visible until I finish the list, then clear them together.
```

```
Add a lower third for the first 4 seconds: "Sulan Zhang" on line one, "@sulansart" on line two, bottom left, small, slide in from the left, no drop shadow.
```

## FAQ

**Can it match my brand fonts and colors?**
Yes, if you name them. "Use Montserrat Black and #F4DD45 for the accent." Without that, it uses the project's default identity.

**Can I edit the graphic after it is generated?**
Yes. Text, timing, and position are editable on the timeline. Ask for changes in chat or drag items by hand.

**Does it make 3D or particle effects?**
Not the focus. It is built for type, shapes, callouts, and layout, which is what social video actually uses.

## Related

- /features/motion-graphics
- /how-to/make-motion-graphics
- /prompts/motion-graphics
- /glossary/kinetic-typography

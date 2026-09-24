---
title: "Short Talking Head template"
description: "The Short Talking Head template tells Vyra's agent to build a tight, captioned, single-speaker vertical video: hook first, one idea per cut, no dead air, and an ending on the last useful word."
updated: 2026-09-24
category: templates
facts:
  - "Best for: Opinions, advice, announcements, product updates, one-person explainers"
  - "Length: 20-90 seconds"
  - "Aspect: 9:16"
  - "Captions: 3-5 word phrases by default, word-by-word on request"
  - "Music: Off by default, optional low bed"
  - "Pairs with style: Vyra Default or Cinematic Film"
  - "Price: Included on every plan"
---

**A template in Vyra is structural guidance for the agent. Short Talking Head tells it to treat your footage as one speaker with one point, cut every pause and restart, caption the speech, and finish without a fade.**

## What the template tells the agent

- Structure: hook in the first two seconds, then two to four points, then a close. It looks for the strongest take of each sentence rather than the first one.
- Pacing: remove pauses over roughly half a second, filler words, and restarts. Alternate the full frame with a slight punch-in on sentence boundaries so jump cuts feel intentional (TODO confirm default thresholds).
- Caption defaults: 3-5 word phrases in the caption face of the chosen style, centered below the mouth, no animation unless asked.
- B-roll behavior: none by default. If you upload supporting clips and mention them, the agent cuts to them briefly when the matching words are spoken.
- Ending: stop on the last useful word. No fade, no "like and subscribe" tail.

## Prompts that work with it

```
Cut this 6-minute take down to the best 60 seconds for Reels. Keep my strongest take of each point, remove pauses and restarts. Captions on.
```

```
Same cut, but make the line "you are not charging enough" a big bold caption on its own, and put a small lower third with my name for the first 4 seconds.
```

```
Add the screen recording as a picture-in-picture in the top right whenever I talk about the dashboard.
```

## Pair it with a style

| Style | What changes |
| --- | --- |
| Vyra Default | Inter Bold captions, Montserrat Black titles, DM Serif Display accent. Palette: Ink #171917, Paper #F7F6F2, Sky #8BBCDF, Lemon #F4DD45. Clean and neutral. |
| Cinematic Film | Warmer grade, larger serif titles, slower emphasis moments (TODO confirm specifics). |

## When to pick a different template

- Two speakers or an interview: use [/templates/long-podcast](/templates/long-podcast).
- Music-driven footage with little speech: use [/templates/vlog](/templates/vlog) or ask for a montage.
- A screen-heavy tutorial: start with Short Talking Head and ask for a split layout.

## FAQ

**Can I change the template after starting?**
Yes. Ask the agent to switch, or choose a different one from the project settings. Existing edits stay.

**Does the template force captions?**
No. Say "no captions" and it skips them.

**Can I save my own tweaks as a template?**
Templates and styles are chosen per project. Saved caption styles and motion graphic presets carry across projects (TODO confirm custom templates).

## Related

- [/formats/talking-head](/formats/talking-head)
- [/how-to/cut-a-talking-head](/how-to/cut-a-talking-head)
- [/prompts/talking-head-cleanup](/prompts/talking-head-cleanup)
- [/features/ai-captions](/features/ai-captions)

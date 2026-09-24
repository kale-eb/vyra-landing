---
title: "Vlog template"
description: "The Vlog template tells Vyra's agent to build a day from many short clips: music-driven pacing, location changes as structure, speech kept where it carries the story, and captions only when someone is talking."
updated: 2026-09-24
category: templates
facts:
  - "Best for: Day-in-the-life, travel days, studio days, errands, trips with friends"
  - "Length: 30-90 seconds for short vlogs, 3-10 minutes for long ones"
  - "Aspect: 9:16 for short, 16:9 for long"
  - "Captions: Only during speech, 3-5 word phrases"
  - "Music: On by default, ducked under speech"
  - "Pairs with style: Vyra Default or Cinematic Film"
  - "Price: Included on every plan"
---

**Vlog is the template for footage shot across a day. It tells the agent to use location and time changes as the structure, cut b-roll to the music, keep the talking clips that move the story, and duck the track whenever you speak.**

## What the template tells the agent

- Structure: chronological by default, using recording times. Location changes become sections. An optional title card or spoken hook opens it.
- Pacing: fast through movement and b-roll, slower on talking moments. Average shot length around two to four seconds on short vlogs (TODO confirm defaults).
- Caption defaults: phrase captions during speech only, none over pure b-roll.
- B-roll behavior: everything that is not a talking clip is b-roll. It is cut to the beat of the track and ordered to match what you say.
- Ending: last location, last line, then a short music tail.

## Prompts that work with it

```
Cut a first draft of this day from all the clips, about 60 seconds, 9:16, to the attached track. Keep me talking where I explain what we are doing; everything else is b-roll on the beat.
```

```
Add a title card at the start that says "day four in SF" in the title font, and a small city label when the location changes.
```

```
Make it calmer: longer shots, fewer cuts in the middle section, and drop the music to 20% during the conversation at the table.
```

## Pair it with a style

| Style | What changes |
| --- | --- |
| Vyra Default | Inter Bold captions, Montserrat Black titles, DM Serif Display accent. Palette: Ink #171917, Paper #F7F6F2, Sky #8BBCDF, Lemon #F4DD45. Clean, everyday. |
| Cinematic Film | Warmer, softer grade and slower, more held moments (TODO confirm specifics). |

## When to pick a different template

- Mostly one person talking to camera: use [/templates/short-talking-head](/templates/short-talking-head).
- Two people in conversation for most of the runtime: use [/templates/long-podcast](/templates/long-podcast).
- A montage with no speech: Vlog works; say "no captions, cut everything to the beat."

## FAQ

**Does it need music?**
No. Say "original audio only" and it keeps ambient sound.

**Will it reorder my day?**
Not unless you ask. It follows recording times by default.

**Can I use it for a multi-day trip?**
Yes. Upload all the days and ask for day labels or a title card per day.

## Related

- [/formats/vlog](/formats/vlog)
- [/how-to/vlog](/how-to/vlog)
- [/prompts/vlog-rough-cut](/prompts/vlog-rough-cut)
- [/for/vloggers](/for/vloggers)

---
title: "Long Podcast template"
description: The Long Podcast template tells Vyra's agent to keep the conversation in order, switch angles on who's talking, clean up dead air, and find clips by topic.
updated: 2026-09-24
category: templates
facts:
  - "Best for: Podcasts, interviews, panels, two-person calls"
  - "Length: 15-120 minutes for the episode, 30-90 seconds for clips"
  - "Aspect: 16:9 for the episode, 9:16 for clips"
  - "Captions: Off on the full episode, on for clips"
  - "Music: Intro and outro only, ducked under speech"
  - "Pairs with style: Vyra Default or Cinematic Film"
  - "Price: Included on every plan"
---

**Long Podcast is for recordings where the conversation is the point. The agent keeps the exchange in order, cuts between angles on the speaker, removes dead air but not thinking pauses, and uses the transcript to find clips.**

## What the template tells the agent

- Structure. Keep the episode in recorded order. Add a cold open only if you ask.
- Pacing. Remove long silences and restarts. Keep short natural pauses (TODO confirm default thresholds).
- Captions. None on the full episode. Phrase captions on clips, placed to clear the bottom UI on 9:16.
- Cameras. With two or more angles it syncs them by transcript and switches on who's talking. Screen shares come in when mentioned.
- Ending. Clean out on the last exchange, then outro music if you gave it one.

## Prompts that work with it

```
Sync the two camera angles and cut between them on whoever is speaking. Wide shot for the first 10 seconds and any moment both people laugh.
```

```
Find the three strongest 45-second moments in this episode for Shorts: a clear opinion, a story, and a practical tip. List them with timestamps before cutting.
```

```
Cut clip two as 9:16 with the speaker centered, word-by-word captions in white, and the guest's name as a lower third for the first 4 seconds.
```

## Pair it with a style

| Style | What changes |
| --- | --- |
| Vyra Default | Inter Bold captions, Montserrat Black titles, DM Serif Display accent. Palette Ink #171917, Paper #F7F6F2, Sky #8BBCDF, Lemon #F4DD45. Neutral, reads over any set. |
| Cinematic Film | Warmer grade and bigger serif titles (TODO confirm specifics). |

## When to pick a different template

- One speaker with a script. Use [/templates/short-talking-head](/templates/short-talking-head).
- Little speech, lots of movement. Use [/templates/vlog](/templates/vlog).
- A lecture with slides. Long Podcast still works. Ask for a split layout.

## FAQ

**Does it need a separate audio recording?**
No. If you have one, upload it and say "use the recorder audio."

**Can it clean up one guest's filler words and not the other's?**
Yes. Name the speaker.

**How do I get chapters?**
Ask for a topic list with timestamps.

## Related

- [/formats/podcast-clip](/formats/podcast-clip)
- [/prompts/podcast-clip-selection](/prompts/podcast-clip-selection)
- [/how-to/repurpose-long-form-to-shorts](/how-to/repurpose-long-form-to-shorts)
- [/for/podcasters](/for/podcasters)

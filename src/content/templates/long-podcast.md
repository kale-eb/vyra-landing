---
title: "Long Podcast template"
description: "The Long Podcast template tells Vyra's agent to treat a recording as a conversation: keep speakers in order, switch angles on who is talking, clean pauses without flattening the rhythm, and make clips findable by topic."
updated: 2026-09-24
category: templates
facts:
  - "Best for: Podcasts, interviews, panel recordings, two-person calls"
  - "Length: 15-120 minutes for the full episode, 30-90 seconds for clips"
  - "Aspect: 16:9 for the episode, 9:16 for clips"
  - "Captions: Off on the full episode by default, word-by-word or phrases on clips"
  - "Music: Intro and outro only, ducked under speech"
  - "Pairs with style: Vyra Default or Cinematic Film"
  - "Price: Included on every plan"
---

**Long Podcast is the template for recordings where the point is the conversation. It tells the agent to preserve the exchange, cut between angles on the speaker, remove dead air without removing thinking pauses, and treat the transcript as the map for clips.**

## What the template tells the agent

- Structure: keep the episode in recorded order. Add a cold open only if you ask for one, using a strong line from later in the conversation.
- Pacing: remove long silences and technical restarts. Keep short natural pauses so the conversation still breathes (TODO confirm default thresholds).
- Caption defaults: none on the full episode. On clips, phrase captions in the style's caption face, placed to clear the bottom UI on 9:16.
- B-roll behavior: multi-camera first. With two or more angles, it syncs them by transcript and switches on the active speaker. Inserts and screen shares appear when mentioned.
- Ending: a clean out on the last exchange, then outro music if provided.

## Prompts that work with it

```
Sync the two camera angles and cut between them on whoever is speaking. Wide shot for the first 10 seconds and for any moment both people laugh.
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
| Vyra Default | Inter Bold captions, Montserrat Black titles, DM Serif Display accent. Palette: Ink #171917, Paper #F7F6F2, Sky #8BBCDF, Lemon #F4DD45. Neutral, reads well over any set. |
| Cinematic Film | Warmer grade and larger serif titles for a more produced feel (TODO confirm specifics). |

## When to pick a different template

- One speaker with a script: use [/templates/short-talking-head](/templates/short-talking-head).
- A recording with little speech and a lot of movement: use [/templates/vlog](/templates/vlog).
- A lecture with slides: Long Podcast still works; ask for a split layout with the slides.

## FAQ

**Does it need a separate audio recording?**
No, but if you have one, upload it and say "use the recorder audio." It syncs by transcript.

**Can it remove one guest's filler words and not the other's?**
Yes. Name the speaker and the rule.

**How do I get chapters?**
Ask for a topic list with timestamps. Paste it into your show notes.

## Related

- [/formats/podcast-clip](/formats/podcast-clip)
- [/prompts/podcast-clip-selection](/prompts/podcast-clip-selection)
- [/how-to/repurpose-long-form-to-shorts](/how-to/repurpose-long-form-to-shorts)
- [/for/podcasters](/for/podcasters)

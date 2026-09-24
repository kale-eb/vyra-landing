---
title: 'Music prompts: tracks, ducking, fades'
description: >-
  A music prompt names the track or mood, the volume under speech and over
  b-roll as percentages, where it starts and stops, and how it fades. Say the
  numbers or the agent guesses them.
updated: '2026-09-24'
category: prompts
---

**A music prompt names the track or mood, the volume under speech and over b-roll as percentages, where the music starts and stops, and how it fades. Give the numbers, or the agent will guess them.**

## Minimal

```
Add a calm lo-fi track under the whole video, quiet enough that my voice is always clear.
```

## Standard

```
Add a calm lo-fi track under the whole video. Music at about 25% whenever I'm speaking, up to 70% during the b-roll sections. Fade out over the last 2 seconds.
```

## Full

```
Use the track I uploaded called "morning.mp3". Start it on the first frame. Hold it at 20% under every line I speak and raise it to 65% during the three b-roll sections where I am not talking. Duck it down over half a second when I start speaking, not instantly. Cut the music completely during the 4 seconds where I read the customer message at 0:41, then bring it back. Fade out over the last 2 seconds so the video ends on silence, not on a hard stop. Do not add any sound effects.
```

## What each part does

- "The track I uploaded called" pins one specific file instead of a library pick.
- "Start it on the first frame" sets the entry point so the agent does not add a cold open.
- "20% under every line" and "65% during b-roll" give two levels the agent can apply mechanically.
- "Duck over half a second" controls the ramp so speech does not feel like it slams the music down.
- "Cut the music completely during" marks the one moment that should be dry.
- "Fade out over the last 2 seconds" defines the ending.
- "Do not add any sound effects" keeps the agent from decorating.

## Fixes

| Symptom | Add to your next message |
| --- | --- |
| Music fights the voice | "Lower the music to 15% whenever I am speaking." |
| Music feels like it is pumping up and down | "Ramp the ducking over one full second instead of half a second." |
| Track starts mid-phrase | "Start the track from its beginning and trim the end, not the start." |
| Music too loud on b-roll | "Cap the b-roll level at 50%." |
| Wrong mood | "Swap to something slower, around 80 BPM, piano or acoustic, no drums." |
| Music ends with a hard cut | "Fade the music out over the last 3 seconds." |

## FAQ

**Can I use my own track?**
Yes. Upload it to the project and name the file in the prompt. The agent will place it and duck it to your numbers.

**What percentages sound right?**
For a talking video, 15% to 25% under speech and 50% to 70% over b-roll is a safe starting range. Adjust one number at a time after listening on phone speakers.

**How do I sync the cuts to the music instead of just adding it?**
That is a different prompt. See /prompts/beat-sync for cutting on beats.

## Related

- /prompts/beat-sync
- /prompts/vlog-music-and-pacing
- /how-to/choose-music
- /features/beat-sync

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.

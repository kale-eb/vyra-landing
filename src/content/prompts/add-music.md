---
title: 'Music prompts: tracks, ducking, fades'
description: "A music prompt names the track or mood, the volume under speech and over b-roll as percentages, where it starts and stops, and how it fades."
updated: '2026-09-24'
category: prompts
---

**Name the track, give two volume numbers (under speech, over b-roll), and say where it starts, stops, and fades.**

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

Naming the file stops a library pick. Two percentages give it levels it can apply every time. "Over half a second" sets the ducking speed. "Cut completely during" marks the one dry moment. "No sound effects" keeps it from decorating.

## Fixes

| Symptom | Add to your next message |
| --- | --- |
| Music fights the voice | "Lower the music to 15% whenever I am speaking." |
| Pumping up and down | "Ramp the ducking over one full second." |
| Starts mid-phrase | "Start the track from its beginning and trim the end." |
| Wrong mood | "Something slower, around 80 BPM, piano, no drums." |

## FAQ

**Can I use my own track?**
Yes. Upload it and name the file. Licensing is on you.

**What percentages sound right?**
15 to 25% under speech, 50 to 70% over b-roll. Check on phone speakers.

## Related

- /prompts/beat-sync
- /prompts/vlog-music-and-pacing
- /how-to/choose-music
- /features/beat-sync

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give numbers, not adjectives. "Pauses over half a second," not "snappy."
4. Say what not to add. Zooms, transitions, music, effects.
5. One fix per follow-up message. Ask for a list of changes with timestamps if you want to check.

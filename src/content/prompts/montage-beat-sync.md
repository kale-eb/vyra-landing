---
title: "Montage beat sync prompts: one clip per beat, velocity that changes"
description: "A montage beat sync prompt names the track, the cut rate per section, which clips to favor, and where the speed should change, so the montage has shape."
updated: '2026-09-24'
category: prompts
---

**Name the track, the cut rate per section, which clips go where, and where the speed changes. One clip per beat for 30 seconds is a metronome. Fast, slow, fast is a montage.**

Minimal:
```
Build a 30-second montage from these clips, cut to the beat of the uploaded track.
```

Standard:
```
Make a 30-second 9:16 montage from the 40 clips in this project, synced to the uploaded track. In the verses, one cut every two beats. In the chorus, one cut every beat. Start on the first downbeat. Favor clips with movement and faces over static shots. End on the last hit and hold the final frame for 1 second.
```

Full:
```
Build a 30-second vertical montage from the painting clips, synced to the uploaded track. Intro (0 to 4 seconds) one shot, the wide of the studio, hold it. Verse 1 (4 to 12) one cut every two beats, close-ups of the brush on canvas. Build (12 to 16) one cut every beat, tightening. Chorus (16 to 26) one cut every beat, alternate a finished painting with the process shot that made it. Outro (26 to 30) one shot, me stepping back from the wall of paintings, hold to the end. Every cut lands on a beat, never between. No clip repeats. No transitions, no zooms, no speed ramps. Keep the original audio off. Give me a list of which clip is at which timestamp.
```

## What each part does

Cut rates per section are the speed curve. Naming what goes in each section tells it which of the 40 clips belong where. "Every cut on a beat, never between" is the sync rule. "No clip repeats" stops padding. The clip list at the end is how you check it.

## Fixes

- Feels like a metronome. "Verses at one cut every four beats. Chorus stays at one per beat."
- Cuts between beats. "Snap every cut to the nearest beat. List any that moved more than 100 milliseconds."
- Wrong clips in the chorus. "Chorus is finished paintings only."
- Ends abruptly. "Hold the last shot 1.5 seconds and fade the music over the last second."

## FAQ

**How many clips for 30 seconds?**
At one cut per beat on a 120 BPM track, a 10-second chorus alone uses about 20 clips. Forty is comfortable with no repeats.

**Can it choose which clips go where?**
Yes, if you describe the content per section. Otherwise it picks by variety, which is fine but not authored.

## Related

- /formats/montage
- /formats/beat-synced-edit
- /prompts/beat-sync
- /how-to/choose-music

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give numbers, not adjectives. "Pauses over half a second," not "snappy."
4. Say what not to add. Zooms, transitions, music, effects.
5. One fix per follow-up message. Ask for a list of changes with timestamps if you want to check.

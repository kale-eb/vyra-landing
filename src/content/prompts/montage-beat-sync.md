---
title: "Montage beat sync prompts: one clip per beat, velocity that changes"
description: "A montage beat sync prompt names the track, the cut rate per section (verse, chorus), which clips to favor, and where the velocity should change, so the montage has shape instead of a metronome."
updated: '2026-09-24'
category: prompts
---

**A montage beat sync prompt names the track, the cut rate per section, which clips to favor, and where the velocity should change. A montage cut at one clip per beat for 30 seconds is a metronome. Fast, slow, fast is a montage.**

Minimal:
```
Build a 30-second montage from these clips, cut to the beat of the uploaded track.
```

Standard:
```
Make a 30-second 9:16 montage from the 40 clips in this project, synced to the uploaded track. Verses: one cut every two beats. Chorus: one cut every beat. Start on the first downbeat. Favor clips with movement and faces over static shots. End on the last hit and hold the final frame for 1 second.
```

Full:
```
Build a 30-second vertical montage from the painting clips, synced to the uploaded track. Timing: intro (0 to 4 seconds) one shot, the wide of the studio, hold it. Verse 1 (4 to 12) one cut every two beats, close-ups of the brush on canvas. Build (12 to 16) one cut every beat, tightening. Chorus (16 to 26) one cut every beat, alternate a finished painting with the process shot that made it. Outro (26 to 30) one shot, me stepping back from the wall of paintings, hold to the end. Every cut lands on a beat, never between. No clip repeats. No transitions, no zooms, no speed ramps. Keep the original audio off. Give me a list of which clip is at which timestamp.
```

## What each part does

Section-by-section cut rates are the velocity curve; that is what separates a montage from a slideshow. Naming the content of each section ("close-ups in the verse, finished pieces in the chorus") tells the agent which of the 40 clips belong where, using its scene descriptions. "Every cut lands on a beat, never between" is the sync rule. "No clip repeats" prevents padding. The ban list stops the agent adding transitions to hide cuts that should be hard. The final clip list is how you verify it.

## Fixes

- Feels like a metronome: "Slow the verses to one cut every four beats. Keep the chorus at one per beat."
- Cuts land between beats: "Snap every cut to the nearest beat. List any that moved more than 100 milliseconds."
- Wrong clips in the chorus: "Chorus should be finished paintings only. Move the process shots to the verse."
- Repeated clips: "Replace the repeated clip at 0:19 with one not yet used."
- Ending is abrupt: "Hold the last shot 1.5 seconds and fade the music over the last second."

## FAQ

**Does Vyra detect the beats itself?**
Yes, from the uploaded track. You set the rate per section; it places the cuts.

**How many clips do I need for 30 seconds?**
At one cut per beat on a 120 BPM track, the chorus alone uses about 20 clips in 10 seconds. Forty clips is comfortable for 30 seconds with no repeats.

**Can it choose which clips go where?**
Yes, if you describe the content per section. Without that, it will pick by visual variety, which is fine but not authored.

## Related

- /formats/montage
- /formats/beat-synced-edit
- /prompts/beat-sync
- /how-to/choose-music

## Rules that apply to every prompt

1. One target per prompt. Length, platform, purpose.
2. Quote the exact line when you mean a specific moment.
3. Give thresholds ("pauses over half a second") instead of adjectives ("snappy").
4. Say what NOT to do when the agent tends to over-decorate.
5. One correction per follow-up message.
6. Ask for a timestamped list of changes when you want to verify.
7. Name what to copy from a reference. Attaching it is not an instruction.

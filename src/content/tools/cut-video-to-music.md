---
title: "Cut a video to music: land every edit on the beat"
description: "Upload a track, describe the energy you want, and Vyra places cuts on the beats and onsets of the song, with the clip audio ducked or muted underneath."
updated: 2026-09-24
category: tools
facts:
  - "Best for: Recaps, montages, product reveals, before-and-after edits, art timelapses"
  - "Input: Your clips plus a music track you have the rights to"
  - "Output: MP4 up to 4K, or WebM up to 1080p"
  - "Time: Minutes after processing (TODO confirm)"
  - "Works with: Built-in chat, Claude, ChatGPT, Cursor over MCP"
  - "Price: Free to start, plans from $24/mo"
---

**Cutting a video to music means every edit point sits on a beat, a bar, or a hit in the track, so the picture feels like it belongs to the sound. Vyra reads the track's rhythm data and does the placement; you describe the feel.**

## How it works

1. Upload the clips and the track.
2. Describe the structure: where the song builds, where it drops, how dense the cuts should be in each part.
3. The agent lays the clips out on the beat grid and sets clip audio volume as you asked.
4. Review and adjust individual cuts or sections by prompt.
5. Export with a social preset.

## What you can control

| Setting | Options |
| --- | --- |
| Density | Cuts per beat or per bar, different per section |
| Clip audio | Muted, ducked to a percentage under the music, or kept |
| Music volume | Keyframed fades in and out, ducking under speech |
| Order | Chronological, energy-matched, or a named list |
| Speed | Speed ramps on hits using time remapping |
| Duration | Trim the song to a target length that ends on a hit |

## Prompts to paste

```
Cut the clips to this song. Slow and wide in the intro, one cut per beat once the drums come in, and end on the final hit at 0:28. Mute the clip audio.
```

```
Keep my voice from the clips on top and duck the music to 20 percent whenever I am speaking, back to 80 percent in between.
```

```
Speed ramp the skateboard clip into the drop: slow for half a second, then snap to full speed on the beat.
```

## When to use something else

- You want a pre-made "beat template" that also applies stock transitions and effects. CapCut and Filmora ship those.
- The track has no steady beat. Ask Vyra to cut on phrases or specific timestamps instead.
- You do not have rights to the song. Vyra does not provide licensed music; sound effects come from Freesound and stock footage from Pexels.

## FAQ

**Does it detect the beat itself?**
Yes. The agent uses BPM, beat positions, and onsets from the audio analysis.

**Can I mix speech and music?**
Yes. Volume is keyframable per item from 0 to 200 percent, so music can duck under any spoken section.

**How short can the result be?**
As short as you ask. Say the target length and which hit to end on.

**Can Claude do this over MCP?**
Yes. The rhythm data and the timeline tools are available to any connected assistant.

## Related

- /tools/beat-sync-video-editor
- /features/beat-sync
- /how-to/choose-music
- /tools/add-music-to-video

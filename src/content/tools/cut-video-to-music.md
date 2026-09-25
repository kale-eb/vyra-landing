---
title: "Cut a video to music: land every edit on the beat"
description: Upload a track, say how you want the energy to move, and Vyra puts the cuts on the beats with the clip audio ducked or muted underneath.
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

**Every cut sits on a beat, a bar, or a hit in the track, so the picture feels like it belongs to the sound. Vyra reads the rhythm and places the cuts. You describe the feel.**

## How it works

1. Upload the clips and the track.
2. Say where the song builds, where it drops, and how dense the cuts should be in each part.
3. The agent lays the clips out on the beat grid and sets the clip audio how you asked.
4. Adjust a cut or a section by prompt.
5. Export with a social preset.

## What you can control

| Setting | Options |
| --- | --- |
| Density | Cuts per beat or per bar, different per section |
| Clip audio | Muted, ducked under the music, or kept |
| Music volume | Keyframed fades, ducking under speech |
| Order | Chronological, energy-matched, or a list you name |
| Speed | Speed ramps on hits |
| Duration | Trim the song to a length that ends on a hit |

## Prompts to paste

```
Cut the clips to this song. Slow and wide in the intro, one cut per beat once the drums come in, and end on the final hit at 0:28. Mute the clip audio.
```

```
Keep my voice from the clips on top and duck the music to 20 percent whenever I'm speaking, back to 80 percent in between.
```

```
Speed ramp the skateboard clip into the drop. Slow for half a second, then snap to full speed on the beat.
```

## When to use something else

- You want a beat template with stock transitions and effects baked in. CapCut and Filmora ship those.
- The track has no steady beat. Ask Vyra to cut on phrases or timestamps instead.
- You don't have rights to the song. Vyra doesn't provide licensed music. Sound effects come from Freesound, stock footage from Pexels.

## FAQ

**Does it detect the beat itself?**
Yes. BPM, beat positions, and onsets from the audio analysis.

**Can I mix speech and music?**
Yes. Volume is keyframable per item, so music can drop under any spoken part.

**How short can the result be?**
As short as you want. Say the length and which hit to end on.

## Related

- /tools/beat-sync-video-editor
- /features/beat-sync
- /how-to/choose-music
- /tools/add-music-to-video

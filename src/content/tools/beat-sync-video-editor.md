---
title: "Beat sync video editor that cuts your footage to the music automatically"
description: "Vyra reads BPM, beat positions, and onsets from any track you upload, then places cuts on the beat and holds or speeds clips to match, all from a plain-language request."
updated: 2026-09-24
category: tools
facts:
  - "Best for: Montages, travel recaps, hype reels, product cinematics, art timelapses"
  - "Input: Your clips plus an uploaded music track (MP3, WAV, or a video with the track)"
  - "Output: MP4 up to 4K, or WebM up to 1080p"
  - "Time: A few minutes after the track and clips are processed (TODO confirm)"
  - "Works with: Built-in chat, Claude, ChatGPT, Cursor over MCP"
  - "Price: Free to start, plans from $24/mo"
---

**A beat sync editor places cuts on the beats of a song instead of on a stopwatch. Vyra analyzes the track's BPM, beat positions, and onsets, then assembles your clips so each cut lands on a hit, with the density you ask for.**

## How it works

1. Upload the clips and the track. Vyra analyzes the audio's rhythm data while it processes the footage.
2. Tell the chat what you want: which clips, how many cuts per beat, where the drop is, how to start and end.
3. The agent builds the sequence on the timeline, one clip per beat or per bar as requested.
4. Scrub the result. Adjust with follow-ups such as "slower in the verse" or "hold the last shot for two seconds."
5. Export with the Instagram/TikTok or YouTube Shorts preset.

## What you can control

| Setting | Options |
| --- | --- |
| Cut density | One clip per beat, per two beats, per bar, or different densities per section |
| Section behavior | Fast in the chorus, slow in the verse, or any pattern you describe |
| Start point | First downbeat, first vocal, or a timestamp |
| Ending | Land on the last hit, hold a final shot, fade or hard stop |
| Clip order | Chronological, by energy, or a list you name |
| Speed | Time remapping for speed ramps into and out of hits |

## Prompts to paste

```
Cut this montage to the beat of the attached track. One clip per beat in the chorus, one clip every two beats in the verses. Start on the first downbeat, end on the last hit, then hold the final shot for one second.
```

```
Use only the outdoor clips. Put the widest shots on the strongest beats and keep any clip with a face for at least a full bar.
```

```
Build a 20-second version for Reels that ends exactly on the drop at 0:19. Straight cuts only, no transitions.
```

## When to use something else

- You want a one-tap beat template with stock effects baked in. CapCut and Filmora have template libraries built around that. Vyra works from a description instead of a template.
- Your track has no clear beat, like ambient or spoken word. Cut to phrases or onsets instead, and say so in the prompt.
- You need the music licensed for commercial use. Vyra does not license music; bring a track you have rights to.

## FAQ

**Does it work for every genre?**
It works where beats are detectable. Hip hop, pop, EDM, and rock are straightforward. Jazz, classical, and ambient need you to describe where the cuts should fall.

**Can I keep the original clip audio under the music?**
Yes. Volume is adjustable per item from 0 to 200 percent and can be keyframed, so you can duck the music under speech or mute the clip audio entirely.

**Can I change a single cut without redoing everything?**
Yes. Ask for the specific change, like "swap the third clip for the one on the bridge," and the rest stays.

**Does the external assistant get the same beat data?**
Yes. Over MCP, Claude, ChatGPT, or Cursor can read the rhythm analysis and place cuts on it.

## Related

- /features/beat-sync
- /prompts/beat-sync
- /tools/cut-video-to-music
- /formats/beat-synced-edit

---
title: "Add music to a video with ducking, fades, and sound effects"
description: Vyra puts a track under your footage, dips it under your voice with keyframed volume, and pulls sound effects from Freesound when you ask.
updated: 2026-09-24
category: tools
facts:
  - "Best for: Vlogs, montages, talking heads with a bed, product videos, recaps"
  - "Input: Your footage plus a music file you have rights to"
  - "Output: MP4 up to 4K, or WebM up to 1080p, with the mix baked in"
  - "Time: Seconds to place and mix (TODO confirm)"
  - "Works with: Built-in chat, Claude, ChatGPT, Cursor over MCP"
  - "Price: Free to start, plans from $24/mo"
reels:
  - DNjX9oFO9xl
---

**Adding music is easy. Mixing it so your voice stays clear is the part that eats time. Vyra places the track, ducks it under speech with keyframed volume, fades it in and out, and adds sound effects from Freesound if you want them.**

## How it works

1. Upload the footage and the track.
2. Say where the music goes, how loud under speech versus b-roll, and how it should end.
3. The agent places the track and keyframes the volume for ducking and fades.
4. Ask for sound effects by name. The agent searches Freesound and places them.
5. Export.

## What you can control

| Setting | Options |
| --- | --- |
| Volume | 0 to 200 percent per item, keyframed |
| Ducking | Music level under speech versus in between, as percentages |
| Fades | In, out, or at section changes |
| Placement | Whole video, a section, or from a timestamp |
| Sound effects | Free sound effects from Freesound, previewed first |
| Stock | Videos and photos from Pexels if you need cutaways |

## Prompts to paste

```
Add a calm lo-fi track under the whole video. Music at about 25 percent whenever I'm speaking, up to 70 percent during the b-roll. Fade out over the last 2 seconds.
```

```
Start the music on the first wide shot, not on my intro. Keep my voice on top everywhere.
```

```
Add a soft whoosh on each title card and a camera shutter when the photo appears at 0:22.
```

## When to use something else

- You need a licensed music library in the tool. Vyra doesn't have one. Bring a track you have rights to.
- You want AI-generated music. Vyra places music, it doesn't make it.
- You need a real multitrack mix with EQ and compression. Do that in an audio tool and bring the result back.

## FAQ

**Does it lower the music when I talk?**
Ask for it in percentages and the agent keyframes it.

**Can I use a song I found online?**
Only if you have rights to it. Platforms mute videos with unlicensed music.

**Where do the sound effects come from?**
Freesound, searchable from the Audio panel.

## Related

- /prompts/add-music
- /how-to/choose-music
- /tools/cut-video-to-music
- /features/beat-sync

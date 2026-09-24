---
title: "Add music to a video with ducking, fades, and sound effects"
description: "Vyra adds a track under your footage, keyframes the volume so music dips under speech, and pulls sound effects from Freesound, all from a plain-language request."
updated: 2026-09-24
category: tools
facts:
  - "Best for: Vlogs, montages, talking heads with a bed, product videos, recaps"
  - "Input: Your footage plus a music file you have rights to"
  - "Output: MP4 up to 4K, or WebM up to 1080p, with the mix baked in"
  - "Time: Seconds to place and mix (TODO confirm)"
  - "Works with: Built-in chat, Claude, ChatGPT, Cursor over MCP"
  - "Price: Free to start, plans from $24/mo"
---

**Adding music to a video is easy; mixing it so speech stays clear is the part that takes time. Vyra places the track, ducks it under your voice with keyframed volume, fades it in and out, and can add sound effects from Freesound on request.**

## How it works

1. Upload the footage and the track.
2. Say where the music goes, how loud it should be under speech versus b-roll, and how it should end.
3. The agent places the track on an audio track and keyframes the volume for ducking and fades.
4. Ask for sound effects by name; the agent searches Freesound and places them.
5. Export.

## What you can control

| Setting | Options |
| --- | --- |
| Volume | 0 to 200 percent per item, keyframed for fades and ducking |
| Ducking | Music level under speech versus in between, as percentages |
| Fades | In, out, or at section changes |
| Placement | Whole video, a section, or from a timestamp |
| Sound effects | Free sound effects from Freesound, previewed before adding |
| Stock | Videos and photos from Pexels if you need cutaways for the music section |

## Prompts to paste

```
Add a calm lo-fi track under the whole video. Music at about 25 percent whenever I am speaking, up to 70 percent during the b-roll sections. Fade out over the last 2 seconds.
```

```
Start the music on the first wide shot, not on my intro. Keep my voice on top everywhere.
```

```
Add a soft whoosh sound effect on each title card and a camera shutter when the photo appears at 0:22.
```

## When to use something else

- You need a licensed music library inside the tool. Vyra does not provide one; bring a track you have rights to.
- You want AI-generated music. Vyra places music; it does not compose it.
- You need a detailed multitrack mix with EQ and compression. Finish the mix in an audio tool and bring the result back.

## FAQ

**Does it lower the music automatically when I talk?**
Ask for it in percentages and the agent keyframes the volume to duck under speech.

**Can I use a song I found online?**
Only if you have rights to it. Platforms can mute or remove videos with unlicensed music.

**Where do the sound effects come from?**
Freesound, searchable from the Audio panel, with previews before you add them.

**Can Claude or ChatGPT mix the audio?**
Yes. Volume keyframes and the sound effect search are available over MCP.

## Related

- /prompts/add-music
- /how-to/choose-music
- /tools/cut-video-to-music
- /features/beat-sync

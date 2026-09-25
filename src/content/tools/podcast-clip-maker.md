---
title: "Podcast clip maker: find the 45 seconds worth posting"
description: Vyra searches the transcript of a long recording for the strongest moments, cuts them into vertical clips with captions, and syncs camera angles by transcript.
updated: 2026-09-24
category: tools
facts:
  - "Best for: Podcasts, interviews, panels, long YouTube episodes"
  - "Input: A long recording, one or several camera angles"
  - "Output: 30 to 60 second vertical clips, MP4 up to 4K"
  - "Time: Minutes per clip once the episode is processed (TODO confirm)"
  - "Works with: Built-in chat, Claude, ChatGPT, Cursor over MCP"
  - "Price: Free to start, plans from $24/mo"
---

**A podcast clip maker pulls short moments out of a long conversation. Vyra searches the transcript for the exchange you describe, or suggests candidates with reasons, then builds the clip with captions and the right camera angle.**

## How it works

1. Upload the episode. If you have several angles, upload each one. Vyra syncs them by matching the transcripts.
2. Ask for candidates ("list the five strongest 45-second moments with timestamps and why") or point at a topic ("the part where she explains pricing").
3. Pick one. The agent cuts it, reframes to vertical, and switches angles on who's talking.
4. Add phrase captions and a title that says the claim.
5. Export with the Instagram/TikTok preset.

## What you can control

| Setting | Options |
| --- | --- |
| Selection | By topic, by quote, by speaker, or ranked candidates from the agent |
| Length | Any target, usually 30 to 60 seconds |
| Angles | Single camera, or multicam switching on the speaker |
| Captions | Phrase or word-by-word, speaker-colored if you ask |
| Framing | Speaker centered, split for two people, PiP for screen shares |
| Opening | Start on the strongest line, not the setup |

## Prompts to paste

```
Find every moment where we talk about pricing. List them with timestamps and a one-line summary, then cut the strongest one into a 45-second vertical clip that opens on the boldest sentence.
```

```
Sync the two camera angles by transcript. In the clip from 41:10 to 41:55, switch to whoever is speaking, and use the wide shot when we both laugh.
```

```
Add 3-word captions, white, lower third, and put a title at the top for the first 3 seconds that says "Stop underpricing".
```

## When to use something else

- You want dozens of auto-generated clips with a virality score and a scheduler. Opus Clip and Vizard are built for that. Vyra is built for choosing and finishing clips in one place.
- You need to post straight from the tool. Vyra exports files.
- Audio-only recording. Vyra can cut it, but you'll need a visual layer like a waveform or photos.

## FAQ

**How does it find the good parts?**
It reads the whole transcript and the scene descriptions, so it can search a topic or a quote and rank moments by how self-contained they are.

**Does multicam sync need timecode?**
No. It matches the transcripts.

**Can I get several clips from one episode?**
Yes. Ask for a list, then cut them one at a time or all at once.

## Related

- /formats/podcast-clip
- /prompts/podcast-clip-selection
- /tools/reframe-video-to-vertical
- /compare/vyra-vs-opus-clip

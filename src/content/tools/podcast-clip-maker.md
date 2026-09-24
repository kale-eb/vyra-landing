---
title: "Podcast clip maker: find the 45 seconds worth posting"
description: "Vyra searches the transcript of a long recording for the strongest moments, cuts them into vertical clips with captions, and syncs multiple camera angles by matching transcripts."
updated: 2026-09-24
category: tools
facts:
  - "Best for: Podcasts, interviews, panel recordings, long YouTube episodes"
  - "Input: A long recording, one or several camera angles"
  - "Output: 30 to 60 second vertical clips, MP4 up to 4K"
  - "Time: Minutes per clip once the episode is processed (TODO confirm)"
  - "Works with: Built-in chat, Claude, ChatGPT, Cursor over MCP"
  - "Price: Free to start, plans from $24/mo"
---

**A podcast clip maker pulls short, self-contained moments out of a long conversation. Vyra does it by searching the transcript for the exchange you describe, or by proposing candidates with reasons, then building the clip with captions and the right camera angle.**

## How it works

1. Upload the episode. If you recorded several angles, upload each; Vyra can sync them by matching transcripts.
2. Ask for candidates ("list the five strongest 45-second moments with timestamps and why") or point to a topic ("the part where she explains pricing").
3. Pick one. The agent cuts it, reframes to vertical, and switches angles on the speaker if you have multiple.
4. Add phrase captions and a title that states the claim in the clip.
5. Export with the Instagram/TikTok preset.

## What you can control

| Setting | Options |
| --- | --- |
| Selection | By topic, by quote, by speaker, or ranked candidates from the agent |
| Length | Any target, commonly 30 to 60 seconds |
| Angles | Single camera, or multicam switching on the active speaker |
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

- You want a tool that auto-generates dozens of clips with a virality score and a scheduler. Opus Clip and Vizard are built around that pipeline; Vyra is built around choosing and finishing clips in one place.
- You need to publish directly to every platform from the tool. Vyra exports files; scheduling happens elsewhere.
- Your recording is audio-only. Vyra can still cut it, but you will need a visual layer such as a waveform graphic or photos.

## FAQ

**How does it find the good parts?**
It reads the full transcript and the visual analysis, so it can search for a topic or a quote and rank moments by how self-contained and strong they are.

**Does multicam sync need timecode?**
No. Vyra aligns angles by matching their transcripts.

**Can I get several clips from one episode?**
Yes. Ask for a list, then cut them one at a time or ask for all of them.

**Can Claude run this from MCP?**
Yes. Transcript search, cutting, captions, and export are all available to a connected assistant.

## Related

- /formats/podcast-clip
- /prompts/podcast-clip-selection
- /tools/reframe-video-to-vertical
- /compare/vyra-vs-opus-clip

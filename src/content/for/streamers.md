---
title: "Vyra for streamers: turn VODs into clips, highlight reels, and Shorts"
description: "Vyra turns multi-hour stream VODs into captioned clips, highlight reels, and vertical Shorts by searching the transcript and the visuals for the moments worth posting, then reframing them for each platform."
updated: 2026-09-24
category: for
facts:
  - "Best for: Twitch, YouTube, and Kick streamers and the editors who clip for them"
  - "Typical footage: 2-6 hour VODs, facecam plus gameplay, Discord call audio"
  - "Typical output: 30-60 second clips, 5-10 minute highlight reels, 9:16 Shorts with facecam on top"
  - "Time saved: A 4-hour VOD to ten captioned clips in one conversation"
  - "Works with: Built-in chat, Claude, ChatGPT, Cursor over MCP"
  - "Price: Free to start, plans from $24/mo"
---

**Clipping a stream is a search problem. Vyra transcribes the whole VOD and analyzes what is on screen, so "find the moment chat lost it" or "every clutch in the last hour" returns timestamps you can cut from in the same message.**

## What you make

- Vertical Shorts with facecam over gameplay: [/formats/podcast-clip](/formats/podcast-clip)
- Highlight reels: [/formats/montage](/formats/montage)
- Reaction clips: [/formats/talking-head](/formats/talking-head)
- Stream recap and announcement videos: [/formats/explainer](/formats/explainer)

## Your three most-used prompts

Find and clip:
```
Find the five loudest reactions in this VOD, where I shout or laugh for more than two seconds. For each, cut a 30-second 9:16 clip that starts 8 seconds before the reaction. Put my facecam in the top third and the gameplay below. Word-by-word captions for my speech.
```

Highlight reel:
```
Build a 6-minute highlight reel from the VOD: the best plays and the funniest chat moments, in the order they happened. Add a short title card with the game name at the start. Keep the original audio, no music.
```

Reframe:
```
Take the clip from 1:42:10 to 1:42:55 and make a 9:16 version. Crop the gameplay to the center of the action and keep the facecam on top. Add captions in yellow, bold, with a black outline.
```

## A typical workflow

1. Upload the VOD. Vyra transcribes it and analyzes the visuals.
2. Ask for candidate moments by description. Review the list of timestamps.
3. Cut clips from the ones you want.
4. Reframe to 9:16 with a layout for facecam and gameplay.
5. Export the batch.

## What Vyra does that matters for you

- Long-file search by transcript and by what is on screen.
- Layouts for facecam plus gameplay, including picture-in-picture and stacked grids.
- Batch clips from one VOD in one conversation.
- Bring your own Claude or ChatGPT over MCP if your editor already works that way.

## What it does not do

- It does not record or capture your stream. Bring the VOD.
- It does not read your chat log. Describe the moment or give a timestamp.

## Example

Example creator: TODO

## FAQ

**How long can the VOD be?**
Long files are supported, but work in sections if the browser gets heavy. Ask for clips by time range.

**Can it keep my overlay and alerts?**
Yes. It edits the recorded frame as-is. Crop them out if you do not want them.

**Can a separate editor run it for me?**
Yes. Share the project and they describe the clips they want.

## Related

- [/how-to/repurpose-long-form-to-shorts](/how-to/repurpose-long-form-to-shorts)
- [/prompts/podcast-clip-selection](/prompts/podcast-clip-selection)
- [/features/footage-understanding](/features/footage-understanding)
- [/for/youtube-creators](/for/youtube-creators)

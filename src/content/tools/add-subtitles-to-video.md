---
title: "Add subtitles to a video automatically from the transcript"
description: "Vyra transcribes your video on upload and turns the transcript into styled subtitles you can restyle, restrict to a time range, or fix line by line."
updated: 2026-09-24
category: tools
facts:
  - "Best for: Talking head, podcast, tutorial, and vlog videos with clear speech"
  - "Input: Any MP4, MOV, or phone video with speech"
  - "Output: MP4 up to 4K, or WebM up to 1080p, subtitles burned in"
  - "Time: A few minutes after upload for a 10-minute clip (TODO confirm)"
  - "Works with: Built-in chat, Claude, ChatGPT, Cursor over MCP"
  - "Price: Free to start, plans from $24/mo"
---

**Adding subtitles in Vyra means uploading a video, letting the transcript generate automatically, and applying a caption style. No retyping, no timing by hand, and every word stays editable on the timeline.**

## How it works

1. Upload the video. Vyra transcribes it with Deepgram, thumbnails it, and analyzes what is on screen while it processes.
2. Open the Captions panel in the left sidebar or type "add subtitles to the whole video" in the chat.
3. Pick an AI caption template, or scroll to Manual Captions and set your own font, size, color, stroke, and shadow.
4. Set a time range if you only want subtitles on part of the video, then generate.
5. Scrub the timeline, fix any word that came through wrong, and export.

## What you can control

| Setting | Options |
| --- | --- |
| Caption mode | AI template with emphasis detection, or manual |
| Render style | Default, highlight active word, word-by-word, slide-up, slide-left |
| Words per caption | Max words and max characters per caption |
| Line breaks | Break on punctuation, split on conjunctions |
| Type | Font family, weight, size, color, fill, decoration, stroke, shadow |
| Range | Whole video or a start and end time |
| Export | MP4 H.264 up to 4K or WebM VP8 up to 1080p |

## Prompts to paste

```
Add subtitles to the whole video. Phrases of 3 to 5 words, white bold text with a thin black outline, centered in the lower third, no animation.
```

```
Subtitle only the section from 0:00 to 0:45. Keep the text off my face and clear of the bottom 15 percent of the frame so the TikTok UI does not cover it.
```

```
The caption at 0:12 should say "gesso", not "jesso". Fix that one and leave everything else as it is.
```

## When to use something else

- You need subtitles as a separate SRT file for YouTube's caption track rather than burned in. Export from a tool that writes SRT, or ask Vyra to produce the transcript text and format it yourself (TODO confirm SRT export).
- The audio is mostly music with no speech. There is nothing to transcribe, so use text overlays instead of subtitles.
- You need translated subtitles in another language. Translation is not documented in Vyra's help docs, so a dedicated translation tool is safer for that step (TODO confirm).

## FAQ

**Do I have to type anything?**
No. The transcript is generated on upload. You only edit words the transcription got wrong.

**Can I change the style after generating?**
Yes. Captions are timeline items. Select them and change the font, color, or position, or ask the chat to restyle them.

**Will subtitles cover the TikTok or Reels interface?**
Only if you place them there. Ask for them in the lower third above the bottom 15 percent, or set the position manually.

**Does this work with an external AI like Claude?**
Yes. Over MCP, Claude, ChatGPT, or Cursor can read the transcript and add captions with the same controls.

## Related

- /tools/auto-caption-generator
- /features/ai-captions
- /prompts/captions
- /how-to/choose-captions

---
title: "Add subtitles to a video automatically from the transcript"
description: Vyra transcribes your video on upload and turns the transcript into subtitles you can restyle, limit to a time range, or fix word by word.
updated: 2026-09-24
category: tools
facts:
  - "Best for: Talking head, podcast, tutorial, and vlog videos with clear speech"
  - "Input: Any MP4, MOV, or phone video with speech"
  - "Output: MP4 up to 4K, or WebM up to 1080p, subtitles burned in"
  - "Time: A few minutes after upload for a 10-minute clip (TODO confirm)"
  - "Works with: Built-in chat, Claude, ChatGPT, Cursor over MCP"
  - "Price: Free to start, plans from $24/mo"
reels:
  - DdcjJBPva-m
---

**Upload a video, let the transcript generate, pick a caption style. No retyping, no timing by hand. Every word stays editable on the timeline.**

## How it works

1. Upload the video. Vyra transcribes it and looks at what's on screen while it processes.
2. Open the Captions panel, or type "add subtitles to the whole video" in the chat.
3. Pick an AI caption template, or use Manual Captions to set your own font, size, color, stroke, and shadow.
4. Set a time range if you only want subtitles on part of it.
5. Fix any wrong words and export.

## What you can control

| Setting | Options |
| --- | --- |
| Caption mode | AI template with emphasis detection, or manual |
| Render style | Default, highlight active word, word-by-word, slide-up, slide-left |
| Words per caption | Max words and max characters |
| Line breaks | Break on punctuation, split on conjunctions |
| Type | Font family, weight, size, color, fill, decoration, stroke, shadow |
| Range | Whole video or a start and end time |
| Export | MP4 up to 4K or WebM up to 1080p |

## Prompts to paste

```
Add subtitles to the whole video. Phrases of 3 to 5 words, white bold text with a thin black outline, centered in the lower third, no animation.
```

```
Subtitle only 0:00 to 0:45. Keep the text off my face and clear of the bottom 15 percent so the TikTok UI doesn't cover it.
```

```
The caption at 0:12 should say "gesso", not "jesso". Fix that one and leave everything else.
```

## When to use something else

- You need an SRT file for YouTube's caption track instead of burned-in subtitles (TODO confirm SRT export).
- The audio is all music, no speech. Use text overlays instead.
- You need subtitles in another language. Translation isn't in Vyra's docs yet (TODO confirm).

## FAQ

**Do I have to type anything?**
No. You only fix words the transcription got wrong.

**Can I change the style after generating?**
Yes. Select the captions and change the font, color, or position, or ask the chat.

**Will subtitles cover the TikTok UI?**
Only if you put them there. Ask for the lower third above the bottom 15 percent.

## Related

- /tools/auto-caption-generator
- /features/ai-captions
- /prompts/captions
- /how-to/choose-captions

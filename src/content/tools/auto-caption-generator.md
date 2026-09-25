---
title: "Auto caption generator with animated styles and word-by-word emphasis"
description: Vyra reads your transcript, marks the phrases that matter, and renders captions in animated or manual styles you control down to the stroke.
updated: 2026-09-24
category: tools
facts:
  - "Best for: Short-form talking head, UGC, and tutorial clips for TikTok, Reels, and Shorts"
  - "Input: Any video with speech"
  - "Output: Burned-in captions in MP4 up to 4K, or WebM up to 1080p"
  - "Time: Under a minute once the transcript exists (TODO confirm)"
  - "Works with: Built-in chat, Claude, ChatGPT, Cursor over MCP"
  - "Price: Free to start, plans from $24/mo"
---

**An auto caption generator turns speech into on-screen text with no manual timing. Vyra's adds one step. It figures out which phrases matter, so your hook and key lines can be bigger or animated while the rest stays plain.**

## How it works

1. Open the Captions panel.
2. Click Browse templates and pick an animated style, or switch to Manual Captions.
3. Optionally tell it what to emphasize. "Emphasize the hook in the first 3 seconds." "Make the price the biggest word."
4. Set a time range if you want.
5. Apply. Captions land on the timeline as editable items.

## What you can control

| Setting | Options |
| --- | --- |
| Template | Animated AI caption styles with adjustable accent color |
| Render mode | Default, highlight (active word colored), word-by-word, slide-up, slide-left |
| Manual type | Font family, weight, size, color, fill, decoration, stroke, shadow |
| Grouping | Max words, max characters, break on punctuation, split on conjunctions |
| Emphasis | Tell it which phrases to feature |
| Range | Whole video or a start and end |

## Prompts to paste

```
Caption the whole video word by word, bold white sans-serif, slightly above center. When I say "eighty percent" and "never again", make those words bigger and yellow.
```

```
Use the highlight caption style with a blue active word. Three words per caption max. Turn captions off during the b-roll at the end.
```

```
Copy the caption look from the reference video: blocky all caps, soft glow, hard drop shadow, two lines max. Apply it to everything I say.
```

## When to use something else

- You want captions as a separate file for a platform's caption track (TODO confirm SRT export).
- Several people talking over each other. Any transcript tool struggles with that. Clean the audio first.
- Captions in a different language than the audio (TODO confirm).

## FAQ

**What does emphasis detection do?**
It reads the transcript, picks the phrases that carry the hook or the payoff, and gives those the bigger or animated treatment.

**Can I fix a wrong word?**
Yes. Click the caption or tell the chat the timestamp.

**Which render mode for TikTok?**
Word-by-word or highlight for fast talking heads. Plain phrases for calmer explanations.

## Related

- /tools/add-subtitles-to-video
- /features/ai-captions
- /prompts/captions
- /tutorials/add-captions

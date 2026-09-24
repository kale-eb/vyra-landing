---
title: "Auto caption generator with animated styles and word-by-word emphasis"
description: "Vyra's caption generator reads your transcript, marks the phrases that matter, and renders them in animated or manual styles you control down to the stroke."
updated: 2026-09-24
category: tools
facts:
  - "Best for: Short-form talking head, UGC, and tutorial clips for TikTok, Reels, and Shorts"
  - "Input: Any video with speech, uploaded or already on the timeline"
  - "Output: Burned-in captions in MP4 up to 4K, or WebM up to 1080p"
  - "Time: Under a minute to generate once the transcript exists (TODO confirm)"
  - "Works with: Built-in chat, Claude, ChatGPT, Cursor over MCP"
  - "Price: Free to start, plans from $24/mo"
---

**An auto caption generator turns speech into on-screen text without manual timing. Vyra's version adds a step: it classifies each phrase for emphasis, so hooks and key lines can render larger or animated while ordinary speech stays plain.**

## How it works

1. Open the Captions panel from the left sidebar.
2. Click Browse templates and choose an animated style, or switch to Manual Captions for full control.
3. Optionally give emphasis guidance, for example "emphasize the hook in the first 3 seconds" or "make the price the biggest word."
4. Set a time range if you only want captions on part of the video.
5. Apply. Vyra classifies each phrase, generates the captions, and drops them on the timeline as editable items.

## What you can control

| Setting | Options |
| --- | --- |
| Template | Animated AI caption styles with adjustable parameters such as accent color |
| Render mode | Default, highlight (active word colored), word-by-word, slide-up, slide-left |
| Manual type | Font family, weight, size, color, fill, decoration, stroke, shadow |
| Grouping | Max words per caption, max characters, break on punctuation, split on conjunctions |
| Emphasis | Guidance text that tells the classifier which phrases to feature |
| Range | Entire video or a chosen start and end |

## Prompts to paste

```
Caption the whole video word by word, bold white sans-serif, slightly above center. When I say "eighty percent" and "never again", make those words bigger and yellow.
```

```
Use the highlight caption style with a blue active word. Three words per caption max. Turn captions off during the b-roll section at the end.
```

```
Copy the caption look from the reference video: blocky all caps, soft glow, hard drop shadow, two lines maximum. Apply it to everything I say.
```

## When to use something else

- You want captions delivered as a sidecar file for a platform's own caption track. Vyra burns captions into the export; a separate SRT tool covers that case (TODO confirm SRT export).
- Your video has several speakers talking over each other. Any transcript-based tool struggles here. Clean the audio or record separate tracks first.
- You want captions in a language different from the spoken one. Translation is not documented in Vyra's help docs (TODO confirm).

## FAQ

**What does emphasis detection actually do?**
It reads the transcript, decides which phrases carry the hook, the turn, or the payoff, and applies the template's larger or animated treatment to those while the rest stay in the ordinary style.

**Can I fix a wrong word?**
Yes. Captions are timeline items. Click the caption or ask the chat to change the word at that timestamp.

**Which render mode should I use for TikTok?**
Word-by-word or highlight for fast talking heads, default phrase captions for calmer explanations. The format guides on this site give a recommendation per format.

**Can Claude or ChatGPT run this?**
Yes. Over MCP the assistant can add captions, set the style, and restrict the range the same way the built-in chat does.

## Related

- /tools/add-subtitles-to-video
- /features/ai-captions
- /prompts/captions
- /tutorials/add-captions

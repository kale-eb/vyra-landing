---
title: Why use conversational editing instead of a traditional editor?
description: Conversational editing removes the two slowest parts of a manual edit, reviewing footage and trimming, which typically take 60 to 80 percent of the time.
updated: 2026-09-24
category: answers
---

**Conversational editing means you describe the edit and an AI that has already watched your footage builds it. It removes the two slowest parts of a manual edit, reviewing footage and mechanical trimming, which typically take 60 to 80 percent of the time. A traditional editor is still better when you need frame-level control over every cut. The right setup is both. An AI for the first draft, a timeline for the last 10 percent.**

## Why

- The review pass disappears. Every clip is already transcribed and described, so "find the part where I explain pricing" is a search.
- Mechanical work is a sentence. "Cut every pause over half a second and every filler word" instead of two hundred blade cuts.
- Iteration is cheap. "Tighter, lose 10 seconds from the middle" takes seconds to try and seconds to undo.
- No learning curve. If you can describe what you want to a human editor, you can describe it here.
- The timeline is still there. When a caption sits one pixel too high, you drag it.

## Where traditional editors still win

- Frame-accurate manual cuts, multicam, advanced color grading, and audio mixing.
- Complex compositing and effects.
- Broadcast delivery specs.

## What to do about it

1. **Use the agent for the first 80 percent.** Rough cut, captions, music, reframing.
2. **Prompt with a target.** Length, platform, keep, cut, caption style, music.
3. **Correct one thing at a time.** Bundled corrections land wrong.
4. **Open the timeline for the last 20 percent.** Nudge a cut, move a caption, adjust a level.
5. **Verify.** Ask for a timestamped list of cuts or capture frames before trusting a summary.

## Do it in Vyra

```
Cut this 6-minute raw video to 45 seconds for TikTok. Open on the line "nobody tells you this", then the three main points in order. Cut pauses over half a second, retakes, and filler. Straight cuts, no zooms. No captions yet.
```

```
List every cut you made with start and end timestamps so I can check them.
```

## FAQ

**Is conversational editing the same as text-based editing?**
No. Text-based editing (delete a word in the transcript, the video cuts) only sees speech. Conversational editing also sees the picture, so it can pick the shot where the product is visible.

**Do I lose control?**
No. Vyra has a full manual timeline. The agent builds, you adjust.

**Can my own AI drive it?**
Yes. Claude, ChatGPT, and Cursor over MCP, or the built-in agent.

## Related

- /ai-video-editor
- /prompts/how-to-prompt-vyra
- /features/footage-understanding
- /how-to/cut-a-talking-head

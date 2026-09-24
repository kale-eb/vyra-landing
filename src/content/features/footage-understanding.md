---
title: An AI editor that understands what is in your footage
description: On upload, Vyra transcribes every word with timestamps and writes a visual description of every scene, so the editor can search your footage by what is in it.
updated: 2026-09-24
category: feature
---

**Vyra understands your footage before you type a word. On upload it transcribes every spoken word with timestamps and analyzes every scene visually, so the agent knows what was said and what is on screen. That is why you can ask for "the shot where I pull the canvas out of the box" and get it, without scrubbing.**

Most AI editors know your transcript at best. Vyra knows the picture too. That single difference is what makes prompt-based editing work on real footage instead of templates.

## How it works

1. Upload clips. Vyra runs speech transcription with word-level timestamps.
2. In parallel, it analyzes the video visually and writes a description of each scene: who is in frame, what they are doing, the setting, the action.
3. Both layers are indexed and searchable. The agent can query them by phrase or by description.
4. When you ask for an edit, the agent picks takes and moments from that index, then places clips on the timeline.
5. Silent clips still get scene analysis, so b-roll is searchable even with no speech.

## What you can ask for

| You say | Vyra does |
| --- | --- |
| "Find every time I say 'underpainting'" | Transcript search, returns timestamps |
| "Find the shots of the Bay Bridge at night" | Scene search on visual descriptions |
| "Which take of the pricing line is cleanest?" | Compares takes for stumbles and restarts |
| "Cut to the brushes whenever I mention them" | Matches spoken mentions to b-roll scenes |
| "Remove the parts where I look at my notes" | Uses visual analysis to spot the glance |
| "Summarize what happens in this 35-minute file" | Returns a scene-by-scene outline |

## Prompts to paste

```
Summarize what is in this project: each clip, what happens in it, and any lines worth keeping. Then suggest a 60-second structure for Reels.
```

```
Find every moment where I show the painting from above or hold it up to the camera. List timestamps and a one-line description of each so I can pick the best one.
```

```
Cut this 6-minute talking head to 45 seconds. Use the cleanest take of each point, remove pauses over half a second, and cut away to the matching product close-up for 2 seconds whenever I name one. No music.
```

## Compared to the usual way

| | Traditional editor | Template AI tool | Vyra |
| --- | --- | --- | --- |
| Knows what was said | No, unless you transcribe | Sometimes | Yes, word-level timestamps |
| Knows what is on screen | No | No | Yes, every scene described |
| Finding a moment | Scrub and watch | Scrub and watch | Ask |
| Long files | You review all of it | Often capped | 35 minutes indexed in under 2 minutes in a side-by-side test |

## Limits

- Scene descriptions are summaries, not frame-perfect labels. For a precise cut point the agent inspects source frames, and you can too.
- Very dark or heavily blurred footage produces vaguer descriptions.
- Transcription is only as good as the audio. Wind and crosstalk lower accuracy.

## FAQ

**Does this work on footage with no speech?**
Yes. Scene analysis runs on every clip. Search for "wide shot of the skyline" and it finds it.

**Can I read the transcript myself?**
Yes. The transcript is visible in the editor and searchable by the agent.

**How long does indexing take?**
Minutes, not hours. In one comparison a 35-minute file was fully indexed in under 2 minutes.

**Does the agent send my footage anywhere else?**
Analysis runs in Vyra. An external MCP agent receives text descriptions and frames you ask it to capture, not the source file.

## Related

- /ai-video-editor
- /features/rough-cut
- /prompts/rough-cut
- /how-to/cut-a-talking-head

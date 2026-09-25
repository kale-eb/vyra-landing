---
title: An AI editor that understands what is in your footage
description: On upload, Vyra transcribes every word and writes a description of every scene. So you can ask for a moment by what happens in it.
updated: 2026-09-24
category: feature
---

**Vyra reads your footage before you type anything. On upload it transcribes every word with timestamps and writes a description of every scene. That's why you can ask for "the shot where I pull the canvas out of the box" and get it without scrubbing.**

Most AI editors know the transcript at best. Vyra knows the picture too. That's the whole reason describing an edit works on real footage.

## How it works

1. Upload clips. Vyra transcribes the speech with a timestamp on every word.
2. At the same time it looks at the video and writes down what's in each scene. Who's in frame, what they're doing, where they are.
3. Both are searchable. The agent can look up a phrase or a description.
4. When you ask for an edit, the agent picks takes and moments from that index.
5. Silent clips still get scene descriptions, so b-roll is searchable too.

## What you can ask for

| You say | Vyra does |
| --- | --- |
| "Find every time I say 'underpainting'" | Transcript search, returns timestamps |
| "Find the shots of the Bay Bridge at night" | Searches the scene descriptions |
| "Which take of the pricing line is cleanest?" | Compares takes for stumbles |
| "Cut to the brushes whenever I mention them" | Matches what you said to the matching b-roll |
| "Remove the parts where I look at my notes" | Spots it visually |
| "Summarize this 35-minute file" | Scene-by-scene outline |

## Prompts to paste

```
Summarize what is in this project: each clip, what happens in it, and any lines worth keeping. Then suggest a 60-second structure for Reels.
```

```
Find every moment where I show the painting from above or hold it up to the camera. List timestamps and a one-line description of each.
```

```
Cut this 6-minute talking head to 45 seconds. Use the cleanest take of each point, remove pauses over half a second, and cut away to the matching product close-up for 2 seconds whenever I name one. No music.
```

## Compared to the usual way

| | Traditional editor | Template AI tool | Vyra |
| --- | --- | --- | --- |
| Knows what was said | Only if you transcribe | Sometimes | Yes, every word timestamped |
| Knows what's on screen | No | No | Yes, every scene described |
| Finding a moment | Scrub and watch | Scrub and watch | Ask |
| Long files | You watch all of it | Often capped | 35 minutes indexed in under 2 minutes in our test |

## Limits

- Scene descriptions are summaries. For an exact cut point the agent looks at the frames, and so can you.
- Very dark or blurry footage gets vaguer descriptions.
- Transcription is only as good as the audio.

## FAQ

**Does it work on footage with no speech?**
Yes. Ask for "the wide shot of the skyline" and it finds it.

**Can I read the transcript myself?**
Yes. It's in the editor.

**Does the agent send my footage anywhere?**
Analysis runs in Vyra. An outside MCP agent gets text descriptions and any frames you ask it to capture, never the source file.

## Related

- /ai-video-editor
- /features/rough-cut
- /prompts/rough-cut
- /how-to/cut-a-talking-head

---
title: "Video trimmer: trim, split, and export a time range by description or by hand"
description: Vyra trims and splits clips from a plain instruction or on the timeline, and can export just a time range with start and end handles.
updated: 2026-09-24
category: tools
facts:
  - "Best for: Quick trims, pulling one section out of a long recording, tightening a clip's start and end"
  - "Input: Any MP4, MOV, or phone video"
  - "Output: MP4 up to 4K, or WebM up to 1080p, whole video or a time range"
  - "Time: Seconds to trim, then export time depends on your device"
  - "Works with: Built-in chat, Claude, ChatGPT, Cursor over MCP"
  - "Price: Free to start, plans from $24/mo"
---

**Cut off what you don't need from the start, the end, or the middle. In Vyra you can ask ("start when I say hello, end after the wave"), drag on the timeline, or set start and end handles at export.**

## How it works

1. Upload the video or open a project.
2. Trim by asking in the chat, or select the clip and drag its edges or split it.
3. To export just a section, open Export and drag the time range handles.
4. Pick a preset and export.

## What you can control

| Setting | Options |
| --- | --- |
| Trim by | Timestamps, quoted words from the transcript, or a described shot |
| Split | At a timestamp or at a natural break |
| Time-range export | Start and end handles with a live duration readout |
| Resolution | 4K (upscale), 1440p (upscale), Original, 1080p, 720p, 480p |
| Format | MP4 H.264, or WebM VP8 up to 1080p |
| Bitrate | 5 to 50 Mbps for MP4 |

## Prompts to paste

```
Trim this clip so it starts the moment I say "okay so" and ends right after I wave. Nothing else.
```

```
Split the video at 2:14 and delete everything before it.
```

```
Export only 0:30 to 1:15 at original resolution, balanced quality.
```

## When to use something else

- One quick cut on a file you won't edit further. Your OS tool is faster.
- You need lossless trimming with no re-encode. Vyra re-encodes on export.
- The file is way over your plan's duration limit. You'll see a warning.

## FAQ

**Does trimming touch the original file?**
No. Vyra edits a 720p proxy and uses the original for export.

**Can I trim by what was said?**
Yes. The transcript is word-timed, so "start where I say X" lands on an exact point.

**Does export run on a server?**
No. It runs in your browser. Keep the tab open until it finishes.

## Related

- /tools/remove-silence-from-video
- /tools/edit-video-by-typing
- /prompts/export-for-platform
- /tutorials/export-for-tiktok

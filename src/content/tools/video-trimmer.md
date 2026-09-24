---
title: "Video trimmer: trim, split, and export a time range by description or by hand"
description: "Vyra trims and splits clips from a plain-language instruction or on the timeline, and can export only a chosen time range with start and end handles."
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

**A video trimmer cuts off what you do not need from the start, the end, or the middle. In Vyra you can do it by asking ("start at the moment I say hello, end after the wave"), by dragging on the timeline, or by setting start and end handles at export time.**

## How it works

1. Upload the video, or open an existing project.
2. Trim by description in the chat, or select the clip and drag its edges or split it on the timeline.
3. To export only a section, open Export and drag the time range handles. The selected duration and timestamps display as you drag.
4. Choose a preset and export.

## What you can control

| Setting | Options |
| --- | --- |
| Trim by | Timestamps, quoted words from the transcript, or described shots |
| Split | At a timestamp or where the agent finds a natural break |
| Time-range export | Start and end handles with live duration readout |
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

- You want a one-click trim with no upload, for a file you will not edit further. A local OS tool is faster for a single cut.
- You need lossless trimming without re-encoding. Vyra re-encodes on export.
- The file is far longer than your plan's duration limit. You will see a warning with an upgrade link.

## FAQ

**Does trimming touch the original file?**
No. Vyra edits a 720p proxy for smooth playback and uses the original quality for export.

**Can I trim by what was said instead of timestamps?**
Yes. The transcript is word-timed, so "start where I say X" resolves to an exact point.

**Does export run on a server?**
No. Export runs in your browser with WebCodecs. Keep the tab open until it finishes.

**Can I trim from Claude or ChatGPT?**
Yes. Trim, split, and time-range export are available over MCP.

## Related

- /tools/remove-silence-from-video
- /tools/edit-video-by-typing
- /prompts/export-for-platform
- /tutorials/export-for-tiktok

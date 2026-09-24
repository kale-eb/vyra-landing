---
title: How to export for TikTok in Vyra
description: "Export a 9:16 MP4 at 1080x1920 with captions clear of TikTok's bottom UI, choose a bitrate, and get a second version for Reels or Shorts from the same cut."
updated: 2026-09-24
category: tutorial
video: TODO
---

**TikTok wants a vertical 9:16 MP4, 1080x1920, with nothing important in the bottom 15 percent of the frame where the caption and buttons sit. In Vyra, confirm the canvas is 9:16, check caption placement, then export with the bitrate slider set for quality. The same cut exports for Reels and Shorts without changes.**

## Before you start

- The edit is finished and captioned.
- The project canvas is 9:16. If you cut from 16:9 footage, reframe first.
- You know which plan you are on: exports go up to 1440p on AI Starter and 4K on AI Pro. 1080x1920 is enough for TikTok.

## Steps

1. **Confirm the canvas.** Ask the agent to confirm the project is 9:16, or check the preview shape. If it is not, ask for a 9:16 version that keeps you centered.
2. **Check the safe zone.** Capture a frame at a captioned moment. Captions should sit above the bottom 15 percent and clear of the right-side buttons.
3. **Check the first frame.** TikTok uses it as the cover unless you pick one. Make sure it is a clear shot, not a black frame.
4. **Open export.** Choose MP4, 1080x1920, 30 fps.
5. **Set the bitrate.** Drag the slider toward higher quality for the final. TikTok re-encodes, so start from the best file.
6. **Export and download.** Wait for the status to show complete, then download.
7. **Export variants if needed.** The same file works for Reels and Shorts. A 1:1 crop for the feed is a separate export.

## The prompt to use

```
Confirm this project is 9:16. Capture frames at 0:02, 0:15, and the last second so I can check caption placement and the cover frame. Then export as MP4 at 1080x1920, 30 fps, high quality, for TikTok.
```

## Check the result

- File is MP4, 1080x1920, under a few hundred megabytes for a minute of video.
- Play the first second. The cover frame is a real shot.
- On your phone, open it in TikTok's composer and confirm captions are not hidden by the UI.

## FAQ

**Should I export at 4K for TikTok?**
No. TikTok compresses to 1080p. Export 1080x1920 at a high bitrate instead.

**Can I export a version without captions?**
Yes. Ask the agent to hide the caption track and export again, or export before adding captions.

## Related

- /prompts/export-for-platform
- /answers/what-video-formats-does-ai-editing-support
- /how-to/repurpose-long-form-to-shorts
- /for/tiktok-creators

---
title: What video formats does AI editing support?
description: "AI video editors typically accept MP4, MOV, H.264, HEVC/H.265, and ProRes from phones and cameras, and export MP4 in 9:16, 1:1, or 16:9 at up to 4K."
updated: 2026-09-24
category: answers
---

**AI video editors typically accept what phones and cameras produce. MP4 and MOV containers with H.264, HEVC/H.265, or ProRes video, and AAC or PCM audio. They export MP4 (H.264) because every platform takes it. Vyra accepts MP4, MOV, and common phone and camera formats, plus images and audio (TODO confirm HEVC and ProRes), makes 720p proxies for smooth editing, and exports MP4 (H.264) at 480p, 720p, 1080p, original resolution, or upscaled to 1440p and 4K, or WebM (VP8) up to 1080p.**

## Why

- Phones shoot HEVC by default. Any editor aimed at creators has to accept it.
- Mirrorless cameras produce MP4 (H.264 or H.265). Pro workflows use ProRes in MOV.
- TikTok, Instagram, YouTube, and LinkedIn all accept H.264 MP4 and transcode on their side. Exporting anything else adds risk for no gain.
- Aspect ratio matters more than codec. 9:16 for TikTok, Reels, and Shorts. 1:1 for feed. 16:9 for YouTube.
- Screen recordings and some phone modes record at variable frame rate, which can drift audio. Good editors normalize it on import.

## What to do about it

1. **Shoot in the phone's default.** HEVC is fine.
2. **Keep the original.** Re-encoding before upload only loses quality.
3. **Decide the delivery ratio before editing.** Ask for 9:16 up front.
4. **Export one master, then variants.** 9:16 for TikTok and Reels, 16:9 for YouTube if the footage supports it.
5. **Check the bitrate slider.** Higher for a master, lower for a quick draft.

## Do it in Vyra

```
This footage is 16:9 from a mirrorless camera. Make a 9:16 version that keeps me centered, and a 1:1 version for the feed. Export both as MP4 at high quality.
```

```
Export the final cut for TikTok at 1080x1920, 30 fps, high quality. Then a 4K 16:9 version for YouTube if the source resolution supports it.
```

## FAQ

**Does Vyra accept 4K phone footage?**
Yes. Upload the original. Export up to 1440p on AI Starter and 4K on AI Pro.

**What about screen recordings?**
MP4 or MOV screen recordings work. If the audio drifts, it's usually variable frame rate.

**Can I export a ProRes master?**
Vyra exports MP4 (H.264, 5 to 50 Mbps) or WebM (VP8, up to 1080p), not ProRes. For a ProRes deliverable, export the High Quality preset or a custom 50 Mbps MP4 and transcode in a desktop tool.

## Related

- /tutorials/export-for-tiktok
- /how-to/repurpose-long-form-to-shorts
- /prompts/export-for-platform
- /glossary/aspect-ratio

---
title: What video formats does AI editing support?
description: "AI video editors typically accept MP4, MOV, H.264, HEVC/H.265, and ProRes from phones and cameras, and export MP4 in 9:16, 1:1, or 16:9 at up to 4K."
updated: 2026-09-24
category: answers
---

**AI video editors typically accept the formats phones and cameras produce: MP4 and MOV containers with H.264, HEVC/H.265, or ProRes video, and AAC or PCM audio. They export MP4 (H.264) because every platform accepts it. Vyra accepts MP4, MOV, HEVC/H.265, H.264, and ProRes, and exports MP4 at up to 1440p on AI Starter and 4K on AI Pro. (TODO verify full list.)**

## Why

- **Phones shoot HEVC by default.** iPhone and most Android phones record HEVC/H.265 in a MOV or MP4 container. Any editor aimed at creators has to accept it.
- **Cameras shoot H.264 or ProRes.** Mirrorless cameras produce MP4 (H.264 or H.265). Pro workflows use ProRes in MOV.
- **Platforms want H.264 MP4.** TikTok, Instagram, YouTube, and LinkedIn all accept it and transcode on their side. Exporting anything else adds risk for no gain.
- **Aspect ratio matters more than codec.** 9:16 for TikTok, Reels, and Shorts. 1:1 for feed. 16:9 for YouTube. Reframing between them is an editing job, not a format job.
- **Variable frame rate is the usual problem.** Screen recordings and some phone modes record at variable frame rate, which can drift audio. Good editors normalize it on import.

## What to do about it

1. **Shoot in the phone's default.** HEVC is fine. Do not switch to "most compatible" unless another tool refuses the file.
2. **Keep the original.** Upload the file the camera made. Re-encoding before upload only loses quality.
3. **Decide the delivery ratio before editing.** Ask for 9:16 up front so the agent frames for it.
4. **Export one master, then variants.** A 9:16 for TikTok and Reels, a 16:9 for YouTube if the footage supports it.
5. **Check the bitrate slider.** Higher for a quality master, lower for a quick draft to review on your phone.

## Do it in Vyra

```
This footage is 16:9 from a mirrorless camera. Make a 9:16 version that keeps me centered, and a 1:1 version for the feed. Export both as MP4 at high quality.
```

```
Export the final cut for TikTok at 1080x1920, 30 fps, high quality. Then a 4K 16:9 version for YouTube if the source resolution supports it.
```

## FAQ

**Does Vyra accept 4K phone footage?**
Yes. Upload the original 4K HEVC file. Export up to 1440p on AI Starter and 4K on AI Pro.

**What about screen recordings?**
MP4 or MOV screen recordings work. If the audio drifts, it is usually variable frame rate; the agent can flag it.

**Can I export a ProRes master?**
Vyra exports MP4. For a ProRes deliverable, export at the highest bitrate and transcode in a desktop tool. (TODO verify.)

## Related

- /tutorials/export-for-tiktok
- /how-to/repurpose-long-form-to-shorts
- /prompts/export-for-platform
- /glossary/aspect-ratio

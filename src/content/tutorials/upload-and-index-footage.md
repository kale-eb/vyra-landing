---
title: How to upload and index footage in Vyra
description: Upload raw clips to a Vyra project and let it transcribe every word, analyze every scene, and generate thumbnails so the agent can search and cut your footage.
updated: 2026-09-24
category: tutorial
video: TODO
---

**Upload everything from the shoot into one project. Vyra transcribes the speech, looks at every scene, and makes thumbnails. By the time you type your first prompt it already knows what's in each clip.**

## Before you start

- Keep the original files from your phone or camera. Don't pre-trim or re-encode.
- One shoot or one video idea per project.
- Have your reference video ready if you want to match a style. It goes in separately.
- On a slow connection, upload the longest clips first.

## Steps

1. **Create a project** and name it something you'll recognize later, like "studio vlog sept 24".
2. **Drag your clips into the footage library.** MP4, MOV, and common phone formats work. (TODO confirm HEVC and ProRes)
3. **Wait for processing.** Each clip shows upload, then processing, then ready. Processing transcribes speech, describes scenes, builds thumbnails, and makes a 720p proxy for editing. The original is used on export. A 35-minute file indexed in under 2 minutes in a side-by-side test.
4. **Open a clip in the library.** Read the summary and scrub the thumbnails. That's what the agent sees.
5. **Ask for a map.** Have the agent summarize the footage before you edit. Fix anything wrong, like who's who.
6. **Attach a reference, if you have one,** in the Reference tab, not the footage library.

## The prompt to use

```
Summarize what is in my footage. How many clips, where they were shot, who is in them, which ones have me talking to camera, and the three strongest moments with timestamps. Do not edit anything yet.
```

## Check the result

- Every clip shows ready with a thumbnail strip.
- The summary gets the people, places, and topics right. Fix names now so captions spell them right later.
- Search the library by content, like "canvas" or "night street," and see the right clips come back.

## FAQ

**Can I add more footage later?**
Yes. New clips get processed the same way.

**Does silent b-roll get analyzed?**
Yes. Scene analysis runs on the picture. Transcription is skipped when there's no speech.

## Related

- /tutorials/first-rough-cut
- /features/footage-understanding
- /answers/can-ai-understand-raw-footage
- /docs/first-project

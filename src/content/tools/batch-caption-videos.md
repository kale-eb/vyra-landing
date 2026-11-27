---
title: "Add captions to 50 videos at once with one prompt"
description: "Connect Claude Code to Vyra, point it at a folder of videos, and it uploads each one, captions it in your style, and exports a finished MP4. Styled, burned-in captions, not just .srt files."
updated: 2026-10-30
category: tools
layout: landing
landing:
  headline: "Caption 50 videos with one prompt"
  demo: captions
  demo_caption: "Word-by-word captions from Vyra. Claude Code applies the same style to every video in the folder."
facts:
  - "Best for: A backlog of talking videos, clips, or a batch-filming day that all need the same captions"
  - "Input: A folder of videos on your computer, or videos already in your Vyra library"
  - "Output: One MP4 per video with burned-in captions, 720p up to 4K, plus a Vyra project you can still edit"
  - "Works with: Claude Code, Codex CLI, or Cursor for a local folder. Claude or ChatGPT for videos already in Vyra"
  - "Price: 3-day free trial on the web, then MCP plans from $24/mo"
reels:
  - DdcjJBPva-m
---

**To add captions to 50 videos at once, connect Claude Code to Vyra over MCP, open it in the folder with your videos, and give it one prompt. It uploads each video, makes a project, captions it from the transcript in the style you describe, and exports a finished MP4. You review the results instead of captioning 50 videos by hand.**

Most batch caption tools give you .srt files, or caption one project at a time. Vyra's MCP gives your AI the same tools a human editor uses, so it can run the whole caption job on every file in a folder and keep each one as an editable project.

## How it works

1. Connect Claude Code to Vyra. Run `claude mcp add --transport http Vyra https://api.usevyra.com/mcp`, then `claude mcp login Vyra` and sign in.
2. Open Claude Code in the folder that holds your videos.
3. Paste the prompt below. Say how the captions should look once, and it applies that style to every video.
4. Claude uploads each file, waits for Vyra to transcribe it, adds the captions, styles them, and starts the export.
5. Check the first two or three finished videos. If something is off, say it once ("smaller text", "move them up") and have it redo the rest.
6. Download the MP4s from the links it gives you, or open any project in Vyra to fix a single word.

## Prompts to paste

```
Use Vyra. For every video file in this folder, create a new Vyra project named after the file, upload the video, and wait until it's ready. Add captions from the speech, word by word, bold white sans-serif with a soft black shadow, three words per caption max, placed slightly above center. Export each project as a 1080p MP4. Do them one at a time and give me a list of the download links when you're done.
```

```
Use Vyra. Caption the first 3 videos in this folder only, using the highlight style with a yellow active word. Stop and show me the links so I can check them before you do the rest.
```

```
Use Vyra. These are podcast clips with two people talking. Caption each one with a separate caption track for each speaker, each in its own color. Keep the same font and size across every video.
```

## Ways to caption a lot of videos

| Option | What you get | Good for | The catch |
| --- | --- | --- | --- |
| Vyra + Claude Code | Styled, burned-in captions in an MP4 per video, plus an editable project | Social videos that need the same caption look | You need an MCP plan and Claude Code, Codex CLI, or Cursor to send files from your computer |
| CapCut | Auto captions you can style per project | A handful of short videos | You open, caption, and export each project yourself |
| Descript | A transcript you can edit, then captions | Podcasts and interviews where every word has to be right | Each video is its own project to caption and export |
| Whisper script | One .srt file per video, free | YouTube uploads where viewers can switch captions on | No styling, and burning them into the video is another step |

## What happens to big files

If a video is over about 300 MB and ffmpeg is on your computer, Claude makes a 720p copy and sends that first. Vyra transcribes the copy so captioning can start sooner, and the export waits for the full-quality original.

## Without Claude Code

Claude, ChatGPT, and other chat apps can't send files from your computer. Upload the videos to your Vyra library in the app first, then ask "Make a project for each video I uploaded today and caption them all the same way, word by word, white bold text." The work runs on Vyra's servers, so no browser tab has to stay open.

## When to use something else

- You only need .srt files for YouTube. YouTube's own auto captions or a Whisper script are free.
- It's one video. Caption it in the Vyra app with the [auto caption generator](/tools/auto-caption-generator).
- Several people talk over each other the whole time. Any transcript struggles with that, so clean the audio first.

## FAQ

**How long does 50 videos take?**
It depends on how long the videos are and how fast your upload is. You don't have to watch it. Claude works through the folder and gives you the links at the end.

**Can every video have the same caption style?**
Yes. Describe the style once in the prompt and Claude applies it to every project. You can also save the prompt and reuse it next week.

**How do I fix a wrong word?**
Every video is a normal Vyra project. Open it, click the caption, and fix the word, or tell Claude which video and which timestamp.

**Does it caption song lyrics?**
Yes. Ask for captions from the music instead of the speech.

**Can I get .srt files too?**
Vyra exports finished MP4s with the captions burned in. If you also need .srt files, a Whisper script makes them.

## Related

- /how-to/automate-video-editing-with-claude-code
- /tools/auto-caption-generator
- /tutorials/connect-claude-code
- /answers/how-to-automate-a-tiktok-editing-workflow

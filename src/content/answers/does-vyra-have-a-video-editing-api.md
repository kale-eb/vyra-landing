---
title: "Does Vyra have a video editing API?"
description: "Yes. Approved accounts can send footage and an editing brief to the Vyra API, then retrieve the finished video. Compare the API with MCP and the iPhone app."
updated: '2026-11-13'
category: answers
api: true
facts:
  - "Input: Your footage and an editing brief"
  - "Access: Approved Vyra accounts"
  - "Result: An edited video you can retrieve when the job finishes"
  - "Pricing: API charges are documented separately from app plans"
reels:
  - DZumPohtfW8
---

**Yes. The Vyra API lets approved accounts send footage and a brief, then retrieve an edited video when the job finishes. Use the API when your own application needs to submit and track editing jobs. Use MCP when you want an assistant such as Claude to work with Vyra's editing tools.**

Access requires approval. Start with the [API access instructions](/docs/api#get-a-key), and check the current limits and charges before building around it. An account for the web editor or iPhone app does not by itself mean API access is enabled.

## Choose how you want to edit

| Your starting point | Workflow |
| --- | --- |
| An application submits footage and waits for a finished video | [Vyra API](/docs/api) |
| Claude, ChatGPT or another assistant directs the editing tools | [Vyra MCP](/mcp) |
| Clips in Photos that you want to edit from your phone | [Vyra's iPhone app](/ai-video-editor-app) |
| You want to review and change a project in a browser | [Vyra web editor](/ai-video-editor-online) |

The API works on footage you supply. A request for a product demo still needs the product shots or screen recording. Vyra does not generate replacement video footage. Describe what to keep, what to remove and what the result is for.

## Start with one small job

Pick a short recording whose contents you know. Write down the expected order, a spoken line that must stay and the intended ending. That gives you something concrete to review when the video comes back.

An illustrative brief for your own footage could be this.

```
Make a short vertical demo from these clips. Open on the finished result, then show the setup and the main action. Keep my explanation of how it works. Add short captions to the speech, keep the original voice and end on the finished result. Do not add music.
```

The [first-video example](/docs/api#first-video) explains how to submit a job and retrieve its result. Keep the job identifier with your own record of the request. Wait for the final outcome before treating an accepted submission as a completed edit.

## Review before you submit more footage

Check the saved video against your brief. Confirm the intended shots survived, the spoken explanation is complete and the captions match the audio. A completed job still needs an editorial check.

If the result needs a change, describe that change narrowly. For example, ask to keep the opening shot longer while leaving the rest of the sequence alone. The docs explain [revising a finished video](/docs/api#changes) and [retrying safely](/docs/api#retries). Read those instructions before automatically resubmitting a request after an interruption.

The creator reel on this page shows a finished Vyra edit. The brief above is an example to try with your own footage.

## Access and pricing

API billing is separate from the web trial and iPhone subscriptions. Read the [current API prices](/docs/api#prices) and [limits](/docs/api#limits) before estimating a workflow. The app's free credits do not establish a free API allowance.

For ordinary phone editing, you can use the native app without building an integration. New iPhone accounts currently receive 100 free credits, and free mobile exports are 720p with a watermark. The web editor has a separate three-day trial and no ongoing free tier.

## FAQ

**Is the Vyra API available to every account?**
API access requires approval. Follow the access instructions in the API docs before trying to create a key.

**Do I need Claude or ChatGPT to use the API?**
No. Your application can submit editing requests directly through the API. MCP is the separate option for an assistant using editing tools.

**Can I send my own footage?**
Yes. Supplying footage is part of the API workflow. Check the docs for supported inputs, access requirements and current limits.

**Does an accepted request mean the video is finished?**
No. Track the job until it finishes, then retrieve and review the actual video. The docs cover status checks and completion notifications.

**Does the web free trial include API usage?**
Do not assume that it does. API access and charges are documented separately from the web trial and mobile plans.

## Sources

[Vyra's public API documentation](/docs/api) is the source for approval, job submission, results, revisions, limits and API pricing. The [MCP guide](/mcp) describes the assistant workflow. Checked November 13, 2026.

## Related

- /for/developers
- /mcp
- /answers/video-editors-that-integrate-with-llms
- /ai-video-editor-app
- /ai-video-editor-online

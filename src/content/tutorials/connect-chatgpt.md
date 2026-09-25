---
title: How to connect ChatGPT to Vyra
description: Add Vyra's MCP server to ChatGPT as a connector so ChatGPT can inspect your footage, propose a cut, and drive the Vyra timeline from a chat.
updated: 2026-09-24
category: tutorial
video: TODO
---

**Add Vyra's MCP server, authorize it, and ChatGPT can list your projects, read the footage, build a cut, add captions and music, and export. Same prompts as Vyra's own chat, plus you can ask for a plan first.**

## Before you start

- A Vyra account on an MCP plan (MCP Starter or MCP Pro).
- A ChatGPT plan that supports MCP connectors. The desktop path uses the Codex-compatible config.
- The Vyra MCP server URL is `https://api.usevyra.com/mcp`. Details at /docs/mcp.
- A project with footage already uploaded.

## Steps

1. **Open the Codex MCP config.** ChatGPT's desktop path and other Codex-compatible clients read the same file.
2. **Add the Vyra server and restart.**

   ```toml
   [mcp_servers.vyra]
   url = "https://api.usevyra.com/mcp"
   ```

3. **Authorize.** On first use the OAuth 2.1 flow opens in your browser. Sign in to Vyra and approve.
4. **Open a project in the browser.** Go to `https://app.usevyra.com`, sign in with the same account, open a project. The tab binds itself and a green indicator shows top-right. Keep at least one Vyra tab open.
5. **Start a chat and make sure the Vyra tools are on.**
6. **Ask for a plan before an edit.** Have it summarize the footage and propose a structure.
7. **Edit in steps.** Rough cut, captions, music, export. One message each.
8. **Verify.** Ask it to read the timeline back and capture a few frames.

## The prompt to use

```
Using the Vyra connector, open my project "launch video" and summarize the footage. Propose a 30-second hook-and-demo structure. Me stating the problem, screen recording of the fix, me showing the result. Wait for my OK, then build it with phrase captions and a lo-fi track ducked under my voice.
```

## Check the result

- The summary names real clips and lines from your project.
- The timeline read-back matches what ChatGPT said it did.

## FAQ

**ChatGPT said it made the edit but nothing changed.**
Ask it to read the timeline back. Then say "That's not what the timeline shows. Do X now."

**Can I use ChatGPT and Claude on the same project?**
Yes. Same project either way.

## Related

- /docs/mcp
- /chatgpt
- /for/chatgpt-users
- /prompts/troubleshooting

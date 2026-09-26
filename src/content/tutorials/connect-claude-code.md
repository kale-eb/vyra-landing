---
title: How to connect Claude Code to Vyra
description: Register Vyra's MCP server in Claude Code so you can edit video from the terminal, batch across projects, and script repeatable edits.
updated: 2026-09-24
category: tutorial
video: TODO
reels:
  - DY4pVwtu3KD
---

**Register Vyra's MCP server once and every Claude Code session can open a project, read the footage, build edits, and export. This is the setup for batch work, the same prompt across ten projects in one run.**

## Before you start

- A Vyra account on an MCP plan (MCP Starter or MCP Pro).
- Claude Code installed and signed in.
- The Vyra MCP server URL is `https://api.usevyra.com/mcp`. Details at /docs/mcp.
- Footage already uploaded in the projects you want to edit.

## Steps

1. **Add the server.**

   ```
   claude mcp add vyra https://api.usevyra.com/mcp
   ```

2. **Authorize.** Run any `claude` command. It opens the OAuth URL in your browser. Sign in to Vyra, approve, come back.
3. **Confirm the tools.** Ask Claude Code to list connected MCP servers. Vyra should show its editing tools through `tools/list`.
4. **Open a project in the browser.** Go to `https://app.usevyra.com`, sign in with the same account, open a project. The tab binds itself and a green indicator shows top-right. Keep at least one Vyra tab open.
5. **Name the project in the session**, or ask for the list.
6. **Plan, then edit.** Ask for a footage summary and a structure. Approve. Then edit in steps.
7. **Batch when ready.** One prompt, a list of projects, a status line per project.
8. **Export** at the platform spec and confirm where the file went.

## The prompt to use

```
Open my Vyra project "podcast ep 12". Find every moment where the guest talks about pricing and list them with timestamps. Then build three 30-second vertical clips from the best three, with word-by-word captions, and export each at 1080x1920.
```

## Check the result

- The moment list quotes real transcript lines.
- Ask Claude Code to read each clip's timeline back before exporting.
- Open one export and check the captions clear the bottom of the frame.

## FAQ

**Can I run the same edit across many projects?**
Yes. That's the main reason to use Claude Code over the desktop app.

**Does it work with Cursor too?**
Yes. Any MCP client that supports Streamable HTTP with OAuth 2.1 and PKCE connects to the same URL. See /docs/mcp.

## Related

- /docs/mcp
- /claude
- /tutorials/connect-claude-desktop
- /prompts/using-claude-or-chatgpt-with-vyra

---
title: How to connect Claude Code to Vyra
description: Register Vyra's MCP server in Claude Code so you can edit video from the terminal, batch across projects, and script repeatable edits.
updated: 2026-09-24
category: tutorial
video: TODO
---

**Claude Code is the terminal version of Claude. Register Vyra's MCP server once, and every session can open a project, read the footage index, build edits, and export. It is the setup for batch work: the same prompt across ten projects in one run.**

## Before you start

- A Vyra account on an MCP plan (MCP Starter or MCP Pro).
- Claude Code installed and authenticated.
- Your Vyra MCP server URL from your account settings. Full details at /docs/mcp.
- Footage already uploaded and indexed in the projects you want to edit.

## Steps

1. **Add the server.** In a terminal, register the Vyra MCP server with Claude Code using the add-server command and the URL from your account. Claude Code stores it in its MCP config.
2. **Authorize.** On first use, Claude Code opens a browser for Vyra sign-in. Approve, then return to the terminal.
3. **Confirm the tools.** Ask Claude Code to list connected MCP servers. Vyra should appear with its editing tools.
4. **Open a project.** Start a session and name the project, or ask for the list.
5. **Plan, then edit.** Ask for a footage summary and a structure. Approve. Then run the edit in steps.
6. **Batch when ready.** Give one prompt and a list of projects. Ask for a status line per project as each finishes.
7. **Export.** Ask for the export at the platform spec and confirm the file location.

## The prompt to use

```
Open my Vyra project "podcast ep 12". Find every moment where the guest talks about pricing and list them with timestamps. Then build three 30-second vertical clips from the best three, with word-by-word captions, and export each at 1080x1920.
```

## Check the result

- The moment list quotes real transcript lines with plausible timestamps.
- Ask Claude Code to read each clip's timeline back before exporting.
- Open one exported file and check the caption placement clears the bottom of the frame.

## FAQ

**Can I run the same edit across many projects?**
Yes. That is the main reason to use Claude Code over the desktop app. Name the projects and the prompt once.

**Does it work with Cursor too?**
Yes. Cursor registers MCP servers the same way. See /docs/mcp.

## Related

- /docs/mcp
- /claude
- /tutorials/connect-claude-desktop
- /prompts/using-claude-or-chatgpt-with-vyra

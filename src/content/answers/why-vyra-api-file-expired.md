---
title: "Why does the Vyra API say FILE_EXPIRED?"
description: "Vyra’s current API docs say an uploaded file is kept for seven days after its last use."
updated: '2026-11-26'
category: answers
api: true
reels:
  - DL3dH-7sK9U
---

**Vyra’s current API docs say an uploaded file is kept for seven days after its last use. FILE_EXPIRED means its source video has been removed after that period without use. Request a new upload link and send the source again.**

A reusable file identifier and a finished video download are different things. Keep your original footage if you expect to revise the edit later. The identifier alone does not preserve the source indefinitely.

## Check which file is no longer available

The [official sending-footage guide](/docs/api#footage) explains the retention period and the FILE_EXPIRED response. A file not yet used by a video is kept for seven days from upload. Documented uses extend that period from the latest use.

| What you need | What to check |
| --- | --- |
| Submit a new job using the old source | Whether the uploaded source is still retained |
| Revise or re-export an existing job | Whether its needed source files remain available |
| Download an already finished file | The finished result’s download, separately from source retention |

## Recover with the original footage

Request a new upload link and upload the original again as the docs instruct. The new upload receives a new file identifier and is analyzed and charged as new. Review the current balance and prices before continuing.

The docs distinguish a 400 response for referencing expired footage from a 409 response when revising or re-exporting a video that needs it. Finished files remain downloadable. Re-uploading does not guarantee that every old job can now be revised through its former source identifier.

Keep a clear record of which original belongs to each planned edit. Preserve the source outside the temporary upload rather than using repeated editing jobs as a storage strategy.

## FAQ

**Does the same filename restore the old file identifier?**
The docs say an uploaded-again file gets a new file identifier. Use the new value rather than assuming the filename revives the old one.

**Does an expired source mean the finished download was removed too?**
The current docs say finished files stay downloadable. Check the finished result separately from an operation that needs the source again.

## Sources

Checked November 26, 2026. The [official API guide](https://www.usevyra.com/docs/api#footage) and [error reference](https://www.usevyra.com/docs/api#errors) support the stated behavior. Examples are planning guidance, not submitted API jobs. The related reel is a finished creator edit.

## Related

- /answers/does-vyra-have-a-video-editing-api
- /docs/api
- /answers/does-vyra-api-require-web-subscription

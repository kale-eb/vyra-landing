# Vyra API

Send footage and say what you want. Get a finished video back. The API runs the same editor agent as the Vyra app: you send clips, images or audio with a prompt or a reference video, and the agent cuts, captions, reframes and exports it. Most videos finish in 7 to 15 minutes.

- Guide for people: https://www.usevyra.com/docs/api
- This guide as Markdown: https://www.usevyra.com/docs/api.md
- OpenAPI 3.1 spec: https://www.usevyra.com/openapi.json
- Sign up for the API: https://app.usevyra.com/?for=api
- Questions: caleb@usevyra.com

## Get a key

Anyone with a Vyra account can use the API. You add funds to a balance and each video is paid from it (see "Paying from a balance"). No account yet? Sign up at https://app.usevyra.com/?for=api and you are taken straight to API setup.

Every call goes to one base address over HTTPS, under `/v1`:

```
https://vyra-public-api-dd677jigfq-uc.a.run.app
```

The examples here call it `$VYRA_API` and your key `$VYRA_KEY`:

```sh
export VYRA_API=https://vyra-public-api-dd677jigfq-uc.a.run.app
export VYRA_KEY=vyra_live_...
```

To get a key:

1. Sign in to the Vyra web app and open Settings → Developer (https://app.usevyra.com/settings).
2. Name the key and press **Create key**. You can also set how many videos it may make at once; if you leave that out, it may use your account's whole limit.
3. Copy the key and its webhook secret. They are shown once and cannot be shown again.
4. Add funds on the same page when you need them.

While the launch offer lasts, the first 100 accounts get $20 of credit with their first key. It is used before your own funds and runs out 30 days after you get it.

Send the key with every call:

```
Authorization: Bearer vyra_live_...
```

Call the API from your server. It does not answer browsers (it sends no CORS headers), and a key put in a web page can be copied by anyone who opens it.

You can hold up to 10 keys and revoke any of them from the same page. Settings → Developer also shows your balance, your usage by key and by day, and every video with what you sent, what it cost and its files. Any key on your account can read, revise and re-export a video another of your keys made.

## Calls

| Call | What it does |
|---|---|
| `POST /v1/uploads` | Get upload links for files that have no link. Answers `201`. |
| `POST /v1/videos` | Start a video. Answers `202` with the video, `queued`. |
| `GET /v1/videos` | List the account's videos, newest first. |
| `GET /v1/videos/{id}` | Get a video as it stands, with its files once it is done. |
| `POST /v1/videos/{id}/revisions` | Revise a finished cut. Answers `202`. |
| `POST /v1/videos/{id}/exports` | Render a finished cut at another resolution. Free. Answers `202`. |
| `GET /v1/balance` | How the account is billed, its limit of videos at once, and a prepaid account's balance and tier. |
| `GET /v1/usage` | What the account made and was charged. |

## Make your first video

### 1. Start it

Footage is a list of links to your files.

```sh
curl $VYRA_API/v1/videos \
  -H "Authorization: Bearer $VYRA_KEY" \
  -H "Content-Type: application/json" \
  -H "Idempotency-Key: order-1041" \
  -d '{
    "footage": [
      "https://files.example.com/pour-shot.mp4",
      "https://files.example.com/desk-broll.mov",
      "https://files.example.com/logo.png"
    ],
    "prompt": "A 30-second vertical ad for the Halo water bottle. Open on the pour shot, end on the logo. Captions on everything said. No music.",
    "effort": "low",
    "max_seconds": 30,
    "aspect_ratio": "9:16"
  }'
```

The answer comes back at once (`202`) with the video's id:

```json
{ "id": "vid_8fK2mQ...", "status": "queued", "effort": "low", "max_seconds": 30,
  "price": { "currency": "USD", "video": 0.5, "media": null, "total": null } }
```

### 2. Wait for it

Ask every 15 to 30 seconds, or use a webhook (see "Getting the result").

```sh
curl $VYRA_API/v1/videos/vid_8fK2mQ... \
  -H "Authorization: Bearer $VYRA_KEY"
```

`status` moves through `queued`, `importing`, `analysing`, `editing` and `rendering`, and ends at `completed` or `failed`.

### 3. Download it

A completed video carries a link for each file:

```json
{
  "id": "vid_8fK2mQ...",
  "status": "completed",
  "videos": [
    { "id": "vid_8fK2mQ..._1", "revision": 1, "length_seconds": 29.6,
      "exports": [ { "resolution": "original", "status": "completed", "url": "https://...", "url_expires_at": "..." } ] }
  ],
  "notes": {
    "summary": "A 30-second vertical ad that opens on the pour and ends on the logo.",
    "assumed": ["Used the second pour take; the first is out of focus."],
    "did_not_match": []
  },
  "price": { "currency": "USD", "video": 0.5, "media_minutes": { "video": 4.5, "audio": 0 },
             "media": 0.09, "generated_media": null, "total": 0.59 }
}
```

A link lasts an hour. Ask for the video again and you get a fresh one, as many times as you like. Videos and their files are kept: nothing expires, and `expires_at` is always `null`.

**The file's name.** A finished file downloads as `video.mp4`, and a video's second and later cuts as `video-2.mp4`, `video-3.mp4` and on. Nothing in it names Vyra or an id. Send `filename` with the create, a revision or an export to name it yourself: `"filename": "spring-launch.mp4"` downloads as `spring-launch.mp4`, and cut 2 as `spring-launch-2.mp4`. Folders, control characters and quotes are taken out, the name is cut to 120 characters, and it always ends `.mp4` (a `.mov` becomes `.mp4`). In the download, characters other than letters, digits, spaces and `. _ ( ) -` become `-`. A revision or export without `filename` keeps the create's.

## Sending footage

`footage` takes up to 200 entries and 3 hours of video in all. Each entry is one of:

| What you send | Notes |
|---|---|
| A direct https link to a file | Redirects are followed. The link must be reachable from the public internet. |
| A Google Drive file or folder link, or a Dropbox file link | Shared so that anyone with the link can open it. A folder brings in every file in it. |
| An Instagram, TikTok or YouTube video link | A public video of up to 20 minutes. |
| A `file_id` from an upload | For files that have no link. See below. |

**Formats that work.** Video: MP4 (H.264, HEVC), MOV (ProRes included), WebM, MKV, AVI. Images: JPG, PNG, WebP, HEIC, GIF. Audio: WAV, MP3, M4A, FLAC. Phone clips with rotation, 4K, 60 and 120 frames a second, variable frame rate and HDR are all taken.

**Every file has to import.** If one link is dead or one file is broken, the video fails before any editing, costs nothing, and the error names the entry (`footage[3]`). Footage needs a picture: audio alone cannot make a video.

### Uploading a file that has no link

```sh
curl $VYRA_API/v1/uploads \
  -H "Authorization: Bearer $VYRA_KEY" -H "Content-Type: application/json" \
  -d '{ "files": [
        { "name": "take-1.mov", "size_bytes": 812345678, "content_type": "video/quicktime" }
      ] }'
```

You get back a `file_id` and where to send the bytes:

```json
{ "files": [ { "file_id": "file_3hT9...", "name": "take-1.mov", "expires_at": "...",
    "upload": { "method": "PUT", "url": "https://...", "headers": { "Content-Type": "video/quicktime" } } } ] }
```

```sh
curl -X PUT "<upload.url>" -H "Content-Type: video/quicktime" --data-binary @take-1.mov
```

Then use the `file_id` in `footage` or `references`. Up to 50 files a call and 10 GB a file; a file over 4 GB is sent in parts, and the answer lists a link for each part (`part_size`, and `parts` with `part_number`, `url` and `size_bytes`). `content_type` must be what the file really is, and `size_bytes` its exact size. The upload links last a day.

**A `file_id` can be used again.** Send it in `footage` or `references` of as many videos and revisions as you like. The first video that uses it brings the file in and analyses it, and is charged its media minutes. Every later video attaches the same analysed file: nothing is uploaded or analysed again, and the file's media minutes are $0, listed under `price.reused_media`.

**A file is kept 7 days after its last use.** One no video has used yet is kept 7 days from the upload (`file_expires_at` in the answer). Each video or revision that uses it, or that revises or re-exports a video made from it, keeps it 7 days from then. After 7 days without use its video is removed, and the `file_id` answers `400 FILE_EXPIRED`: "This file's video was removed after 7 days without use. Request a new upload link with create_upload and send it again." The file uploaded again gets a new `file_id` and is analysed and charged as new. A video made from a removed file can no longer be revised or re-exported (`409 FILE_EXPIRED`); its finished files stay downloadable. A key may hold up to 1,024 GB of uploads at once (`UPLOAD_LIMIT`).

A refusal about an uploaded file (`FILE_NOT_FOUND`, `FILE_NOT_UPLOADED`, `FILE_EXPIRED`) names the entry in `param`, such as `footage[2]` or `references[0]`.

## Saying what you want

The body of `POST /v1/videos`:

| Field | What it does |
|---|---|
| `footage` | Required. File ids and https links, as above. |
| `prompt` | What to make. Required unless you send a reference. Up to 8,000 characters. |
| `references` | Up to 5 videos to make it look like: a file link, a `file_id`, or an Instagram, TikTok or YouTube link. |
| `effort` | `high` (the default) or `low`. Low costs half as much and finishes sooner: about 8 minutes against about 14. High follows a detailed request or a reference more closely. |
| `max_seconds` | The longest the video may run, 1 to 1800. Default 60. It is never exceeded, and it sets the price band. |
| `target_seconds` | The length to aim for, within `max_seconds`. |
| `aspect_ratio` | `9:16`, `16:9` or `1:1`. Or send `width` and `height` (even numbers, 320 to 3840, the shorter side at most 2160). Left out, the agent chooses from the footage and the request. |
| `fps`, `resolution` | 1 to 60 frames a second (default 30); `720p`, `1080p`, `1440p` or `4k`. |
| `variations` | 1 to 20 cuts from the same footage. `variation_brief` says how they differ. |
| `variation_scope` | `portion` (the default): every cut has the video's aspect ratio and size and runs within 25% of the first cut's length; anything else may differ, such as the hook, captions, music, pacing, text or colour. `full`: anything may differ, including the shape, the length (within `max_seconds`) and the structure. A `portion` request whose `variation_brief` asks for another shape or a very different length is refused with `VARIATION_SCOPE_MISMATCH`: send `full` for that. |
| `allow_generated_media` | `true` lets the agent generate music, voiceover, sound and images, which are charged. Off by default. |
| `generated_media_budget` | Dollars. The most generated media may add. Left out, $0.30 plus $0.10 for each minute of `max_seconds` ($0.40 for a video of up to a minute). |
| `max_price` | Dollars. The most the video may cost in all. If your footage would take it over, the video fails before any editing and costs nothing. |
| `webhook_url` | Where to tell you when it is done. |
| `filename` | The name the finished file downloads as. Default `video.mp4`. See "The file's name". |

A field the call does not take is refused with `UNKNOWN_FIELD`.

### Prompts that work

- **Say what the video is and how long.** "A 30-second vertical ad for the Halo bottle" beats "make an ad".
- **Name the files that matter.** "Open on pour-shot.mp4, end on logo.png." The agent sees every file's name.
- **Say what you do not want.** "No music." "No captions." "It will be watched on silent."
- **Give a reference when you care about the look.** One reference video and "make it look like the reference" is the most reliable way to get a specific style.
- **Describe captions and text if they matter:** the feel of the font, size, position, how many words at a time.
- **Ask for what your footage holds.** Something the clips do not show is filled with stock footage, or left out and listed in `notes.did_not_match`. If the video cannot be made without it, it fails with `CANNOT_BE_MADE` and costs nothing.

The agent tells you what it assumed and what it could not do in `notes`. Read `notes.did_not_match` before you pass a video on to someone.

When your footage lacks a shot the video needs, the agent may add stock footage or images, and says so in `notes.assumed`. There is no field to turn this off. If the video must use only your own footage, say so in the prompt.

## Example requests

Each is the body of `POST /v1/videos`.

### A talking-head clip with captions

```json
{
  "footage": ["https://drive.google.com/file/d/1AbC.../view"],
  "prompt": "Cut this into a 45-second vertical clip of the strongest point. Remove pauses and filler. Bold white captions, three words at a time, lower third.",
  "effort": "low",
  "max_seconds": 45,
  "aspect_ratio": "9:16"
}
```

### Make it look like a reference

```json
{
  "footage": ["https://drive.google.com/drive/folders/1XyZ..."],
  "references": ["https://www.instagram.com/reel/DAbCdEf123/"],
  "prompt": "Recreate the reference with our gym footage: the same pacing, text style and transitions.",
  "effort": "high",
  "max_seconds": 30
}
```

### Three hooks on one video

```json
{
  "footage": ["file_3hT9...", "file_7pLm...", "file_Qw2x..."],
  "prompt": "A 30-second vertical product ad for the Halo bottle with captions.",
  "variations": 3,
  "variation_scope": "portion",
  "variation_brief": "Only the first three seconds differ: a question, a bold claim, and a close-up with no text.",
  "max_seconds": 30,
  "aspect_ratio": "9:16"
}
```

The answer's `videos` then holds three cuts, `vid_..._1` to `vid_..._3`, each with its own file.

### Two different edits of the same footage

```json
{
  "footage": ["https://www.dropbox.com/s/abc123/trip.mov?dl=0"],
  "prompt": "A 60-second travel recap.",
  "variations": 2,
  "variation_scope": "full",
  "variation_brief": "One calm with long shots and no text. One fast with quick cuts and big captions.",
  "effort": "low"
}
```

### With generated voiceover and music, and a price ceiling

```json
{
  "footage": ["https://files.example.com/apartment-tour.mp4"],
  "prompt": "A 60-second listing video. Write and speak a warm voiceover about the flat, with soft music under it.",
  "allow_generated_media": true,
  "generated_media_budget": 0.25,
  "max_seconds": 60,
  "max_price": 1.50,
  "webhook_url": "https://example.com/hooks/vyra"
}
```

### A long horizontal edit

```json
{
  "footage": ["https://files.example.com/podcast-cam-a.mp4", "https://files.example.com/podcast-cam-b.mp4"],
  "prompt": "A 12-minute highlight edit of this interview. Keep the three best stories whole. Cut between the two cameras. No captions.",
  "max_seconds": 900,
  "target_seconds": 720,
  "aspect_ratio": "16:9",
  "resolution": "1080p"
}
```

## Getting the result

**Polling.** Ask `GET /v1/videos/{id}` every 15 to 30 seconds until `status` is `completed` or `failed`.

**Webhooks.** Send `webhook_url` with the request and we `POST` to it when the video completes or fails:

```json
{ "id": "...", "event": "video.completed", "created_at": "2026-11-13T02:14:09Z",
  "video": { "id": "vid_8fK2mQ...", "status": "completed", "videos": [ ... ], "price": { ... } } }
```

`video` is what `GET /v1/videos/{id}` answers. Events: `video.completed`, `video.failed`, `video.revised`, `video.revision_failed`, `video.exported`, `video.export_failed`. Answer with a 2xx within 10 seconds. Anything else is tried again, 12 attempts in all: the second 30 seconds after the first, then twice as long each time, up to an hour between attempts. The last attempt is about 5 hours after the first. The address must be https and on the public internet, and redirects are not followed. The two revision events also carry `revision_id`. Each request also carries `Vyra-Event` and `Vyra-Delivery` headers.

**Check that it came from us.** Each webhook carries `Vyra-Signature: t=<unix seconds>,v1=<hex>`. `v1` is the HMAC-SHA256 of `<t>.<raw body>` with your key's webhook secret.

```js
import crypto from "node:crypto";

function fromVyra(rawBody, header, secret) {
  const { t, v1 } = Object.fromEntries(header.split(",").map(part => part.split("=")));
  const expected = crypto.createHmac("sha256", secret).update(`${t}.${rawBody}`).digest("hex");
  return v1.length === expected.length
    && crypto.timingSafeEqual(Buffer.from(v1), Buffer.from(expected));
}
```

**If it failed.** A failed video costs nothing and says why. The message says what to do.

```json
{ "id": "vid_Zr41...", "status": "failed",
  "error": { "code": "LINK_NOT_PUBLIC", "message": "<names the entry, such as footage[2], and says what to do>" },
  "price": { "currency": "USD", "total": 0 } }
```

**Your files stay available.** A finished video keeps its files. Each download link lasts an hour, and asking for the video again gives you a fresh one.

## Changing a finished video

**Revise a cut.** Say what to change. You can add footage or a reference, or send a marked-up frame as an image.

```sh
curl $VYRA_API/v1/videos/vid_8fK2mQ.../revisions \
  -H "Authorization: Bearer $VYRA_KEY" -H "Content-Type: application/json" \
  -d '{ "prompt": "Shorten the quote to one line and make the captions bigger." }'
```

A revision takes `prompt`, `footage`, `references`, `max_price`, `video_ids` and `filename`. The answer is the video with `revision_id`, this revision's own id. The video stays `completed` and downloadable while the change is made; `change` shows how it stands. When it is done the cut's `revision` goes up, it has a new file, and `last_change.price.total` is what the revision cost. With several variations, name the cut by its own id (`vid_8fK2mQ..._2`). A failed revision leaves the video as it was and costs nothing. A cut takes up to 10 changes, one at a time: a second one sent meanwhile answers `409 VIDEO_BUSY`. Each cut's first revision is free.

**Revise several cuts at once.** Send the change to the video's id with `video_ids`, the cuts to change. One pass makes it on each, and each gets its own new `revision` and file:

```sh
curl $VYRA_API/v1/videos/vid_8fK2mQ.../revisions \
  -H "Authorization: Bearer $VYRA_KEY" -H "Content-Type: application/json" \
  -d '{ "prompt": "Make the captions bigger.", "video_ids": ["vid_8fK2mQ..._2", "vid_8fK2mQ..._7"] }'
```

It is one change with one `revision_id`: `change.video_ids` lists the cuts, and `revisions` has an entry for each. Every cut named is priced as a revision of its own (its first one free), and what you send with it is charged once.

The video lists every revision it has had under `revisions`, oldest first, so you find a result by the id its revision was given, whatever was revised after it:

```json
"revisions": [
  { "id": "rev_4HqT...", "video_id": "vid_8fK2mQ..._1", "status": "completed", "revision": 2,
    "price": { "currency": "USD", "total": 0.7 },
    "exports": [ { "resolution": "original", "status": "completed", "url": "https://...", "url_expires_at": "..." } ],
    "created_at": "2026-11-15T19:02:11Z", "completed_at": "2026-11-15T19:09:40Z" },
  { "id": "rev_9ZtB...", "video_id": "vid_8fK2mQ..._1", "status": "editing", "created_at": "2026-11-15T19:10:02Z" }
]
```

A finished revision keeps its own file, which stays downloadable after a later revision replaces the cut's. A revision of several cuts has an entry for each, under its one id, and the first carries what was sent with it. A failed one carries `error`. Each revision builds on the cut as the one before left it. Revisions made before November 15, 2026 are not listed.

**Another resolution of the same cut.** Free, and takes seconds.

```sh
curl $VYRA_API/v1/videos/vid_8fK2mQ.../exports \
  -H "Authorization: Bearer $VYRA_KEY" -H "Content-Type: application/json" \
  -d '{ "resolution": "4k" }'
```

It takes `filename` too, for the file it renders.

## Listing and usage

**Your videos,** newest first, whichever of your keys made them:

```
GET /v1/videos?status=completed&from=2026-11-01&to=2026-12-01&limit=50
```

```json
{ "videos": [ { "id": "vid_8fK2mQ...", "status": "completed", "created_at": "...", "price": { "total": 0.59 } } ],
  "next_before": "2026-11-12T19:03:11.512Z" }
```

`status` is any status above, or `working` for everything still being made. `limit` is 1 to 100, and 25 when left out. A full page carries `next_before`; send it as `before` for the next page. A listed video has no download links: ask for the one video for those.

**What you made and were charged:**

```
GET /v1/usage?from=2026-11-01&to=2026-12-01
```

```json
{ "from": "2026-11-01", "to": "2026-12-01", "currency": "USD", "price_multiplier": 1,
  "videos": 42, "completed": 38, "failed": 3, "working": 1, "charged": 51.37,
  "days": [ { "day": "2026-11-12", "videos": 4, "completed": 3, "failed": 1, "charged": 4.12 } ] }
```

`from` and `to` are UTC days, and `to` is the day after the last one counted. With no dates it covers this month so far. The same numbers, with each video's detail, are in Settings → Developer. `price_multiplier` is the account's rate on the price list: 1, or a partner rate Vyra set, at which every charge was made.

## Limits

| Limit | Amount |
|---|---|
| Videos being made at once, per account | 3 to 50, set by how much you have added in all. See "Paying from a balance". |
| Videos being made at once, per key | No limit of its own unless you set one in Settings → Developer. |
| Calls a minute, per key | 3,000 |
| Request body | 1 MB |
| Footage | 200 entries, 3 hours of video |
| References | 5 |
| Prompt | 8,000 characters |
| Variations | 20 cuts |
| Changes to one cut | 10 |
| Keys | 10 at once |

A create past a videos-at-once limit answers `429 TOO_MANY_RUNNING`, and the message says whether it was the key's limit or the account's. Wait for one to finish and send it again. A call past 3,000 a minute answers `429 RATE_LIMITED` with `Retry-After`.

## Retrying safely

Send `Idempotency-Key: <your own id for this video>` with every create (1 to 255 characters, no spaces). If the same `Idempotency-Key` value arrives again from the same API key within a day, after a timeout or a dropped connection, you get the video the first call made, with `Idempotent-Replayed: true`, and nothing more is made or charged.

Without it, every accepted create is a new video, even if the connection dropped before you saw the answer.

To try again after a video failed, use a new `Idempotency-Key` value: the old one keeps answering with the failed video.

A revision takes the header the same way. The same `Idempotency-Key` value from the same API key, sent again for the same video within a day, answers with the first revision's `revision_id`, whether it is under way, finished or failed, and nothing more is started or charged.

## Errors

Every refusal has the same shape. `message` says what to do; `param` names the field at fault.

```json
{ "error": { "code": "INVALID_MAX_SECONDS", "message": "max_seconds is a whole number of seconds from 1 to 1800.", "param": "max_seconds" } }
```

| Status | Meaning | Common codes |
|---|---|---|
| 400 | The request cannot be taken as sent | `FOOTAGE_REQUIRED`, `PROMPT_OR_REFERENCE_REQUIRED`, `INVALID_SOURCE`, `INVALID_MAX_SECONDS`, `INVALID_SIZE`, `UNKNOWN_FIELD`, `FILE_NOT_FOUND`, `FILE_NOT_UPLOADED`, `FILE_EXPIRED`, `INVALID_FILENAME`, `VARIATION_SCOPE_MISMATCH`, `CUT_REQUIRED`, `INVALID_VIDEO_IDS` |
| 401 | No key, or a key we do not know | `API_KEY_REQUIRED`, `API_KEY_INVALID` |
| 402 | Your balance does not cover the fee | `INSUFFICIENT_BALANCE` |
| 404 | No such video on your account | `VIDEO_NOT_FOUND` |
| 409 | The video is busy or not finished, or a file it was made from was removed | `VIDEO_BUSY`, `VIDEO_NOT_FINISHED`, `FILE_EXPIRED` |
| 413 | Body over 1 MB | `INVALID_REQUEST` |
| 429 | A limit | `RATE_LIMITED`, `TOO_MANY_RUNNING`, `UPLOAD_LIMIT` |
| 500, 503 | Ours. Try again. | `INTERNAL`, `UNAVAILABLE` |

The OpenAPI spec lists every code each call can answer.

A video that fails says why in `error.code`:

| Code | What happened |
|---|---|
| `LINK_INVALID`, `LINK_NOT_FOUND`, `LINK_NOT_PUBLIC`, `NOT_MEDIA`, `DOWNLOAD_FAILED` | A link could not be brought in. The message names the entry. |
| `FILE_NOT_FOUND` | An uploaded file is no longer there. Upload it again and start the video again. |
| `FILE_EXPIRED` | An uploaded file was removed after 7 days without use before it was brought in. Upload it again and start the video again. |
| `PROCESSING_FAILED` | A file is broken, is not what its content_type said, or could not be analysed. Nothing was charged; send it again, or in parts under 3 hours. |
| `REFERENCE_...` | An Instagram, TikTok or YouTube video could not be used: private, removed, or over 20 minutes. |
| `IMPORT_LINK_UNAVAILABLE` | An Instagram, TikTok or YouTube video could not be downloaded just then. Try again in a few minutes, or upload it as a file. |
| `IMPORT_TIMED_OUT` | The footage took too long to download or be analysed. Try again, with a smaller copy of a very large file. |
| `UNAVAILABLE` | The footage could not be brought in just then. Start it again. |
| `FOOTAGE_TOO_LONG` | More than 3 hours of video in all. Found as soon as the files are measured, before any analysis or editing. Nothing was charged; send it in parts under 3 hours. |
| `MAX_PRICE_EXCEEDED` | The footage would cost more than your max_price. Nothing was charged. |
| `INSUFFICIENT_BALANCE` | Once the footage was measured, your balance did not cover the most the video could cost. Nothing was charged. |
| `CANNOT_BE_MADE` | The agent could not make it from what was sent, and says why. |
| `AGENT_DID_NOT_FINISH`, `RENDER_FAILED`, `RENDER_TIMED_OUT`, `INTERNAL` | Ours. Nothing was charged; start it again. |

Other codes may appear. Each failed video's `message` says what happened and what to do.

## Prices

A video costs its fee, plus the media you sent, plus anything the agent generated. A failed video costs nothing. Prices are in US dollars.

### The fee

Set by the band `max_seconds` falls in and by `effort`. It is fixed when the video is created, whatever length the finished video turns out to be.

| `max_seconds` up to | low | high |
|---|---|---|
| 60 (60 seconds) | $0.50 | $1.00 |
| 120 (2 minutes) | $0.65 | $1.25 |
| 300 (5 minutes) | $0.90 | $1.75 |
| 600 (10 minutes) | $1.25 | $2.50 |
| 900 (15 minutes) | $1.65 | $3.25 |
| 1800 (30 minutes) | $2.25 | $4.50 |

### Variations

The first cut costs the fee. Each extra cut adds a share of that fee: **a tenth** with `variation_scope: "portion"` and **three quarters** with `"full"`. The total is rounded up to the next cent.

```
fee for N cuts = band fee + band fee × share × (N − 1)
share = 0.10 for portion, 0.75 for full
```

For a video of up to 60 seconds, the fee for the whole request is:

| Cuts | low, portion | low, full | high, portion | high, full |
|---|---|---|---|---|
| 1 | $0.50 | $0.50 | $1.00 | $1.00 |
| 2 | $0.55 | $0.88 | $1.10 | $1.75 |
| 3 | $0.60 | $1.25 | $1.20 | $2.50 |
| 5 | $0.70 | $2.00 | $1.40 | $4.00 |
| 10 | $0.95 | $3.88 | $1.90 | $7.75 |
| 20 | $1.45 | $7.63 | $2.90 | $15.25 |

### Revisions and re-exports

| Change | low | high |
|---|---|---|
| A cut's first revision | Free | Free |
| Each later revision of a cut | $0.35 | $0.70 |
| Another resolution of the same cut | Free | Free |
| A revision or a video that fails | Free | Free |

A revision is charged at the effort its video was made with. A revision of several cuts is each cut's own price added up. Footage or a reference added in a revision is charged as media sent, below, even on a free revision, and so is generated media.

### Media sent

| Sent | Price |
|---|---|
| Video, footage and references alike, a linked Instagram, TikTok or YouTube video included | $0.02 a minute |
| Audio files | $0.01 a minute |
| Images | Free |

Each kind is added up across the request and rounded up to the next cent: 4 minutes 30 seconds of video is $0.09, and 12 minutes 45 seconds is $0.26.

An uploaded file is charged once, by the first video or revision that uses it and completes. A later one that sends the same `file_id` is not charged its minutes again; its price lists them at $0:

```json
"reused_media": { "files": ["file_3Hq9..."], "media_minutes": { "video": 9.5, "audio": 0 }, "media": 0 }
```

### Generated media

Only with `allow_generated_media: true`, and charged for what was made, never more than the budget.

| Made | Price | For example |
|---|---|---|
| Voiceover | $0.01 per 125 characters, at least $0.03 | 600 characters (about 40 seconds spoken): $0.05 |
| Sound effect or ambience | $0.24 a minute, at least $0.03 | A 5-second whoosh: $0.03. 30 seconds of room tone: $0.12 |
| Music track | $0.05 up to 25 seconds, $0.10 longer | A 60-second bed: $0.10 |
| Image | $0.03, $0.05 or $0.10 by quality | One image at the middle quality: $0.05 |

The budget is `generated_media_budget`, or $0.30 plus $0.10 for each minute of `max_seconds` when you leave it out: $0.40 up to a minute, $0.50 up to two, $1.30 for ten.

### The most a video can cost

Known before it starts:

```
fee + $0.02 × video minutes sent + $0.01 × audio minutes sent + generated media budget
```

The last term is zero without `allow_generated_media`. Lengths are measured by Vyra and can differ from yours by a fraction of a second, so add a few cents. Send that amount as `max_price` and you are never charged more: footage longer than you expected fails the video before any editing, at no charge. What you are charged is what was used, shown in `price.total` once the video is finished.

## Paying from a balance

Add funds in Settings → Developer, through Stripe, $10 to $5,000 at a time. Nothing is charged that your balance does not cover.

- Creating a video or a paid revision holds its fee. Without the fee in your balance the call answers `402 INSUFFICIENT_BALANCE` and nothing starts.
- Once your footage is measured, the video holds the most it can cost. If your balance does not cover that, the video fails with `INSUFFICIENT_BALANCE` and costs nothing.
- A finished video is charged what it cost and the rest of the hold comes back. A failed video gives the whole hold back.
- Funds run out a year after you add them. The oldest are spent first.
- The balance is not refundable. Questions about it go to caleb@usevyra.com.

How much you have added in all sets how many videos you can have being made at once. Variations of one video count once. Spending does not lower it.

| Added in all | Videos at once |
|---|---|
| Under $50 | 3 |
| $50 | 10 |
| $250 | 20 |
| $1,000 | 50 |

Need more than 50? Email caleb@usevyra.com. When we are very busy, a new video waits as `queued` until one finishes.

## Checking your balance

Any of your keys can read how the account is billed, its limit and its balance:

```sh
curl $VYRA_API/v1/balance \
  -H "Authorization: Bearer $VYRA_KEY"
```

```json
{ "billing": "prepaid", "currency": "USD", "balance": 42.1, "held": 1.19, "paid_in": 60, "tier": 2, "max_running": 10,
  "next_tier": { "tier": 3, "paid_in": 250, "max_running": 20 } }
```

Amounts are in dollars. `balance` is what is free to spend, launch credit included. `held` is what videos being made are holding. `paid_in` is everything you have added, less refunds, and sets `tier`. `max_running` is how many videos the account may have being made at once. `next_tier` says what you need to have added for the next tier, and is `null` at the top one. `billing` is `prepaid`, or `partner` for an account Vyra bills afterwards from the price list: a partner gets `max_running`, and `null` for `balance`, `held`, `paid_in`, `tier` and `next_tier`.

## Price examples

| Request | Lines | Total |
|---|---|---|
| A short ad on low: effort low, max_seconds 30, 4 min 30 s of clips, two logos | Fee, up to 60 s, low $0.50; video sent, 4.5 min × $0.02 = $0.09; images free | $0.59 |
| A reference recreation on high: effort high, max_seconds 60, 12 min of footage, a 45 s Instagram reference | Fee, up to 60 s, high $1.00; video sent, 12.75 min × $0.02, rounded up = $0.26 | $1.26 |
| Three hooks: effort high, max_seconds 30, variations 3, variation_scope "portion", 6 min of footage | Fee $1.00; two extra cuts, 2 × a tenth of $1.00 = $0.20; video sent, 6 min × $0.02 = $0.12 | $1.32 |
| Three different edits: effort low, max_seconds 90, variations 3, variation_scope "full", 20 min of footage | Fee, up to 120 s, low $0.65; two extra cuts, 2 × three quarters of $0.65, rounded up = $0.98; video sent, 20 min × $0.02 = $0.40 | $2.03 |
| With voiceover and music: effort high, max_seconds 60, allow_generated_media, 8 min of footage | Fee $1.00; video sent $0.16; voiceover, 600 characters $0.05; music track, 60 s $0.10. The most it could have cost, with the default $0.40 budget: $1.56 | $1.31 |
| Footage with a separate voice track: effort low, max_seconds 60, 3 min of video, a 2 min WAV | Fee $0.50; video sent, 3 min × $0.02 = $0.06; audio sent, 2 min × $0.01 = $0.02 | $0.58 |
| A long highlight edit: effort high, max_seconds 900, 55 min of interview footage | Fee, up to 900 s, high $3.25; video sent, 55 min × $0.02 = $1.10 | $4.35 |
| A revision that adds a clip: a second revision of a cut made on high, with one new 2 min clip | Revision, high $0.70; video sent, 2 min × $0.02 = $0.04 | $0.74 |
| A video that fails: a dead link, footage past max_price, or the agent cannot make it | Charged $0.00 | $0.00 |

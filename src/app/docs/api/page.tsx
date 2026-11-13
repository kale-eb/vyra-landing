import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vyra API - Vyra Docs",
  description:
    "Send footage and a prompt, get a finished video back. Calls, limits, webhooks, errors and prices for the Vyra API.",
};

/* ── Prices, in cents. The same list and arithmetic the API charges with. ── */

const BANDS = [
  { maxSeconds: 60, low: 50, high: 100 },
  { maxSeconds: 120, low: 65, high: 125 },
  { maxSeconds: 300, low: 90, high: 175 },
  { maxSeconds: 600, low: 125, high: 250 },
  { maxSeconds: 900, low: 165, high: 325 },
  { maxSeconds: 1800, low: 225, high: 450 },
] as const;
/** Where the API answers. The examples call it $VYRA_API. */
const API_BASE = "https://vyra-public-api-dd677jigfq-uc.a.run.app";
const SHARE = { portion: 0.25, full: 0.75 } as const;
type Effort = "low" | "high";
type Scope = keyof typeof SHARE;

const usd = (cents: number) => `$${(cents / 100).toFixed(2)}`;
/** The fee for `cuts` cuts: the first at the band fee, each extra one a share of it, rounded up to a cent. */
const feeFor = (fee: number, cuts: number, scope: Scope) =>
  fee + Math.ceil(fee * SHARE[scope] * (cuts - 1) - 1e-9);
const CUTS = [1, 2, 3, 4, 5];
const lengthLabel = (seconds: number) =>
  seconds < 120 ? `${seconds} seconds` : `${seconds / 60} minutes`;

const SECTIONS = [
  ["get-a-key", "Get a key"],
  ["first-video", "Make your first video"],
  ["footage", "Sending footage"],
  ["request", "Saying what you want"],
  ["examples", "Example requests"],
  ["result", "Getting the result"],
  ["changes", "Changing a finished video"],
  ["usage", "Listing and usage"],
  ["limits", "Limits"],
  ["retries", "Retrying safely"],
  ["errors", "Errors"],
  ["prices", "Prices"],
  ["price-examples", "Price examples"],
] as const;

export default function ApiDocsPage() {
  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--surface-border)] bg-white/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-2xl backdrop-saturate-150">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center gap-4 px-6">
          <Link
            href="/"
            className="text-[22px] font-extrabold tracking-tight text-[var(--foreground)]"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Vyra
          </Link>
          <span className="text-[var(--foreground-subtle)]">/</span>
          <Link
            href="/docs"
            className="text-[13px] font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
          >
            Docs
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1
          className="mb-3 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          Vyra API
        </h1>
        <p className="mb-8 text-[15px] leading-relaxed text-[var(--foreground-muted)]">
          Send footage and say what you want. Get a finished video back. The API runs the same
          editor agent as the Vyra app: you send clips, images or audio with a prompt or a reference
          video, and the agent cuts, captions, reframes and exports it. Most videos finish in 7 to
          15 minutes.
        </p>

        <div className="mb-12 rounded-xl border border-[var(--surface-border)] bg-white p-5">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--foreground-subtle)]">
            On this page
          </p>
          <ul className="space-y-1.5 text-[14px] sm:columns-2 sm:gap-x-6">
            {SECTIONS.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="text-[var(--brand-blue)] underline-offset-2 hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-14 text-[15px] leading-[1.8] text-[var(--foreground-muted)]">
          {/* Get a key */}
          <section>
            <H2 id="get-a-key">Get a key</H2>
            <p className="mb-4">
              The API is open to accounts we have approved. To ask for access, email{" "}
              <A href="mailto:caleb@usevyra.com">caleb@usevyra.com</A> from the address of your Vyra
              account.
            </p>
            <p className="mb-2">Every call goes to one base address over HTTPS, under <C>/v1</C>:</p>
            <Code>{API_BASE}</Code>
            <p className="mt-3 mb-4">
              The examples here call it <C>$VYRA_API</C> and your key <C>$VYRA_KEY</C>:
            </p>
            <Code>{`export VYRA_API=${API_BASE}
export VYRA_KEY=vyra_live_...`}</Code>
            <p className="mt-4 mb-2">To get a key:</p>
            <ol className="mb-4 list-decimal space-y-2 pl-6">
              <li>
                Sign in to the Vyra web app and open{" "}
                <A href="https://app.usevyra.com/settings">Settings &rarr; Developer</A>.
              </li>
              <li>
                Name a key, choose how many videos it may make at once, and press <strong>Create key</strong>.
              </li>
              <li>
                Copy the key and its webhook secret. They are shown once and cannot be shown again.
              </li>
            </ol>
            <p className="mb-2">Send the key with every call:</p>
            <Code>{`Authorization: Bearer vyra_live_...`}</Code>
            <p className="mt-4">
              You can hold up to 10 keys and revoke any of them from the same page. Settings &rarr;
              Developer also shows your usage by key and by day, what you owe so far, and every video
              with what you sent, what it cost and its files. Any key on your account can read,
              revise and re-export a video another of your keys made.
            </p>
          </section>

          {/* First video */}
          <section>
            <H2 id="first-video">Make your first video</H2>
            <H3>1. Start it</H3>
            <p className="mb-2">Footage is a list of links to your files.</p>
            <Code>{`curl $VYRA_API/v1/videos \\
  -H "Authorization: Bearer $VYRA_KEY" \\
  -H "Content-Type: application/json" \\
  -H "Idempotency-Key: order-1041" \\
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
  }'`}</Code>
            <p className="mt-3 mb-2">
              The answer comes back at once (<C>202</C>) with the video&apos;s id:
            </p>
            <Code>{`{ "id": "vid_8fK2mQ...", "status": "queued", "effort": "low", "max_seconds": 30,
  "price": { "currency": "USD", "video": 0.5, "media": null, "total": null } }`}</Code>

            <H3 className="mt-8">2. Wait for it</H3>
            <p className="mb-2">Ask every 15 to 30 seconds, or use a <a href="#result" className="text-[var(--brand-blue)] underline underline-offset-2">webhook</a>.</p>
            <Code>{`curl $VYRA_API/v1/videos/vid_8fK2mQ... \\
  -H "Authorization: Bearer $VYRA_KEY"`}</Code>
            <p className="mt-3">
              <C>status</C> moves through <C>queued</C>, <C>importing</C>, <C>analysing</C>,{" "}
              <C>editing</C> and <C>rendering</C>, and ends at <C>completed</C> or <C>failed</C>.
            </p>

            <H3 className="mt-8">3. Download it</H3>
            <p className="mb-2">A completed video carries a link for each file:</p>
            <Code>{`{
  "id": "vid_8fK2mQ...",
  "status": "completed",
  "videos": [
    { "id": "vid_8fK2mQ..._1", "revision": 0, "length_seconds": 29.6, "width": 1080, "height": 1920,
      "exports": [ { "resolution": "original", "status": "completed", "url": "https://..." } ] }
  ],
  "notes": {
    "summary": "A 30-second vertical ad that opens on the pour and ends on the logo.",
    "assumed": ["Used the second pour take; the first is out of focus."],
    "did_not_match": []
  },
  "price": { "currency": "USD", "video": 0.5, "media_minutes": { "video": 4.5, "audio": 0 },
             "media": 0.09, "generated_media": null, "total": 0.59 }
}`}</Code>
            <p className="mt-3">
              A link lasts an hour. Ask for the video again and you get a fresh one, as many times as
              you like.
            </p>
          </section>

          {/* Footage */}
          <section>
            <H2 id="footage">Sending footage</H2>
            <p className="mb-4">
              <C>footage</C> takes up to 200 entries and 5 hours of video in all. Each entry is one of:
            </p>
            <Table
              head={["What you send", "Notes"]}
              rows={[
                ["A direct https link to a file", "Redirects are followed. The link must be reachable from the public internet."],
                ["A Google Drive file or folder link, or a Dropbox file link", "Shared so that anyone with the link can open it. A folder brings in every file in it."],
                ["An Instagram, TikTok or YouTube video link", "A public video of up to 20 minutes."],
                [<span key="f">A <C>file_id</C> from an upload</span>, "For files that have no link. See below."],
              ]}
            />
            <p className="mt-4 mb-2">
              <strong className="text-[var(--foreground)]">Formats that work.</strong> Video: MP4
              (H.264, HEVC), MOV (ProRes included), WebM, MKV, AVI. Images: JPG, PNG, WebP, HEIC, GIF.
              Audio: WAV, MP3, M4A, FLAC. Phone clips with rotation, 4K, 60 and 120 frames a second,
              variable frame rate and HDR are all taken.
            </p>
            <p className="mb-4">
              <strong className="text-[var(--foreground)]">Every file has to import.</strong> If one
              link is dead or one file is broken, the video fails before any editing, costs nothing,
              and the error names the entry (<C>footage[3]</C>). Footage needs a picture: audio alone
              cannot make a video.
            </p>

            <H3>Uploading a file that has no link</H3>
            <Code>{`curl $VYRA_API/v1/uploads \\
  -H "Authorization: Bearer $VYRA_KEY" -H "Content-Type: application/json" \\
  -d '{ "files": [
        { "name": "take-1.mov", "size_bytes": 812345678, "content_type": "video/quicktime" }
      ] }'`}</Code>
            <p className="mt-3 mb-2">You get back a <C>file_id</C> and where to send the bytes:</p>
            <Code>{`{ "files": [ { "file_id": "file_3hT9...", "name": "take-1.mov", "expires_at": "...",
    "upload": { "method": "PUT", "url": "https://...", "headers": { "Content-Type": "video/quicktime" } } } ] }`}</Code>
            <Code>{`curl -X PUT "<upload.url>" -H "Content-Type: video/quicktime" --data-binary @take-1.mov`}</Code>
            <p className="mt-3">
              Then use the <C>file_id</C> in <C>footage</C> or <C>references</C>. Up to 50 files a
              call and 10 GB a file; a file over 4 GB is sent in parts, and the answer lists a link
              for each part. <C>content_type</C> must be what the file really is, and{" "}
              <C>size_bytes</C> its exact size. An upload link lasts a day, and a <C>file_id</C> is used
              by one video.
            </p>
          </section>

          {/* Request */}
          <section>
            <H2 id="request">Saying what you want</H2>
            <Table
              head={["Field", "What it does"]}
              rows={[
                [<C key="a">prompt</C>, "What to make. Required unless you send a reference. Up to 8,000 characters."],
                [<C key="a">references</C>, "Up to 5 videos to make it look like: a file link, a file_id, or an Instagram, TikTok or YouTube link."],
                [<C key="a">effort</C>, <span key="b"><C>high</C> (the default) or <C>low</C>. Low costs half as much and finishes sooner: about 8 minutes against about 14. High follows a detailed request or a reference more closely.</span>],
                [<C key="a">max_seconds</C>, "The longest the video may run, 1 to 1800. Default 60. It is never exceeded, and it sets the price band."],
                [<C key="a">target_seconds</C>, <span key="b">The length to aim for, within <C>max_seconds</C>.</span>],
                [<C key="a">aspect_ratio</C>, <span key="b"><C>9:16</C>, <C>16:9</C> or <C>1:1</C>. Or send <C>width</C> and <C>height</C> (even numbers, 320 to 3840, the shorter side at most 2160). Left out, the agent chooses from the footage and the request.</span>],
                [<span key="a"><C>fps</C>, <C>resolution</C></span>, <span key="b">1 to 60 frames a second (default 30); <C>720p</C>, <C>1080p</C>, <C>1440p</C> or <C>4k</C>.</span>],
                [<C key="a">variations</C>, <span key="b">1 to 5 cuts from the same footage. <C>variation_brief</C> says how they differ.</span>],
                [<C key="a">variation_scope</C>, <span key="b"><C>portion</C> (the default): the cuts differ in one part, such as the hook or the ending, and are the same elsewhere. <C>full</C>: each cut is edited differently throughout. See <a href="#prices" className="text-[var(--brand-blue)] underline underline-offset-2">what each costs</a>.</span>],
                [<C key="a">allow_generated_media</C>, <span key="b"><C>true</C> lets the agent generate music, voiceover, sound and images, which are charged. Off by default.</span>],
                [<C key="a">generated_media_budget</C>, "Dollars. The most generated media may add. Left out, $0.30 plus $0.10 for each minute of max_seconds ($0.40 for a video of up to a minute)."],
                [<C key="a">max_price</C>, "Dollars. The most the video may cost in all. If your footage would take it over, the video fails before any editing and costs nothing."],
                [<C key="a">webhook_url</C>, "Where to tell you when it is done."],
              ]}
            />

            <H3 className="mt-8">Prompts that work</H3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-[var(--foreground)]">Say what the video is and how long.</strong>{" "}
                &quot;A 30-second vertical ad for the Halo bottle&quot; beats &quot;make an ad&quot;.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Name the files that matter.</strong>{" "}
                &quot;Open on pour-shot.mp4, end on logo.png.&quot; The agent sees every file&apos;s name.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Say what you do not want.</strong>{" "}
                &quot;No music.&quot; &quot;No captions.&quot; &quot;It will be watched on silent.&quot;
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Give a reference when you care about the look.</strong>{" "}
                One reference video and &quot;make it look like the reference&quot; is the most
                reliable way to get a specific style.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Describe captions and text if they matter:</strong>{" "}
                the feel of the font, size, position, how many words at a time.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Ask for what your footage holds.</strong>{" "}
                A request for something the clips do not show fails with <C>CANNOT_BE_MADE</C> and costs nothing.
              </li>
            </ul>
            <p className="mt-4">
              The agent tells you what it assumed and what it could not do in <C>notes</C>. Read{" "}
              <C>notes.did_not_match</C> before you pass a video on to someone.
            </p>
          </section>

          {/* Example requests */}
          <section>
            <H2 id="examples">Example requests</H2>
            <p className="mb-4">Each is the body of <C>POST /v1/videos</C>.</p>

            <H3>A talking-head clip with captions</H3>
            <Code>{`{
  "footage": ["https://drive.google.com/file/d/1AbC.../view"],
  "prompt": "Cut this into a 45-second vertical clip of the strongest point. Remove pauses and filler. Bold white captions, three words at a time, lower third.",
  "effort": "low",
  "max_seconds": 45,
  "aspect_ratio": "9:16"
}`}</Code>

            <H3 className="mt-6">Make it look like a reference</H3>
            <Code>{`{
  "footage": ["https://drive.google.com/drive/folders/1XyZ..."],
  "references": ["https://www.instagram.com/reel/DAbCdEf123/"],
  "prompt": "Recreate the reference with our gym footage: the same pacing, text style and transitions.",
  "effort": "high",
  "max_seconds": 30
}`}</Code>

            <H3 className="mt-6">Three hooks on one video</H3>
            <Code>{`{
  "footage": ["file_3hT9...", "file_7pLm...", "file_Qw2x..."],
  "prompt": "A 30-second vertical product ad for the Halo bottle with captions.",
  "variations": 3,
  "variation_scope": "portion",
  "variation_brief": "Only the first three seconds differ: a question, a bold claim, and a close-up with no text.",
  "max_seconds": 30,
  "aspect_ratio": "9:16"
}`}</Code>
            <p className="mt-3">
              The answer&apos;s <C>videos</C> then holds three cuts, <C>vid_..._1</C> to{" "}
              <C>vid_..._3</C>, each with its own file.
            </p>

            <H3 className="mt-6">Two different edits of the same footage</H3>
            <Code>{`{
  "footage": ["https://www.dropbox.com/s/abc123/trip.mov?dl=0"],
  "prompt": "A 60-second travel recap.",
  "variations": 2,
  "variation_scope": "full",
  "variation_brief": "One calm with long shots and no text. One fast with quick cuts and big captions.",
  "effort": "low"
}`}</Code>

            <H3 className="mt-6">With generated voiceover and music, and a price ceiling</H3>
            <Code>{`{
  "footage": ["https://files.example.com/apartment-tour.mp4"],
  "prompt": "A 60-second listing video. Write and speak a warm voiceover about the flat, with soft music under it.",
  "allow_generated_media": true,
  "generated_media_budget": 0.25,
  "max_seconds": 60,
  "max_price": 1.50,
  "webhook_url": "https://example.com/hooks/vyra"
}`}</Code>

            <H3 className="mt-6">A long horizontal edit</H3>
            <Code>{`{
  "footage": ["https://files.example.com/podcast-cam-a.mp4", "https://files.example.com/podcast-cam-b.mp4"],
  "prompt": "A 12-minute highlight edit of this interview. Keep the three best stories whole. Cut between the two cameras. No captions.",
  "max_seconds": 900,
  "target_seconds": 720,
  "aspect_ratio": "16:9",
  "resolution": "1080p"
}`}</Code>
          </section>

          {/* Result */}
          <section>
            <H2 id="result">Getting the result</H2>
            <p className="mb-4">
              <strong className="text-[var(--foreground)]">Polling.</strong> Ask{" "}
              <C>GET /v1/videos/{"{id}"}</C> every 15 to 30 seconds until <C>status</C> is{" "}
              <C>completed</C> or <C>failed</C>.
            </p>
            <p className="mb-2">
              <strong className="text-[var(--foreground)]">Webhooks.</strong> Send{" "}
              <C>webhook_url</C> with the request and we <C>POST</C> to it when the video completes
              or fails:
            </p>
            <Code>{`{ "id": "...", "event": "video.completed", "created_at": "2026-11-13T02:14:09Z",
  "video": { "id": "vid_8fK2mQ...", "status": "completed", "videos": [ ... ], "price": { ... } } }`}</Code>
            <p className="mt-3 mb-4">
              <C>video</C> is what <C>GET /v1/videos/{"{id}"}</C> answers. Events:{" "}
              <C>video.completed</C>, <C>video.failed</C>, <C>video.revised</C>,{" "}
              <C>video.revision_failed</C>, <C>video.exported</C>, <C>video.export_failed</C>. Answer
              with a 2xx. Anything else is tried again, further apart each time, for about a day. The
              address must be on the public internet.
            </p>
            <p className="mb-2">
              <strong className="text-[var(--foreground)]">Check that it came from us.</strong> Each
              webhook carries <C>Vyra-Signature: t=&lt;unix seconds&gt;,v1=&lt;hex&gt;</C>.{" "}
              <C>v1</C> is the HMAC-SHA256 of <C>&lt;t&gt;.&lt;raw body&gt;</C> with your key&apos;s
              webhook secret.
            </p>
            <Code>{`import crypto from "node:crypto";

function fromVyra(rawBody, header, secret) {
  const { t, v1 } = Object.fromEntries(header.split(",").map(part => part.split("=")));
  const expected = crypto.createHmac("sha256", secret).update(\`\${t}.\${rawBody}\`).digest("hex");
  return v1.length === expected.length
    && crypto.timingSafeEqual(Buffer.from(v1), Buffer.from(expected));
}`}</Code>
            <p className="mt-4 mb-2">
              <strong className="text-[var(--foreground)]">If it failed.</strong> A failed video
              costs nothing and says why. The message says what to do.
            </p>
            <Code>{`{ "id": "vid_Zr41...", "status": "failed",
  "error": { "code": "LINK_NOT_PUBLIC", "message": "<names the entry, such as footage[2], and says what to do>" },
  "price": { "currency": "USD", "total": 0 } }`}</Code>
            <p className="mt-4">
              <strong className="text-[var(--foreground)]">Your files stay available.</strong> A
              finished video keeps its files. Each download link lasts an hour, and asking for the
              video again gives you a fresh one.
            </p>
          </section>

          {/* Changes */}
          <section>
            <H2 id="changes">Changing a finished video</H2>
            <p className="mb-2">
              <strong className="text-[var(--foreground)]">Revise a cut.</strong> Say what to change.
              You can add footage or a reference, or send a marked-up frame as an image.
            </p>
            <Code>{`curl $VYRA_API/v1/videos/vid_8fK2mQ.../revisions \\
  -H "Authorization: Bearer $VYRA_KEY" -H "Content-Type: application/json" \\
  -d '{ "prompt": "Shorten the quote to one line and make the captions bigger." }'`}</Code>
            <p className="mt-3 mb-4">
              The video stays <C>completed</C> and downloadable while the change is made;{" "}
              <C>change</C> shows how it stands. When it is done the cut&apos;s <C>revision</C> goes
              up, it has a new file, and <C>last_change.price.total</C> is what the revision cost.
              With several variations, name the cut by its own id (<C>vid_8fK2mQ..._2</C>). A failed
              revision leaves the video as it was and costs nothing. A cut takes up to 10 changes,
              one at a time.
            </p>
            <p className="mb-2">
              <strong className="text-[var(--foreground)]">Another resolution of the same cut.</strong>{" "}
              Free, and takes seconds.
            </p>
            <Code>{`curl $VYRA_API/v1/videos/vid_8fK2mQ.../exports \\
  -H "Authorization: Bearer $VYRA_KEY" -H "Content-Type: application/json" \\
  -d '{ "resolution": "4k" }'`}</Code>
          </section>

          {/* Usage */}
          <section>
            <H2 id="usage">Listing and usage</H2>
            <p className="mb-2">
              <strong className="text-[var(--foreground)]">Your videos,</strong> newest first,
              whichever of your keys made them:
            </p>
            <Code>{`GET /v1/videos?status=completed&from=2026-11-01&to=2026-12-01&limit=50

{ "videos": [ { "id": "vid_8fK2mQ...", "status": "completed", "created_at": "...", "price": { "total": 0.59 } } ],
  "next_before": "2026-11-12T19:03:11.512Z" }`}</Code>
            <p className="mt-3 mb-4">
              <C>status</C> is any status above, or <C>working</C> for everything still being made.{" "}
              <C>limit</C> is 1 to 100, and 25 when left out. A full page carries <C>next_before</C>; send it as{" "}
              <C>before</C> for the next page. A listed video has no download links: ask for the one
              video for those.
            </p>
            <p className="mb-2">
              <strong className="text-[var(--foreground)]">What you made and were charged:</strong>
            </p>
            <Code>{`GET /v1/usage?from=2026-11-01&to=2026-12-01

{ "from": "2026-11-01", "to": "2026-12-01", "currency": "USD",
  "videos": 42, "completed": 38, "failed": 3, "working": 1, "charged": 51.37,
  "days": [ { "day": "2026-11-12", "videos": 4, "completed": 3, "failed": 1, "charged": 4.12 } ] }`}</Code>
            <p className="mt-3">
              With no dates it covers this month so far. The same numbers, with each video&apos;s
              detail, are in Settings &rarr; Developer.
            </p>
          </section>

          {/* Limits */}
          <section>
            <H2 id="limits">Limits</H2>
            <Table
              head={["Limit", "Amount"]}
              rows={[
                ["Videos being made at once, per account", "25. Ask us if you need more."],
                ["Videos being made at once, per key", "5 by default. Set it when you create the key or change it later in Settings → Developer. Your keys' limits together cannot pass your account's."],
                ["Calls a minute, per key", "300"],
                ["Request body", "1 MB"],
                ["Footage", "200 entries, 5 hours of video"],
                ["References", "5"],
                ["Prompt", "8,000 characters"],
                ["Variations", "5 cuts"],
                ["Changes to one cut", "10"],
                ["Keys", "10 at once"],
              ]}
            />
            <p className="mt-4">
              A create past a videos-at-once limit answers <C>429 TOO_MANY_RUNNING</C>, and the
              message says whether it was the key&apos;s limit or the account&apos;s. Wait for one to
              finish and send it again. A call past 300 a minute answers <C>429 RATE_LIMITED</C> with{" "}
              <C>Retry-After</C>.
            </p>
          </section>

          {/* Retries */}
          <section>
            <H2 id="retries">Retrying safely</H2>
            <p className="mb-4">
              Send <C>Idempotency-Key: &lt;your own id for this video&gt;</C> with every create (1 to
              255 characters, no spaces). If
              the same key arrives again within a day, after a timeout or a dropped connection, you
              get the video the first call made, with <C>Idempotent-Replayed: true</C>, and nothing more
              is made or charged.
            </p>
            <p className="mb-4">
              Without it, every accepted create is a new video, even if the connection dropped before
              you saw the answer.
            </p>
            <p>
              To try again after a video failed, use a new key: the old one keeps answering with the
              failed video.
            </p>
          </section>

          {/* Errors */}
          <section>
            <H2 id="errors">Errors</H2>
            <p className="mb-2">Every refusal has the same shape. <C>message</C> says what to do; <C>param</C> names the field at fault.</p>
            <Code>{`{ "error": { "code": "INVALID_MAX_SECONDS", "message": "max_seconds is a whole number of seconds from 1 to 1800.", "param": "max_seconds" } }`}</Code>
            <div className="mt-4">
              <Table
                head={["Status", "Meaning", "Common codes"]}
                rows={[
                  ["400", "The request cannot be taken as sent", <Codes key="c" list={["FOOTAGE_REQUIRED", "PROMPT_OR_REFERENCE_REQUIRED", "INVALID_SOURCE", "INVALID_MAX_SECONDS", "INVALID_SIZE", "UNKNOWN_FIELD", "FILE_NOT_UPLOADED", "FILE_ALREADY_USED", "CUT_REQUIRED"]} />],
                  ["401", "No key, or a key we do not know", <Codes key="c" list={["API_KEY_REQUIRED", "API_KEY_INVALID"]} />],
                  ["404", "No such video on your account", <Codes key="c" list={["VIDEO_NOT_FOUND"]} />],
                  ["409", "The video is busy or not finished", <Codes key="c" list={["VIDEO_BUSY", "VIDEO_NOT_FINISHED"]} />],
                  ["413", "Body over 1 MB", <Codes key="c" list={["INVALID_REQUEST"]} />],
                  ["429", "A limit", <Codes key="c" list={["RATE_LIMITED", "TOO_MANY_RUNNING", "UPLOAD_LIMIT"]} />],
                  ["500, 503", "Ours. Try again.", <Codes key="c" list={["INTERNAL", "UNAVAILABLE"]} />],
                ]}
              />
            </div>
            <p className="mt-6 mb-3">A video that fails says why in <C>error.code</C>:</p>
            <Table
              head={["Code", "What happened"]}
              rows={[
                [<Codes key="c" list={["LINK_NOT_FOUND", "LINK_NOT_PUBLIC", "NOT_MEDIA", "DOWNLOAD_FAILED"]} />, "A link could not be brought in. The message names the entry."],
                [<Codes key="c" list={["PROCESSING_FAILED"]} />, "A file is broken, or is not what its content_type said."],
                [<Codes key="c" list={["REFERENCE_..."]} />, "An Instagram, TikTok or YouTube video could not be used: private, removed, or over 20 minutes."],
                [<Codes key="c" list={["FOOTAGE_TOO_LONG"]} />, "More than 5 hours of video."],
                [<Codes key="c" list={["MAX_PRICE_EXCEEDED"]} />, "The footage would cost more than your max_price. Nothing was charged."],
                [<Codes key="c" list={["CANNOT_BE_MADE"]} />, "The agent could not make it from what was sent, and says why."],
                [<Codes key="c" list={["AGENT_DID_NOT_FINISH", "RENDER_FAILED", "INTERNAL"]} />, "Ours. Start it again."],
              ]}
            />
          </section>

          {/* Prices */}
          <section>
            <H2 id="prices">Prices</H2>
            <p className="mb-4">
              A video costs its fee, plus the media you sent, plus anything the agent generated. A
              failed video costs nothing. Prices are in US dollars.
            </p>

            <H3>The fee</H3>
            <p className="mb-3">
              Set by the band <C>max_seconds</C> falls in and by <C>effort</C>. It is fixed when the
              video is created, whatever length the finished video turns out to be.
            </p>
            <Table
              head={[<span key="h"><C>max_seconds</C> up to</span>, "low", "high"]}
              rows={BANDS.map((band) => [
                `${band.maxSeconds} (${lengthLabel(band.maxSeconds)})`,
                usd(band.low),
                usd(band.high),
              ])}
            />

            <H3 className="mt-8">Variations</H3>
            <p className="mb-3">
              The first cut costs the fee. Each extra cut adds a share of that fee:{" "}
              <strong className="text-[var(--foreground)]">a quarter</strong> with{" "}
              <C>variation_scope: &quot;portion&quot;</C> and{" "}
              <strong className="text-[var(--foreground)]">three quarters</strong> with{" "}
              <C>&quot;full&quot;</C>. The total is rounded up to the next cent.
            </p>
            <Code>{`fee for N cuts = band fee + band fee × share × (N − 1)
share = 0.25 for portion, 0.75 for full`}</Code>
            <p className="mt-4 mb-3">
              For a video of up to 60 seconds, the fee for the whole request is:
            </p>
            <Table
              head={["Cuts", "low, portion", "low, full", "high, portion", "high, full"]}
              rows={CUTS.map((cuts) => [
                String(cuts),
                usd(feeFor(50, cuts, "portion")),
                usd(feeFor(50, cuts, "full")),
                usd(feeFor(100, cuts, "portion")),
                usd(feeFor(100, cuts, "full")),
              ])}
            />
            <details className="group mt-4 rounded-xl border border-[var(--surface-border)] bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-3.5 text-[14px] font-semibold text-[var(--foreground)] [&::-webkit-details-marker]:hidden">
                Variation fees for every length
                <ChevronDown />
              </summary>
              <div className="space-y-6 border-t border-[var(--surface-border)] p-5">
                {(["low", "high"] as Effort[]).flatMap((effort) =>
                  (["portion", "full"] as Scope[]).map((scope) => (
                    <div key={`${effort}-${scope}`}>
                      <p className="mb-2 text-[14px] font-semibold text-[var(--foreground)]">
                        {effort}, {scope}
                      </p>
                      <Table
                        head={[<span key="h"><C>max_seconds</C> up to</span>, "1 cut", "2 cuts", "3 cuts", "4 cuts", "5 cuts"]}
                        rows={BANDS.map((band) => [
                          String(band.maxSeconds),
                          ...CUTS.map((cuts) => usd(feeFor(band[effort], cuts, scope))),
                        ])}
                      />
                    </div>
                  )),
                )}
              </div>
            </details>

            <H3 className="mt-8">Revisions and re-exports</H3>
            <Table
              head={["Change", "low", "high"]}
              rows={[
                ["A revision of one cut", "$0.35", "$0.70"],
                ["Another resolution of the same cut", "Free", "Free"],
                ["A revision or a video that fails", "Free", "Free"],
              ]}
            />
            <p className="mt-3">
              A revision is charged at the effort its video was made with. Footage or a reference
              added in a revision is charged as media sent, below.
            </p>

            <H3 className="mt-8">Media sent</H3>
            <Table
              head={["Sent", "Price"]}
              rows={[
                ["Video, footage and references alike, a linked Instagram, TikTok or YouTube video included", "$0.02 a minute"],
                ["Audio files", "$0.01 a minute"],
                ["Images", "Free"],
              ]}
            />
            <p className="mt-3">
              Each kind is added up across the request and rounded up to the next cent: 4 minutes 30
              seconds of video is $0.09, and 12 minutes 45 seconds is $0.26.
            </p>

            <H3 className="mt-8">Generated media</H3>
            <p className="mb-3">
              Only with <C>allow_generated_media: true</C>, and charged for what was made, never
              more than the budget.
            </p>
            <Table
              head={["Made", "Price", "For example"]}
              rows={[
                ["Voiceover", "$0.01 per 125 characters, at least $0.03", "600 characters (about 40 seconds spoken): $0.05"],
                ["Sound effect or ambience", "$0.24 a minute, at least $0.03", "A 5-second whoosh: $0.03. 30 seconds of room tone: $0.12"],
                ["Music track", "$0.05 up to 25 seconds, $0.10 longer", "A 60-second bed: $0.10"],
                ["Image", "$0.03, $0.05 or $0.10 by quality", "One image at the middle quality: $0.05"],
              ]}
            />
            <p className="mt-3">
              The budget is <C>generated_media_budget</C>, or $0.30 plus $0.10 for each minute of{" "}
              <C>max_seconds</C> when you leave it out: $0.40 up to a minute, $0.50 up to two, $1.30
              for ten.
            </p>

            <H3 className="mt-8">The most a video can cost</H3>
            <p className="mb-2">Known before it starts:</p>
            <Code>{`fee + $0.02 × video minutes sent + $0.01 × audio minutes sent + generated media budget`}</Code>
            <p className="mt-3">
              The last term is zero without <C>allow_generated_media</C>. Lengths are measured by
              Vyra and can differ from yours by a fraction of a second, so add a few cents. Send that
              amount as <C>max_price</C> and you are never charged more: footage longer than you
              expected fails the video before any editing, at no charge. What you are charged is what
              was used, shown in <C>price.total</C> once the video is finished.
            </p>
          </section>

          {/* Price examples */}
          <section>
            <H2 id="price-examples">Price examples</H2>
            <div className="space-y-3">
              <Example
                title="A short ad on low"
                request="effort low, max_seconds 30, 4 min 30 s of clips, two logos"
                lines={[["Fee, up to 60 s, low", 50], ["Video sent, 4.5 min × $0.02", 9], ["Images", 0]]}
              />
              <Example
                title="A reference recreation on high"
                request="effort high, max_seconds 60, 12 min of footage, a 45 s Instagram reference"
                lines={[["Fee, up to 60 s, high", 100], ["Video sent, 12.75 min × $0.02, rounded up", 26]]}
              />
              <Example
                title="Three hooks"
                request='effort high, max_seconds 30, variations 3, variation_scope "portion", 6 min of footage'
                lines={[["Fee, up to 60 s, high", 100], ["Two extra cuts, 2 × a quarter of $1.00", 50], ["Video sent, 6 min × $0.02", 12]]}
              />
              <Example
                title="Three different edits"
                request='effort low, max_seconds 90, variations 3, variation_scope "full", 20 min of footage'
                lines={[["Fee, up to 120 s, low", 65], ["Two extra cuts, 2 × three quarters of $0.65, rounded up", 98], ["Video sent, 20 min × $0.02", 40]]}
              />
              <Example
                title="With voiceover and music"
                request="effort high, max_seconds 60, allow_generated_media, 8 min of footage"
                lines={[["Fee, up to 60 s, high", 100], ["Video sent, 8 min × $0.02", 16], ["Voiceover, 600 characters", 5], ["Music track, 60 s", 10]]}
                note="The most it could have cost, with the default $0.40 budget: $1.56."
              />
              <Example
                title="Footage with a separate voice track"
                request="effort low, max_seconds 60, 3 min of video, a 2 min WAV"
                lines={[["Fee, up to 60 s, low", 50], ["Video sent, 3 min × $0.02", 6], ["Audio sent, 2 min × $0.01", 2]]}
              />
              <Example
                title="A long highlight edit"
                request="effort high, max_seconds 900, 55 min of interview footage"
                lines={[["Fee, up to 900 s, high", 325], ["Video sent, 55 min × $0.02", 110]]}
              />
              <Example
                title="A revision that adds a clip"
                request="a revision of a video made on high, with one new 2 min clip"
                lines={[["Revision, high", 70], ["Video sent, 2 min × $0.02", 4]]}
              />
              <Example
                title="A video that fails"
                request="any request where a link is dead, the footage passes max_price, or the agent cannot make it"
                lines={[["Charged", 0]]}
              />
            </div>
          </section>
        </div>

        <div className="mt-16 border-t border-[var(--surface-border)] pt-8">
          <Link
            href="/docs"
            className="text-[14px] text-[var(--foreground-subtle)] transition-colors hover:text-[var(--foreground-muted)]"
          >
            &larr; Back to docs
          </Link>
        </div>
      </main>
    </>
  );
}

/* ── Sub-components ────────────────────────────────────────── */

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mb-4 scroll-mt-24 text-xl font-semibold text-[var(--foreground)]">
      {children}
    </h2>
  );
}

function H3({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={`mb-2 text-[15px] font-semibold text-[var(--foreground)] ${className}`}>
      {children}
    </h3>
  );
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-[var(--brand-blue)] underline underline-offset-2">
      {children}
    </a>
  );
}

function C({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[13px] text-[var(--foreground)]">
      {children}
    </code>
  );
}

function Codes({ list }: { list: string[] }) {
  return (
    <span className="flex flex-wrap gap-1.5">
      {list.map((code) => (
        <C key={code}>{code}</C>
      ))}
    </span>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre className="mt-2 overflow-x-auto rounded-lg border border-[var(--surface-border)] bg-[#1a1a2e] px-4 py-3 text-[13px] leading-relaxed text-[#e2e8f0]">
      <code>{children}</code>
    </pre>
  );
}

function Table({ head, rows }: { head: React.ReactNode[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[var(--surface-border)] bg-white">
      <table className="w-full border-collapse text-left text-[14px] leading-relaxed">
        <thead>
          <tr className="border-b border-[var(--surface-border)] bg-[var(--surface)]">
            {head.map((cell, index) => (
              <th key={index} className="px-3 py-2.5 text-[13px] sm:px-4 font-semibold text-[var(--foreground)]">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-[var(--surface-border)] last:border-b-0">
              {row.map((cell, index) => (
                <td
                  key={index}
                  className={`px-3 py-2.5 align-top sm:px-4 ${index === 0 ? "text-[var(--foreground)]" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Example({
  title,
  request,
  lines,
  note,
}: {
  title: string;
  request: string;
  lines: [string, number][];
  note?: string;
}) {
  const total = lines.reduce((sum, [, cents]) => sum + cents, 0);
  return (
    <div className="rounded-xl border border-[var(--surface-border)] bg-white p-5">
      <div className="mb-1 flex items-baseline justify-between gap-4">
        <h3 className="text-[15px] font-semibold text-[var(--foreground)]">{title}</h3>
        <span className="shrink-0 text-[15px] font-semibold tabular-nums text-[var(--foreground)]">
          {usd(total)}
        </span>
      </div>
      <p className="mb-3 text-[13px] leading-relaxed text-[var(--foreground-muted)]">{request}</p>
      <dl className="space-y-1 text-[14px]">
        {lines.map(([label, cents]) => (
          <div key={label} className="flex items-baseline justify-between gap-4">
            <dt>{label}</dt>
            <dd className="shrink-0 tabular-nums text-[var(--foreground)]">{usd(cents)}</dd>
          </div>
        ))}
      </dl>
      {note ? <p className="mt-3 text-[13px] text-[var(--foreground-muted)]">{note}</p> : null}
    </div>
  );
}

function ChevronDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-[var(--foreground-subtle)] transition-transform duration-200 group-open:rotate-180"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

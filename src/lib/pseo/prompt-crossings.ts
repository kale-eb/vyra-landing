import type { Entry } from "@/lib/content";
import { PROMPT_OVERRIDES } from "./overrides";
import { bullets, clip, endSentence, glance, lcFirst, sentences, ucFirst, wordCount } from "./markdown";
import { latest, makeEntry, type Family, type WrittenReader } from "./entry";

/* /prompts/{format}/{task} and /prompts/{format}.
   Dataset: the "At a glance" table and "Structure" list on every /formats page.
   Template: one Task per editing step. Each prompt is built from that format's own fields,
   so two formats only produce the same page if their pages say the same thing (then the
   second is dropped). */

export const CROSSING = "prompt-crossing";

/** Generated pages shorter than this are not published. */
const MIN_WORDS = 280;

type Format = {
  slug: string;
  name: string;
  lname: string;
  updated: string;
  subcategory: string;
  length: string;
  short: string;
  long?: string;
  seconds: number;
  aspect: string;
  aspectShort: string;
  platforms: string[];
  platform: string;
  vertical: boolean;
  hook: string;
  hookQuote?: string;
  hookSeconds: number;
  pacing: string;
  captions: string;
  music: string;
  shotList: string;
  mistakes: string[];
  beats: string[];
  next: string;
  speech: boolean;
  /** The music sets where the cuts land (montages, beat edits), so it belongs in the first cut. */
  musicLed: boolean;
  /** One continuous take at one speed. There are no clip changes to put on a beat. */
  oneTake: boolean;
  reels: string[];
  related: string[];
};

type Task = {
  key: string;
  label: string;
  blurb: string;
  base?: string;
  howTo: string;
  applies(f: Format): boolean;
  title(f: Format): string;
  lead(f: Format): string;
  intro(f: Format): string;
  glance(f: Format): [string, string][];
  prompts(f: Format): { minimal: string; standard: string[]; full: string[] };
  why(f: Format): (string | false | undefined)[];
  fixes(f: Format): (string | false | undefined)[];
  faq(f: Format): [string, string][];
};

const PHONE = ["TikTok", "Reels", "Shorts"];

function an(word: string): string {
  if (/^\d/.test(word)) return /^(8|11\b|18\b)/.test(word) ? "an" : "a";
  return /^(?:[aeio]|u(?!gc|s|ni))/i.test(word) ? "an" : "a";
}

function aName(f: Format) {
  return `${an(f.lname)} ${f.lname}`;
}

function plural(s: string) {
  return /s$/.test(s) ? s : `${s}s`;
}

function list(items: string[]) {
  if (items.length <= 1) return items.join("");
  if (items.length === 2) return items.join(" and ");
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function secs(n: number) {
  return n === 1 ? "1 second" : `${n} seconds`;
}

/** "Pacing: one idea every 5-8 seconds, no dead air." for use inside prompts. */
function labeled(label: string, value: string) {
  return `${label}: ${lcFirst(endSentence(value))}`;
}

function toFormat(e: Entry): Format | null {
  const g = glance(e.body);
  const beats = bullets(e.body, "Structure");
  const need = ["Hook style", "Pacing", "Caption style", "Music", "Shot list", "Common mistakes"];
  if (need.some((k) => !g[k]) || beats.length < 3) return null;

  const length = String(e.data.typical_length ?? "").trim();
  const [shortPart, longPart] = length.split(",").map((s) => s.trim());
  const short = shortPart.replace(/\s*short$/, "");
  const m = short.match(/(\d+)(?:-(\d+))?\s*s\b/);
  if (!m) return null;

  const aspect = String(e.data.aspect ?? "9:16");
  const platforms = (Array.isArray(e.data.platforms) ? e.data.platforms.map(String) : []).filter((p) => /^[A-Z]/.test(p));
  const vertical = /^9:16/.test(aspect);
  const first = beats[0].match(/^(\d+)-(\d+)s/);
  const name = e.title.split(":")[0].trim();

  return {
    slug: e.slug,
    name,
    lname: lcFirst(name),
    updated: e.updated,
    subcategory: String(e.data.subcategory ?? ""),
    length,
    short,
    long: longPart?.replace(/\s*long$/, ""),
    seconds: Number(m[2] ?? m[1]),
    aspect,
    aspectShort: aspect.split(" ")[0],
    platforms,
    platform: (vertical ? platforms.find((p) => PHONE.includes(p)) : platforms[0]) ?? "TikTok",
    vertical,
    hook: g["Hook style"],
    hookQuote: g["Hook style"].match(/["“]([^"”]+)["”]/)?.[1],
    hookSeconds: first ? Number(first[2]) : 3,
    pacing: g["Pacing"],
    captions: g["Caption style"],
    music: g["Music"],
    shotList: g["Shot list"],
    mistakes: sentences(g["Common mistakes"]),
    beats,
    next: beats[1].replace(/^[^:]*:\s*/, ""),
    speech: /voice|speech|talking|spoken|phrase|word-by-word|under your/i.test(`${g["Caption style"]} ${g["Music"]} ${g["Pacing"]}`),
    musicLed: /\bbeat|locked to the track|built on it|reason the video exists/i.test(`${g["Pacing"]} ${g["Music"]}`),
    oneTake: /^one speed\b/i.test(g["Pacing"]),
    reels: e.reels,
    related: bullets(e.body, "Related")
      .map((b) => b.match(/\((\/[a-z0-9\-/]+)\)/)?.[1] ?? b.match(/^(\/[a-z0-9\-/]+)$/)?.[1])
      .filter((u): u is string => !!u),
  };
}

const TASKS: Task[] = [
  {
    key: "rough-cut",
    label: "Rough cut",
    blurb: "Length, beat order, and pacing.",
    base: "/prompts/rough-cut",
    howTo: "/how-to/pace-a-short-form-video",
    applies: (f) => f.beats.length >= 3,
    title: (f) => `${ucFirst(f.lname)} rough cut prompts`,
    lead: (f) =>
      `These prompts cut raw footage into ${aName(f)} (${f.short}, ${f.beats.length} beats in order), with the pacing and the usual mistakes written in.`,
    intro: (f) =>
      `The beat order comes from our [${f.lname} page](/formats/${f.slug}). Upload your clips, let them finish processing, then paste one of these into the chat.`,
    glance: (f) => [
      ["Target length", f.short],
      ["Beat order", f.beats.join("; ")],
      ["Pacing", f.pacing],
      ["Hook", f.hook],
      ["Avoid", f.mistakes.join("; ")],
    ],
    prompts: (f) => {
      const standard = [
        `Cut my clips into ${an(String(f.seconds))} ${f.seconds}-second ${f.lname} for ${f.platform}. Follow this order.`,
        ...f.beats.map((b) => `- ${b}`),
        labeled("Pacing", f.pacing),
        f.musicLed
          ? `Keep the strongest clip for each part. Time the cuts to the track I uploaded called "[file name]". No captions yet.`
          : "Keep the strongest clip or take for each part and cut the rest. No captions or music yet.",
      ];
      return {
        minimal: `Make ${an(String(f.seconds))} ${f.seconds}-second ${f.lname} from these clips. Best takes only.`,
        standard,
        full: [
          ...standard,
          `Open with this. ${endSentence(f.hook)}`,
          `Avoid these. ${f.mistakes.map(endSentence).join(" ")}`,
          `Export ${f.aspectShort}. When you're done, list what you cut with timestamps so I can check.`,
        ],
      };
    },
    why: (f) => [
      "A numbered beat list gives the agent an order to follow. Leave it out and it picks one for you.",
      `${ucFirst(plural(f.lname))} usually run ${f.short}${f.long ? ` as short-form and ${f.long} as long-form` : ""}${f.platforms.length ? ` on ${list(f.platforms)}` : ""}.`,
      `The pacing line (${lcFirst(f.pacing)}) sets how long each clip stays on screen.`,
      "The full prompt names the common mistakes up front, so you're less likely to see them in the first cut.",
      "Asking for a list of cuts with timestamps makes the first pass quick to check.",
    ],
    fixes: (f) => [
      `Too long. "Cut it to ${Math.max(5, Math.round((f.seconds * 0.75) / 5) * 5)} seconds. Drop the weakest part first."`,
      `Parts out of order. "Follow the order from my first message exactly."`,
      `Wrong clip in a part. "For the ${f.beats[1].split(":")[0]} part, show me other clips I could use, with timestamps."`,
      `Something you wanted got cut. "Put back the part where [describe it]." It can find the moment from a description.`,
    ],
    faq: (f) => [
      [
        `How long should ${aName(f)} be?`,
        `Short versions run ${f.short}${f.long ? ` and long ones run ${f.long}` : ""}. Put the number in the first sentence of the prompt so the cut is built around it.`,
      ],
      [
        "Do I need to trim my clips before uploading?",
        "No. Upload the raw clips. Vyra transcribes and describes every scene on upload, so it can find the part that fits each beat.",
      ],
    ],
  },
  {
    key: "captions",
    label: "Captions",
    blurb: "Style, position, and which words get bigger.",
    base: "/prompts/captions",
    howTo: "/how-to/choose-captions",
    applies: (f) => !/^(none|optional)\b|\bor none\b/i.test(f.captions),
    title: (f) => `${ucFirst(f.lname)} caption prompts`,
    lead: (f) =>
      `These prompts caption ${aName(f)} the way we do it (${lcFirst(f.captions)}), then set the position, the color, and which words get bigger.`,
    intro: (f) =>
      f.speech
        ? "Run them after the rough cut, once the words are final. Captions come from the transcript Vyra makes on upload, so they're timed to what you actually said."
        : "Run them once the cut is final. There's little or no speech in this format, so the text is yours to write. Put the exact words in the prompt.",
    glance: (f) => [
      ["Caption style", f.captions],
      ["Hook", f.hook],
      ["Pacing", f.pacing],
      ["Aspect", f.aspect],
    ],
    prompts: (f) => {
      const standard = [
        f.speech ? `Add captions to my ${f.lname}.` : `Add on-screen text to my ${f.lname}.`,
        labeled("Style", f.captions),
        `Bold white sans-serif with a thin black outline, ${f.vertical ? `placed above the ${f.platform} buttons at the bottom` : "in the lower third"}.`,
        "No pop or bounce animation.",
      ];
      return {
        minimal: f.speech ? `Add captions to my ${f.lname}.` : `Add the on-screen text for my ${f.lname}.`,
        standard,
        full: [
          ...standard,
          f.speech
            ? "Make my first line a bigger caption on its own."
            : `The title is "[your title]". Hold it for the first ${secs(f.hookSeconds)}.`,
          ...(f.speech
            ? [
                `Change captions at the pace of the edit (${lcFirst(f.pacing)}).`,
                "Spell these exactly as written: [names, brands, places].",
              ]
            : []),
          "Keep text out of the middle of the frame, where the subject is.",
        ],
      };
    },
    why: (f) => [
      `The caption style is the one from our [${f.lname} page](/formats/${f.slug}). Naming it in the prompt is faster than fixing it afterwards.`,
      f.vertical &&
        `On ${f.platform}, the bottom of the screen is covered by the post caption, username, and buttons, so captions sit above it.`,
      f.speech && "One bigger caption is enough. If every line is big, none of them stand out.",
      f.hookQuote && `The first line on this format is usually something like "${f.hookQuote}". That's the one to make bigger.`,
    ],
    fixes: (f) =>
      f.speech
        ? [
            `Captions over your face. "Move captions to the lower third."`,
            `Wrong word. "At 0:12 the caption should say [word]."`,
            `Too many words on screen. "Max 3 words per caption."`,
            `Style doesn't match what you had in mind. Attach a video you like and say "match the captions in this".`,
          ]
        : [
            `Text too long to read. "Cut the title to 5 words."`,
            `Text covers the subject. "Move the title to the top third."`,
            `Style doesn't match what you had in mind. Attach a video you like and say "match the text style in this".`,
          ],
    faq: (f) => [
      [
        `What caption style fits ${aName(f)}?`,
        `${endSentence(ucFirst(f.captions))} To copy a style from another video, attach it and say "match the captions in this".`,
      ],
      f.speech
        ? ["Can it spell names right?", `Yes, if you list them. "Spell these as Vyra, sulansart, gesso."`]
        : [`Does ${aName(f)} need captions?`, "Usually only the text in the style above. There's little speech to caption."],
    ],
  },
  {
    key: "hook",
    label: "Hook",
    blurb: "The first few seconds and the cut after them.",
    howTo: "/how-to/write-a-hook",
    applies: (f) => !/^none\b/i.test(f.hook),
    title: (f) => `${ucFirst(f.lname)} hook prompts`,
    lead: (f) =>
      `These prompts set up the first ${f.hookSeconds === 1 ? "second" : secs(f.hookSeconds)} of ${aName(f)} (${lcFirst(f.hook)}) and the cut into what comes next.`,
    intro: (f) =>
      `The hook is the first beat on our [${f.lname} page](/formats/${f.slug}). Vyra has the transcript and a description of every scene, so you can point at the moment by what's in it.`,
    glance: (f) => [
      ["Hook style", f.hook],
      ["First beat", f.beats[0]],
      ["Next beat", f.beats[1]],
      ["Caption style", f.captions],
    ],
    prompts: (f) => {
      const standard = [
        `Open my ${f.lname} with this. ${endSentence(f.hook)}`,
        `Keep the hook under ${secs(f.hookSeconds)}, then go straight into ${endSentence(f.next)}`,
        `No intro, no logo, no "hey guys".`,
      ];
      return {
        minimal: `Find the strongest opening moment in my footage and start my ${f.lname} with it.`,
        standard,
        full: [
          ...standard,
          `Put a bold caption on the hook${f.speech ? " line" : ""}.`,
          "Before you cut, list the 3 strongest opening moments in my footage with timestamps so I can pick one.",
        ],
      };
    },
    why: (f) => [
      "People typically decide to stay or scroll in the first few seconds, so the hook gets its own instruction.",
      `Saying what comes next (${f.next}) keeps the video moving after a strong open.`,
      f.hookQuote && `An example of this kind of hook is "${f.hookQuote}".`,
      "Asking for options with timestamps lets you choose the opening yourself.",
    ],
    fixes: (f) => [
      f.speech
        ? `Hook starts late. "Cut the breath and the half second before I start talking."`
        : `Hook starts slow. "Start on the frame where the movement begins."`,
      `Wrong moment. "Use the clip at 2:14 as the hook instead."`,
      `The video drags after the hook. "Cut straight from the hook into ${f.next}, no pause."`,
    ],
    faq: (f) => [
      [
        `How long should the hook be on ${aName(f)}?`,
        `About ${secs(f.hookSeconds)}, from the structure we use for this format. By then the video should already be into ${f.next}.`,
      ],
      [
        "Can Vyra pick the hook for me?",
        `Yes. Ask for the strongest opening ${f.speech ? "line" : "clip"}. Ask for three options with timestamps if you want to choose.`,
      ],
    ],
  },
  {
    key: "music",
    label: "Music",
    blurb: "Track, volume, and cutting on the beat.",
    base: "/prompts/add-music",
    howTo: "/how-to/choose-music",
    applies: (f) => !/\bnone\b/i.test(f.music),
    title: (f) => `${ucFirst(f.lname)} music prompts`,
    lead: (f) =>
      `These prompts set the music for ${aName(f)} (${lcFirst(f.music)}), how loud it sits, and how the cuts follow it.`,
    intro: () =>
      "Name a file you uploaded, or describe the mood and Vyra picks a track. If you use your own song, licensing is on you.",
    glance: (f) => [
      ["Music", f.music],
      ["Pacing", f.pacing],
      ["Volume", f.speech ? "About 20% under speech, 60% without" : "Full, there's little speech to duck under"],
      ["Length", f.short],
    ],
    prompts: (f) => {
      const standard = [
        `Add music to my ${f.lname}.`,
        labeled("Music", f.music),
        labeled("Pacing", f.pacing),
        f.speech
          ? "Keep it at about 20% while I'm talking."
          : f.oneTake
            ? "Let the track run under the whole video at one level."
            : "Cut on the beat where the clips change.",
      ];
      return {
        minimal: `Add music to my ${f.lname}.`,
        standard,
        full: [
          ...standard,
          f.speech
            ? "Raise it to about 60% where I'm not talking, and duck it over half a second when I start again."
            : f.oneTake
              ? "Start the track on the first frame and line the end of the track up with the finished piece."
              : "Put the biggest change in the footage on the biggest change in the track.",
          `Use the track I uploaded called "[file name]".`,
          "Fade out over the last 2 seconds. No sound effects.",
        ],
      };
    },
    why: (f) => [
      `The track direction comes from our [${f.lname} page](/formats/${f.slug}).`,
      f.speech
        ? "Two numbers (about 20% under speech, about 60% without) give Vyra levels it can apply the same way every time."
        : f.oneTake
          ? "This format is one take at one speed, so the track only needs a start and an end."
          : "With no speech to duck under, the track sets the pace, so the prompt ties the cuts to the beat.",
      "Naming a file you uploaded stops it from picking from the library.",
      `"No sound effects" keeps it from adding extras you didn't ask for.`,
    ],
    fixes: (f) => [
      f.speech && `Music fights the voice. "Lower the music to 15% whenever I'm talking."`,
      !f.oneTake && `Cuts land off the beat. "Move every cut onto the nearest beat."`,
      `Wrong mood. "Something slower, around 80 BPM, piano, no drums."`,
      `Track starts mid-phrase. "Start the track from its beginning and trim the end."`,
    ],
    faq: (f) => [
      [`What music fits ${aName(f)}?`, `${endSentence(ucFirst(f.music))} Describe the mood in the prompt or upload the exact track.`],
      ["Can I use my own song?", "Yes. Upload it and name the file in the prompt. Licensing is on you."],
    ],
  },
  {
    key: "b-roll",
    label: "B-roll",
    blurb: "Which shots to pull and where they go.",
    base: "/prompts/b-roll",
    howTo: "/how-to/shoot-b-roll",
    applies: (f) => /b-roll|screen recording|screenshot/i.test(f.shotList),
    title: (f) => `${ucFirst(f.lname)} b-roll prompts`,
    lead: (f) =>
      `These prompts pull the right shots from your uploads for ${aName(f)} (${sentences(f.shotList).slice(0, 2).map(lcFirst).join(", ")}) and place them on the words they show.`,
    intro: () =>
      "Vyra describes every scene when you upload, so you can ask for a shot by what's in it. You don't need file names.",
    glance: (f) => [
      ["Shot list", f.shotList],
      ["Pacing", f.pacing],
      ["Caption style", f.captions],
      ["Avoid", f.mistakes.join("; ")],
    ],
    prompts: (f) => {
      const standard = [
        `Add b-roll to my ${f.lname} from the clips I uploaded.`,
        `Look for these shots. ${endSentence(f.shotList)}`,
        labeled("Pacing", f.pacing),
        "Put each clip on the words it shows and keep my audio running underneath.",
      ];
      return {
        minimal: "Add b-roll from my clips over the parts where I talk about something you can show.",
        standard,
        full: [
          ...standard,
          "Keep captions on during b-roll.",
          `Avoid these. ${f.mistakes.map(endSentence).join(" ")}`,
          "Don't use any clip twice. When you're done, list which clip went where with timestamps.",
        ],
      };
    },
    why: (f) => [
      `The shot list is the one from our [${f.lname} page](/formats/${f.slug}). Asking for shots by what's in them is faster than digging up file names.`,
      `"Keep my audio running" stops it from cutting your voice along with the picture.`,
      `The pacing line (${lcFirst(f.pacing)}) sets how long b-roll stays before it cuts back.`,
      "A list of placements with timestamps makes the result quick to check.",
    ],
    fixes: () => [
      `B-roll stays too long. "Come back to my face after 3 seconds of b-roll."`,
      `Wrong shot. "At 0:22 use the close-up of my hands instead."`,
      `Cuts away mid-word. "Only cut to b-roll at the end of a word."`,
    ],
    faq: (f) => [
      ["Does it use stock footage?", "No. It only uses the clips you upload. We don't generate footage."],
      [
        "Do I need every shot before I start?",
        `No. Run it with what you have. Then film the rest of the shot list (${sentences(f.shotList).map(lcFirst).join(", ")}), upload it to the same project, and run the prompt again.`,
      ],
    ],
  },
];

/** Task key whose crossings a written page should list ("/prompts/captions" → "captions"). */
export function taskForBase(url: string): { key: string; label: string } | undefined {
  const t = TASKS.find((x) => x.base === url);
  return t && { key: t.key, label: t.label };
}

function code(lines: string | string[]) {
  return ["```", ...(Array.isArray(lines) ? lines : [lines]), "```"].join("\n");
}

function linkLine(url: string, title: string) {
  return `- [${title}](${url})`;
}

function facts(f: Format, extra: string[] = []) {
  return [
    `Format: ${f.name}`,
    ...extra,
    `Length: ${f.length}`,
    `Aspect: ${f.aspect}`,
    ...(f.platforms.length ? [`Platforms: ${f.platforms.join(", ")}`] : []),
  ];
}

type Titles = Map<string, string>;

function crossingBody(f: Format, t: Task, siblings: { url: string; title: string }[], written: Titles): string {
  const p = t.prompts(f);
  const clean = <T,>(xs: (T | false | undefined)[]) => xs.filter((x): x is T => !!x);
  const related = [
    linkLine(`/prompts/${f.slug}`, `All ${f.lname} prompts`),
    linkLine(`/formats/${f.slug}`, written.get(`/formats/${f.slug}`) ?? f.name),
    ...[t.base, t.howTo].filter((u): u is string => !!u && written.has(u)).map((u) => linkLine(u, written.get(u)!)),
    ...siblings.map((s) => linkLine(s.url, s.title)),
  ];
  return [
    `**${t.lead(f)}**`,
    t.intro(f),
    "## At a glance",
    ["| | |", "| --- | --- |", ...t.glance(f).map(([k, v]) => `| ${k} | ${v.replace(/\|/g, "/")} |`)].join("\n"),
    "## Prompt it in Vyra",
    `Minimal:\n${code(p.minimal)}`,
    `Standard:\n${code(p.standard)}`,
    `Full:\n${code(p.full)}`,
    "## Why these settings",
    clean(t.why(f)).map((w) => `- ${w}`).join("\n"),
    "## Fixes",
    clean(t.fixes(f)).map((w) => `- ${w}`).join("\n"),
    "## FAQ",
    t
      .faq(f)
      .map(([q, a]) => `**${q}**\n${a}`)
      .join("\n\n"),
    "## Related",
    related.join("\n"),
  ].join("\n\n");
}

type Step = { task: Task; url: string; title: string };

function hubBody(f: Format, steps: Step[], written: Titles): string {
  const has = (k: string) => steps.some((s) => s.task.key === k);
  const whole = [
    `Cut my clips into ${an(String(f.seconds))} ${f.seconds}-second ${f.lname} for ${f.platform}. Follow this order.`,
    ...f.beats.map((b) => `- ${b}`),
    labeled("Pacing", f.pacing),
    `Open with this. ${endSentence(f.hook)}`,
    ...(has("captions") ? [labeled("Captions", f.captions)] : []),
    ...(has("music") ? [labeled("Music", f.music)] : []),
    `Avoid these. ${f.mistakes.map(endSentence).join(" ")}`,
    "When you're done, list what you changed with timestamps so I can check.",
  ];
  const fixLines = steps
    .filter((s) => s.url.startsWith(`/prompts/${f.slug}/`))
    .map((s) => {
      const fix = s.task.fixes(f).find((x): x is string => !!x);
      return fix ? `- ${s.task.label}. ${fix}` : null;
    })
    .filter((x): x is string => !!x);
  const related = [`/formats/${f.slug}`, ...f.related.filter((u) => u.startsWith("/how-to/")), "/prompts/how-to-prompt-vyra"]
    .filter((u) => written.has(u))
    .map((u) => linkLine(u, written.get(u)!));
  return [
    `**${hubLead(f, steps)}**`,
    "Start with the whole edit in one prompt. If one part comes back wrong, open that step and use its fixes.",
    "## The whole edit in one prompt",
    code(whole),
    "## One step at a time",
    steps.map((s) => `- [${s.title}](${s.url}). ${s.task.blurb}`).join("\n"),
    ...(fixLines.length ? ["## What to say when it's off", fixLines.join("\n")] : []),
    "## Related",
    related.join("\n"),
  ].join("\n\n");
}

function hubLead(f: Format, steps: Step[]) {
  return `Copy-paste Vyra prompts for ${aName(f)}, one page per step (${list(steps.map((s) => s.task.label.toLowerCase()))}), built from how we shoot and cut this format.`;
}

export const promptCrossings: Family = {
  key: CROSSING,
  section: "prompts",
  sitemap: "prompts-by-format",
  build(read: WrittenReader): Entry[] {
    const writtenPrompts = read("prompts");
    const writtenSlugs = new Set(writtenPrompts.map((e) => e.slug));
    const written: Titles = new Map(
      (["prompts", "how-to", "formats"] as const).flatMap((s) => read(s).map((e) => [e.url, e.title] as const)),
    );
    const titleOf = new Map(writtenPrompts.map((e) => [e.slug, e.title]));
    const formats = read("formats")
      .map(toFormat)
      .filter((f): f is Format => !!f);

    /* Pass 1: decide which crossings get published (gate on fit, length, and duplicate prompts). */
    const published = new Map<string, { f: Format; t: Task }>();
    const seen = new Set<string>();
    for (const t of TASKS) {
      for (const f of formats) {
        const pair = `${f.slug}/${t.key}`;
        if (PROMPT_OVERRIDES[pair] || !t.applies(f)) continue;
        const signature = `${t.key}:${t.prompts(f).standard.join("\n").replace(new RegExp(f.lname, "g"), "")}`;
        if (seen.has(signature)) continue;
        if (wordCount(crossingBody(f, t, [], written)) < MIN_WORDS) continue;
        seen.add(signature);
        published.set(pair, { f, t });
      }
    }

    const out: Entry[] = [];
    for (const f of formats) {
      const steps: Step[] = [];
      for (const t of TASKS) {
        const pair = `${f.slug}/${t.key}`;
        const override = PROMPT_OVERRIDES[pair];
        if (override && writtenSlugs.has(override)) {
          steps.push({ task: t, url: `/prompts/${override}`, title: titleOf.get(override)! });
          continue;
        }
        if (!published.has(pair)) continue;
        const siblings = formats
          .filter((o) => o.slug !== f.slug && o.subcategory === f.subcategory)
          .map((o) => {
            const ov = PROMPT_OVERRIDES[`${o.slug}/${t.key}`];
            if (ov && writtenSlugs.has(ov)) return { url: `/prompts/${ov}`, title: titleOf.get(ov)! };
            return published.has(`${o.slug}/${t.key}`) ? { url: `/prompts/${o.slug}/${t.key}`, title: t.title(o) } : null;
          })
          .filter((s): s is { url: string; title: string } => !!s)
          .slice(0, 3);
        const lead = t.lead(f);
        out.push(
          makeEntry({
            family: CROSSING,
            section: "prompts",
            slug: pair,
            title: t.title(f),
            description: clip(lead),
            updated: f.updated,
            body: crossingBody(f, t, siblings, written),
            facts: facts(f, [`Step: ${t.label}`]),
            reels: f.reels.slice(0, 2),
            crumbs: [{ label: `${f.name} prompts`, href: `/prompts/${f.slug}` }],
            data: { kind: "crossing", hideFromHub: true, format: f.slug, task: t.key },
          }),
        );
        steps.push({ task: t, url: `/prompts/${pair}`, title: t.title(f) });
      }

      if (steps.length < 2 || writtenSlugs.has(f.slug)) continue;
      out.push(
        makeEntry({
          family: CROSSING,
          section: "prompts",
          slug: f.slug,
          title: `${f.name} prompts for Vyra`,
          description: clip(hubLead(f, steps)),
          updated: latest([f.updated, ...writtenPrompts.filter((e) => steps.some((s) => s.url === e.url)).map((e) => e.updated)]),
          body: hubBody(f, steps, written),
          facts: facts(f, [`Steps: ${steps.length}`]),
          reels: f.reels.slice(0, 3),
          data: { kind: "format-hub", hubGroup: "Prompts by format", format: f.slug, steps: steps.map((s) => s.url) },
        }),
      );
    }
    return out;
  },
};

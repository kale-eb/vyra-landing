# Vyra voice guide

Every page on usevyra.com should read like Sulan explaining something to a friend who also makes videos. Plain, specific, a little casual, no drama. This file is the standard for every rewrite and every new page. Writers (human or agent) read it first and run `node scripts/ai-lint.mjs` before handing anything in.

## The reference sample (Sulan's own about-page copy, use this as the bar)

"Sulan began with posting her paintings at @sulansart. She loved storytelling and building her community, but she kept getting bogged down in the editing process. Scrubbing around timelines for hours at 3am after a full day of classes and work was not enjoyable!

Caleb was a video editor of seven years and he also was making his own videos on the same campus while he faced the same problem: video editing is incredibly time consuming. So we started building a tool where you upload your clips, say what you want, and get the edit back in minutes! The first vlog Sulan made with Vyra took three prompts."

Notice what she does: plain past-tense narration, one concrete detail per sentence (3am, seven years, three prompts), an occasional exclamation point where a person would actually be exasperated or pleased, and no cleverness. Match that. Do not add rhythm, do not add payoff lines.

## How Sulan actually talks (verbatim, from calls and captions)

- "I just wanted to post my art and like post my videos and tell my story. I didn't want to spend a lot of time editing. But I was spending so much time editing and it was always like 3 4 a.m. after a long day of school."
- "I just wanted to get my videos out as fast as possible. I didn't really want to be spending hours in the timeline."
- "The people we thought we were catering to aren't actually video editors. They're people who just need video as a means to an end."
- "They don't care. They want to get to the output as quickly as possible. These people are busy people, and they just want their video edited for them."
- "You upload your clips. You give it your prompt. This was a three prompt edit, I was like, can you make a cute vlog out of it, add motion graphics, captions."
- "Send it from your camera roll. I want x y z video done in a certain way. And then it just sends you the finished video."
- "this has lowk been a lifesaver tho, im finally able to edit my hours of vlog footage"
- "we do NOT generate any content, we only serve to amplify the individual's voice through the real footage that they upload to us"

What that voice has: first person, concrete times and numbers (3 a.m., three prompts, hours of vlog footage), everyday verbs (upload, send, post), honest about the pain, no metaphors, no slogans.

## Rules

Write

- Short plain sentences. One idea each. Fine to start with And or But.
- Say the specific thing. "Cut the pauses over half a second" beats "tighten the pacing."
- Numbers where they are real. Seconds, words, dollars, dates.
- First person plural for Vyra ("we built", "we don't generate"). Second person for the reader.
- Casual grammar is fine when it reads more human. Contractions are fine.
- If a sentence would sound weird said out loud to a friend, rewrite it.

Never

- Em dashes. Use a period or a comma.
- Colons in prose. Colons are fine in tables, facts lists, and code.
- "Not X, but Y" and "It isn't X, it's Y" constructions. Just say Y.
- "It's not about X." "This is not a Y." Say what it is.
- Dramatic fragments and payoff sentences. "That is where we are now." "Your footage, your voice, your story." "Where the story went to die." Cut them.
- Metaphors and slogans. "Gave AI eyes and hands." "A few buttons to press." Describe what happens instead.
- Rhetorical questions.
- Hype words: seamless, effortless, game-changing, unlock, elevate, leverage, supercharge, powerful, robust, cutting-edge, transform, empower, harness, streamline, next level.
- Throat clearing: In short, In other words, Here's the thing, Think of it as, Put simply, At the end of the day, The bottom line.
- Triads for rhythm ("Fast. Simple. Done."). Lists of three adjectives.
- Fake warmth: "Let's take a look", "buckle up", "join us".
- Overpromising. If we have not measured it, say "typically" or leave it out.
- Claims about competitors we have not checked on their own site.

## Before and after

Before: "Sulan paints and posts her process, vlogs, and the occasional unserious pigeon. Caleb was making his own content on the same campus. Both of us had the same experience: the filming was the fun part, and the editing was where the story went to die."

After: "Sulan posts painting videos and vlogs. Caleb was making his own videos at Brown too. We both had the same problem. Filming took an afternoon. Editing took the whole night."

Before: "CapCut gave AI a few buttons to press. Vyra gave AI eyes and hands."

After: "CapCut adds AI features to a normal editor. You still do the editing. In Vyra the agent has the transcript and a description of every scene, and it does the cutting when you ask."

Before: "What if you could hand your raw footage to something that had watched all of it, listened to every word, and could just do what you asked?"

After: "Vyra watches all your footage, reads the transcript, and does what you ask. You describe the edit. It makes it."

## Page shape (unchanged)

The listing structure stays. Quotable first sentence, facts box, short sections, prompts, FAQ. The voice rules apply inside that structure. A quotable sentence is a plain factual one, not a punchy one.

## Process for the rewrite

1. Lint: `node scripts/ai-lint.mjs` prints counts per pattern and the worst files.
2. Rewrite in this order, because these are the pages people actually read: about, product (5), features (6), tools (18), pricing, for (24), compare (26), best (22), answers (21), prompts (31), tutorials (8), formats (38), how-to (23), alternatives (14), templates (3), glossary (80).
3. Sulan reads one page from each section before the section is run.
4. Lint again. Target zero on every pattern except colons inside tables and facts.

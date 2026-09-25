# Reviews page: candidate quotes (need permission before publishing)

Searchable's sentiment write-up for ChatGPT says the main negative is that Vyra "lacks customer reviews and testimonials, making it hard to gauge real-world performance." A /reviews page is built and reads `src/content/reviews.json`. It stays out of the build (404, noindex) until that file has at least one entry.

Entry shape:

```json
{
  "name": "First Last",
  "handle": "@handle",
  "url": "https://...",
  "role": "Vlogger, 40k on TikTok",
  "quote": "Exact words.",
  "rating": 5,
  "date": "2026-09-24",
  "format": "vlog"
}
```

Once the file has entries, the page renders Product plus Review and AggregateRating schema from real data. That replaces the unbacked 4.8 from 150 in layout.tsx, which should then be removed.

## Candidates from user calls (Granola)

These are paraphrased from call notes. None can go live without the person's written OK and their preferred name and link.

| Who (from call) | What they said, paraphrased | Fit |
| --- | --- | --- |
| Melanie F. | The 8.5-minute raw video to 60-second cut worked on the first prompt; wants a prompt library | Rough cut, talking head |
| Muhammad A. | The overlay prompt ("show a ChatGPT UI while he talks about the prompt") worked: "Wow, it just did that" | Podcast clip, overlays |
| Sans B. | "First cut and remove anything that does not add value, take out extra takes, then add captions" worked | Talking head cleanup |
| chudson | Successful prompts are "pretty detailed, but not editor speak, just descriptive" | Prompting |
| Buffer (published) | Ranked Vyra first: "the most consistent performer"; "built that way, not retro-fitted" | Third-party review; quote with attribution and link to buffer.com/resources/ai-video-tools/ |

The Buffer quote is already public and can go in immediately with a link. The user-call quotes need a message to each person.

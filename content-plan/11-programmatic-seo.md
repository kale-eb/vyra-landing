# Programmatic SEO

Programmatic pages are built from data plus a template, not written one by one. On usevyra.com the data is the pages we already wrote. A fact lives on one hand-written page, and every generated page that uses it updates on the next build.

Branch `programmatic-seo`. Nothing here is merged yet.

## What is live on the branch

| Family | URLs | Pages | Dataset | Child sitemap |
| --- | --- | --- | --- | --- |
| Prompts by format | /prompts/{format} and /prompts/{format}/{task} | 38 hubs + 136 step pages | "At a glance" table and "Structure" list on every /formats page | /sitemaps/prompts-by-format.xml |
| Head to head | /compare/{a}-vs-{b} | 59 | "At a glance" table and "Choose X if" list on every /compare/vyra-vs-{x} page | /sitemaps/head-to-head.xml |

That's 233 new URLs on top of about 300 written ones.

Tasks in the prompts family: rough cut, captions, hook, music, b-roll. Each format gets the tasks that fit it. A format with no music (talking head, podcast clip) gets no music page.

The head-to-head pairs are editors of the same kind (social, AI, pro) that are both widely used, plus seven cross-group matchups people search for (CapCut vs Premiere Pro, Descript vs Premiere Pro, and so on). Lists are in `GROUPS` and `CROSS_PAIRS` in `src/lib/pseo/head-to-head.ts`.

## Rules every family follows

These come from 02-directory-content-plan.md ("What NOT to publish") and Searchable's guidance.

1. **Only publish when the page is different.** A prompt page is built from 3 to 6 fields of its format, and a page whose prompt is identical to another format's is dropped. Step pages under 280 words are dropped.
2. **Written pages win.** If a hand-written page already covers a pair (/prompts/vlog-rough-cut), nothing is generated for that pair. The generated path 308-redirects to the written page (`src/lib/pseo/overrides.ts`), and the hub links to it.
3. **No new claims about competitors.** Head-to-head pages only reuse table cells and "Choose X if" bullets from our checked compare pages. To fix a fact, fix the vyra-vs page.
4. **No orphans.** Every generated page is linked from its parent. Format pages list their prompt steps. /prompts/captions lists caption prompts for every format. Each vyra-vs-{x} page lists that tool's head-to-heads. The /prompts and /compare hubs list format hubs and head-to-heads.
5. **Own sitemap per family.** Search Console shows index coverage per child sitemap, so we can see whether Google keeps a template or drops it.
6. **Same page template.** Generated pages use DirectoryPage, so they get the facts box, reels, FAQPage and Article JSON-LD, breadcrumbs, related cards, and the CTA.
7. **Voice.** Generated copy passes the ai-lint rules. The only flags left are colons inside Sulan's reel titles and a quoted POV hook.

## Where the code is

```
src/lib/pseo/
  index.ts            FAMILIES list, merged into getEntries() by content.ts
  entry.ts            Family type, makeEntry()
  markdown.ts         readers for tables, lists, sections in written pages
  prompt-crossings.ts prompts by format (Format dataset, Task templates, gate)
  head-to-head.ts     compare pairs (Tool dataset, pair rules, template)
  overrides.ts        written pages that replace a generated pair, plus redirects
  links.ts            links from written parent pages down to generated pages
src/app/prompts/[slug]/[task]/page.tsx   nested route, dynamicParams = false
```

`getEntries(section)` returns written plus generated entries, so hubs, sitemaps, llms.txt, and related-link cards needed no per-family code. `getWrittenEntries()` returns only the markdown, and families read from that.

## Editing

- Change a format's pacing, hook, captions, music, shot list, mistakes, or structure on its /formats page. Its 3 to 6 prompt pages and its hub change with it.
- Change a competitor fact on its /compare/vyra-vs-{x} page. Every pair with that tool changes.
- Want to hand-write one of the generated pages? Write it in src/content/prompts, add the pair to `PROMPT_OVERRIDES`, and the generated version turns into a redirect.
- Add a format page with the usual "At a glance" fields and a Structure list, and it gets prompt pages on the next build.

## Adding a family

1. Write a `Family` in `src/lib/pseo/` with `key`, `section`, `sitemap`, and `build(read)`. `build` reads written entries and returns entries from `makeEntry()`.
2. Gate it. Decide what makes a page worth publishing, and drop everything else in `build`.
3. Add it to `FAMILIES` in index.ts.
4. Add parent links in links.ts.
5. If the slugs are nested, add a `[slug]/[task]` route like the prompts one.
6. Run `npm run build` and lint the pages.

Candidates, roughly in order of value:

| Family | URL | Dataset we'd need | Note |
| --- | --- | --- | --- |
| Ranked lists | /best/{feature}-video-editors, /best/ai-video-editors-for-{audience} | The compare tables (have), plus our own test results per tool | Searchable's top cited shape. Rankings need real tests on the same footage. Don't rank from yes/no cells alone. |
| Platform specs | /specs/{platform}-video-size | Per-platform size, length, safe zone, caption area, from each platform's docs | High-volume queries, very citable. Needs a source link per number. |
| Audience × format | /for/{audience}/{format} | Which formats each /for audience uses, plus one real example each | Only for pairs with a real example, otherwise thin. |
| Glossary in Vyra | /glossary/{term} as pages | The glossary entries (have) | Currently anchors on one page. Split only the terms with real search volume. |

## Launch checklist

1. Sulan reads one page per type: /prompts/talking-head, /prompts/montage/captions, /prompts/speed-paint/rough-cut, /prompts/testimonial/b-roll, /prompts/podcast-clip/hook, /compare/capcut-vs-veed, /compare/descript-vs-premiere-pro.
2. Merge, deploy, then resubmit /sitemap-index.xml in Search Console.
3. In Searchable, run `refresh_sitemap` and `trigger_audit` on /prompts and /compare (project bce544f5-576d-469b-809c-54688f7c8028).
4. Check the two new child sitemaps in Search Console after 2, 4, and 8 weeks. Healthy is most URLs indexed by week 8.
5. After 90 days, pages with no impressions get one of two fixes. Either improve the source page (more specific fields), or drop the pair from the family. Don't keep dead pages in the sitemap.

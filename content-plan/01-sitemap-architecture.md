# Sitemap architecture for usevyra.com

## What we learned from the two reference sites

### lans.app (directory model)

Sitemap index at /sitemap.xml pointing to six children under /sitemap/:

| Child | URLs | Pattern |
| --- | --- | --- |
| sitemap-core.xml | 9 | /, /spaces/, /about/, /resources/, /partners/, /apply/ |
| sitemap-spaces.xml | 287 | /spaces/{state}/{city}/{space-slug}/ |
| sitemap-locations.xml | 248 | /spaces/{state}/ and /spaces/{state}/{city}/ |
| sitemap-pages.xml | many | /guides/coworking-day-pass/{state}/{city}/ (programmatic guide per location) |
| sitemap-partners.xml | small | partner listings |
| sitemap-blog.xml | small | editorial |

Listing page anatomy (Alchemy Creative, Denver): one-sentence definition with location, address line, rating, hours, price-from, "Best for" tags, "Vibe" paragraph, "The setup" (amenities), "Good to know", one CTA, three related listings, breadcrumbs. About 800 words. No long prose. Every field is a fact an AI can lift.

Takeaways: a hub/spoke hierarchy (state, city, listing), a programmatic guide layer that re-slices the same entities by intent, and a rigid listing template with named fields.

### usefastlane.ai (SaaS programmatic model)

Flat sitemap, 180 URLs, no index. Sections:

| Section | Count | Purpose |
| --- | --- | --- |
| /tools/{tool} | 21 | free tool or feature landing pages (hook-generator, engagement calculator) |
| /for/{audience} | 17 | use-case pages (content-creators, saas, shopify, claude-code-projects) |
| /compare/fastlane-vs-{x} | 12 | head-to-head |
| /alternatives/{x}-alternatives | 15 | alternative pages for competitors |
| /review/{x} and /pricing/{x} | 34 | third-party tool reviews and pricing explainers |
| /vs/{a}-vs-{b} | 2 | competitor vs competitor (they are not in it) |
| /models/{model} | 9 | AI model explainers |
| /blog/{slug} | 46 | editorial |

Page anatomy (/for/content-creators): hero, stats, how-it-works, three benefit sections, feature list, testimonials, comparison links, 6-question FAQ, CTA. About 1,300 words. (/tools/hook-generator): hero, interactive 30-hook table with copy buttons, pitch, stats, how-it-works, explanation, feature list, 4 FAQs, cross-links.

Takeaways: every commercial intent gets its own URL. They even write pricing and review pages about competitors so they get cited on competitor queries. The interactive hook table is a citation magnet.

## Vyra's sitemap index

Single index at https://www.usevyra.com/sitemap.xml linking to segmented children. Next.js supports this natively with `generateSitemaps()` in `src/app/sitemap.ts`, or we hand-write one route per child under `src/app/sitemaps/[name]/route.ts`. Recommended: separate route handlers per child so lastmod logic can differ.

```
/sitemap.xml                      sitemap index
/sitemaps/core.xml                homepage, product, pricing, docs, legal
/sitemaps/compare.xml             /compare/vyra-vs-{x}, /alternatives/{x}-alternative
/sitemaps/for.xml                 /for/{audience}
/sitemaps/formats.xml             /formats/{format}
/sitemaps/how-to.xml              /how-to/{skill}
/sitemaps/prompts.xml             /prompts/{task} and /prompts/{format}/{task}
/sitemaps/tutorials.xml           /tutorials/{tutorial} (step-by-step in Vyra, with video)
/sitemaps/glossary.xml            /glossary/{term}
/sitemaps/blog.xml                existing blog
/sitemaps/video.xml               video sitemap (demo, walkthrough, tutorial videos with landing URLs)
```

Rules (from Searchable's guidance, all adopted):

- Only canonical, indexable, 200 URLs. No drafts, no query-string variants.
- lastmod reflects a real content change. Store `updatedAt` per entry in the data file; do not use `new Date()` at build time (the current sitemap.ts does this for the homepage and blog index, which tells crawlers the page changes daily when it does not).
- Drop `priority` and `changeFrequency`. They are ignored by Google and add noise.
- robots.txt lists the index only. Next.js `robots.ts` already does this; keep it pointing at /sitemap.xml.
- Keep high-value pages shallow: /compare/vyra-vs-capcut, not /blog/comparisons/2026/vyra-vs-capcut.
- Every page in a child sitemap must be reachable by internal links from its hub page (/compare, /for, /formats, /how-to, /prompts) and from at least three sibling pages. Orphan URLs in a sitemap get crawled once and dropped.

## Video sitemap

Vyra is a video product and there is no video sitemap. Each `<url>` entry carries `<video:video>` with:

- `video:title`, `video:description` (the page's quotable summary)
- `video:thumbnail_loc`
- `video:content_loc` (direct mp4) or `video:player_loc`
- `video:duration` in seconds
- `video:publication_date`
- `video:family_friendly` yes

Candidates: homepage hero demo, each /tutorials/ page walkthrough, each /formats/ page example edit, the /docs/first-project walkthrough. Host the mp4s on the same domain or a verified CDN so `content_loc` validates.

## Migration of existing URLs

| Current | Action |
| --- | --- |
| /blog/vyra-vs-capcut, -descript, -veed | Move to /compare/vyra-vs-{x}. 301 from old slug. Keep BlogPosting schema but add the comparison table block at the top. |
| /blog/use-your-ai-subscription | Keep in blog; also becomes the seed for /for/claude-users and /for/chatgpt-users. |
| /docs/guide, /docs/first-project, /docs/mcp | Keep. Add to core sitemap (currently missing from sitemap.ts entirely). |
| /blog | Keep as editorial hub; most new content goes into directories, not blog. |

## Schema per page type

| Page type | JSON-LD |
| --- | --- |
| Root layout | Organization (name, logo, url, sameAs: Instagram, X, YouTube), WebSite (name, url, potentialAction SearchAction optional), SoftwareApplication (name, applicationCategory MultimediaApplication, operatingSystem Web, offers) |
| /compare/* | Article + FAQPage + BreadcrumbList; optionally ItemList of the two products |
| /alternatives/* | Article + ItemList (ranked alternatives) + FAQPage + BreadcrumbList |
| /for/* | WebPage + FAQPage + BreadcrumbList |
| /formats/* | HowTo (steps = structure beats) + FAQPage + BreadcrumbList + VideoObject if example video present |
| /how-to/* | HowTo + FAQPage + BreadcrumbList |
| /prompts/* | Article + FAQPage + BreadcrumbList; each prompt as a `<pre>` block with a copy button |
| /tutorials/* | HowTo + VideoObject + BreadcrumbList |
| /glossary/* | DefinedTerm + BreadcrumbList |
| /pricing | Product + Offer |

## Next.js implementation sketch

Data lives in typed TS files (like the existing `blog/[slug]/data.ts`) or MDX with frontmatter under `src/content/{section}/`. One route group per section with a shared `DirectoryPage` layout that renders: breadcrumbs, H1, quotable summary, "At a glance" table, body sections, prompt blocks, FAQ, related items, CTA. Each section exports a `getAll()` used by both `generateStaticParams` and its child sitemap.

```
src/app/
  sitemap.ts                      -> index (generateSitemaps or manual)
  sitemaps/[name]/route.ts        -> child sitemaps
  compare/[slug]/page.tsx
  alternatives/[slug]/page.tsx
  for/[slug]/page.tsx
  formats/[slug]/page.tsx
  how-to/[slug]/page.tsx
  prompts/[slug]/page.tsx
  tutorials/[slug]/page.tsx
  glossary/[slug]/page.tsx
src/content/
  compare/*.ts  for/*.ts  formats/*.md  how-to/*.md  prompts/*.md  glossary/*.ts
src/components/directory/
  DirectoryLayout.tsx  AtAGlance.tsx  PromptBlock.tsx  FAQ.tsx  Related.tsx  Breadcrumbs.tsx  JsonLd.tsx
```

Hub pages (/compare, /for, /formats, /how-to, /prompts) are static index pages listing every child with a one-line summary, grouped by category. These are the pages crawlers use to discover the tree, so they must not be paginated or lazy-loaded.

## Measurement

- Connect Searchable's tracker or Vercel log drain so `get_ai_traffic` stops returning zero.
- After the first 50 directory pages ship, call `refresh_sitemap` in Searchable and `trigger_audit` on the hubs.
- Accept the ~25 relevant suggested prompts (listed in 00-aeo-audit.md) and add one tracked prompt per new /compare and /for page.
- Re-check topic scorecard monthly. Target: no topic at 0% by the end of month two.

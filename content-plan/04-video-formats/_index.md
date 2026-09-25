# Video formats directory: index

Listing-style pages, one per format, at `/formats/<slug>`. Each page: one-sentence definition, at-a-glance table, structure with timestamps, shoot and edit checklists, 2-3 Vyra prompts, variations, 3-question FAQ, related links. Target 500-800 words. Frontmatter carries the structured fields for a future JSON-LD and the directory filter UI.

| Slug | One-line summary | Category |
| --- | --- | --- |
| /formats/talking-head | One person to camera, cut tight, captioned, no b-roll | talking-head |
| /formats/talking-head-b-roll | Talking head with supporting footage covering what's described | talking-head |
| /formats/green-screen-commentary | Creator reacts in front of a screenshot, article, or clip | talking-head |
| /formats/podcast-clip | Self-contained 30-90s moment cut from a long conversation | talking-head |
| /formats/reaction-video | Creator watches a clip and responds in real time | talking-head |
| /formats/listicle-talking-head | Numbered list delivered to camera with counters and title cards | talking-head |
| /formats/storytelling-video | Setup, turn, resolution in voiceover over footage | storytelling |
| /formats/story-time | Personal anecdote to camera, momentum-driven, no b-roll | storytelling |
| /formats/day-in-the-life-story | A day compressed to 90s with a narrative voiceover | storytelling |
| /formats/before-after-transformation | Before, compressed process, held reveal | storytelling |
| /formats/lessons-learned | A specific outcome tied to 2-3 concrete takeaways | storytelling |
| /formats/relatable-video | One shared situation in one scene with a text hook | storytelling |
| /formats/pov-video | Camera as the viewer, "POV:" text sets the scenario | storytelling |
| /formats/skit | Scripted comedy scene, often one creator playing all parts | storytelling |
| /formats/ugc-hook-and-demo | Native-looking ad: problem hook, product demo, result, CTA | ugc |
| /formats/testimonial | Customer describes before, after, and result with proof shown | ugc |
| /formats/founder-build-in-public | Founder shares a specific update, decision, or number | ugc |
| /formats/product-demo | One real task completed start to finish on screen | product |
| /formats/unboxing | Product opened and handled for the first time | product |
| /formats/app-walkthrough | Screen recording of a task with face in corner narrating | product |
| /formats/montage | Short clips cut to music compressing time or mood | montage |
| /formats/beat-synced-edit | Every cut, zoom, or flash lands on a beat | montage |
| /formats/travel-recap | A trip compressed by place or day with one held moment each | montage |
| /formats/cinematic-b-roll | Slow, composed, graded shots that create atmosphere | cinematic |
| /formats/vlog | First-person diary mixing talk-to-camera, b-roll, and music | vlog |
| /formats/silent-vlog | No talking; ambient sound, calm music, short text | vlog |
| /formats/tutorial | One skill taught in numbered, shown steps | educational |
| /formats/explainer | One concept broken down with a spoken argument and graphics | educational |
| /formats/faceless-video | Voiceover, b-roll, screen, and text; creator never on camera | educational |

## Category hubs to build

- /formats (all, filterable by category, platform, length, difficulty)
- /formats/category/talking-head, /storytelling, /ugc, /product, /montage, /cinematic, /vlog, /educational

## Notes for the directory build

- `example_creator` points to https://www.instagram.com/sulansart on the formats Sulan makes (talking head, listicle, storytelling, story time, day-in-the-life, lessons learned, relatable, montage, beat-synced, travel recap, vlog). Other entries carry a TODO to add a real example creator or a Vyra-made sample.
- Frontmatter fields map to a `VideoObject`/`HowTo` hybrid schema and to the directory filters. Keep them consistent across entries.
- Every "Prompt it in Vyra" block should also be cross-listed on the matching /prompts/ page so the prompt library and the format directory link both ways.

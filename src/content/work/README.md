# Work Posts

Blog-post-style write-ups of projects and experience, one `.mdx` per post. These are
wired into the `work` content collection in `src/content.config.ts`.

The filename (minus `.mdx`) is the slug used in URLs, e.g. `neurotech-eeg.mdx` renders
under `/experience/ml/neurotech-eeg` and `/experience/agents/neurotech-eeg` because
its frontmatter includes both categories.

## Frontmatter fields

| field | type | notes |
|-------|------|-------|
| `title` | string | post title |
| `blurb` | string | one-liner for the category list |
| `categories` | string[] | any of `ml`, `swe`, `agents`, `data` — a post can appear under several |
| `context` | string? | optional org/date line, e.g. `NeuroTech @ Berkeley · Jan 2026 — Present` |
| `order` | number | sort order within a category (lower first) |
| `draft` | boolean? | `true` = copy is still a placeholder (only `raycast-calendar` today) |

## Posts

- ml: `neurotech-eeg`, `chip-power-gnn`, `disaster-nlp`, `disinfo-detection`
- swe: `open-project-platform`, `cubesat`, `ai-file-organizer`, `raycast-calendar` *(draft)*
- agents: `chess-rag`, `structured-doc-agent`, `ai-file-organizer`, `neurotech-eeg`
- data: `chip-power-gnn`, `disaster-nlp`, `disinfo-detection`, `classroom-scraper`

(Several posts intentionally appear under multiple categories.)

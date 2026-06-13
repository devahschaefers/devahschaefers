# Work Posts

Blog-post-style write-ups of projects and experience, one `.mdx` per post. These are
wired into the `work` content collection in `src/content.config.ts`.

The filename (minus `.mdx`) is the slug used in URLs, e.g. `chess-rag.mdx` renders
under `/experience/swe/chess-rag` and `/experience/agents/chess-rag` because its
frontmatter includes both categories.

## Frontmatter fields

| field | type | notes |
|-------|------|-------|
| `title` | string | post title |
| `blurb` | string | one-liner for the category list |
| `categories` | string[] | any of `ml`, `swe`, `agents`, `data` — a post can appear under several |
| `context` | string? | optional org/date line, e.g. `NeuroTech @ Berkeley · Jan 2026 — Present` |
| `order` | number | sort order within a category (lower first) |

## Posts

- ml: `neurotech-eeg`, `chip-power-gnn`, `disaster-nlp`, `disinfo-detection`
- swe: `open-project-platform`, `chess-rag`, `classroom-scraper`, `cubesat`, `ai-file-organizer`, `raycast-calendar`, `resume-editing-agent`
- agents: `chess-rag`, `resume-editing-agent`, `ai-file-organizer`
- data: `chip-power-gnn`, `disaster-nlp`, `disinfo-detection`, `classroom-scraper`

(Several posts intentionally appear under multiple categories.)

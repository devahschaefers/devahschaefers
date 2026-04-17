# AGENTS.md

## Stack

- Package manager and task runner: `bun` (`packageManager: bun@1.3.12`)
- Framework: `astro` (`astro@6`)
- Styling: `tailwindcss@4` via `@tailwindcss/vite`
- Language mode: ESM (`"type": "module"`)
- TypeScript config: `astro/tsconfigs/strict`

## Rules For This Repo

- Use `bun`, not `npm`, `pnpm`, or `yarn`.
- Use Astro conventions. This is not a React app or a generic Vite SPA.
- Keep static assets in `public/`.
- Keep routes in `src/pages/`.
- Keep shared page structure in `src/layouts/`.
- Keep reusable UI in `src/components/`.

## Commands

- Install deps: `bun install`
- Start dev server: `bun run dev`
- Build: `bun run build`
- Preview production build: `bun run preview`
- Run Astro CLI directly: `bun run astro`

## Notes

- Tailwind is wired through [astro.config.mjs](/Users/devahschaefers/Dev/WebDev/personalxite/astro.config.mjs:1).
- The site URL is configured in `astro.config.mjs` as `https://devahschaefers.fyi`.
- When updating tooling or scripts, preserve `bun` as the default workflow unless explicitly changed by the user.

# Playful Ideas for the Personal Site

Ideas to push the site further without undermining its professional tone. The site already has tasteful playfulness (italic serif "Devah," the "go bears!" aside, overshoot cubic-bezier easing). These build on that foundation.

## Micro-interactions (low effort, high charm)

1. **Hero name wobble/wave.** On hover of the Instrument Serif "Devah," do a subtle letter-by-letter wave (staggered translateY via `:nth-child` spans). Fits the existing overshoot easing.
2. **Tech tag jiggle.** Instead of just color change on `.tech-tag:hover`, add a tiny `rotate(-2deg)` + slight scale — like a sticker you're pressing.
3. **Cursor-reactive hero heading.** Tilt the "Hi! I'm Devah" slightly toward the cursor (max 3–4° rotateX/Y) — feels alive without being gimmicky.
4. **Magnetic social icons.** The icons in `Contact.astro` gently pull toward the cursor within ~40px radius. Pair with the existing `translateY(-2px)` hover.
5. **Link underline as a squiggle on hover** instead of a straight line — SVG wave drawn with `stroke-dasharray` animation. Ties the brand color in nicely.

## Typography & copy playfulness

6. **Rotating role in the hero.** After "I build software, AI systems, and data infrastructure," swap `software` → `LLM agents` → `EEG models` → `satellite pipelines` on a typewriter rhythm. Material for this already exists in `experience.ts`.
7. **"Go bears!" interaction.** Click the "go bears!" text → a tiny bear emoji (or bear paw SVG) pops out and drifts up briefly. Pure delight, one-time payoff.
8. **Mixed-case / italic moments** in section labels — keep headings professional but let one word per section lean into Instrument Serif italic, the way "Devah" already does.
9. **Time-aware greeting.** "Hi!" becomes "Good morning!" / "Burning the midnight oil?" based on `new Date().getHours()`.

## Easter eggs

10. **Konami code → dev mode.** ↑↑↓↓←→←→BA flips the site into a CRT / terminal theme (green-on-black, monospace) for 10 seconds. Nerd-appropriate for a CS student.
11. **Console `console.log` message.** When someone opens DevTools: ASCII-art bear + "Curious? I'm hiring curiosity — [email]." Devs will screenshot it.
12. **Type "?"** anywhere → a keyboard-shortcut cheat sheet overlay appears (j/k to scroll, g h for home, g e for experience, etc.). Implies the site is a tool, not a brochure.
13. **Click the period after a sentence** → a real pulse animation. Hidden reward for careful readers.

## Content-specific (experience is literal playful material)

14. **EEG waveform in the background of the NeuroTech experience item.** A subtle animated sine/noise waveform in brand color at 10% opacity — references the actual work.
15. **CubeSat: starfield.** The satellite experience card has a twinkling starfield background on hover. A literal nod to the work.
16. **Chess coach project:** hovering the card reveals a tiny chess-piece glyph or a mini-board SVG that shifts a piece on hover.
17. **AI File Organizer:** on hover, the tech-tag order briefly shuffles then "sorts" itself — a visual pun.
18. **Project card reveal numbers count-up.** "18x faster cleanup," "200+ applications/semester," "2M+ positions" — these should count up from 0 when scrolled into view. The stats are the best hook.

## Scroll & motion

19. **Scroll-linked accent color shift.** The violet `--color-accent` drifts to a slightly different hue as you scroll down the experience page — keeps things feeling alive without theme whiplash.
20. **Staggered reveal for experience entries.** `fade-in-d1/d2/d3` already exists — extend this to experience items so they cascade in as you scroll.
21. **"Scroll hint" bounce** on the hero (soft arrow or dot that pulses) — only visible for the first 2 seconds, only on home.

## Cursor / pointer

22. **Custom cursor trail** of tiny violet dots that fade — keep it subtle (3–5 dots, 200ms decay). Can be disabled via `prefers-reduced-motion`.
23. **Dot-grid background** (like Linear) that brightens around the cursor with a radial mask. Very on-brand for the dark violet aesthetic.

## Structural playfulness

24. **/404 page.** "This page went to Berkeley and didn't come back." Put a little interactive element — maybe a bear ASCII maze or a broken-link drawing that you can drag around.
25. **/uses or /stack page.** A playful inventory of the setup (editor, keyboard, favorite languages ranked with hot takes). Devs love these and they're naturally playful.
26. **"Now" page (à la nownownow.com).** Short, frequently-updated "what I'm working on this week" — informal tone licenses playfulness the rest of the site can't afford.
27. **Footer signature.** Handwritten-style "— Devah" SVG path that draws itself in on first load.

## Sound (use sparingly — muted by default)

28. **Sound toggle in the nav** (speaker icon). When on: a soft click on nav changes, a faint synth blip on the hero name hover. Off by default. Big personality boost for the 5% who turn it on.

## Accessibility guardrails

Every motion idea above should respect `@media (prefers-reduced-motion: reduce)` — for serious things (underline, color), keep them; for decorative motion, disable.

---

## Top 5 picks (biggest payoff / lowest cost)

1. **#6** rotating role word (literally one line per role already in `experience.ts`)
2. **#11** DevTools console message
3. **#18** stat count-up on scroll
4. **#14** EEG waveform behind NeuroTech card
5. **#24** personality-filled 404

Start with **#11 + #6** — ~15 minutes each and instantly change how the site *feels*.

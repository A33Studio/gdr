# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build + type check
npm run lint     # ESLint
```

## Architecture

This is a Next.js 15 personal portfolio site using the App Router. All content lives in a single data file — editing content means editing the data file only, not the components.

**Content layer:** `src/data/resume.tsx` — exports a single `DATA` object with all site content: `name`, `description`, `summary`, `skills` (grouped by category), `extracurriculars` (combined work + clubs, split by `type` at render time), `education`, `coursework`, `projects`, `contact`, `resumeUrl`. The page reads only from this object.

**Page:** `src/app/page.tsx` — single-page layout rendering all sections in order: Hero → About → Education → Coursework → Skills → Work Experience → Activities & Clubs → Projects → Portfolio CTA. All sections use `BlurFade`/`BlurFadeText` for entrance animations with staggered delays via `BLUR_FADE_DELAY`. The width constraint (`max-w-*`) lives on `<main>` in `page.tsx`, not on `<body>` in `layout.tsx` — this leaves room for other routes (e.g. a future `/portfolio`) to use a different width/theme.

**Key components:**
- `ResumeCard` — expandable card used for education entries; click to reveal description (rendered as Markdown).
- `ExperienceCard` — used for both Work Experience and Activities & Clubs entries; colored left border + badge by `type` (`work`/`founder`/`club`).
- `ProjectCard` — image card with tag badges and links; used in the Projects section's responsive 1→2→3 column grid.
- `BlurFade` / `BlurFadeText` — animation wrappers; pass `delay={BLUR_FADE_DELAY * n}` to stagger.

**Styling:** Tailwind CSS + shadcn/ui primitives (`Card`, `Badge`, `Avatar`, `Button`). Global styles in `src/app/globals.css` are minimal. No dark theme is defined; `ThemeProvider` is pinned to `defaultTheme="light"` and there's no toggle in the UI.

**Images:** Static assets in `/public/`. Logo images for work/education entries are local files (e.g. `/purdue.jpeg`, `/aviation.jpg`). The downloadable resume PDF is `/public/resume.pdf` — keep this filename stable; update `DATA.resumeUrl` if it ever changes instead of hardcoding the path elsewhere.

## Content update pattern

To add/edit content, only touch `src/data/resume.tsx`. The TypeScript `as const` assertion means all arrays are readonly — add entries by following the existing shape. No component changes needed for routine content edits.

`extracurriculars` entries with `end: null` render as "Present". `skills` is an array of `{ category, items }` groups, rendered as one card per category.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

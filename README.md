# Gabriel Duarte Rengifo — Engineering & Design

Personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

## Run locally

- `bun run dev` starts the development server.
- `bunx tsc --noEmit` checks TypeScript.
- `bun run build` checks types and exports all pages to `out/`.

## Content

- `src/data/resume.tsx`: education, experience, coursework, skills, and contact details.
- `src/data/case-studies.ts`: project case studies and their editorial structure.
- `src/data/project-media.json`: supplied project imagery, captions, and placement.
- `public/resume.pdf`: the downloadable résumé supplied on September 7, 2026.

Each project has an overview, role, timeline, status, key decision, detailed chapters,
and outcome. To add an image, copy it into `public/projects/<project>/` and add a
media entry keyed by the project slug. The first image appears on the project card
and case study cover. Use a `section` matching a chapter ID to place another image
inside the narrative. Keep captions specific, and distinguish personal work from
team scope. Record only documented results; ongoing certifications stay in progress.

## Routes

- `/`: introduction, selected work, experience highlights.
- `/portfolio/`: complete project collection and compact index.
- `/portfolio/<slug>/`: individual case studies.
- `/resume/`: expanded résumé, with print styles and original PDF download.

The site is statically exported and requires no application database or API keys.
Fonts are served locally. Navigation and all content work without JavaScript;
optional scroll reveals respect reduced-motion preferences.

## Revision sources

This iteration retains the existing portfolio's six projects and adds StarkHacks
and high-power rocketry from the supplied résumé. Tadpole CAD views and MATLAB
plots were supplied in the Desktop `Portfolio Assets` folder. Other project photos
and detailed test documentation can be integrated as they become available.

The previous working files, including uncommitted edits, were backed up locally
before the redesign. This iteration lives on `codex/portfolio-revamp`.

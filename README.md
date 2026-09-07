# Gabriel Duarte Rengifo · Engineering & Design

A continuous-page portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

## Edit the text

Start with [content/README.md](content/README.md).

- `content/site.json`: introduction, navigation, headings, buttons, identity and footer.
- `content/resume.json`: experience, education, skills, aviation and contact details.
- `content/projects/`: one clearly named file per project, including stories and image captions.
- `public/resume.pdf`: the original downloadable résumé.

Text files are separate from layout code. Changes appear in the local development
preview when saved; publishing updates the hosted site separately.

## Run locally

- `bun run dev` starts the development server.
- `bunx tsc --noEmit` checks TypeScript.
- `bun run build` exports the site to `out/`.

## Navigation and appearance

The home page includes the introduction, all seven detailed projects, the extended
résumé, and contact details. Internal links jump to section anchors. Previous
portfolio and résumé URLs redirect to their matching home-page sections, with
fallback links when JavaScript is disabled.

The theme button switches between light and dark modes, initially following the
system setting. The chosen theme persists in the browser. The side navigator tracks
reading progress on wide screens and becomes a compact menu on smaller screens.
Fonts are served locally; motion respects reduced-motion preferences.

## Content sources

Project stories draw from the original portfolio, the supplied résumé, project
photos and CAD views in the Desktop Portfolio Assets folder, and the supplied
PlayAR and Drip pitch decks. Captions distinguish personal contributions from team
context. Pitch pricing, feature plans, and proposed outcomes are labeled as such.
Grief Lift has been removed from the collection.

Original working files were backed up before the redesign. This iteration lives on
`codex/portfolio-revamp`. Hosting configuration is in `.openai/hosting.json`.

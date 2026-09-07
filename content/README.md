# Edit the portfolio text

You can change the site's text here without editing the page code.

- **site.json**: your full name, logo, introduction, navigation labels, headings,
  button text, footer, locations, and search-preview title and description.
- **resume.json**: education, experience, coursework, skills, pilot details,
  instrument-rating progress, contact links, and the résumé download path.
- **projects/**: one clearly named JSON file per project. Edit its summary,
  role, dates, status, facts, design decision, chapters, image captions, and links.

## How to edit

1. Open the appropriate file in your text editor.
2. Change the words inside the quotation marks, keeping the surrounding commas,
   braces, and brackets in place. Use `\"` for quotation marks inside a sentence.
3. Save the file. The local development preview updates automatically when running.
4. Ask Codex to publish your changes when you are ready to update the live site.

Saving a content file changes the local source. It does not publish automatically.

## Project fields

- `title`: project name, used in the page and scroll navigator.
- `description`: short introduction under the project name.
- `overview`: the main summary of your contribution.
- `facts`: headline numbers or specifications, each with a `value` and `label`.
- `decision`: an important design choice and its explanation.
- `chapters`: the detailed story. Each chapter has a `title`, `paragraphs`, and
  optional bullet `points`. Give each chapter a short, unique `id`.
- `outcome`: the result and current state of the work.
- `media`: image paths, captions, alt text, dimensions, and placement.
- `links`: external project resources and pitch decks.

The first `media` image appears in the project introduction. Set another image's
`section` to a chapter ID to place it beside that part of the story. Image paths
start at `public`, so `/projects/playar/team.webp` refers to
`public/projects/playar/team.webp`. Keep `width` and `height` equal to the actual
image dimensions so the layout stays stable.

All internal navigation jumps to sections on the home page. Keep project `slug`
and chapter `id` values stable when editing text so saved links continue to work.

To add or reorder entire projects, ask Codex or adjust the short import list in
`src/data/case-studies.ts`. Routine text changes only need the files in this folder.

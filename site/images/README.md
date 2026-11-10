# Images: what's here and what to source

Every image on the site is a placeholder for now. Replace each one with a real exocad screenshot or photograph of Owen's work.

On the pages, placeholder images carry a yellow tag or caption. Empty slots are hatched grey boxes that describe the image they need. The three "How it works" steps use simple line icons for now (inline SVG in `index.html`).

## Direction

- **Look for:** Owen's own work on a plain white surface, cropped exocad screenshots, daylight, lots of empty space for text to sit beside.
- **Avoid:** stock smiles, blue gloves, dental chairs, gum-pink models, clinical teal, glossy 3D renders, busy backgrounds.
- **Patient privacy:** exocad shows the patient's name in the title bar and in the project tree. Crop to the tooth, or blank them out, before a screenshot goes anywhere near the repo.
- **Stock, if needed:** search for "zirconia crown white background" or "dental CAD screen", and check the licence allows commercial use (Unsplash and Pexels do). Prefer Owen's own images.

## Slots

| # | Page and place | Now | What to source | Ratio |
|---|---|---|---|---|
| 1 | About (home): hero, on the white relief behind the example case card | `placeholder-design-screen.webp` (render) | An exocad screenshot of a design in progress, e.g. a crown with its thickness map or margin line, cropped to the tooth. | 16:10 |
| 2 | About: What I design, shown whole | `illustrative-splint-design.webp` (illustrative render) | An exocad screenshot of one of Owen's own finished designs, or his headshot (Q7). It's shown uncropped, so any landscape shape works. **The labels in the current render are garbled, so replace it before launch.** | about 16:9 |
| 3 | Get in touch: beside the details | Empty slot | Headshot of Owen at his desk: soft daylight, plain white or pale grey background, exocad on the screen behind him. | 4:5 |

Optional later: screenshots of the three stages (the scan as it arrives, the finished design, the exported STL) could replace the icons in "How it works".

Later, for sharing links on LinkedIn or WhatsApp: a 1200 × 630 social image (slot 1 with the wordmark works well).

## Preparing a file

Follow "Images" in `PLAN.md`:

1. Keep the original high-resolution file out of the repo (e.g. in OneDrive).
2. Resize to the size it's shown at, 1600px wide at most.
3. Export as WebP (or AVIF), aiming for under 300 KB.
4. Give it a plain name without `placeholder-` (e.g. `hero-crown.webp`), update the `src`, `width`, `height` and `alt` in the HTML, and delete the placeholder.
5. Remove the yellow `draft-tag` or caption that marks it as a placeholder.

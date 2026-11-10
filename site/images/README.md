# Images: what's here and what to source

Every image on the site is a placeholder for now. The renders in this folder come from the "Bright white studio" set in the brand choices: a white sweep, soft overhead light, short pale shadows. Replace each one with a real photograph or exocad screenshot composed the same way.

On the pages, placeholder renders carry a yellow "Placeholder" tag or caption. Empty slots are hatched grey boxes that describe the image they need.

## Direction

- **Look for:** Owen's own work on a plain white surface, cropped exocad screenshots, daylight, lots of empty space for text to sit beside.
- **Avoid:** stock smiles, blue gloves, dental chairs, gum-pink models, clinical teal, glossy 3D renders, busy backgrounds.
- **Patient privacy:** exocad shows the patient's name in the title bar and in the project tree. Crop to the tooth, or blank them out, before a screenshot goes anywhere near the repo.
- **Stock, if needed:** search for "zirconia crown white background" or "dental CAD screen", and check the licence allows commercial use (Unsplash and Pexels do). Prefer Owen's own images.

## Slots

| # | Page and place | Now | What to source | Ratio |
|---|---|---|---|---|
| 1 | Home: hero | `placeholder-hero-crown.webp` (render) | A photo of one of Owen's crowns (e.g. a zirconia molar) on a white sweep, soft overhead light. Crown in the right third; the left half empty for the headline. | 16:9 |
| 2 | Home: Experience and approach | `placeholder-design-screen.webp` (render) on the white relief | An exocad screenshot of one of Owen's finished designs (thickness map, margin view or occlusion), cropped to the tooth. The copy doc also allows a headshot here (Q7). | 16:10 |
| 3 | Home: full-width break | `placeholder-window-light.webp` (render) | Daylight in Owen's workspace: light across a white wall, the bench or the desk. Quiet, no text, no clutter. | 21:9 (3:2 on phones) |
| 4 | Services: top | `placeholder-crown-pair.webp` (render) on the white relief | A finished crown and bridge case on white, or an exocad render of one. | 16:10 |
| 5 | Services: How it works, step 1 | Empty slot | exocad screenshot: a lab's scan as it arrives, with the prep and the opposing arch visible. | 4:3 |
| 6 | Services: How it works, step 2 | Empty slot | exocad screenshot: the finished design, showing the margin line, contacts and occlusion. | 4:3 |
| 7 | Services: How it works, step 3 | Empty slot | The exported STL in CAM software, or the milled or printed restoration on white. | 4:3 |
| 8 | Get in touch: beside the details | Empty slot | Headshot of Owen at his desk: soft daylight, plain white or pale grey background, exocad on the screen behind him. | 4:5 |

Later, for sharing links on LinkedIn or WhatsApp: a 1200 × 630 social image (slot 1 with the wordmark works well).

## Preparing a file

Follow "Images" in `PLAN.md`:

1. Keep the original high-resolution file out of the repo (e.g. in OneDrive).
2. Resize to the size it's shown at, 1600px wide at most.
3. Export as WebP (or AVIF), aiming for under 300 KB.
4. Give it a plain name without `placeholder-` (e.g. `hero-crown.webp`), update the `src`, `width`, `height` and `alt` in the HTML, and delete the placeholder.
5. Remove the yellow `draft-tag` or caption that marks it as a placeholder.

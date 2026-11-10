# OS Dental Design website

The website for OS Dental Design: remote exocad design support for dental laboratories. This is the **first draft**. The plan, hosting options and GDPR checklist are in [`PLAN.md`](PLAN.md).

## What's in the draft

| Page | File | From |
|---|---|---|
| Home (includes the About section) | `site/index.html` | Copy doc: Home page |
| Services and prices | `site/services.html` | Copy doc: Services page |
| Get in touch (enquiry and case forms) | `site/contact.html` | Copy doc: Get in touch page |
| Privacy notice (outline) | `site/privacy.html` | `PLAN.md`: Enquiry form & GDPR |
| Page not found | `site/404.html` | |

The words come from the website copy doc and Owen's answers so far. The look follows "Sam's choices" in the brand choices: bright white, cobalt accent, Manrope with IBM Plex Mono for technical figures, soft shadows, crisp 2px corners and the "white relief" visual.

## Folders

```
site/
  *.html          one file per page
  css/styles.css  all the styles; brand tokens are at the top in :root
  js/site.js      the mobile menu, and stops the forms sending for now
  fonts/          Manrope and IBM Plex Mono, self-hosted (SIL Open Font License)
  images/         placeholder images, plus README.md: what to source for each slot
  favicon.svg
```

There's no build step: the pages are plain HTML, CSS and JavaScript.

## Preview it

From the repo folder, run:

```bash
python3 -m http.server 8000 --directory site
```

Then open http://localhost:8000. You can also open the HTML files straight from disk, but some browsers then block the fonts.

## Editing

- **Words:** edit the page's HTML file directly. Each page is complete in itself.
- **Header and footer:** these are repeated in every page, so change them in all five files.
- **Colours, fonts, spacing, shadows:** change the tokens at the top of `css/styles.css`. When the design system is final, swapping these values updates most of the site.
- **Images:** see `site/images/README.md`.

## Hosting and workflow

The site is hosted on **Cloudflare Workers** (static assets only), connected to this repo:

- **Production branch:** `main`. Every push to `main` goes live automatically within a minute or two.
- **Other branches** get a preview URL. Previews are behind Cloudflare Access, so only approved accounts can open them.
- **Config:** `wrangler.jsonc` serves the `site` folder. There's no build command; the deploy command is `npx wrangler deploy`.
- `site/404.html` is served automatically for missing pages.

## Draft markers, to remove before launch

Search the HTML for each of these:

| Marker | What it is |
|---|---|
| `draft-banner` | The dark strip across the top of every page. |
| `class="tbc"` | Highlighted placeholder copy (the `[bracketed]` text in the copy doc). Hover to see which question (Q1–Q9) settles it. |
| `draft-note` | Yellow notes for reviewers, e.g. that the forms aren't connected. |
| `draft-tag` | The "Placeholder render" chips on images. |
| `class="slot"` | Empty image slots describing the photo to source. |
| `noindex` | The robots meta tag that keeps the draft out of search engines. |

Then delete section 14 ("Draft markers") at the bottom of `css/styles.css`.

## Not built yet

These are deliberately left for later (see `PLAN.md`):

- **Forms:** both forms are built but send nothing. Submitting shows a message pointing to email and phone. Connect them in `js/site.js` (see `TODO(connect)`) once the data handling is agreed. Patient scans shouldn't come through the website until a secure route is agreed.
- **Analytics:** none yet. Each page has a comment in `<head>` marking where cookieless analytics will go.
- **Work/gallery page:** in the plan, but there's no copy or imagery for it yet.

# Jordy Cutz — Luxury Mobile Barber

Marketing site for **Jordy Cutz / J.Barber 1**, a 5.0-rated, Booksy-recommended barber in Annapolis, MD who also delivers the full experience as a house call.

**Live site:** https://thejohncarter-ai.github.io/jordycutz-site/

- Booksy: https://booksy.com/en-us/1071238_j-barber-1_barber-shop_22531_annapolis
- Instagram: https://www.instagram.com/jordycutzb

## What's in it

Pure static HTML / CSS / JS — no build step, no framework. Hosted on GitHub Pages.

| Path | What |
|---|---|
| `index.html` | Single page: hero, experience, interactive menu + session ticket, gallery, reviews, Booksy booking, studio map, FAQ |
| `css/style.css` | Design system (obsidian + champagne gold, Bebas Neue / Playfair / Manrope) and all animations |
| `js/main.js` | **Data lives here** (services, gallery, reviews) plus interactions |
| `assets/img/work/` | Portfolio photos (from Jordy's Booksy profile), web-sized, with `-sm` thumbnails |
| `assets/og.jpg` | Social share card |
| `MARKET-RESEARCH.md` | Annapolis / DMV comparables and pricing recommendations |

## Booksy connectors

Three ways the site connects to Booksy (business ID `1071238`):

1. **Direct links** — every "Book" button opens the Booksy profile.
2. **Embedded booking widget** — the Reserve section loads Booksy's official iframe widget (`booksy.com/widget-2021/index.html?id=1071238…`) in place. It auto-loads on desktop and on tap on mobile.
3. **Session builder** — clients pick services on the site, see time and total, then hand off to Booksy.

If Jordy ever moves Booksy accounts, change `BOOKSY_ID` and `BOOKSY_URL` at the top of `js/main.js`.

## Editing content

- **Prices / services:** `SERVICES` array in `js/main.js`. Keep it in sync with Booksy.
- **Photos:** drop a 1400px JPG and a 640px `-sm` JPG into `assets/img/work/` and add an entry to `GALLERY`.
- **Reviews:** `REVIEWS` array. These are verbatim from Booksy — keep them real.
- **Hours / address / service area:** search `index.html` for `Forest Drive`.
- **House-call pricing:** currently "quoted per visit". See `MARKET-RESEARCH.md` for a recommended menu; add a `price` to the house-call row once Jordy sets it.

## Run locally

Open `index.html` in a browser, or:

```bash
python -m http.server 8080
```

## Deploy

Push to `main`. GitHub Pages serves the root of the repo.

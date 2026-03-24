# CLAUDE.md — US–Mexico Relations Project

> This file is reviewed before every change. Update it whenever a meaningful decision is made.

---

## Project Overview

A React + TypeScript website about US–Mexico relations. Local development only for now; deployment TBD.

---

## Tech Stack

| Concern | Choice | Reason |
|---|---|---|
| Framework | React 19 + TypeScript | Type safety; easier routing |
| Build tool | Vite 8 | Fast HMR, zero config |
| Routing | React Router DOM v7 | Standard SPA routing |
| Styling | Plain CSS (per-component files) | No extra dependencies; easy to reason about |

---

## Route Structure

| Path | Component | Description |
|---|---|---|
| `/` | `Home` | About section (top) + interactive map (scroll) |
| `/region/:regionSlug` | `RegionPage` | Region detail with 3 article cards |
| `/region/:regionSlug/article/:articleId` | `ArticlePage` | Full article view |

---

## SVG Map

- **File:** `public/Regions_of_Mexico.svg` (also kept at project root)
- **SVG used:** `Regions_of_Mexico.svg` — 8 pre-colored regions, no islands
- The original `Mexico_location_map.svg` was considered but discarded (no semantic grouping, 276 generic paths)
- The SVG is fetched at runtime via `fetch('/Regions_of_Mexico.svg')`, parsed, and injected inline so DOM event handlers can be attached
- Region paths are targeted by their SVG element `id`

### Region Path IDs → Slugs

| SVG ID | Original Color | Slug | Name | Notes |
|---|---|---|---|---|
| `path02` | `#f4e2ba` | — | — | Non-interactive; visible on map but not hoverable |
| `path16` | `#ef9ba0` | `northwest` | North West | |
| `path21` | `#ff9900` | `northeast` | North East | |
| `path33` | `#f5dd00` | `west` | West | |
| `path27` | `#00aad4` | `north-central` | North Central | |
| `path09` | `#d42aff` | `east` | East | |
| `path12` | `#ffffff` | `central` | Central | |
| `path05` | `#8080ff` | `southwest` | South West | |
| `path2809` | `#ccff00` | `southeast` | South East | |

### Hover Behavior (Map)

- Color changes to a lighter pastel `hoverColor` (defined per region in `regions.ts`)
- `drop-shadow` filter applied for a "raised" effect
- `transform: scale(1.03)` for subtle enlargement
- Tooltip follows cursor and shows region name
- On click → navigates to `/region/:slug`

---

## File Structure

```
src/
  data/
    regions.ts          — Region config (IDs, slugs, names, colors)
  components/
    Map.tsx             — Inline SVG map with hover + click logic
    Map.css
  pages/
    Home.tsx            — About section + Map section
    Home.css
    RegionPage.tsx      — Region detail + 3 placeholder article cards
    RegionPage.css
    ArticlePage.tsx     — Full article view (placeholder body)
    ArticlePage.css
  App.tsx               — BrowserRouter + Routes
  main.tsx
  index.css             — Global reset + base styles
public/
  Regions_of_Mexico.svg
```

---

## Design Decisions

- **Pastel color palette** — soft, warm pastels used throughout; each region's hover color is a lighter version of its SVG fill
- **About section** fills full viewport height; map section is below the fold (natural scroll reveal)
- **No dark mode** — not requested; light-only for now
- **No component library** — plain CSS keeps dependencies minimal
- **Article placeholders** — 3 cards per region page using Lorem Ipsum; article IDs are `article-1`, `article-2`, `article-3`
- **Back buttons** — region page back button goes to `/#map`; article page back button goes to `/region/:slug`

---

## Pending / TODOs

- [ ] Replace placeholder article content with real articles
- [ ] Add real article IDs/slugs when content is ready
- [ ] Deployment setup (TBD)
- [ ] Consider adding a navbar if pages multiply

---

## Change Log

| Date | Change |
|---|---|
| 2026-03-24 | Initial project setup: Vite + React + TS, React Router, SVG map, Home/Region/Article pages, pastel CSS |
| 2026-03-24 | Fixed map cut-off: SVG had no viewBox; now computed from original width/height attrs so `height: auto` can maintain aspect ratio |
| 2026-03-24 | Corrected region mappings (8 interactive regions, path02 non-interactive); fixed hover z-order (element moved to front on hover); fixed stale hover state when cursor moves between regions; added Central (path12/white) as a region |

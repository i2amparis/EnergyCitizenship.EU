# EnergyCitizenship.eu

[![DOI](https://zenodo.org/badge/809662535.svg)](https://zenodo.org/doi/10.5281/zenodo.11491571)

EnergyCitizenship.eu is a learning tool and data viewer on **energy citizenship**: the roles citizens play in the energy system.
It brings together results from four EU Horizon 2020 projects: ENCLUDE, DIALOGUES, EC2 and EnergyPROSPECTS.

> **v2** is a full rebuild. The audit of v1 that motivated it is in [`docs/LEGACY_ANALYSIS.md`](docs/LEGACY_ANALYSIS.md).

## Stack

| | |
|---|---|
| Framework | SvelteKit 3 + **Svelte 5 (runes)**, TypeScript |
| Styling | Tailwind CSS 4 (CSS-first tokens in `src/app.css`), light and dark themes |
| Map | MapLibre GL 6, globe projection. Self-hosted Natural Earth outlines, plus the project's **Mapbox styles** as an optional detailed basemap |
| Charts | Small hand-written SVG components (`d3-scale`, `d3-shape`) |
| Fonts | Self-hosted Fraunces + Inter (variable) |
| Output | Every page is **prerendered**, served by `adapter-node` behind `server.js` (security headers) |

## Develop

Requires Node ≥ 22.12 (Volta pins 24).

The detailed basemap needs the Mapbox token. Copy `.env.example` to `.env` and set `PUBLIC_MAPBOX_TOKEN`. `.env` is git-ignored. Without it, the atlas uses only the self-hosted outlines.

```sh
npm install
npm run dev      # http://localhost:3030
npm run check    # svelte-check + TypeScript
npm run build    # prerender everything into build/
npm start        # node build (or: node server.js for headers)
```

Docker:

```sh
docker build -t energycitizenship .
docker run -p 3000:3000 energycitizenship
```

## Project layout

```
src/
  app.css                 design tokens, typography, light and dark themes
  lib/
    data/                 single source of truth (typed)
      raw/                survey + model outputs as delivered (JSON)
      initiatives.ts      normalised initiatives
      taxonomy.ts         technologies, goals, activities… + country anchors
      expressions.ts      4 modes × 15 expressions
      content.ts          pathways, impacts, resources, partner projects
      quotes.ts           interview excerpts
      results.ts          ANIMO and DREEM model series
    atlas/                the map experience (state, map, facets, timeline, profile)
    charts/               SVG line and stacked-bar charts
    article/              long-form study layout and its embedded charts
    components/           header, footer, cards, mode wheel, static Europe map
    server/geo.ts         build-time SVG projection for static locator maps
  routes/                 /, /about, /map, /initiatives/[id], /impacts/*, /resources
scripts/build-basemap.js  regenerates static/geo/basemap.json from world-atlas
```

Subpath imports use `#lib/...` (SvelteKit 3 replaced `$lib` with Node subpath imports).

## Updating the data

- **Initiatives:** edit `src/lib/data/raw/initiatives.raw.json`. Values in the `*_filter` fields must use the raw labels listed in `src/lib/data/taxonomy.ts`. New countries also need an anchor point there.
- **Quotes:** `src/lib/data/quotes.ts`.
- **Pathways, impacts and resources:** `src/lib/data/content.ts`.
- **Basemap:** `npm run geo`.

Rebuild after any change. Pages are static.

## Legacy URLs

v1 URLs keep working: `/interactive_map` → `/map`, `/interactive_map/:id` → `/initiatives/:id`, and `/results/*` → `/impacts/*`.

## Funding

The ENCLUDE, DIALOGUES, EC2, and EnergyPROSPECTS projects have received funding from the European Union’s Horizon 2020 Research and Innovation Programme under grant agreements No 101022791, 101022585, 101022565, and 101022492, respectively.

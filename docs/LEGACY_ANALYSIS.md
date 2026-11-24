# EnergyCitizenship.eu: audit of the legacy platform

This is an audit of the platform as it stood on `main` at commit `3a4adb1`, written before the rebuild on the `rebuild/svelte5` branch.
It records what the site did, how it was built, and what was wrong with it, so nothing is lost when the old code is removed.

---

## 1. What the platform is

EnergyCitizenship.eu is a data viewer and learning tool about **energy citizenship**: the roles citizens can play in the energy system.
It brings together results from four EU Horizon 2020 projects: **ENCLUDE**, **DIALOGUES**, **EC2** and **EnergyPROSPECTS**.

It offers four "pathways" for three audiences (academics, policymakers and citizens):

| Pathway | Question | Route | Content |
|---|---|---|---|
| Learn | What is energy citizenship? | `/about` | 4 modes × 15 "expressions" of energy citizenship |
| Explore | Which initiatives exist across Europe? | `/interactive_map` | 65 anonymised collective energy initiatives in 16 countries, plus quotes |
| Explore | What role does energy citizenship play in the transition? | `/impacts` | 9 modelling and research outputs (3 hosted here, 3 on IAMPARIS, 3 PDFs) |
| Learn | How can I organise an initiative? | `/resources` | 4 guides, toolkits and policy briefs |

---

## 2. Inventory

### 2.1 Routes

| Route | File | Notes |
|---|---|---|
| `/` | `(app)/+page.svelte` | Hero over a hot-linked Unsplash photo, followed by 4 pathway cards |
| `/about` | `(app)/about/+page.svelte` | Intro text and the `ExpresionsNav` tab explorer (Access, Consumption, Production, Governance) |
| `/interactive_map` | `(app)/interactive_map/+page.svelte` | Mapbox map, clusters, country polygons, `DataSidebar`, Shepherd intro tour |
| `/interactive_map/[id]` | `.../[energyCommunities]/+page.(js\|svelte)` | Detail page for one initiative |
| `/impacts` | `(app)/impacts/+page.svelte` | 9 cards |
| `/resources` | `(app)/resources/+page.svelte` | 4 cards |
| `/results` | `(app)/results/+page.svelte` | **Orphaned** (nothing links to it); uses hot-linked Pixabay images |
| `/results/intro` | 822 lines | Long article: scenario design, the 3 "worlds", expressions table, modelling ensemble |
| `/results/result_animo` | 606 lines | ANIMO model: Mapbox map of 3 case studies, CEI growth charts (min/avg/max toggle), CO₂ avoided, 6 citizen personas |
| `/results/result_bleed` | 400 lines | DREEM model for Megalopolis (GR): energy-mix bar charts per world, cost and CO₂ line charts |
| `/data_preprocess` | `(admin)/...` | **Public, unauthenticated** "admin" page: XLSX/JSON upload and preview. Half-built, does nothing |
| error | `+error.svelte` | 1.9 MB PNG used as the 404 image |

### 2.2 Data

| File | Size | Used? | Content |
|---|---|---|---|
| `20231027_ENC_platform_community_data.json` | 122 KB | yes | 65 initiatives with fields `id, Name, Country, Short description, Activities_filter, Technologies, Technologies_filter, Planned impacts, Actual impacts, Impacts_filter, Goal, Goals_filter, Challenges, Challenges_filter, Project start, Project end, Location` |
| `20231026_ENC_platform_community_data.json` | 189 KB | yes (imported, never really used) | The same 65 initiatives in "one-hot" column format. Bundled to the client for nothing |
| `20231027_ENC_Point.geojson.json` | 115 KB | yes | The same 65 records as points. **Only 16 distinct coordinates: every initiative sits on its country's centroid** |
| `20231027_ENC_Polygon.geojson.json` | 84 KB | yes | 16 country outlines |
| `ENCLUDE_Models_Results.json` | 18 KB | yes | ANIMO results: 3 regions × 3 scenarios × (growth min/avg/max, CO₂ avoided), 2025–2030 |
| `ENCLUDE_DREEM_Results.json` | 28 KB | yes | DREEM results for Megalopolis: 9 variables × 3 scenarios, 2023–2050. Numbers are strings with comma decimals |
| `countries.geojson.json` | 1.6 MB | **no** | Despite the name, these are **US states** |
| `quotes-data.js` | n/a | yes | 19 interview quotes for Ireland, Greece, Slovenia and Portugal |
| `about-data.js` | n/a | yes | 15 expressions with icons and descriptions |
| `home-data.js`, `impact-data.js`, `resources-data.js` | n/a | yes | Pathway cards (title, description, link, audiences, authoring projects) |
| `static/20231026_ENC_platform_community_data.xlsx` | n/a | publicly downloadable | Raw survey spreadsheet served at `/2023…xlsx` |

Taxonomies found in the data:

- **Technologies (8):** PV, Wind, Batteries, Other sources (biomass/hydro/hydrogen), Heat pumps/solar heaters/HVAC, Renovation, Smart systems/monitoring, Electromobility
- **Activities (5):** Renewable production, Energy efficiency, Mobility, Awareness raising, Political activities
- **Goals (8):** Sustainability/climate, RES production, Efficiency, Monetary savings, Research, Awareness, Political, Social
- **Impacts (5):** Climate, Environmental, Social, Regulatory, Technological
- **Challenges (5):** organisation-, technology-, communication- and money-related, or no major challenge
- **Location:** free text (for example `"Village or small town: < 10,000"`), with some multi-country entries
- **Countries (16):** Greece 17, Netherlands 12, Belgium 8, Britain 4, Germany 3, Ireland 3, France 3, Spain 3, North Macedonia 3, Estonia 2, Austria 2, Denmark 1, Slovenia 1, Portugal 1, Croatia 1, Romania 1

### 2.3 Components (39 files)

**Used:** `Footer3`, `DarkMode`, `ModuleCard`, `ExpresionsNav` with `Access/Consumption/Production/Governance` (four near-identical copies), `Accordion`, `DataSidebar`, `filters`, `quotes`, `Technologies`, `_EnergyCommunitiesClusters`, `IntroTour`, `Community_Hero`, `_MultiLineChart`, `_MultiBarChart`, `_CEI_result1`, `RadioButton`, and a vendored fork of `@beyonk/svelte-mapbox` (`map/*`, `queue.js`, `event-bindings.js`, `asset-loader.js`, `mapbox.js`, `components.js`).

**Dead code:** `Hero`, `Navbar`, `Nav2`, `Card`, `CheckBox`, `MultiSelect`, `BoilerplateCards` (only used by the orphan page), `ChartMap` (logs to the console), `_LineChart` (imports a `dummy` export that does not exist and would crash), `SIT`, `svgs/*` (4 files), `geocoder/*`, `GeolocateControl`, `ScaleControl`, `data_preprocess/*`, `data_handler/*` (mostly), `transitions.js`, `stores.js` (one flag).

### 2.4 Stack

| Piece | Version | Status in Nov 2026 |
|---|---|---|
| Svelte | 3.55 | Two majors behind. Svelte 5 runes are now the standard |
| SvelteKit | 1.x | EOL. Kit 2 has been current since Dec 2023 |
| Vite | 4 | EOL, with several dev-server `fs.deny` bypass CVEs fixed only in newer lines |
| Tailwind | 3.3, with daisyUI 4 and tw-elements | Tailwind 4 uses CSS-first config; tw-elements is unused |
| Mapbox GL JS | v2.12, loaded at runtime from `//api.mapbox.com` | Proprietary licence, needs a token, uses personal-account styles |
| layerchart | 0.44 | Pre-1.0 and incompatible with Svelte 5 |
| shepherd.js | 12 | Used for a one-step tour |
| Node | 18.13 (Volta) | EOL since April 2025 |
| ESLint | 7 with `eslint-plugin-svelte3` | Both EOL |
| Lockfiles | **both** `package-lock.json` and `pnpm-lock.yaml` | Installs are not deterministic |

---

## 3. Security issues

| # | Severity | Issue | Where |
|---|---|---|---|
| S1 | High | **SheetJS `xlsx` 0.16.8 loaded from cdnjs on every page**, with no Subresource Integrity. It has known prototype-pollution (CVE-2023-30533) and ReDoS (CVE-2024-22363) vulnerabilities, so it is a supply-chain risk on every page for a feature only the admin page used | `src/app.html` |
| S2 | High | **Unauthenticated admin route** `/data_preprocess`. Its `+page.server.js` contains only the comment `//auth` | `src/routes/(admin)` |
| S3 | Medium | **Mapbox token committed** in `.env`, and `.env` is not git-ignored. It is a public `pk.` token, but it is tied to a personal account with no URL restriction, so anyone can bill against it | `.env` |
| S4 | Medium | **Build output committed** (`build/`, server chunks and source maps). Stale code ships with the repository | `build/` |
| S5 | Medium | **Mapbox GL JS injected at runtime** through a protocol-relative URL, with no SRI | `lib/map/map-action.js` |
| S6 | Medium | **HTML built by string concatenation** and passed to `popup.setHTML(...)`. This is an XSS sink as soon as data comes from a CMS or users | `_EnergyCommunitiesClusters.svelte` |
| S7 | Medium | **No CSP or security headers.** Inline `onclick="…showModal()"` handlers would block any strict CSP | `DataSidebar.svelte`, admin page |
| S8 | Medium | **Outdated framework packages with published advisories**: Svelte < 4.2.19 (SSR attribute-escaping XSS, CVE-2024-45047), Vite 4 dev-server file-read bypasses (2025), SvelteKit 1 (EOL) | `package.json` |
| S9 | Low | **Docker image**: EOL `node:18-alpine`, runs as root, uses `npm install` instead of `npm ci`, and has no `.dockerignore`, so `.env`, `.git` and `build/` are copied into the image | `Dockerfile` |
| S10 | Low | **Third-party hot-linking** of Unsplash, Pixabay and fonts.bunny.net (privacy and availability). `target=_blank` without `rel="noopener"` in places | many |
| S11 | Low | The raw survey spreadsheet is publicly served from `static/` | `static/*.xlsx` |

---

## 4. UX, accessibility and correctness problems

### Navigation
- Every internal link has `data-sveltekit-reload`, so **every click is a full page reload**.
- Desktop navigation appears only at 1280 px and above. Laptops and tablets get a hamburger.
- The drawer is a daisyUI checkbox hack. Its scroll-lock flag is toggled on the input's *click*, so it drifts out of sync with the drawer's real state.

### Map (`/interactive_map`)
- All 65 initiatives share 16 coordinates. With `clusterMaxZoom: 80` and `clusterMinPoints: 1`, the result is **one bubble per country that never splits**. The bubbles cannot be clicked.
- Clicking a country runs `sidebar_show = !sidebar_show`, so **clicking a second country closes the panel instead of switching to it**.
- **Filters only work inside one country's sidebar.** The map never reflects them, and closing the sidebar resets them.
- The **Impacts filter is collected but never applied** (`impacts_value` is missing from `selection`).
- Technology matching uses `filters.join(' ').includes(name)`, which is fragile string matching.
- The "HVAC" technology uses the **tidal power** icon.
- `clearAllFilters` manipulates the DOM through `getElementById`.
- Fake loading spinners run for 1 s through `setTimeout` on every keystroke.
- Mobile and desktop layouts come from **user-agent sniffing** (`svelte-device-info`), not responsive CSS.
- On mobile the filters open in `<dialog>`s that use inline `onclick` and duplicate IDs.
- The quotes panel silently shows only the first 3 quotes.
- Layers and event handlers are added at component init and never cleaned up.
- The Shepherd modal tour points at an empty, absolutely positioned div, and **appears on every visit** until it is dismissed with a specific button.
- The map is not keyboard-accessible, and nothing is announced to screen readers.

### The DataSidebar specifically (the "really bad sidebar")
- It is absolutely positioned over the map with `width: auto` and no maximum height on mobile.
- Filters and quotes are each "swap" labels wrapping a hidden checkbox that is *both* `bind:checked` and toggled `on:change`. The two state machines fight each other.
- Up to three columns (list, filters, quotes) slide in on top of each other, and on mobile they overflow the screen.
- There is no indication of how many results a filter will produce, no URL state, and no way to compare countries.

### Initiative detail page
- The "Type of Initiative" field shows the **name**, not a type.
- A fixed-width `artboard phone-1` box and a forced `data-theme="emerald"` break dark mode.
- The hero is a stretched 1917×479 JPEG.

### Theming
- The dark-mode toggle flips daisyUI's theme, but dozens of hard-coded `bg-white`, `!bg-white` and `text-gray-900` classes make text unreadable in dark mode.
- The theme is not persisted and ignores `prefers-color-scheme`.

### About
- Four copy-pasted components for the four modes.
- Accordions use `translate-y-12` hacks to line up icons.
- The fonts "Space Mono" and "Karla" are referenced but never loaded.
- The Consumption *main* icon reuses the Collectivist-consumer icon.
- Alt texts such as `"temp"`, `"download icon"` and `"Logo"`.

### Results articles
- `svelte-toc` is configured with `breakpoint={2000}`, so the TOC is a mobile drawer on almost every screen.
- Tables are used for layout. Persona headings are duplicated for responsive variants.
- Chart y-axis labels are hard-coded through a chain of unit ternaries.

### SEO and meta
- The same `<title>EnergyCitizenship </title>` appears on every page, with no meta description, Open Graph tags, sitemap or robots file.
- The viewport meta has no `initial-scale`.

### Repository hygiene
- `package.json` still carries `"exports": "./components.js"` and Svelte 3 `peerDependencies` from the forked svelte-mapbox library.
- `CHANGELOG.md` is svelte-mapbox's changelog.
- There are two PostCSS configs (`.cjs` and `.js`).
- Poppins ships in 6 weights × 3 subsets, and an Open Sans webfont is loaded but never used.

---

## 5. What to keep

- All **content**: texts, the expressions typology, pathway cards, impacts and resources links, quotes, persona descriptions, and the three results articles.
- All **data**: the 65 initiatives, ANIMO and DREEM results, and the country outlines.
- **Brand assets**: the house-and-leaves logo (deep teal `#24504c` and leaf green `#6cbf5a`), the 15 expression illustrations, technology icons, persona and world illustrations, and partner logos.
- **Information architecture**: the four pathways for three audiences still makes sense.

## 6. Rebuild decisions

| Area | Decision | Why |
|---|---|---|
| Framework | **SvelteKit 2 + Svelte 5 runes + TypeScript** | Current, typed, and fine-grained reactivity |
| Styling | **Tailwind CSS 4**, CSS-first `@theme` tokens, no component kit | One design system with no daisyUI theme conflicts. Dark mode via tokens |
| Map | **MapLibre GL** (open source) with a **globe projection**, self-hosted Natural Earth outlines, and the project's own Mapbox styles as an optional raster basemap (token in a git-ignored `.env`) | The map works without a token. With one, it keeps the familiar Mapbox look |
| Map UX | The sidebar is **removed**. Instead there is a facet bar whose filters apply **to the map and the list at the same time**, with live counts, URL-synced state, a country profile sheet (stats and quotes), a timeline that replays the movement's growth, and accessible list ↔ map sync | Fixes every issue in §4 *Map* and *DataSidebar* |
| Charts | Small **hand-written SVG charts** (d3-scale, d3-shape) | No pre-1.0 chart library. Accessible, themeable and tiny |
| Data | **One** normalised, typed module (`$lib/data`), with taxonomies as code. Duplicate and unused datasets removed | One source of truth. The 1.6 MB of US states is gone |
| Admin | **Removed.** Data updates happen by editing the JSON in git | No unauthenticated surface, and no SheetJS |
| Rendering | **Every page prerendered** (static HTML). `adapter-node` kept for the Docker deployment | Fast, cacheable, and minimal attack surface |
| Security | Strict **CSP** (Kit `csp` with hashes), security headers in `hooks.server.ts`, no inline handlers, no CDN scripts, `.env` ignored, `build/` ignored, non-root multi-stage Docker on Node 24 | Fixes S1–S11 |
| Fonts | Self-hosted variable fonts (`@fontsource-variable`): one display face and one text face | Fewer requests and no third-party font CSS |
| Home | **"About" becomes the hero.** The landing page opens with a large statement of what energy citizenship is, an interactive look at the four modes of participation, and the four projects behind the site | This is the request for the rebuild |

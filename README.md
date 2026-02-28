# LUMIÈRE — Maison de Parfum
## Frontend Product Showcase

A luxury perfume brand showcase website built as a frontend-only single-page application. No backend, no authentication, no database.

---

## Live Preview

Open `index.html` in any modern browser. No build step, no dependencies to install.

---

## Project Structure

```
lumiere/
├── index.html          # Single HTML file, three page sections
├── css/
│   └── style.css       # Complete design system + all component styles
├── js/
│   ├── data.js         # Product data (static JSON as JS constants)
│   └── app.js          # Application logic: routing, rendering, interactions
└── README.md
```

---

## Design Decisions

### Aesthetic Direction
**Dark editorial luxury** — inspired by the visual language of independent perfume houses (Serge Lutens, Le Labo, Byredo). Deep black backgrounds, champagne gold accents, cinematic photography. Deliberately restrained: no gradients, no bouncy animations, nothing decorative that doesn't serve meaning.

### Typography
- **Display / Headings**: Cormorant Garamond — a refined serif with excellent optical weight at large sizes
- **Body / Labels**: Jost — a geometric sans with a slight humanity that complements without competing
- Size hierarchy: 10 levels defined via utility classes and contextual sizing

### Colour System
Defined in four semantic variables — background, surface, text, and accent gold — plus border and muted text. No colour is used outside this set.

```css
--c-bg:        #0a0908   /* Deep charcoal-black */
--c-surface:   #111010   /* Card backgrounds    */
--c-border:    #2a2825   /* Dividers, outlines  */
--c-gold:      #c9a96e   /* Primary accent      */
--c-gold-pale: #e8d5a3   /* Gold hover state    */
--c-text:      #e8e4dc   /* Primary text        */
--c-text-muted:#8a8278   /* Secondary text      */
```

### Spacing
8px base grid with a 9-step scale (`--sp-1` through `--sp-9`). All spacing in the codebase references these variables — no arbitrary pixel values.

### Motion
- Hover states: 200–300ms ease transitions on all interactive elements
- Hero reveal: single CSS animation on page load (scale + opacity)
- Image zoom on card hover: 400ms ease
- No bounce, no spring, no performative motion

---

## Pages

### 1. Landing Page (`page-landing`)
- **Hero**: Full-viewport background image with overlay gradient, brand name, tagline, and primary CTA
- **Brand Intro**: Two-column layout — philosophy copy (3 paragraphs) + editorial photograph
- **Featured Products**: 3-card asymmetric grid showing `featured: true` items from the data

### 2. Product Listing (`page-listing`)
- **3-column grid** on desktop, 2 on tablet, 1 on mobile
- **Category filter** (7 categories) — dynamically shows/hides relevant products
- **Sort control** — by featured order, price ascending/descending, or name
- Consistent `3:4` image aspect ratio enforced via `aspect-ratio` + `object-fit: cover`
- Empty state shown when no products match the active filter

### 3. Product Detail (`page-detail`)
- Two-column layout (image left, info right) on desktop, stacked on mobile
- Full description, formatted fragrance notes (top/heart/base), specifications table
- **Invalid ID handling**: A graceful 404-style error state with navigation back to listing — rendered from the same `detail-content` container, never a blank page

---

## Data Structure

Each product in `PRODUCTS[]` includes:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier |
| `name` | string | Product name |
| `category` | string | Fragrance category |
| `price` | number | Price in EUR |
| `shortDescription` | string | One-line teaser for listing cards |
| `fullDescription` | string | Multi-sentence editorial copy for detail view |
| `fragranceNotes` | object | `{ top, heart, base }` arrays of note strings |
| `size` | string | Volume and concentration |
| `longevity` | string | Estimated wear time |
| `occasion` | string | Suggested use context |
| `image` | string | URL (Unsplash) |
| `featured` | boolean | Controls appearance in landing featured grid |

---

## Component Architecture

Without a framework, components are implemented as:

- **Rendering functions** that return HTML strings (`renderLanding`, `ListingPage.renderCards`, `DetailPage.render`)
- **Reusable markup patterns** defined once in JS and injected — product cards use a single template literal, never copy-pasted
- **CSS component classes** prefixed by component name (`.product-card`, `.featured-card`, `.detail-*`)

### Router
A lightweight client-side router (`Router`) handles page transitions:
- Shows/hides page `<div>` elements by toggling the `active` class
- Calls registered page handlers with params on navigation
- Exposed as `window.Router` for inline button handlers
- No URL hash changes needed for this scope

---

## Accessibility

- Semantic HTML throughout (`nav`, `main`, `section`, `article`, `footer`)
- ARIA labels on navigation, toolbars, grids, and interactive cards
- Keyboard-accessible buttons (all interactives are `<button>` or have `role="button"`)
- Colour contrast ratios maintained for all text on dark backgrounds

---

## Enhancements Implemented

- **Category filter** with active state indicator
- **Price and name sorting**
- **Sticky image** on product detail (desktop) — image stays in view as user reads specs
- **Scroll-triggered nav style** — nav gains background on scroll only
- **Graceful 404 state** for invalid product IDs

---

## Browser Support

Modern browsers (Chrome 90+, Firefox 90+, Safari 14+). Uses:
- CSS Custom Properties
- CSS Grid + `aspect-ratio`
- `position: sticky`
- `backdrop-filter` (progressive enhancement)

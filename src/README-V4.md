# CV React v4 — modular views and isolated experience files

## Main changes

- The web CV is no longer one long page. It has independent screen views for Profile, Experience, Projects, Capabilities, Education, and Certifications.
- The compact ATS/PDF view remains independent from the web view.
- Contact data is centralized in `src/data/core/contact.js`, including phone `+57 310 293 1349`.
- Each professional experience is isolated in its own file for Spanish and English.
- The full technical stack is secondary/collapsible in the Capabilities view to reduce duplication and visual length.

## Experience structure

```text
src/data/es/experience/
  movistar-it-services-specialist.js
  movistar-configuration-specialist.js
  solem-support-analyst.js
  teka-l3-support.js
  andicall-software-engineer.js
  path-kpi-data-analyst.js
  path-rf-network-performance.js
  osc-rf-engineer.js
  index.js

src/data/en/experience/
  ...same structure in English
```

To edit one role, modify only its corresponding file. `index.js` only controls ordering and aggregation.

## Contact single source

```text
src/data/core/contact.js
```

This file feeds the sidebar, profile view, top-level contact information, and PDF contact line.

## Screen navigation

The application keeps a lightweight SPA structure without adding a router dependency. Views are selected through the header and persisted in the URL hash:

- `#/profile`
- `#/experience`
- `#/projects`
- `#/skills`
- `#/education`
- `#/certifications`

## Run

```bash
npm install
npm run dev
```

Production validation:

```bash
npm run build
```

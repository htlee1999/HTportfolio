# HTportfolio — Project Guide

**Last updated:** 2026-06-22

Personal portfolio website for Hong Teng Lee, built with React (Create React App). Single-page app with client-side routing that showcases profile, education, experience, projects, and interests.

> History: This file used to be a "codebase cleanup strategy" (2025-12-26). That cleanup is essentially complete — see [Cleanup status](#cleanup-status) at the bottom. This guide now describes the project as it actually is.

---

## Tech stack

- **React 18** (`react` / `react-dom` 18.3.1)
- **Create React App** (`react-scripts` 5.0.1) — bundler/dev server/test runner
- **react-router-dom 6** — client-side routing (`BrowserRouter`)
- **framer-motion 10** — scroll progress bar, animations, and the Interests timeline reveal-on-scroll
- **react-icons 4** — the single icon source
- **react-burger-menu** — mobile sidebar

Node 22 is in use locally (works fine).

---

## Commands

```bash
npm install        # install deps (node_modules is gitignored)
npm start          # dev server at http://localhost:3000
npm run build      # production build into build/
npm test           # CRA / Jest test runner (currently only the default App.test.js)
```

---

## Architecture

`src/App.js` is the root. It wraps everything in a `Router`, renders a fixed framer-motion scroll progress bar, the `Sidebar` (mobile nav), `Header`, a `Routes` block, and `Footer`. Each top-level section is a route:

| Path | Component |
|------|-----------|
| `/` | `Profile/Profile.js` |
| `/education` | `Education/Education.js` |
| `/experience` | `Experience/Experience.js` |
| `/projects` | `Projects/Projects.js` |
| `/interests` | `Interests/InterestsActivities.js` |

### Directory layout

```
src/
├── App.js, index.js, styles.css      # entry + global styles
├── assets/images/                    # shared images (e.g. ura_logo.png)
└── components/
    ├── Header.js, Footer.js, Sidebar.js
    ├── Navigation.css, HeaderFooter.css
    ├── Profile/                      # Profile.js + Profile.css
    ├── Education/                    # Education.js + Education.css
    ├── Experience/                   # Experience.js + Experience.css
    ├── Projects/
    │   ├── Projects.js               # main, composes the pieces below
    │   ├── ProjectItem.js, ProjectLinks.js, ProjectWrapper.js
    │   ├── PDFViewer.js              # in-page PDF viewer
    │   ├── projectsData.js           # project content (data, not markup)
    │   └── Projects.css
    └── Interests/
        ├── InterestsActivities.js
        └── TimelineView/             # TimelineView.js + styledComponents.js
```

### Conventions

- **Component files/folders are PascalCase.** Keep it that way (case-sensitivity bit production once — see git history).
- **Styling:** plain CSS files co-located with components + global `styles.css`. This is now the single styling approach across the whole app.
- **Icons:** use `react-icons` only. Don't reintroduce Font Awesome CDN, inline SVG strings, or other icon libraries.
- **Project content** lives in `Projects/projectsData.js`, not hardcoded in JSX. Other sections (Education, Experience, Interests) still hold their content inline in the component.

---

## Known issues / maintenance notes

- **CRA is unmaintained.** `react-scripts` 5.0.1 is the latest CRA will get. `npm audit` reports ~64 advisories, almost all in CRA's build-time tooling (webpack/postcss/svgo/etc.) — they do **not** ship to visitors. `npm audit fix --force` "resolves" them only by breaking react-scripts, so don't run it. The real fix is migrating to **Vite**, which is the recommended next step if this site gets active development again.
- **React 19 / router 7 are held back on purpose.** CRA doesn't officially support React 19. Several deps (notably `react-chrono` 2.9+) now require React 19 as a peer, so they're pinned to React-18-compatible versions. Upgrading these is an all-or-nothing jump that should happen alongside (or after) a Vite migration.
- **Tests:** only the default CRA smoke test exists. No real coverage.

---

## Cleanup status

The 2025-12-26 cleanup plan is done. Completed: removed dead `Sidebar.css` and orphaned footer CSS; de-duplicated `ura_logo.png` into `assets/images/`; fixed all file-name casing and the `TImelineView` typo; removed `.DS_Store` files and untracked `node_modules`; eliminated the `dangerouslySetInnerHTML` pattern in Projects; dropped `lucide-react`, Bootstrap, and the Font Awesome CDN; split the 544-line `Projects.js` into focused files; extracted `projectsData.js`.

Optional remaining nice-to-haves (not blocking, low priority):
- Extract Education/Experience/Interests content into data files like `projectsData.js`.
- Vite migration (would also clear the audit noise and unblock React 19).

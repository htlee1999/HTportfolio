# HTportfolio — Project Guide

**Last updated:** 2026-06-23

Personal portfolio website for Hong Teng Lee, built with React (Create React App). Single-page, single-scroll site — one continuous page with anchor-based section navigation (no client-side router) showcasing profile, experience, projects, education, and interests.

> History: This file used to describe a multi-route app (Header/Footer/Sidebar + `react-router` routes per section). That whole component tree was replaced by a single self-contained `Portfolio.js` and then deleted (2026-06-23). This guide describes the project as it actually is now.

---

## Tech stack

- **React 18** (`react` / `react-dom` 18.3.1)
- **Create React App** (`react-scripts` 5.0.1) — bundler/dev server/test runner
- **web-vitals** — CRA performance-reporting boilerplate (wired into `index.js`)

That's the whole runtime dependency list. There is **no** routing library, animation library, icon library, or menu library — `react-router-dom`, `framer-motion`, `react-icons`, and `react-burger-menu` were all removed (2026-06-23) once the single-page rewrite stopped using them. Animations are plain CSS; navigation is anchor links; section tracking uses the native `IntersectionObserver`.

Node 22 is in use locally (works fine).

---

## Commands

```bash
npm install        # install deps (node_modules is gitignored)
npm start          # dev server at http://localhost:3000
npm run build      # production build into build/
npm test           # CRA / Jest test runner (one smoke test in App.test.js)
```

---

## Architecture

`src/index.js` → `src/App.js` → `src/Portfolio.js`. `App.js` is a one-line wrapper that just renders `<Portfolio />`.

**`src/Portfolio.js` is the entire UI** — one file containing every section as a local component (`Hero`, `ProfileSection`, `ExperienceSection`, `ProjectsSection`, `EducationSection`, `InterestsSection`, `ContactFooter`) plus two nav components (`Nav`, `PageNav`). They're composed in order in the `Portfolio` component. Sections are plain `<section id="...">` blocks; nav is anchor links (`#profile`, `#experience`, etc.). `PageNav` is the left-edge dot navigation — it uses `IntersectionObserver` to highlight the active section and to hide itself while the hero is in view.

**Content is fully separated from markup:**

| Data file | Feeds |
|-----------|-------|
| `src/data/portfolioData.js` | `profile`, `skills`, `stats`, `experiences`, `education`, `interests`, `contact` |
| `src/components/Projects/projectsData.js` | `schoolProjects`, `personalProjects` (also imports the project logo/screenshot images) |

`EducationSection` rows are expandable: each `education` entry can carry a `details` object (`major`, `highlights`, `keyCourses`, `courses`, `achievements`, `academicHighlights`, `keyCoursesByYear`) which renders into a collapsible panel via the `EduDetails` component.

### Directory layout

```
src/
├── index.js                 # CRA entry, mounts <App>, calls reportWebVitals
├── App.js                   # one-liner: renders <Portfolio/>
├── Portfolio.js             # the whole page (all sections + nav)
├── Portfolio.css            # the whole stylesheet (pf-* classes)
├── reportWebVitals.js, setupTests.js, App.test.js   # CRA boilerplate + smoke test
├── data/
│   └── portfolioData.js     # all section content except projects
├── assets/images/           # shared images (ura_logo.png)
└── components/
    └── Projects/
        ├── projectsData.js  # project content + image imports
        └── *.png/.jpg       # project logos & screenshots
```

The `components/Profile/` folder still exists but only holds two **assets** that `Portfolio.js` imports directly: `profile.jpg` and `Resume 2025.pdf`. There are no other component files left under `components/` — the old `Header/Footer/Sidebar/Education/Experience/Interests/Profile` components were all deleted.

`public/` holds static assets copied verbatim into the build, including the three PDFs linked from the site (`URA-Temp-Projects.pdf`, `Internship presentation.pdf`, `Final-Report.pdf`).

### Conventions

- **Styling:** a single global stylesheet, `Portfolio.css`, with `pf-`-prefixed class names. No CSS-in-JS, no per-component CSS files.
- **Icons:** none — use Unicode glyphs (e.g. `↗`, `▾`) as in the existing code. Don't reintroduce an icon library.
- **Content lives in data files** (`data/portfolioData.js`, `Projects/projectsData.js`), not hardcoded in JSX. Add/edit sections by changing the data, not the markup, wherever possible.
- **Animations** are CSS transitions/keyframes in `Portfolio.css`. Don't reach for an animation library.

---

## Known issues / maintenance notes

- **CRA is unmaintained.** `react-scripts` 5.0.1 is the latest CRA will get. `npm audit` reports advisories almost entirely in CRA's build-time tooling (webpack/postcss/svgo/etc.) — they do **not** ship to visitors. `npm audit fix --force` "resolves" them only by breaking react-scripts, so don't run it. The real fix is migrating to **Vite** — and it's now a *much* smaller job than it used to be, since the app is one component file with no router or heavy deps.
- **Tests:** one smoke test (`App.test.js`) asserts the hero name renders. `setupTests.js` mocks `IntersectionObserver` (jsdom lacks it) so `PageNav` can mount under test. No real coverage beyond that.

---

## Cleanup status

The codebase was reduced to its current minimal form on 2026-06-23: deleted the entire orphaned `components/*` page tree (old Header/Footer/Sidebar, Education/Experience/Interests/Profile components, the multi-file Projects component set), the unused `styles.css` and `logo.svg`, the `portfolio_logo.png` orphan, the 328 KB `Hong Teng Lee - Portfolio.html` export, and `file_structure.txt`. Uninstalled `react-router-dom`, `framer-motion`, `react-icons`, and `react-burger-menu`. Fixed the stale `App.test.js` and added the `IntersectionObserver` test mock. `npm run build` and `npm test` both pass.

Optional remaining nice-to-haves (low priority):
- Vite migration (clears the audit noise, unblocks React 19; now a small job).
- `claude.md` is tracked in git under a lowercase name on a case-insensitive filesystem — normalize to `CLAUDE.md` if doing a casing pass.
- `reportWebVitals.js` + `web-vitals` are CRA boilerplate that could be dropped for a leaner tree.

# HTportfolio — Project Guide

**Last updated:** 2026-11-03

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
- **Groq API** (free tier) — "Ask about me" chatbot, called only from the serverless function in `api/`

Node 22 is in use locally (works fine).

---

## Commands

```bash
npm install        # install deps (node_modules is gitignored)
npm start          # dev server at http://localhost:3000 (also serves /api/chat via src/setupProxy.js)
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

### Hosting

Deployed on **Netlify** (config in `netlify.toml`). `/api/chat` is served by `netlify/functions/chat.mjs`, a thin adapter over `api/_lib/`. `api/chat.mjs` is the equivalent Vercel handler, kept so the site can still run on Vercel.

### Chatbot (`/api/chat`)

A floating widget (`components/Chat/ChatWidget.js`) talks to a serverless function (`netlify/functions/chat.mjs` on Netlify, `api/chat.mjs` on Vercel), which keeps the Groq key server-side. Logic lives in `api/_lib/`:

- `knowledge.mjs` — builds the bot's knowledge **from the same data files the pages render** (`*Data.js`), splits it into chunks and picks the relevant ones per question (keyword/BM25 retrieval). Needed because Groq's free tier is 8K tokens/min per model and the whole site is ~8K tokens.
- `chat.mjs` — guardrails + model calls: NFKC normalisation + input caps → Origin check → per-visitor/per-model limits → **Llama Prompt Guard 2** (injection filter; fails closed) → grounded system prompt → model fallback `openai/gpt-oss-120b` → `qwen/qwen3.8-27b` → `openai/gpt-oss-20b` → output checks (canary/prompt-leak detection, **only URLs/emails that appear in site content survive**, length cap).
- **History is HMAC-signed by the server** (`{q, a, sig}`); unsigned or tampered turns are dropped, so clients can't forge earlier assistant replies. Key is derived from the Groq key, or set `CHAT_SIGNING_SECRET`.
- `rateLimits.mjs` — tracks RPM/RPD/TPM/TPD per model plus Groq's `x-ratelimit-*` headers; stops using a model at 85% of any limit (`SAFETY`) and the widget pauses itself when none are left. State is in-memory per instance.

Env: `GROQ_API_KEY` (or legacy `GROQ_URL`) in `.env.local` locally and in Netlify site environment variables (scope: Functions) for production. Optional `CHAT_SIGNING_SECRET`; `SITE_URL` overrides the site address the bot links to (defaults to Netlify's `URL`). See `.env.example`.

**Data files must stay free of image/JSX imports** — `api/` imports them in plain Node. Components map string keys (e.g. `logo: "ura"`, `image: "worldcupShot"`, `icon: 'FaCamera'`) to the actual imports.

### Directory layout

```
src/
├── App.js, index.js, styles.css      # entry + global styles
├── setupProxy.js                     # dev-only: mounts /api/chat on the CRA dev server
├── assets/images/                    # shared images (e.g. ura_logo.png)
└── components/
    ├── Header.js, Footer.js, Sidebar.js
    ├── Navigation.css, HeaderFooter.css
    ├── Chat/                         # ChatWidget.js + ChatWidget.css
    ├── Profile/                      # Profile.js, profileData.js (+ contact info), Profile.css
    ├── Education/                    # Education.js, educationData.js, Education.css
    ├── Experience/                   # Experience.js, experienceData.js, Experience.css
    ├── Projects/
    │   ├── Projects.js               # main, composes the pieces below
    │   ├── ProjectItem.js, ProjectLinks.js, ProjectWrapper.js
    │   ├── PDFViewer.js              # in-page PDF viewer
    │   ├── projectsData.js           # project content (data, not markup)
    │   └── Projects.css
    └── Interests/                    # InterestsActivities.js, interestsData.js, .css
api/
├── chat.mjs                          # Vercel handler (unused on Netlify)
└── _lib/                             # knowledge.mjs, chat.mjs, rateLimits.mjs
netlify/functions/chat.mjs            # Netlify function: GET status, POST question
```

### Conventions

- **Component files/folders are PascalCase.** Keep it that way (case-sensitivity bit production once — see git history).
- **Styling:** plain CSS files co-located with components + global `styles.css`. This is now the single styling approach across the whole app.
- **Icons:** use `react-icons` only. Don't reintroduce Font Awesome CDN, inline SVG strings, or other icon libraries.
- **Content** lives in each section's `*Data.js` file, not in JSX — edit those to change both the page and what the chatbot knows.

---

## Known issues / maintenance notes

- **CRA is unmaintained.** `react-scripts` 5.0.1 is the latest CRA will get. `npm audit` reports ~64 advisories, almost all in CRA's build-time tooling (webpack/postcss/svgo/etc.) — they do **not** ship to visitors. `npm audit fix --force` "resolves" them only by breaking react-scripts, so don't run it. The real fix is migrating to **Vite**, which is the recommended next step if this site gets active development again.
- **React 19 / router 7 are held back on purpose.** CRA doesn't officially support React 19. Several deps (notably `react-chrono` 2.9+) now require React 19 as a peer, so they're pinned to React-18-compatible versions. Upgrading these is an all-or-nothing jump that should happen alongside (or after) a Vite migration.
- **Tests:** only the default CRA smoke test exists. No real coverage.

---

## Cleanup status

The 2025-12-26 cleanup plan is done. Completed: removed dead `Sidebar.css` and orphaned footer CSS; de-duplicated `ura_logo.png` into `assets/images/`; fixed all file-name casing and the `TImelineView` typo; removed `.DS_Store` files and untracked `node_modules`; eliminated the `dangerouslySetInnerHTML` pattern in Projects; dropped `lucide-react`, Bootstrap, and the Font Awesome CDN; split the 544-line `Projects.js` into focused files; extracted `projectsData.js`.

Section content was extracted into `*Data.js` files on 2026-11-03 (for the chatbot).

Optional remaining nice-to-haves (not blocking, low priority):
- Vite migration (would also clear the audit noise and unblock React 19).

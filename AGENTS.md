# AGENTS.md

## Cursor Cloud specific instructions

### Product overview

Single Next.js app in `york-summer-portal/` — a static "York Summer Guide" civic information site (homepage + `/dashboard` preview route). No backend, database, Docker, or environment variables are required.

### Running the app

From `york-summer-portal/`:

- **Dev server:** `npm run dev` → http://localhost:3000
- **Production:** `npm run build && npm run start`

Use a tmux session for long-running dev servers (e.g. session name `next-dev-server`).

### Lint / test / build

| Command | Purpose |
|---------|---------|
| `npm run typecheck` | TypeScript check (`tsc --noEmit`) |
| `npm run build` | Production build (also runs TS check via Next.js) |

There is no ESLint config or test suite in this repo.

### Key routes

- `/` — main summer guide homepage
- `/dashboard` — preview route with link back to homepage

### Notes

- Package manager is **npm** (`package-lock.json`); use `npm ci` for clean installs.
- Node.js v22+ works with Next.js 16.x in this repo.
- External links (yorkcity.org, etc.) are optional for local development; the app is fully functional offline.

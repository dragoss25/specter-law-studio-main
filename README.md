# Specter Law Studio (Marketing Site)

Marketing website for Specter, built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## Local development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Project structure (marketing site)

```
.
├─ public/
│  ├─ flags/
│  ├─ logos/
│  └─ ...
├─ src/
│  ├─ components/
│  │  ├─ layout/          # Header, Footer, page layout shell
│  │  ├─ ui/              # shadcn/ui and shared UI blocks
│  │  └─ ...
│  ├─ pages/
│  │  ├─ platform/        # Platform pages (Cortex, Document Analysis, etc.)
│  │  ├─ solutions/       # Industry/solution pages
│  │  ├─ company/         # About/Contact
│  │  └─ ...
│  ├─ hooks/
│  ├─ lib/
│  ├─ styles/
│  ├─ App.tsx             # Marketing routes
│  └─ main.tsx
├─ index.html
├─ tailwind.config.ts
└─ vite.config.ts
```

## Key routes

- `/` Home
- `/platform/*` Platform pages
- `/solutions/*` Solutions pages
- `/trust` Trust & Security
- `/resources` Resources
- `/company/about` About
- `/company/contact` Contact
- `/privacy` Privacy
- `/terms` Terms

## Environment variables

Optional (used for the Login button target in local dev):

```
VITE_APP_BASE_URL=http://localhost:5174
```

Create a `.env.local` in the repo root if you want the login link to point to a local app server.

## Notes

- The marketing site and the app are developed separately; this README covers only the marketing site.
- Keep UI changes aligned with the existing brand system and page layouts.

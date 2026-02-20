# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test runner is currently configured.

## Tech Stack

- **Next.js 16** with App Router (`/app` directory)
- **React 19**
- **TypeScript** (strict mode enabled)
- **Tailwind CSS v4** — uses `@import "tailwindcss"` syntax in CSS, configured via `@tailwindcss/postcss`
- **ESLint 9** with flat config (`eslint.config.mjs`)

## Architecture

This project uses the **Next.js App Router** pattern:

- `app/layout.tsx` — Root layout; defines metadata and fonts (Geist Sans/Mono via `next/font`)
- `app/page.tsx` — Home route (`/`)
- `app/globals.css` — Global styles; imports Tailwind and defines CSS custom properties for theming

**Path alias:** `@/*` maps to the project root (e.g., `@/app/...`, `@/components/...`).

**Styling:** Tailwind CSS v4 with CSS custom properties (`--background`, `--foreground`) for light/dark theming. Dark mode is system-preference-based via `@media (prefers-color-scheme: dark)`.

No database, authentication, or API routes are configured yet.

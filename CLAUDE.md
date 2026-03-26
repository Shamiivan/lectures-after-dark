# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Lectures After Dark is an event platform. Built with React + TypeScript + Vite, TinaCMS (self-hosted) for content management, and Tailwind CSS for styling.

## Common Commands

```bash
pnpm dev          # Start Vite dev server
pnpm tina:dev     # Start Vite + TinaCMS dev server (enables content editing)
pnpm tina:build   # Build TinaCMS (generates types + admin UI)
pnpm build        # TypeScript check + Vite production build
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint issues (--max-warnings 0)
pnpm type-check   # TypeScript checking only
pnpm check        # Full validation: lint:fix + type-check + build
```

## Environment Variables

- `GITHUB_OWNER`, `GITHUB_REPO`, `GITHUB_BRANCH` — GitHub repo details for TinaCMS git provider
- `GITHUB_PERSONAL_ACCESS_TOKEN` — GitHub PAT for TinaCMS content commits
- `KV_REST_API_URL`, `KV_REST_API_TOKEN` — Vercel KV (Upstash Redis) for TinaCMS database
- `NEXTAUTH_SECRET` — Auth.js secret for TinaCMS production auth

## Architecture

### Routing

React Router in `src/App.tsx`. Pages: `/`, `/speakers`, `/bars`, `/about`, `/contact`, `/sponsors`.

### TinaCMS (Content Management)

TinaCMS (self-hosted) manages structured content: speakers, venues, and FAQ. Content lives as JSON files in `content/` and is edited via the TinaCMS admin UI at `/admin/index.html`.

- **Config:** `tina/config.ts` defines three collections (speaker, venue, faq)
- **Database:** `tina/database.ts` — uses local filesystem in dev, Vercel KV (Upstash Redis) in production
- **Generated types:** `tina/__generated__/` — auto-generated client and TypeScript types (do not edit)
- **Content files:** `content/speakers/*.json`, `content/venues/*.json`, `content/faq/faq.json`
- **Data hooks:** `src/hooks/useTinaContent.ts` — `useSpeakers()`, `useVenues()`, `useFaq()` fetch content from TinaCMS GraphQL API
- **Backend API:** `api/tina/[...routes].ts` — Vercel serverless function for production TinaCMS backend
- **Vite proxy:** `/api/tina/gql` proxied to `http://localhost:4001/graphql` during dev

Components are pure presentational. `SpeakerCard` and `BarCard` receive data from TinaCMS via list components (`SpeakersList`, `BarsList`). FAQ fetches its items via `useFaq()`.

### Tailwind Theme

Custom design tokens in `tailwind.config.js`: color palette (midnight, warm-brown, amber, cream, gold), custom fonts (headline, serif, body), card shadows, and section spacing.

### Build Optimization

Vite config splits vendor into a separate chunk. React Compiler (Babel plugin) is enabled. Deployed to Vercel as a SPA (all routes rewrite to `index.html`).

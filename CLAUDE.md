# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Lectures After Dark is an event platform with a drag-and-drop visual page builder. Built with React + TypeScript + Vite, CraftJS for visual editing, Convex for the serverless backend, TinaCMS (self-hosted) for content management, and Tailwind CSS for styling.

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

- `VITE_CONVEX_URL` — Convex deployment URL
- `VITE_ADMIN_PASSWORD` — Admin login password
- `GITHUB_OWNER`, `GITHUB_REPO`, `GITHUB_BRANCH` — GitHub repo details for TinaCMS git provider
- `GITHUB_PERSONAL_ACCESS_TOKEN` — GitHub PAT for TinaCMS content commits
- `KV_REST_API_URL`, `KV_REST_API_TOKEN` — Vercel KV (Upstash Redis) for TinaCMS database
- `NEXTAUTH_SECRET` — Auth.js secret for TinaCMS production auth

## Architecture

### Two-Context System (Editor vs Public)

Every CraftJS component operates in two modes:
- **Admin (`/admin`):** CraftJS Editor is enabled — components are draggable, editable, and have settings panels.
- **Public pages (`/`, `/speakers`, `/bars`, etc.):** Editor is disabled — components render as static read-only content.

The `useEditorAwareNode` hook (`src/hooks/`) safely handles components that may exist outside a CraftJS Editor context.

### CraftJS Component Pattern

All editable components follow this structure:
1. Component uses `useNode()` to get `connect(drag(ref))` for drag-and-drop
2. A companion `*Settings` component provides the admin editing UI
3. Static `.craft` property defines default props, related settings panel, and deletion rules

### MigratingFrame (`src/components/MigratingFrame.tsx`)

Wraps CraftJS `<Frame>` to load serialized JSON layouts from Convex. Handles prop migration: merges saved props with current component defaults so schema changes propagate to existing saved pages without data loss.

### Backend (Convex)

- **Schema:** Single `pages` table with `slug` (indexed) and `layout` (serialized CraftJS JSON)
- **`convex/pages.ts`:** Queries (`getPage`, `listPages`) and mutations (`savePage`, `deletePage`, `initializePages`) for page layout CRUD
- Auto-generated types live in `convex/_generated/` — do not edit these

### Routing

React Router in `src/App.tsx`. Public pages: `/`, `/speakers`, `/bars`, `/about`, `/contact`, `/sponsors`. Admin: `/admin/login`, `/admin` (behind `ProtectedRoute`).

### Authentication

Simple password-based auth via `AuthContext` (`src/contexts/`). Checks against `VITE_ADMIN_PASSWORD`, persists to localStorage. `ProtectedRoute` guards admin routes.

### TinaCMS (Content Management)

TinaCMS (self-hosted) manages structured content: speakers, venues, and FAQ. Content lives as JSON files in `content/` and is edited via the TinaCMS admin UI at `/admin/index.html`.

- **Config:** `tina/config.ts` defines three collections (speaker, venue, faq)
- **Database:** `tina/database.ts` — uses local filesystem in dev, Vercel KV (Upstash Redis) in production
- **Generated types:** `tina/__generated__/` — auto-generated client and TypeScript types (do not edit)
- **Content files:** `content/speakers/*.json`, `content/venues/*.json`, `content/faq/faq.json`
- **Data hooks:** `src/hooks/useTinaContent.ts` — `useSpeakers()`, `useVenues()`, `useFaq()` fetch content from TinaCMS GraphQL API
- **Backend API:** `api/tina/[...routes].ts` — Vercel serverless function for production TinaCMS backend

CraftJS manages page layout; TinaCMS manages content items. `SpeakerCard` and `BarCard` are pure presentational components that receive data from TinaCMS via list components (`SpeakersList`, `BarsList`).

### Tailwind Theme

Custom design tokens in `tailwind.config.js`: color palette (midnight, warm-brown, amber, cream, gold), custom fonts (headline, serif, body), card shadows, and section spacing. Shared settings panel styles in `src/components/settings/settingsStyles.ts`.

### Build Optimization

Vite config splits vendor and convex into separate chunks. React Compiler (Babel plugin) is enabled. Deployed to Vercel as a SPA (all routes rewrite to `index.html`).

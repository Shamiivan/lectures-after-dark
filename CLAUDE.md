# CLAUDE.md

This repository has three runtime pieces:

- `src/`: React + Vite marketing site
- `worker/`: Cloudflare Worker that serves the SPA and proxies public CMS reads
- `cms/`: self-hosted Payload app

## Common Commands

```bash
pnpm install
pnpm dev
pnpm type-check
pnpm build
pnpm workers:dev
pnpm workers:deploy
pnpm cms:dev
pnpm cms:build
pnpm cms:start
pnpm cms:seed
```

## Architecture

### Frontend

- React Router lives in `src/App.tsx`
- Content hooks live in `src/hooks/useContent.ts`
- Components fetch from `/api/content/*`, not from Payload directly

### Worker

- Entry: `worker/index.ts`
- Content proxy + stale fallback logic: `worker/content.ts`
- Public content routes:
  - `/api/content/speakers`
  - `/api/content/venues`
  - `/api/content/faq`
- On upstream success, the Worker refreshes KV snapshots
- On upstream timeout/failure, the Worker serves the last cached snapshot if available

### Payload

- Payload app lives in `cms/`
- Config: `cms/src/payload.config.ts`
- Collections:
  - `users`
  - `media`
  - `speakers`
  - `venues`
- Global:
  - `site-faq`
- Seed script: `cms/src/scripts/seed.ts`

### Legacy Content Import

- Existing JSON content still lives in `content/`
- `pnpm cms:seed` imports the current venue and FAQ data into Payload
- Speaker content has schema support in Payload, but there are no legacy speaker records to import from the repo today

## Required Environment

### Worker

- `PAYLOAD_BASE_URL`
- `PAYLOAD_PUBLIC_API_KEY`
- `PAYLOAD_TIMEOUT_MS` (optional)
- `CONTENT_CACHE` KV binding

### Payload

- `DATABASE_URL`
- `PAYLOAD_SECRET`
- `PAYLOAD_PUBLIC_API_KEY`
- `PAYLOAD_PUBLIC_SERVER_URL`
- `PAYLOAD_MEDIA_BASE_URL` (recommended when using R2/CDN)

Optional R2:

- `R2_BUCKET`
- `R2_ENDPOINT`
- `R2_ACCESS_KEY_ID`
- `R2_SECRET_ACCESS_KEY`
- `R2_REGION`

## Local Dev Notes

- Run `pnpm cms:dev`, `pnpm workers:dev`, and `pnpm dev` in separate terminals
- Vite proxies `/api/content/*` to the local Worker on `127.0.0.1:8787`
- The Worker then fetches the local Payload app server-to-server

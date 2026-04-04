# Lectures After Dark

Marketing site for Lectures After Dark.

## Stack

- Frontend: React 19 + Vite
- Edge layer: Cloudflare Workers
- CMS: self-hosted Payload in [`cms/`](./cms)
- Content fallback cache: Cloudflare KV

## Local Development

Install dependencies once:

```bash
pnpm install
```

Run the stack in separate terminals:

```bash
pnpm cms:dev
pnpm workers:dev
pnpm dev
```

The frontend runs through Vite, `/api/content/*` is proxied to the local Worker, and the Worker fetches content server-to-server from the Payload app.

## CMS Setup

Copy the CMS env file and fill in real values:

```bash
cp cms/.env.example cms/.env
```

Important CMS env vars:

- `DATABASE_URL`: SQLite connection string, e.g. `file:./data/payload.db`
- `PAYLOAD_SECRET`: Payload auth/session secret
- `PAYLOAD_PUBLIC_API_KEY`: shared read key used by the Worker
- `PAYLOAD_PUBLIC_SERVER_URL`: public CMS origin, e.g. `https://cms.example.com`
- `PAYLOAD_MEDIA_BASE_URL`: public media base URL when uploads are served from R2/CDN

Optional R2 upload vars:

- `R2_BUCKET`
- `R2_ENDPOINT`
- `R2_ACCESS_KEY_ID`
- `R2_SECRET_ACCESS_KEY`
- `R2_REGION`

Seed the initial CMS content from the repo JSON files:

```bash
pnpm cms:seed
```

## Worker Setup

The Worker expects these bindings/secrets:

- `PAYLOAD_BASE_URL`: origin for the self-hosted Payload app
- `PAYLOAD_PUBLIC_API_KEY`: same shared read key configured in Payload
- `PAYLOAD_TIMEOUT_MS`: optional upstream timeout override
- `CONTENT_CACHE`: KV namespace binding used for stale fallback responses

## Commands

```bash
pnpm dev           # frontend (Vite)
pnpm build         # frontend production build
pnpm type-check    # frontend TypeScript
pnpm workers:dev   # local Cloudflare Worker
pnpm workers:deploy
pnpm cms:dev       # local Payload app
pnpm cms:build
pnpm cms:start
pnpm cms:seed
```

## Content Model

Payload currently manages:

- `speakers`
- `venues`
- `site-faq` global
- `media`

The frontend reads normalized content from:

- `/api/content/speakers`
- `/api/content/venues`
- `/api/content/faq`

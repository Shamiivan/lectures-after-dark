import { handleTinaRequest } from "./tina-handler";

interface Env {
  ASSETS: Fetcher;
  GITHUB_OWNER: string;
  GITHUB_REPO: string;
  GITHUB_BRANCH: string;
  GITHUB_PERSONAL_ACCESS_TOKEN: string;
  KV_REST_API_URL: string;
  KV_REST_API_TOKEN: string;
  NEXTAUTH_SECRET: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Expose env vars to process.env for TinaCMS / database.ts
    process.env.GITHUB_OWNER = env.GITHUB_OWNER;
    process.env.GITHUB_REPO = env.GITHUB_REPO;
    process.env.GITHUB_BRANCH = env.GITHUB_BRANCH;
    process.env.GITHUB_PERSONAL_ACCESS_TOKEN =
      env.GITHUB_PERSONAL_ACCESS_TOKEN;
    process.env.KV_REST_API_URL = env.KV_REST_API_URL;
    process.env.KV_REST_API_TOKEN = env.KV_REST_API_TOKEN;
    process.env.NEXTAUTH_SECRET = env.NEXTAUTH_SECRET;

    // Route API requests to TinaCMS handler
    if (url.pathname.startsWith("/api/tina/")) {
      return handleTinaRequest(request);
    }

    // Serve static assets
    const assetResponse = await env.ASSETS.fetch(request);

    // SPA fallback: if asset not found and path has no file extension, serve index.html
    if (
      assetResponse.status === 404 &&
      !url.pathname.includes(".") &&
      request.method === "GET"
    ) {
      const indexRequest = new Request(new URL("/index.html", request.url), {
        method: "GET",
        headers: request.headers,
      });
      return env.ASSETS.fetch(indexRequest);
    }

    return assetResponse;
  },
};

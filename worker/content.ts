interface PayloadMedia {
  url?: string | null;
}

interface PayloadSpeaker {
  id: number | string;
  name: string;
  topic?: string | null;
  bio?: string | null;
  image?: PayloadMedia | number | null;
  externalImageUrl?: string | null;
  twitter?: string | null;
  linkedin?: string | null;
  website?: string | null;
  order?: number | null;
}

interface PayloadVenue {
  id: number | string;
  name: string;
  neighborhood: string;
  description?: string | null;
  image?: PayloadMedia | number | null;
  imageUrl?: string | null;
  mapsLink?: string | null;
  order?: number | null;
}

interface PayloadFaq {
  items?: Array<{
    question: string;
    answer?: string | null;
  }> | null;
}

interface CachedSnapshot {
  data: unknown;
  fetchedAt: string;
}

export interface SpeakerData {
  id: string;
  name: string;
  topic?: string | null;
  bio?: string | null;
  image?: string | null;
  twitter?: string | null;
  linkedin?: string | null;
  website?: string | null;
  order?: number | null;
}

export interface VenueData {
  id: string;
  name: string;
  neighborhood: string;
  description?: string | null;
  imageUrl?: string | null;
  mapsLink?: string | null;
  order?: number | null;
}

export interface FaqData {
  items?: Array<{
    question: string;
    answer?: string | null;
  }> | null;
}

export interface ContentEnv {
  CONTENT_CACHE?: KVNamespace;
  PAYLOAD_BASE_URL: string;
  PAYLOAD_PUBLIC_API_KEY: string;
  PAYLOAD_TIMEOUT_MS?: string;
}

type ResourceDefinition<T> = {
  cacheKey: string;
  path: string;
  normalize: (payload: unknown, payloadBaseURL: string) => T;
};

const DEFAULT_TIMEOUT_MS = 3000;

function resolveMediaUrl(
  payloadBaseURL: string,
  media?: PayloadMedia | number | null,
  externalUrl?: string | null,
) {
  if (media && typeof media === "object" && media.url) {
    return new URL(media.url, payloadBaseURL).toString();
  }

  if (externalUrl) {
    return new URL(externalUrl, payloadBaseURL).toString();
  }

  return null;
}

function normalizeSpeakers(payload: unknown, payloadBaseURL: string): SpeakerData[] {
  const docs = ((payload as { docs?: PayloadSpeaker[] })?.docs ?? []).slice();

  return docs
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map((speaker) => ({
      id: String(speaker.id),
      name: speaker.name,
      topic: speaker.topic ?? null,
      bio: speaker.bio ?? null,
      image: resolveMediaUrl(payloadBaseURL, speaker.image, speaker.externalImageUrl),
      twitter: speaker.twitter ?? null,
      linkedin: speaker.linkedin ?? null,
      website: speaker.website ?? null,
      order: speaker.order ?? null,
    }));
}

function normalizeVenues(payload: unknown, payloadBaseURL: string): VenueData[] {
  const docs = ((payload as { docs?: PayloadVenue[] })?.docs ?? []).slice();

  return docs
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map((venue) => ({
      id: String(venue.id),
      name: venue.name,
      neighborhood: venue.neighborhood,
      description: venue.description ?? null,
      imageUrl: resolveMediaUrl(payloadBaseURL, venue.image, venue.imageUrl),
      mapsLink: venue.mapsLink ?? null,
      order: venue.order ?? null,
    }));
}

function normalizeFaq(payload: unknown): FaqData {
  const data = payload as PayloadFaq;

  return {
    items:
      data.items?.map((item) => ({
        question: item.question,
        answer: item.answer ?? null,
      })) ?? [],
  };
}

const resources = {
  "/api/content/speakers": {
    cacheKey: "content:speakers",
    path: "/api/speakers?depth=1&limit=100&sort=order",
    normalize: normalizeSpeakers,
  },
  "/api/content/venues": {
    cacheKey: "content:venues",
    path: "/api/venues?depth=1&limit=100&sort=order",
    normalize: normalizeVenues,
  },
  "/api/content/faq": {
    cacheKey: "content:faq",
    path: "/api/globals/site-faq",
    normalize: (payload) => normalizeFaq(payload),
  },
} satisfies Record<string, ResourceDefinition<unknown>>;

function jsonResponse(body: unknown, init?: ResponseInit) {
  const headers = new Headers(init?.headers);
  headers.set("content-type", "application/json; charset=utf-8");

  return new Response(JSON.stringify(body), {
    ...init,
    headers,
  });
}

async function writeSnapshot(
  env: ContentEnv,
  resource: ResourceDefinition<unknown>,
  data: unknown,
  fetchedAt: string,
) {
  if (!env.CONTENT_CACHE) {
    return;
  }

  const snapshot: CachedSnapshot = { data, fetchedAt };
  await env.CONTENT_CACHE.put(resource.cacheKey, JSON.stringify(snapshot));
}

async function readSnapshot(env: ContentEnv, resource: ResourceDefinition<unknown>) {
  if (!env.CONTENT_CACHE) {
    return null;
  }

  const cached = await env.CONTENT_CACHE.get(resource.cacheKey, "json");
  return cached as CachedSnapshot | null;
}

async function fetchFreshContent(
  env: ContentEnv,
  resource: ResourceDefinition<unknown>,
) {
  const controller = new AbortController();
  const timeoutMs = Number(env.PAYLOAD_TIMEOUT_MS ?? DEFAULT_TIMEOUT_MS);
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  const payloadBaseURL = env.PAYLOAD_BASE_URL.replace(/\/$/, "");

  try {
    const response = await fetch(new URL(resource.path, `${payloadBaseURL}/`), {
      headers: {
        accept: "application/json",
        "x-payload-public-key": env.PAYLOAD_PUBLIC_API_KEY,
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Payload upstream returned ${response.status}`);
    }

    const payload = await response.json();
    const normalized = resource.normalize(payload, payloadBaseURL);
    const fetchedAt = new Date().toISOString();

    await writeSnapshot(env, resource, normalized, fetchedAt);

    return jsonResponse(normalized, {
      headers: {
        "x-content-source": "live",
        "x-content-fetched-at": fetchedAt,
      },
    });
  } finally {
    clearTimeout(timeout);
  }
}

export async function handleContentRequest(request: Request, env: ContentEnv) {
  const pathname = new URL(request.url).pathname;
  const resource = resources[pathname as keyof typeof resources];

  if (!resource) {
    return null;
  }

  try {
    return await fetchFreshContent(env, resource);
  } catch (error) {
    const snapshot = await readSnapshot(env, resource);

    if (snapshot) {
      return jsonResponse(snapshot.data, {
        headers: {
          "x-content-source": "stale-cache",
          "x-content-fetched-at": snapshot.fetchedAt,
          "x-content-fallback-reason":
            error instanceof Error ? error.message : "payload-unreachable",
        },
      });
    }

    return jsonResponse(
      {
        error: "Payload content is unavailable and no cached fallback exists.",
      },
      { status: 503 },
    );
  }
}

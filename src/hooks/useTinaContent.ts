import { useState, useEffect } from "react";

const TINA_API_URL = "/api/tina/gql";

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

export interface FaqItem {
  question: string;
  answer?: string | null;
}

export interface FaqData {
  items?: (FaqItem | null)[] | null;
}

async function tinaQuery<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  const res = await fetch(TINA_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`TinaCMS query failed: ${res.status}`);
  const json = await res.json();
  return json.data;
}

export function useSpeakers() {
  const [speakers, setSpeakers] = useState<SpeakerData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    tinaQuery<{ speakerConnection: { edges: { node: SpeakerData }[] } }>(
      `query {
        speakerConnection {
          edges {
            node {
              id
              name
              topic
              bio
              image
              twitter
              linkedin
              website
              order
            }
          }
        }
      }`
    )
      .then((data) => {
        const nodes = data.speakerConnection.edges
          .map((edge) => edge.node)
          .filter(Boolean)
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
        setSpeakers(nodes);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { speakers, loading };
}

export function useVenues() {
  const [venues, setVenues] = useState<VenueData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    tinaQuery<{ venueConnection: { edges: { node: VenueData }[] } }>(
      `query {
        venueConnection {
          edges {
            node {
              id
              name
              neighborhood
              description
              imageUrl
              mapsLink
              order
            }
          }
        }
      }`
    )
      .then((data) => {
        const nodes = data.venueConnection.edges
          .map((edge) => edge.node)
          .filter(Boolean)
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
        setVenues(nodes);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { venues, loading };
}

export function useFaq() {
  const [faq, setFaq] = useState<FaqData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    tinaQuery<{ faq: FaqData }>(
      `query {
        faq(relativePath: "faq.json") {
          items {
            question
            answer
          }
        }
      }`
    )
      .then((data) => {
        setFaq(data.faq);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { faq, loading };
}

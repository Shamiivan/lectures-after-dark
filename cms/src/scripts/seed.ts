import path from "path";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";

import "dotenv/config";
import { getPayload } from "payload";

import config from "../payload.config";

type VenueSeed = {
  name: string;
  neighborhood: string;
  description?: string;
  imageUrl?: string;
  mapsLink?: string;
  order?: number;
};

type FaqSeed = {
  items?: Array<{
    question: string;
    answer?: string;
  }>;
};

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const repoRoot = path.resolve(dirname, "../../..");

async function readJsonFile<T>(relativePath: string): Promise<T> {
  const filePath = path.resolve(repoRoot, relativePath);
  const file = await readFile(filePath, "utf8");
  return JSON.parse(file) as T;
}

async function main() {
  const payload = await getPayload({ config });

  const venueFiles = [
    "content/venues/alchemy-and-co.json",
    "content/venues/library-bar.json",
    "content/venues/the-velvet-lounge.json",
  ];

  for (const venuePath of venueFiles) {
    const venue = await readJsonFile<VenueSeed>(venuePath);
    const existing = await payload.find({
      collection: "venues",
      limit: 1,
      pagination: false,
      where: {
        name: {
          equals: venue.name,
        },
      },
    });

    if (existing.docs[0]) {
      await payload.update({
        collection: "venues",
        id: existing.docs[0].id,
        data: venue,
      });
      continue;
    }

    await payload.create({
      collection: "venues",
      data: venue,
    });
  }

  const faq = await readJsonFile<FaqSeed>("content/faq/faq.json");
  await payload.updateGlobal({
    slug: "site-faq",
    data: {
      items: faq.items ?? [],
    },
  });

  console.log("Seeded venues and FAQ from the existing content JSON files.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

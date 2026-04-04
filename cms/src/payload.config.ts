import { s3Storage } from "@payloadcms/storage-s3";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Media } from "./collections/Media";
import { Speakers } from "./collections/Speakers";
import { Users } from "./collections/Users";
import { Venues } from "./collections/Venues";
import { SiteFaq } from "./globals/SiteFaq";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const databaseUrl =
  process.env.DATABASE_URL ??
  `file:${path.resolve(dirname, "../data/payload.db")}`;

const publicServerURL = process.env.PAYLOAD_PUBLIC_SERVER_URL;
const publicMediaURL = process.env.PAYLOAD_MEDIA_BASE_URL ?? publicServerURL;

const r2Enabled = Boolean(
  process.env.R2_BUCKET &&
    process.env.R2_ENDPOINT &&
    process.env.R2_ACCESS_KEY_ID &&
    process.env.R2_SECRET_ACCESS_KEY,
);

const plugins = r2Enabled
  ? [
      s3Storage({
        collections: {
          media: {
            disableLocalStorage: true,
            generateFileURL: ({ filename, prefix }) => {
              const pathname = [prefix, filename].filter(Boolean).join("/");
              const base = publicMediaURL?.replace(/\/$/, "");

              if (!base) {
                return pathname;
              }

              return `${base}/${pathname}`;
            },
            prefix: "media",
          },
        },
        config: {
          credentials: {
            accessKeyId: process.env.R2_ACCESS_KEY_ID ?? "",
            secretAccessKey: process.env.R2_SECRET_ACCESS_KEY ?? "",
          },
          endpoint: process.env.R2_ENDPOINT,
          forcePathStyle: true,
          region: process.env.R2_REGION ?? "auto",
        },
        bucket: process.env.R2_BUCKET ?? "",
      }),
    ]
  : [];

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Speakers, Venues],
  globals: [SiteFaq],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  serverURL: publicServerURL,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: sqliteAdapter({
    client: {
      url: databaseUrl,
    },
  }),
  sharp,
  plugins,
});

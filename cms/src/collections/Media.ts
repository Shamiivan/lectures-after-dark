import type { CollectionConfig } from "payload";

import { authenticatedOnly } from "../lib/publicReadAccess";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
    create: authenticatedOnly,
    update: authenticatedOnly,
    delete: authenticatedOnly,
  },
  admin: {
    useAsTitle: "alt",
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  upload: {
    staticDir: "media",
    adminThumbnail: "thumbnail",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        fit: "cover",
      },
    ],
    mimeTypes: ["image/*"],
  },
};

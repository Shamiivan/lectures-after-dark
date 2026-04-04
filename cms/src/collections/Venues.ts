import type { CollectionConfig } from "payload";

import { authenticatedOnly, authenticatedOrWorkerRead } from "../lib/publicReadAccess";

export const Venues: CollectionConfig = {
  slug: "venues",
  access: {
    read: authenticatedOrWorkerRead,
    create: authenticatedOnly,
    update: authenticatedOnly,
    delete: authenticatedOnly,
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "neighborhood", "order", "updatedAt"],
  },
  defaultSort: "order",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "neighborhood",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "imageUrl",
      type: "text",
      admin: {
        description: "Optional fallback for externally hosted venue images.",
      },
    },
    {
      name: "mapsLink",
      type: "text",
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
    },
  ],
};

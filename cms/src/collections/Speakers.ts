import type { CollectionConfig } from "payload";

import { authenticatedOnly, authenticatedOrWorkerRead } from "../lib/publicReadAccess";

export const Speakers: CollectionConfig = {
  slug: "speakers",
  access: {
    read: authenticatedOrWorkerRead,
    create: authenticatedOnly,
    update: authenticatedOnly,
    delete: authenticatedOnly,
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "topic", "order", "updatedAt"],
  },
  defaultSort: "order",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "topic",
      type: "text",
    },
    {
      name: "bio",
      type: "textarea",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "externalImageUrl",
      type: "text",
      admin: {
        description: "Optional fallback for externally hosted speaker photos.",
      },
    },
    {
      name: "twitter",
      type: "text",
    },
    {
      name: "linkedin",
      type: "text",
    },
    {
      name: "website",
      type: "text",
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
    },
  ],
};

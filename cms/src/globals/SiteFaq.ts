import type { GlobalConfig } from "payload";

import { authenticatedOnly, authenticatedOrWorkerRead } from "../lib/publicReadAccess";

export const SiteFaq: GlobalConfig = {
  slug: "site-faq",
  access: {
    read: authenticatedOrWorkerRead,
    update: authenticatedOnly,
  },
  fields: [
    {
      name: "items",
      type: "array",
      fields: [
        {
          name: "question",
          type: "text",
          required: true,
        },
        {
          name: "answer",
          type: "textarea",
        },
      ],
    },
  ],
};

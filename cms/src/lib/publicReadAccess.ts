import type { Access, PayloadRequest } from "payload";

function hasValidPublicReadKey(req: PayloadRequest): boolean {
  const expectedKey = process.env.PAYLOAD_PUBLIC_API_KEY;

  if (!expectedKey) {
    return false;
  }

  const headerKey =
    req.headers.get("x-payload-public-key") ??
    req.headers.get("authorization")?.replace(/^Bearer\s+/i, "");

  return headerKey === expectedKey;
}

export const authenticatedOrWorkerRead: Access = ({ req }) => {
  return Boolean(req.user) || hasValidPublicReadKey(req);
};

export const authenticatedOnly: Access = ({ req }) => {
  return Boolean(req.user);
};

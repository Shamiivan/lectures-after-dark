import { IncomingMessage, ServerResponse } from "node:http";
import { Socket } from "node:net";
import { TinaNodeBackend, LocalBackendAuthProvider } from "@tinacms/datalayer";
import { TinaAuthJSOptions, AuthJsBackendAuthProvider } from "tinacms-authjs";
import databaseClient from "../tina/database";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

const handler = TinaNodeBackend({
  authProvider: isLocal
    ? LocalBackendAuthProvider()
    : AuthJsBackendAuthProvider({
        authOptions: TinaAuthJSOptions({
          databaseClient,
          secret: process.env.NEXTAUTH_SECRET!,
        }),
      }),
  databaseClient,
});

/**
 * Converts a Web Standards Request into Node.js IncomingMessage + ServerResponse,
 * invokes the TinaNodeBackend handler, then converts the result back to a Web Response.
 */
export async function handleTinaRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);

  // Build a minimal IncomingMessage from the Web Request
  const socket = new Socket();
  const req = new IncomingMessage(socket);
  req.method = request.method;
  req.url = url.pathname + url.search;
  req.headers = Object.fromEntries(request.headers.entries());

  // Push body into the IncomingMessage readable stream
  if (request.body) {
    const bodyBytes = await request.arrayBuffer();
    req.push(Buffer.from(bodyBytes));
  }
  req.push(null); // Signal end of stream

  // Create a ServerResponse that captures output
  const res = new ServerResponse(req);

  const chunks: Buffer[] = [];
  const originalWrite = res.write.bind(res);
  const originalEnd = res.end.bind(res);

  res.write = function (chunk: any, ...args: any[]): boolean {
    if (chunk) {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }
    return originalWrite(chunk, ...args);
  };

  res.end = function (chunk?: any, ...args: any[]): ServerResponse {
    if (chunk) {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }
    return originalEnd(chunk, ...args);
  } as any;

  // Invoke the TinaCMS handler
  await new Promise<void>((resolve) => {
    res.on("finish", resolve);
    handler(req as any, res as any);
  });

  // Convert captured output to a Web Response
  const body = Buffer.concat(chunks);
  const headers = new Headers();
  const rawHeaders = res.getHeaders();
  for (const [key, value] of Object.entries(rawHeaders)) {
    if (value !== undefined) {
      headers.set(key, Array.isArray(value) ? value.join(", ") : String(value));
    }
  }

  return new Response(body.length > 0 ? body : null, {
    status: res.statusCode,
    headers,
  });
}

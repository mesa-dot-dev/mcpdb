import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";

export async function createContext(opts: FetchCreateContextFnOptions) {
  // You can access headers, cookies, and other request properties here
  // For example, extract user session
  const session = null; // Replace with actual session retrieval logic

  return { session };
}

export type Context = Awaited<ReturnType<typeof createContext>>;

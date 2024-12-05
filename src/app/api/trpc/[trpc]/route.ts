import { appRouter } from "@/server/api/index";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

export const runtime = "edge";

const handler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({ session: null }),
  });
};

export { handler as GET, handler as POST };

import { Context } from "./context";
import { initTRPC } from "@trpc/server";
import superjson from "superjson";

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

const publicProcedure = t.procedure;

export const appRouter = t.router({
  ping: publicProcedure.query(async () => "ping"),
});

export type AppRouter = typeof appRouter;

export const apiClient = t.createCallerFactory(appRouter)({ session: null });

import fastify from "fastify";
import cookie from "@fastify/cookie";
import { transactionsRoutes } from "./routes/transactions";

export const app = fastify();

// eslint-disable-next-line
app.register(cookie);

// eslint-disable-next-line @typescript-eslint/no-floating-promises
app.register(transactionsRoutes, {
  prefix: "transactions",
});

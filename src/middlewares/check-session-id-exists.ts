import { type FastifyReply, type FastifyRequest } from "fastify";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const checkSessionIdExists = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const sessionId = request.cookies.sessionId;

  if (sessionId === undefined) {
    return await reply.status(401).send({
      error: "Unathorized",
    });
  }
};

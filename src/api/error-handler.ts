import type {
  FastifyError,
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
} from 'fastify';

export type ErrorHandler = (
  this: FastifyInstance,
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply
) => Promise<void>;

export const errorHandler: ErrorHandler = async (error, _, reply) =>
  reply.status(400).send(error);

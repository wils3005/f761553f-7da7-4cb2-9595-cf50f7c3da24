import { FASTIFY_CORS_OPTIONS } from './env';
import awsLambdaFastify from '@fastify/aws-lambda';
import { errorHandler } from './error-handler';
import fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import { listTopicsHandler } from './kafkajs';
import { logger } from './pino';

export const handler = awsLambdaFastify(
  fastify({ logger })
    .register(fastifyCors, FASTIFY_CORS_OPTIONS)
    .setErrorHandler(errorHandler)
    .get('/topics', listTopicsHandler)
);

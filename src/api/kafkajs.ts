import { KAFKA_CONFIG } from './env';
import { Kafka } from 'kafkajs';
import type { RouteHandlerMethod } from 'fastify';

export const kafka = new Kafka(KAFKA_CONFIG);

export const admin = kafka.admin();

export const listTopicsHandler: RouteHandlerMethod = async (_, reply) => {
  const topics = await admin.listTopics();
  await reply.status(200).send(topics);
};

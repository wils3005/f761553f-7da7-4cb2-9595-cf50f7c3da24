import { FastifyCorsOptions } from './fastify-cors-options';
import { KafkaConfig } from './kafka-config';
import { PinoLoggerOptions } from './pino-logger-options';
import { config } from 'dotenv';
import { z } from 'zod';

config();

export const Env = z.object({
  FASTIFY_CORS_OPTIONS: z
    .string()
    .transform((s) => FastifyCorsOptions.parse(JSON.parse(s))),
  KAFKA_CONFIG: z.string().transform((s) => KafkaConfig.parse(JSON.parse(s))),
  PINO_LOGGER_OPTIONS: z
    .string()
    .transform((s) => PinoLoggerOptions.parse(JSON.parse(s))),
});

export const { FASTIFY_CORS_OPTIONS, KAFKA_CONFIG, PINO_LOGGER_OPTIONS } =
  Env.parse(process.env);

export type Env = z.infer<typeof Env>;

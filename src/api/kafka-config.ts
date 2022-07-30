import { z } from 'zod';

export const KafkaConfig = z
  .object({ brokers: z.array(z.string()) })
  .passthrough();

export type KafkaConfig = z.infer<typeof KafkaConfig>;

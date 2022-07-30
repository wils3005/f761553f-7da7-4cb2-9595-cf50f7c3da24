import { z } from 'zod';

export const FastifyCorsOptions = z
  .object({
    methods: z.array(z.string()),
    origin: z.array(z.string()),
  })
  .passthrough();

export type FastifyCorsOptions = z.infer<typeof FastifyCorsOptions>;

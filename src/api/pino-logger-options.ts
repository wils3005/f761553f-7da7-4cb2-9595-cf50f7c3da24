import { z } from 'zod';

export const PinoLoggerOptions = z.object({}).passthrough();

export type PinoLoggerOptions = z.infer<typeof PinoLoggerOptions>;

import pino, { stdTimeFunctions } from 'pino';
import { PINO_LOGGER_OPTIONS } from './env';

export const logger = pino({
  timestamp: stdTimeFunctions.isoTime,
  ...PINO_LOGGER_OPTIONS,
});

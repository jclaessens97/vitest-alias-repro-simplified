import type { LoggerOptions } from 'pino';

const loggerOptions: { [key: string]: LoggerOptions } = {
  development: {
    level: 'debug',
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
  production: {
    level: 'error',
  },
};

export default loggerOptions;


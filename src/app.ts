import path from 'path';
import fastify from 'fastify';
import { fastifyAutoload } from '@fastify/autoload';
import loggerConfig from './config/logger';

const nodeEnv = process.env.NODE_ENV || 'development';

const logger = loggerConfig[nodeEnv] ?? true;

const app = fastify({
  logger,
  maxParamLength: 5000, // to allow tRPC batch requests
});

app.register(fastifyAutoload, {
  dir: path.join(__dirname, 'plugins'),
});

app.register(fastifyAutoload, {
  dir: path.join(__dirname, 'routes'),
  options: {
    prefix: '/api',
  },
});

export default app;

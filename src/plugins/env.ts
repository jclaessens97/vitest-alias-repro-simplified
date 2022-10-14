import fp from 'fastify-plugin';
import fastifyEnv from '@fastify/env';
import type { fastifyEnvOpt } from '@fastify/env';
import type { FastifyInstance } from 'fastify';

const schema = {
  type: 'object',
  required: ['PORT'],
  properties: {
    PORT: {
      type: 'number',
      default: 3000,
    },
  },
};

const options: fastifyEnvOpt = {
  schema,
  dotenv: true,
};

export default fp<fastifyEnvOpt>(async (fastify: FastifyInstance) => {
  await fastify.register(fastifyEnv, options)
    .ready((err: Error) => {
      if (err) {
        console.error(err);
      }
      // fastify.log.debug(`\nEnvironment config:\n${JSON.stringify(fastify.config, null, 2)}`);
    });
});

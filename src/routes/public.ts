import type { FastifyPluginAsync } from 'fastify';

const publicRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get(
    '/healthz',
    (req, reply) => {
      reply.send({
        message: 'I\'m healthy',
      });
    });
};

export default publicRoutes;

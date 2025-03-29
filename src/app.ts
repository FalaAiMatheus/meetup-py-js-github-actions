import { fastifyCors } from '@fastify/cors';
import { fastify } from 'fastify';
import { env } from './env';

const app = fastify({
  logger: {
    file: 'logs.json',
  },
});

app.register(fastifyCors, {
  origin: '*',
});

void app.listen({
  port: env.API_PORT,
});

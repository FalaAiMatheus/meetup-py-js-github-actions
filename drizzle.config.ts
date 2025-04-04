import { defineConfig } from 'drizzle-kit';
import { env } from '~/env';

export default defineConfig({
  out: './src/drizzle/migrations',
  schema: './src/drizzle/schemas/*',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});

import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  // test: {
  //   deps: { inline: ['@fastify/autoload'] },
  // },

  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src/'),
    },
    // alias: [
    //   // {
    //   //   find: new RegExp('@/'),
    //   //   replacement: path.resolve(__dirname, './src'),
    //   // },
    //   {
    //     find: new RegExp('^@/(.*)$'),
    //     replacement: path.resolve(__dirname, './src/$1'),
    //   },
    // ],
  },
});

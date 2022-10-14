import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import app from '../../src/app';
import type { AppRouter } from '@/router';

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3333/trpc',
    }),
  ],
});
describe('Equipment', () => {
  let appInstance: any;

  beforeAll(async () => {
    appInstance = await app.listen({ port: 3333 });
  });

  afterAll(() => {
    appInstance.close();
  });

  it('should list all equipment', async () => {
    const allEquipment = await trpc.equipment.list.query();
    expect(allEquipment).toHaveLength(1);
  });
});

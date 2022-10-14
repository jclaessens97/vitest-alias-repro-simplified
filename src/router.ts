import { t } from './trpc';

import { equipmentRouter } from './modules/equipment/equipment.router';

export const appRouter = t.router({
  equipment: equipmentRouter,
});

export type AppRouter = typeof appRouter;

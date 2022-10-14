import { t } from '../../trpc';
import * as equipmentService from './equipment.service';

export const equipmentRouter = t.router({
  /**
   * Lists all equipment and it's compatible payloads
   */
  list: t.procedure.query(async () => {
    const equipmentList = await equipmentService.getAll();
    return equipmentList;
  }),
});

import { data } from '@/db';

export function getAllEquipment() {
  return Promise.resolve(data);
}

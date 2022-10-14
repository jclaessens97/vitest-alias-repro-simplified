import * as equipmentRepository from './equipment.repository';

export function getAll() {
  return equipmentRepository.getAllEquipment();
}

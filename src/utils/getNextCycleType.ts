import type { TaskModel } from '../models/TaskModel';

export function getNextCycleType(currentcycle: number): TaskModel['type'] {
  if (currentcycle % 8 === 0) return 'longBreakTime';
  if (currentcycle % 2 === 0) return 'shortBreakTime';
  return 'workTime';
}

export function getNextCycle(currentcycle: number) {
  return currentcycle === 0 || currentcycle === 8 ? 1 : currentcycle + 1;
}

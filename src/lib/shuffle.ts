// Fisher-Yates shuffle that also guarantees the first item of a freshly-shuffled
// round never repeats the last item shown at the end of the previous round,
// a true shuffle (no back-to-back repeats) rather than plain random.
export function reshuffle<T>(items: T[], avoidFirst?: T): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  if (avoidFirst !== undefined && arr.length > 1 && arr[0] === avoidFirst) {
    [arr[0], arr[1]] = [arr[1], arr[0]];
  }
  return arr;
}

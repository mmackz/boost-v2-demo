type ArrayLikeObject<T> = { [key: string]: T };

export function normalizeArrayLikeObject<T>(arrayLike: T[] | ArrayLikeObject<T>): T[] {
  if (Array.isArray(arrayLike)) {
    return arrayLike;
  }
  
  return Object.entries(arrayLike)
    .sort(([a], [b]) => parseInt(a) - parseInt(b))
    .map(([_, item]) => item);
}

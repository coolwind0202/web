export const excludeNull = <T>(arr: T[]): NonNullable<T>[] =>
  arr.filter((value): value is NonNullable<T> => value !== null);

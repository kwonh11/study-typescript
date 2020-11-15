// type ReturnType<T> = T extends (...args : any[]) => infer R ? R : any;
type ReturnTypeT1 = ReturnType<() => string>; // string
function f1(s: string): number {
  return s.length;
}
type ReturnTypeT2 = ReturnType<typeof f1>; // number;

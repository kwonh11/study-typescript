type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T;

type InferT0 = Unpacked<string>;
type InferT1 = Unpacked<string[]>;
type InferT2 = Unpacked<() => string>;
type InferT3 = Unpacked<Promise<string>>;
type InferT4 = Unpacked<Promise<string[]>>;
type InferT5 = Unpacked<Unpacked<Promise<string>[]>>;

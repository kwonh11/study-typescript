type StringPropertyNames<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

type StringProperties<T> = Pick<T, StringPropertyNames<T>>;
// interface Person {
//   name: string;
//   age: number;
//   nation: string;
// }
type T1 = StringPropertyNames<Person>; // "name" | "nation"
type T2 = StringProperties<Person>; // { name: string; nation: string;}

type OmitUtilType<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>;
// interface Person {
//   name: string;
//   age: number;
//   nation: string;
// }
type OmitT1 = Omit<Person, "nation" | "age">;
const p: OmitT1 = {
  name: "mike",
};

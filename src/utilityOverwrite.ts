type Overwrite<T, U> = { [P in Exclude<keyof T, keyof U>]: T[P] } & U;
// 중복되는 부분을 제거 한 뒤 U와 교차타입으로 선언되므로
// T와 U의 중복되는 부분은 결과적으로 U로 대체된다.

interface Person {
  name: string;
  age: number;
}
type OverwriteT1 = Overwrite<Person, { age: string; nation: string }>;
const overwriten: OverwriteT1 = {
  name: "mike",
  age: "23",
  nation: "korea",
};

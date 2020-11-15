interface NormalPerson {
  name: string;
  age: number;
}
interface KoreanPerson extends Person {
  liveInSeoul: boolean;
}
interface JapanesePerson extends Person {
  liveInTokyo: boolean;
}

const person1: NormalPerson = { name: "mike", age: 23 };
const person2: KoreanPerson = { name: "mike", age: 25, liveInSeoul: true };
const person3: JapanesePerson = { name: "mike", age: 27, liveInTokyo: true };
const variousTypedArr1 = [person1, person2, person3];
const variousTypedArr2 = [person2, person3];

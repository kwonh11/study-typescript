const arr1 = [10, 20, 30];
const [n1, n2, n3] = arr1;
// arr1.push('a');

const arr2 = { id: "abcd", age: 123, language: "korean" };
// const arr2: {id: string, age: number; language: string;}
const { id, age, language } = arr2;
// console.log(id === age); // 타입에러

const array = [1, 2, 3];
const object = {};
// 배열은 Array.prototype의 Symbol.iterator 메서드를 상속받는 이터러블 (순회가능한 자료구조(데이터 구조))
// 이터러블은 for...of문으로 순회가 가능하며, 스프레드 문법과 배열 디스트럭처링 할당의 대상이 된다.
console.log(Symbol.iterator);
console.log(Symbol.iterator in array);
console.log(Symbol.iterator in object);

console.log(array[Symbol.iterator]);

// 이터러블한 배열은 스프레트 문법의 대상으로 사용 가능하다.
console.log([...array]);

// 이터러블한 배열은 배열 디스트럭처링 할당의 대상이 된다.
const [one, ...other] = array;
console.log(one, ...other);

// Symbol.iterator를 구현하지 않거나, 상속받지 않는 일반 객체에서는 이터러블 프로토콜 준수한 이터러블이 아니다.
// 그래서 일반 객체의 경우 for...of로 순회할 수 없음.
// 일반 객체의 경우 for...in을 통해 프로퍼티를 반환한다.

const obj = { a : 1, b : 2};

/* for (const o of obj) {
    console.log(o);
} */

// console.log([...obj]);
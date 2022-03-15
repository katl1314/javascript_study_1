/**
 * 객체 리터럴 내부에서 사용하는 경우
 */

const obj = { x : 1, y : 2 };
// Object 얕은 복사
const copy = {...obj};

console.log('copy', copy);
console.log('obj', obj);

console.log(copy == obj);

// Object 병합
const merged = { a : 1, b : 2, ...obj};
console.log(merged);

// Object.assign(obj, obj2) 객체 병합, 변경, 복사
var copied = Object.assign({a : 1, b : 2}, {x : 11, y : 22});
console.log(copied);

var copied2 = Object.assign({}, copied);    //  객체 복사
console.log(copied2);

var copied3 = Object.assign(copied2, { x : 33, a : 11}, {z : 99});
console.log(copied3);   // 객체 프로퍼티 변경


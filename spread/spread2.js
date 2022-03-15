/**
 * 유사 배열 객체(이터러블)을 배열로 변환
 * Array.prototype을 이용한 방식
 */

const reduceCallback = (prev, cur) => prev + cur;

function sum1() {
    // arguments는 이터러블(유사 배열 객체)를 Array으로 변환한다.
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(reduceCallback, 0);
}

/**
 * 이터러블 객체의 spread 문법을 이용하여 배열 변환
 */
function sum2() {
    // arguments는 유사 배열 객체이자 이터러블임 그래서 spread연산의 사용이 가능함.
    console.log('sum1 ------- ', Symbol.iterator in arguments);
    return [...arguments].reduce(reduceCallback, 0);
}

// 함수 인자에 spread 문법 사용하기
function sum3(...args) {
    return args.reduce((prev, cur) => prev + cur, 0);
}

// Array.prototype.slice.call을 이용한 이터러블 객체의 배열 변환
console.log(sum1(10, 9, 8, 7, 6));

// 이터러블 객체의 spread 문법 사용하여 배열 변환
console.log(sum2(10, 9, 8, 7, 6));

// 함수 인자에 spread 문법 사용하기
console.log(sum3(10, 9, 8, 7, 6));

// 단 arguments와 같이 이터러블이면서 유사배열객체가 아니면 spread 문법을 사용할 수 없다.

var nonIterable = {
    0 : 1,
    1 : 2,
    2 : 3,
    length : 3
};

console.log(Symbol.iterator in nonIterable);    // false
console.log(Symbol.iterator in [1, 2, 3]);      // Array.prototype를 통해 Symbol.iterator 상속받기 때문에 true



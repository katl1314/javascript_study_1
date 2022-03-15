/**
 * Number 생성자 함수
 * new연산자를 이용하여 Number를 생성자 함수 호출 시 내부슬롯 [[NumberData]]에 0이 할당된다.
 */

const number = new Number();
console.log(number);

let numObj = new Number('10');
console.log(numObj);

// new 연산자를 이용하여 생성자 함수 호출 시 인스턴스가 반환되나, new연산자를 제외하고 생성자 함수만 호출할 경우 숫자가 반환된다.
// 명시적 형 변환
console.log('Number(\'10\') + 1', Number('10') + 1);    // 10 + 1 = 11
console.log('Number(true) + 1', Number(true) + 1);      // 1 + 1 = 2
console.log('Number(false) + 1', Number(false) + 1);    // 0 + 1 = 1

// Number 프로퍼티
console.log('Number.EPSILON', Number.EPSILON);      // 2.220446049250313e-16
console.log('Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER);               // 9007199254740991
console.log('Number.MIN_VALUE', Number.MIN_VALUE);                      // 5e-324
console.log('Number.POSITIVE_INFINITY === 5 / 0', Number.POSITIVE_INFINITY === 5 / 0);    // Infinity === Infinity
console.log('Number.NEGATIVE_INFINITY === -Infinity', Number.NEGATIVE_INFINITY === -Infinity);    // -Infinity === - Infinity
console.log('Number.NaN', Number.NaN);        // NaN

// Number 메서드
// 1. Number.isFinite(value) => boolean

// value가 유한수인지 무한수(Infinity, -Infinity)인지 체크하고 유한수이면 true, 유한수가 아니면 false를 반환한다.
console.log('Number.isFinite(1) :', Number.isFinite(1));    
console.log('Number.isFinite(undefined) :', Number.isFinite(undefined));  // undefined이면 false를...      
console.log('Number.isFinite(null) :', Number.isFinite(null));            // null이면 유한수가 아니기 때문에 false => Number.isFinite의 경우 전역 객체의 isFinite와 다른점이 암묵적으로 형변환을 하지 않는다.
console.log('isFinite(null)', isFinite(null));
console.log('Number.isFinite(5 / 0) :', Number.isFinite(5 / 0));   // 5 / 0의 결과값은 Infinity이기 때문에 false가 반환된다.
console.log('Number.isFinite(-5 / 0) :', Number.isFinite(-5 / 0));   // -5 / 0의 결과값은 -Infinity이기 때문에 false가 반환된다.

// Number.isNaN 전달받은 인자가 NaN인지 값인지 체크함. boolean으로 반환
console.log(Number.isNaN(undefined));
console.log(Number.isNaN(null));
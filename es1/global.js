/**
 * 전역객체 코드가 실행하기도 전에 자바스크립트 엔진에서 어느 객체보다도 먼저 생성되는 특수 객체, 
 * 어느 객체에도 속하지 않으며 최상위 객체이다.
 * 
 * 브라우저 환경에는 window, self, this, frames이며 노드 환경에서는 global이다.
 * globalThis는 ECMAScript2020에 도입되어, 브라우저 환경과 Node.js환경에서 (전역 객체)를 가리킴.
 */

function _selfFunc() {
    console.log('this', this === globalThis);
    console.log('global', global === globalThis);
    console.log(global.parseInt('10') + 1);
    console.log(global.parseInt('15', 16) + 5);
    console.log(global.parseFloat('14.5') + 5);

    // parseInt, parseFloat는 전역 객체의 메소드이므로, 별개로 호출 가능
    console.log(parseInt('10') + 1);
    console.log(parseInt('15', 16) + 5);
    console.log(parseFloat('14.5') + 5);

    console.log(global.parseInt === parseInt);      // true
    console.log(global.parseFloat === parseFloat);
}

_selfFunc();

/**
 * 빌트인 전역 프로퍼티는 전역 객체의 프로퍼티를 의미한다.
 * Infinity는 무한대를 나타내는 숫자값
 * NaN프로퍼티는 숫자가 아님을 나타냄.
 */
console.log(global.Infinity === Infinity);
// console.log(global.NaN === NaN);

console.log(3 / 0);             // Infinity
console.log(-3 / 0);            // -Infinity
console.log(typeof Infinity);   // number

// NaN 숫자가 아님을 표시함.
console.log(1 * 'string');      // NaN
console.log(Number('xyz'));     // NaN
console.log(typeof NaN);        // number

// undefined 값을 정의하지 않음 undefined
var foo;
console.log(foo);               // undefined
console.log(typeof foo);        // undefined
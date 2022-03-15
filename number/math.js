/**
 * 1. Math.PI (Math static 프로퍼티): 원주율 number타입으로 반환함.
 */
const PI = Math.PI ; // 3.141592653589793
console.log(parseFloat(Number(PI).toFixed(2))); // 3.14

/**
 * 2. Math.abs(value): 함수에 전달한 인수의 절대값을 구한다.
 * 절대값은 0 또는 양수이어야만 한다.
 */
console.log('abs start ---------------------');
console.log('Math.abs(-5)', Math.abs(-5));                      // 5
console.log('Math.abs(5)', Math.abs(5));                        // 5
console.log('Math.abs([])', Math.abs([]));                      // 0
console.log('Math.abs(null)', Math.abs(null));                  // 0
console.log('Math.abs("")', Math.abs(''));                      // 0
console.log('Math.abs("-5")', Math.abs('-5'));                  // 5
console.log('Math.abs(NaN)', Math.abs(NaN));                    // NaN
console.log('Math.abs({})', Math.abs({}));                      // NaN
console.log('Math.abs("abs")', Math.abs('abs'));                // NaN
console.log('Math.abs()', Math.abs());                          // NaN
console.log('Math.abs(-NaN)', Math.abs(-NaN));                  // NaN
console.log('Math.abs(Infinity)', Math.abs(Infinity));          // Infinity
console.log('Math.abs(-Infinity)', Math.abs(-Infinity));        // Infinity
console.log('Math.abs(undefined)', Math.abs(undefined));        // NaN
console.log('abs end ---------------------');
/**
 * 3. Math.round(value): 함수에 전달한 인수가 소수점 이하로 반올림한 정수를 반환한다.
 */
console.log('round start ---------------------');
console.log(Math.round(1.15));                  // 1
console.log(Math.round(3.5));                   // 4
console.log(Math.round(-3.5));                  // -3
console.log(Math.round(-1.6));                  // -1
console.log(Math.round());                      // NaN
console.log(Math.round(null));                  // 0
console.log('round end ---------------------');

/**
 * 4. Math.ceil(value): 함수에 전달된 인수가 소스점 이하로 올림한 정수를 반환한다.
 */
console.log('round start ---------------------');
console.log(Math.ceil(1.15));                   // 2
console.log(Math.ceil(-1.15));                  // -1
console.log(Math.ceil(-1.6));                   // -1
console.log(Math.ceil(1));                      // 1
console.log(Math.ceil());                       // NaN
console.log('round end ---------------------');

/**
 * 4. Math.ceil(value): 함수로 전달한 인수가 소스점 이하로 내림한 정수를 반환
 */
console.log('floor start -------------------');
console.log(Math.floor(1.6));                   // 1
console.log(Math.floor(-1.6));                  // -2
console.log(Math.floor(1.15));                  // 1
console.log(Math.floor(-1.15));                 // -2
console.log(Math.floor());                      // NaN
console.log(Math.floor(1));                      // 1
console.log('floor End -------------------');

/**
 * 5. Math.sqrt(value): 함수로 전달된 요소의 제곱근을 반환한다.
 */
console.log('sqrt start ------------------');   
console.log(Math.sqrt(2));                      // 1.414213...
console.log(Math.sqrt());                       // NaN
console.log(Math.sqrt(-1));                     // NaN
console.log(Math.sqrt(0));                      // 0
console.log('sqrt end ------------------');   

/**
 * 6. Math.random(): 임의의 난수를 반환한다. 메서드로부터 반환되는 난수는 0에서 1사이의 실수이다. 즉 0은 포함되나 1은 포함되지 않는다.
 */
console.log(Math.floor(Math.random() * 10));    // 0 부터 10미만의 난수가 반환된다.

console.log(Math.pow(10, 2));   // 100
console.log(Math.max(0, 1, 2, 5, 3));
console.log(Math.min(0, 1, 2, 5, 3));

function max(...numbers) {
    return Math.max(...numbers);
}

console.log(max(1, 2, 3, 4, 5));
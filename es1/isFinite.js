/**
 * isFinite 전달받은 인수가 정상적인 유한수인지 체크하여 boolean으로 반환함. 
 * 유한수면 : true,
 * 무한수면 : false
 */

console.log(isFinite(5));           // 5는 유한수이므로 true가 반환됨
console.log(isFinite(5 / 0));       // Infinity(무한수)이므로 false가 반환됨
console.log(isFinite(-5 / 0));      // -Infinity(무한수)이므로 false가 반환됨
console.log(isFinite(NaN));         // 값이 NaN이면 false
console.log(isFinite(undefined));   // undefined는 false가 반환됨
console.log(isFinite(2e123));       // 유한수
console.log(isFinite('10'));        // 유한수 런타임에서 강제로 형변환하기 때문에 10
console.log(isFinite('isFinite'));  // 값이 NaN이면 false
console.log(isFinite(null));        // null은 0임, 그래서 값이기 때문에 유한수
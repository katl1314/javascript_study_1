console.log(Number.isNaN(NaN));
console.log(Number.isNaN(null), isNaN(null));
console.log(Number.isNaN(undefined), isNaN(undefined)); // undefined인 경우 전역 객체의 isNaN사용시 암묵적으로 형변환이 되므로 true가 반환된다.


// Number.isSafeInteger => 해당 정적 메서드는 인수로 전달된 숫자값이 안전한 정수인지 체크한다.
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // 강제적으로 숫자를 안전한 정수가 아닌 값을 줌.

// Number.prototype.toFixed(자릿수): 소수점 자릿수를 입력받아 소숫점 n자리까지 반올림하는 메서드 => 반환값은 string형태로....
console.log((1.2222222).toFixed(2));    // 소수점 둘째자리 까지 반올림한다.
console.log((1.2572222).toFixed());    // 소수점을 입력받지 않으면 소수점이 안생김.

console.log((10).toString());        // 숫자를 10진수형태로 문자열로 반환한다.      10
console.log((10).toString(2));       // 숫자를 2진수 형태로 문자열로 반환한다.      1010
console.log((10).toString(8));       // 숫자를 8진수 형태로 문자열로 반환한다.      12
console.log((10).toString(16));       // 숫자를 16진수 형태로 문자열로 반환한다.    A
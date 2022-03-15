/**
 * isNaN은 인자가 NaN인지 체크하고 Boolean으로 반환함.
 */

console.log(isNaN(NaN));
console.log(isNaN(1 * 'name'));
console.log('isNaN(1) :', isNaN(1));                        // false, number
console.log('isNaN(0) :', isNaN(0));                        // false, number
console.log('isNaN("") :',isNaN(''));                       // false, number 0
console.log('isNaN(" ") :',isNaN(' '));                     // false, number 0
console.log('isNaN("10") :',isNaN('10'));                   // false '10' -> 10
console.log('isNaN("10.15") :',isNaN('10.15'));             // false '10.15' -> 10.15
console.log('isNaN("blabla") :',isNaN('blabla'));           // true, string

console.log('isNaN(true) :',isNaN(true));                   // false, true -> 1
console.log('isNaN(false) :',isNaN(false));                 // false, false -> 0
console.log('isNaN(null) :',isNaN(null));                   // false, null -> 0
console.log('isNaN(undefined) :',isNaN(undefined));         // true, undefined -> NaN
console.log('isNaN({}) :',isNaN({}));                       // true, {} -> NaN
console.log('isNaN(new Date()) :', isNaN(new Date()));      // false, number
console.log('isNaN(new Date().toString()) :',isNaN(new Date().toString()));  // true, string -> NaN



/**
 * parseFloat 전달받은 문자열을 부동 소수점 숫자(실수)로 변환합니다.
 * ex) parseFloat(string);  ==> number
 */

console.log(parseFloat('10'));                  // 10
console.log(parseFloat('10.15'));               // 10.15

// 공백으로 구별된 문자열은 첫 번째 문자열만 변환된다.
console.log(parseFloat('34 56 78'));            // 34    
console.log(parseFloat('40 Years'));            // 40

// 첫 번째 문자열을 실수로 변환 할 수 없으면 NaN으로 반환된다.
console.log(parseFloat('santa 42'));            // NaN

// trim기능으로 앞 뒤 공백은 무시됨.
console.log(parseFloat('  50    '));            // 50

/**
 * parseInt 는 전달받은 문자열을 정수로 변환합니다.
 * parseInt(string, ratix) => number
 * 1. string 변환하고자 할 숫자(문자열)
 * 2. 반환하고자 하는 진법 (2, 8, 16...) 기본은 10진법
 */
console.log(parseInt('10') + 5);    // 10
console.log(parseInt('10.8') + 5);  // 10, 소수점 제외
console.log(parseInt('10', 8));     // 8
console.log(parseInt('11', 8));     // 9
console.log(parseInt('f', 16));     // 15
console.log(parseInt('a', 16));     // 10

let a = 10;
console.log(a.toString(2)); // 1010
console.log(a.toString(8)); // 12
console.log(a.toString(16).toUpperCase()); // A

console.log(parseInt(a.toString(2), 2));   // 2진수 1010를 10진수로 10
console.log(parseInt(a.toString(16), 16));  // A(16진수 10) 10
console.log(parseInt(a.toString(8), 10));  // A(16진수 10) 10

console.log(parseInt('0xf'));               // 15
console.log(parseInt('f', 16));             // 15
console.log(parseInt('0o8', 8));
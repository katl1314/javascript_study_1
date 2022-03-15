/**
 * String.prototype.substring(start, end?) : 문자열 내 함수로 전달한 첫번째 인자(시작 인덱스), 두번째 인자(마지막 인덱스)의 문자열을 반환한다.
 * start의 경우 0보다 작으면 안됨.
 * start보다 end가 작으면 서로 값이 바뀐다.
 * 
 * 범위 : start ~ (end - 1)
 */

const str = 'Hello World';

console.log(str.substring(0, 5));   // 대상 문자열의 시작인덱스, 마지막인덱스 - 1에 포함하는 문자열을 반환한다.
console.log(str.substring(6));      // 두번째 인덱스가 없으면 start index부터 해당되는 문자열 반환한다.

/* Hello를 반환해보자 */
const empty = str.indexOf(' ');
console.log(str.substring(0, empty));

/* World를 반환해보자 */
console.log(str.substring(empty + 1));

/**
 * String.prototype.slice(start?, end?): 메서드 substring기능과 동일하게 동작함. 단 slice에 인수로 음수값을 설정시 동작이되며 문자열 맨 뒤부터 검색한다.
 * 원본은 변경되지 않는다.
 */
console.log('str.slice(0, empty)', str.slice(0, empty));    // Hello
console.log(str.slice(-5, -2)); // World (substring과 다른점 음수가 허용됨)
console.log(str.slice(-5));

/**
 * String.prototype.toUpperCase() : 문자열 내 소문자를 대문자로 변환함.
 */
console.log(str.toUpperCase()); // 소 -> 대

/**
 * String.prototype.toLowerCase() : 문자열 내 대문자를 소문자로 변환함.
 */
console.log(str.toLowerCase()); // 대 -> 소

/**
 * String.prototype.trim() : 문자열 양쪽의 공백을 제거한다.
 */

const str2 = ' Hello World ';
console.log('원본', str2);
console.log('trim() 후', str2.trim());

const str3 = str2.replace(/\s/g, '');   // 문자열 내 모든 공백문자를 제거함.
console.log(str3);
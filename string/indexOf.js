/**
 * String 객체의 프로퍼티
 * - String.prototype.length : 문자열의 길이를 숫자로 반환함.
 */

const str1 = new String('happy');
console.log('String.prototype.length ', str1.length);

/**
 * String 메서드
 * 1. String.prototype.indexOf(char) : 대상 문자열 내 특정 문자의 첫 번째 index를 반환, 없으면 -1을 반환한다.
 * String.prototype.indexOf(char, position) : 특정 position 후의 문자를 검색한다.
 */

console.log('p index ? ', str1.indexOf('p'));                   // 첫번째 p검색 2
console.log('p index  by positiion 3', str1.indexOf('p', 3))    // 두번째 p검색 3

const str2 = 'Hello World';

if (str2.indexOf('Hello') !== -1) {
    // 문자열 str2에 문자열 'Hello'이 있으면?
}

// String.prototype.includes(char, position?) 다음 메서드는 문자열에 전달한 문자열이 있으면 true 없으면 false를 반환한다.
// -> 반환 : true, false (boolean)
console.log(str2.includes('Hello'));    // true

console.log(str2.split(' '));

/**
 * String.prototype.search(regExp) : 대상 문자열에서 인수로 전달받은 정규 표현식과 매치되는 문자열을 검색한다.
 * -> 반환 : index값(Number)
 */

console.log(str2.search(/^Hello/)); // 함수로 전달한 정규 표현식과 대상 문자열을 검색하여 매칭되는 문자열의 index를 반환한다. 없으면 -1

/**
 * String.prototype.startsWidth(str) : 대상 문자열이 인수로 전달한 문자열로 시작하는지 검사한다. true or false
 */
console.log('str2.startsWith(\'Hello\')', str2.startsWith('Hello'));    // true
console.log('str2.startsWith(\'World\')', str2.startsWith('World'));    // false

/**
 * String.prototype.endsWidth(str) : 대상 문자열이 함수로 전달한 문자열로 끝나는지 검사한다. true or false
 */
console.log('str2.endsWith(\'Hello\')', str2.endsWith('Hello'));       // false
console.log('str2.endsWith(\'World\')', str2.endsWith('World'));       // true

const str3 = 'Apple';
 /**
  * String.prototype.charAt(index) : 대상 문자열 내 함수로 전달한 인덱스의 문자를 참조한다.
  */
/*  console.log(str2.charAt(0));
 console.log(str2.charAt(1)); */

for (let pos in str3) {
    console.log(str3.charAt(pos));  // 순차적으로 인덱스를 증가하여 문자열 내 문자를 일일히 참조한다.
}
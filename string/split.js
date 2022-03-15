/**
 * String.protype.split는 구분자를 기준으로 문자열을 나누어 배열로 저장한다.
 * 첫번째 인자가 없는 경우 전체 문자열를 단일 요소로 하는 배열을 반환한다.
 */

const str = "How are you doing?";

console.log(str.split(" "));    // [ 'How', 'are', 'you', 'doing?' ]
console.log(str.split(/\s/));   // " "와 같은 결과
console.log(str.split(""));     // ['H', 'o', 'w', ' ', 'a', 'r', ...] 문자열 내 단어 하나하나 배열로 구성됨.
console.log(str.split());       // split동작하지 않음.

/**
 * String.protype.split 메서드의 두번째 인자로 배열의 길이를 설정 할 수 있다.
 */

console.log(str.split(" ", 3));

/**
 * Array.prototype.reverse와 Array.prototype.join 메서드와 함깨 사용시 문자열을 거꾸로 바꿀 수 있음.
 */

console.log('str 문자열 거꾸로', str.split('').reverse().join(''));

const phone = /^(\d{3})-(\d{3,4})-(\d{4})$/;
console.log(phone.test('010-1234-5678'));

// 다음 문자열을 전화번호 포멧에 맞추어 변경함.
const phoneFormat = /^(\d{3})(\d{3,4})(\d{4})$/;
const sample = '01012345678';
console.log(sample.replace(phoneFormat, '$1-$2-$3'));

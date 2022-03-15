/**
 * RegExp : 정규 표현식
 * Regular Expression은 일정한 패턴을 가진 문자열의 집합을 표현하기 위한 사용되는 형식이다.
 * 문자열을 대상으로 패턴 매칭 기능이 존재하다. 
 * 패턴 매칭 기능은 문자열이 있는지 검색하거나 추출,치환할 수 있는 기능을 의미함.
 * 정규표현식은 리터럴 생성 방식, 생성자 함수 호출 방식으로 생성 가능함.
 */

// 사용자로부터 전달받은 전화번호
const phone = '010-1234-5678';

// 정규 표현식 리터럴로 휴대폰 전화번호 패턴을 정의한다.
const pattern = /^(\d{3})-(\d{4})-(\d{4})$/;

// 전달받은 전화번호가 다음 패턴을 매칭 => return boolean
console.log(pattern.test(phone));

const target = 'Is this all there is?';
// console.log(target.match(/is/i));
// flag
// - i: 대소문자를 구분하지 않는다.
// test메서드의 경우 boolean타입으로 반환한다. 패턴 검사
console.log((/is/i).test(target));

/**
 * 정규 표현식의 생성
 * /[regExp]/[flag]
 * - /(처음): 시작 기호
 * - regExp: 정규 표현식 패턴
 * - /(끝): 마지막 기호
 * - flag: 플래그(옵션)
 */

// 정규 표현식을 생성자 함수로 생성함.
const regExp = new RegExp(/is/i);
console.log(regExp.test(target));


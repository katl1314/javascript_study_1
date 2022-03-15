/**
 * 정규 표현식 : 일정한 패턴을 가진 문자열의 집합을 표현하기 위함.
 */

const target = 'Is this all there is?';

const regExp = new RegExp(/is/, 'ig');  // flag가 i가 포함되면 대소문자 구분하지 않고, g를 쓰면 전역 검색을 하겠다!

// 특정 문자열 검색
console.log(target.match(regExp));      // 전역 검색하여 해당되는 항목을 모두 배열로 반환.
console.log(regExp.test(target));       // 문자열 내 패털이랑 매칭되면 boolean으로 반환 (true)

// 임의의 문자열 검색
// 패턴을 '/.../g'으로 설정하면 임의의 문자열을 검색한다.
console.log(target.match(/.../g));

// 반복 검색
const repeatStr = 'A AA B BB Ab Ba AAA';
const repeatPattern = /A{1,2}/g; // 문자열 내 A가 1개 또는 2개인 문자열을 전역 검색한다.
// {m,n}은 앞선 패턴이 최소 m번, 최대 n번 반복되는 문자열을 의미함. 콤마 뒤에 공백이 있음 정상적으로 동작하지 않음.
console.log(repeatStr.match(repeatPattern));

const repeatPattern2 = /A{2,}/g;    // {n,}은 최소 n번 이상 반복되는 문자열을 반환한다.
console.log(repeatStr.match(repeatPattern2));   // 문자열 내 A가 2번 이상 반복되는 문자열을 전역 검색한다.

const repeatPattern3 = /B{2,}/g;
console.log(repeatStr.match(repeatPattern3));
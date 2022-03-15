/**
 * 정규 표현식
 * - (+)는 패턴이 최소 한번 이상 반복되는 문자열을 의미한다.
 */

const target = 'A AA B BB Aa Bb AAA';
const pattern = /A+/g;

// A가 한번 이상 반복되는 문자열을 전역 검색한다.
console.log(target.match(pattern));

const colorTarget = 'color colour colro';
// ?는 앞선 패턴이 최대 한번(0번 포함) 이상 반복되는 문자열을 의미한다. 즉 {0,1}을 의미한다.
// 다음 예제의 경우 /colou?r/는 colo다음 u가 한번 이상(0번 포함)이상 반복되고, r이 이어지는 문자열을 검색한다.
const colorPattern = /colou?r/g;
console.log('colorPattern', colorTarget.match(colorPattern));

/**
 * |은 or을 의미한다.
 * 다음 예제의 /A|B/는 'A' 또는 'B'를 의미한다.
 */
const orPattern = /A|B/g;
console.log('orPattern', target.match(orPattern));   // 문자열 내 'A'와 'B'를 전역 검색한다.

const regExp = /A+|B+/g;
// 대체 /[AB]+/g
console.log('regExp', target.match(regExp));      // 분해되지 않은 단어 레벨로 검색하기 위해 +를 함깨 사용한다.

// 위 /A+|B+/g를 /[AB]+/g으로 대체한다.
const regExp2 = /[AB]+/g;
console.log('regExp2', target.match(regExp2));

const target2 = 'AA BB 123 45';
const pattern2 = /[0-9]+/g;
console.log('pattern2', target2.match(pattern2));  // 문자열내 0 ~ 9 반복되는 숫자를 전역 검색

const target3 = 'AA BB 123,45';
const pattern3 = /[0-9,]+/g;
console.log('pattern3', target3.match(pattern3)); // 0에서 9 또는 ,(쉼표)가 반복되는 문자열을 전역 검색

// 범위를 지정하려면 -(dash)를 사용하자!
const target4 = 'A AA BB ZZ Aa Bb';
const pattern4 = /[A-Z]+/g;
console.log('pattern4', target4.match(pattern4));   // 소문자를 전역 검색에서 제외한다.

const target5 = 'A AA BB ZZ Aa Bb';
const pattern5 = /[A-Za-z]+/g;
console.log(target5.match(pattern5));   // 소문자와 대문자 구분하지 않고 연속되는 문자열을 전역 검색한다.
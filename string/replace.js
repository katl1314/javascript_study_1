/**
 * String.prototype.replace(searchValue, replaceValue)  : 대상 문자열내 변경할 문자 또는 정규식으로 검색하여 있는 경우 변경한다.
 * 만약 동일한 문자열이 있을 경우 첫번째 문자열만 변경된다.
 * 원본값은 변경되지 않는다.
 */

const str = 'Hello hello World';

const replaceStr1 = str.replace('Hello', 'Bye');
console.log('str ------ ', str);                    // 원본값은 변경되지 않음.
console.log('replaceStr1 ------ ', replaceStr1);    // 검색한 항목을 Bye으로 변경함.

// 검색한 항목이 동일한 요소가 1개 이상일 때 모두 변경할 경우 정규식을 이용하자
console.log(str.replace(/Hello/gi, 'Bye'));

console.log(str.replace('Hello', '<strong>$&</strong>'));   // 특수한 교체 패턴을 사용할 수 있다 => $& 검색한 문자열
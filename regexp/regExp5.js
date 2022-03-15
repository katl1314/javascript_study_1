const target = 'AA BB 12,345';

/**
 * \d는 숫자를 의미한다. 즉 \d는 [0-9]와 같다.
 * 반대로 \D는 숫자를 제외한 요소를 반환한다.
 */

let regExp = /[\d,]+/g;         // '/[0-9,]+/g'와 같음.
console.log(target.match(regExp));

let regExp2 = /[\D,]+/g;        // 숫자를 제외한 나머지 검색한다.
console.log(target.match(regExp2));


/**
 * \w는 알파벳, 숫자, 언더스코어를 의미한다. 즉 \w는 [0-9a-zA-Z_]와 같다.
 * 반대로 \W는 반대로 동작한다.
 */

/**
 * Not검색
 * - [...]내 ^를 의미한다, ^는 Not을 의미하므로 주의해야함.
 */

const regExp3 = /[^0-9]+/g;  // 숫자를 제외한 나머지를 검색한다.
console.log(target.match(regExp3));

/**
 * 시작 위치로 검색 
 * [...]밖의 ^는 시작 위치를 의미한다.
 */

const uri = 'https://poiemaweb.com';
// 시작 위치를 기준으로 https를 검색
console.log(uri.match(/^https/));

/**
 * 마지막 위치로 검색
 * $는 마지막 위치를 의미한다.
 */
console.log(uri.match(/com$/));
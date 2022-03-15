/**
 * Date.prototype.getTime() : 1970-01-01 : 00:00:00을 기점의로 Date객체의 시간까지의 밀리세컨드를 반환한다.
 */

const date = new Date();
console.log('Date.prototype.getTime()', date.getTime());

/**
 * Date.prototype.setTime() : Date객체에 1970-01-01 : 00:00:00을 기점으로 경과된 밀리세컨드를 설정한다.
 */
date.setTime(date.getTime() - 89400000);
console.log(date);

console.log(date.getTimezoneOffset() / 60);     // UTC의 Date객체와 로컬 시간과의 차이를 분 단위로 표시함 60을 나누면 KST 즉 -9시간.

/**
 * Date.prototype.toDateString() : 사람이 읽을 수 있는 형식의 문자열로 Date객체의 날짜를 반환합니다.
 */
console.log('date.toDateString()', date.toDateString());    // Sun Jan 30 2022                      

/**
 *  
 *  */  
console.log('date.toString()', date.toString());            // Sun Jan 30 2022 18:58:24 GMT+0900 (대한민국 표준시)

/**
 * Date.prototype.toTimeString() : 사람이 읽을 수 있는 형식의 문자여로 Date객체의 시간을 반환합니다.
 */
console.log('date.toTimeString()', date.toTimeString());

/**
 * Date.prototype.toISOString() : ISO 8601형식으로 Date객체의 날짜와 시간을 반환한다.
 */
console.log('date.toISOString()', date.toISOString());


/**
 * 인수로 전달한 로컬을 기준으로 Date객체의 날짜와 시간을 표현한 문자열을 반환한다.
 */
const date2 = new Date();
console.log(date2.toLocaleString('ko-KR'));

console.log(date2.toLocaleTimeString('ko-KR'));
console.log(date2.toLocaleDateString('ko-KR'));
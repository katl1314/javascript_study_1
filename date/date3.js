const now = new Date();

now.setFullYear(2021);                                          // 년도를 설정한다. 추가적으로 월, 일도 설정이 가능하다.
now.setMonth(0);                                                // 월을 설정한다. (0 ~ 11) 추가적으로 일도 설정이 가능하다. 0 + 1 => 현재 1월을 의미함.
now.setDate(31);                                                // 일을 설정한다.
console.log('Date.prototype.getFullYear()', now.getFullYear()); // 년도를 반환한다.
console.log('Date.prototype.getMonth()', now.getMonth() + 1);   // 월을 반환한다. (0 ~ 11)
console.log('Date.prototype.getDate()', now.getDate());         // 일을 반환한다. (1 ~ 31)
/**
 * Date.prototype.getDay() : 요일을 반환한다.
 * 0 : 일요일
 * 1 : 월요일
 * 2 : 화요일
 * 3 : 수요일
 * 4 : 목요일
 * 5 : 금요일
 * 6 : 토요일
 */
// Date.prototype.setDay()의 경우 지원하지 않음. 일은 반드시 setDate로만 설정할 것
// console.log(now.getDay());  // 2021월 1월 31일은 일요일이므로 0이 반환됨.

const weeks = ['일', '월', '화', '수', '목', '금', '토'];

console.log(`${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${weeks[now.getDay()]}요일`);

console.log('Before setHours, setMinutes, setSeconds, setMilliseconds');
/**
 * Date.prototype.getHours(): Date 객체의 시간을 0 ~ 23을 나타내는 정수를 반환한다.
 */

console.log('Date.prototype.getHours()', now.getHours());

/**
 * Date.prototype.getMinutes(): Date객체의 분을 0 ~ 59를 나타내는 정수를 반환한다.
 */
console.log('Date.prototype.getMinutes()', now.getMinutes());

/**
 * Date.prototype.setSeconds() : Date객체의 초를 0 ~ 59를 나타내는 정수를 반환한다.
 */
console.log('Date.prototype.getSeconds()', now.getSeconds());

/**
 * Date.prototype.getMilliseconds() : Date객체의 밀리세컨드(0 ~ 999)를 나타내는 정수를 반환한다.
 */
console.log('Date.prototype.getMilliseconds()', now.getMilliseconds());

console.log('After setHours, setMinutes, setSeconds, setMilliseconds');

/**
 * Date.prototype.setHours(hours, minute?, seconds?, milliseconds?); Date객체에 시간(0 ~ 23)을 설정한다. 추가적으로 분, 초, 밀리세컨드도 설정 가능하다.
 */

now.setHours(22);


/**
 * Date.prototype.setMinutes(minutes, seconds?, milliseconds?): Date객체에 분(0 ~ 59)을 설정한다. 추가적으로 초, 밀리초를 설정 할 수 있다.
 */
now.setMinutes(59);

/**
 * Date.prototype.setSeconds(seconds?, milliseconds): Date객체에 초(0~59)를 설정한다. 추가적으로 밀리초를 설정 할 수 있다.
 */
now.setSeconds(30);

/**
 * Date.prototype.setMilliseconds(millisecond): Date객체에 밀리초(0 ~ 999)를 설정한다.
 */
now.setMilliseconds(555);
console.log('now.getHours()', now.getHours());
console.log('now.getMinutes()', now.getMinutes());
console.log('now.getSeconds()', now.getSeconds());
console.log('now.getMilliseconds()', now.getMilliseconds());

console.log(new Date(now));
const { Console } = require("console");

// new Date(year, month, day, hour, minute, second, milliseconds)
const date = new Date(2010, 1, 10, 12, 30, 30);
console.log('date.getFullYear()', date.getFullYear());
console.log('date.getMonth()', date.getMonth());
console.log('date.getDate()', date.getDate());
console.log('date.getHours()', date.getHours());
console.log('date.getMinutes()', date.getMinutes());
console.log('date.getSeconds()', date.getSeconds());

console.log(Date.now(), new Date(Date.now()));      // 금일의 밀리초 반환
console.log(Date.parse('2010/02/10'));

const milliseconds = Date.parse('2010/02/10 19:10:10');      // 1970년 1월 1일 00:00:00(UTC)을 기점으로 전달된 지정 시간까지의 밀리초를 숫자로 반환
console.log(new Date(milliseconds));

console.log(Date.UTC(2010, 10));                            // 1970년 1월 1일 00:00:00(UTC)을 기점으로 전달된 지정 시간까지 밀리초 숫자를 반환한다.

/**
 * 표준 빌트인 객체인 Date는 날짜와 시간(년, 월, 일, 시, 분, 초, 밀리초)을 위한 메서드를 제공하는 빌드인 객체이면서 생성자 함수이다.
 * UTC(협정 세계시)는 국제 표준시를 의미하는데 그리니치 평균시로 불리기도 함.
 * 기술적인 표기에서는 UTC라고 함.
 * KST(한국 표준시)는 UTC애서 9시간을 더한 시간이다.
 */
// date객체 반환
console.log('new Date()', new Date());

// Date생성자 함수를 생성자 함수로 호출하지 않을 경우 Date객체를 반환하지 않고, 시간, 날짜 정보를 알려주는 문자열로 반환된다.
console.log('Date()', Date());        

// new Date(milliseconds)
// 함수에 milliseconds를 전달하면 1970년 1월 1일 기준으로 전달한 밀리초만큼 경과된 Date객체를 반환한다.
const date = new Date(0);   // 1970-01-01 00:00:00
console.log('new Date(0)', date);

// 1 day = 86400000ms
const tenDay = 86400000 * 10
console.log('new Date(86400000 * 10)', new Date(tenDay));

// new Date(dateString)
// Date 생성자 함수에 날짜와 시간을 나타내는 문자열을 인수로 전달하면, 지정된 날짜와 시간을 나타내는 Date객체를 반환한다.
// 인수로 전달한 문자열은 Date.parse메서드에 의해 해석이 가능해야 함.
console.log('new Date(\'May 26, 2020 10:50:30\')', new Date('May 26, 2020 10:50:30'));     // 2020-05-26T01:50:30.000Z
console.log('new Date(\'2022/12/05 09:20:10\')', new Date('2022/12/05 09:20:10'));       // 2022-12-05T00:20:10.000Z

console.log('Date.now()', Date.now());                            // 금일을 millisecond로 반환된다.

console.log('new Date(Date.now())', new Date(Date.now()));   // Date생성자 함수에 금일 milliseconds를 인수로 전달하여 금일 Date의 객체를 반환한다.

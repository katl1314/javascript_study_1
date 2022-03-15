/**
 * String.prototype.repeat(count) : 대상 문자열을 count만큼 반복한다.
 * count가 없거나 0이면 반복하지 않는다.
 * count가 소수(1.5)이면 강제 내림값으로 변경함 1.5 -> 1
 * count는 음수가 올 수 없다.
 */
const str = 'abc';
console.log('str.repeat()', str.repeat());          // str을 반복하지 않는다.
console.log('str.repeat(0)', str.repeat(0));        // str을 반복하지 않는다.
console.log('str.repeat(1)', str.repeat(1));        // str을 1번 반복한다.
console.log('str.repeat(2)', str.repeat(2));        // str을 2번 반복한다.
console.log('str.repeat(2.6)', str.repeat(2.6));    // str을 2번 반복한다.
// console.log('str.repeat(-2)', str.repeat(-2));      // RangeError: Invalid count value ( 음수 검지검지)
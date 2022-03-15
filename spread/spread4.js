/**
 * 객체 병합 : 프로퍼티가 중복되는 경우 뒤에 위치한 프로퍼티가 우선으로 갖는다.
 */
const merge1 = {...{x : 1, y : 2}, ...{y : 10, z : 3}};
console.log(merge1);
/**
 * 객체 프로퍼티 변경
 */
const change1 = {...{x : 1, y : 2}, y : 100};
console.log(change1);
/**
 * 프로퍼티 추가
 */
const add = {...{x : 1, y : 2}, z : 0};
console.log(add);
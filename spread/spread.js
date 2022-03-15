/**
 * ES6에 도입된 스프레드 문법의 경우 하나로 뭉쳐 있는 여러 값을 하나의 개별적인 값을 가진 목록을 만든다.
 */

const arrays = [1, 2, 3, 4, 5];

console.log('...arrays', ...arrays);
/**
 * Map은 key와 value의 쌍으로 구성된 데이터로, 이터러블한 객체이며, 스프레드 문법, for...of가 가능하다.
 */
const maps = new Map();
maps.set('a', 'a1');
maps.set('b', 'b1');
maps.set('c', 'c1');

console.log('maps', maps);          
console.log('...maps', ...maps);    // Map도 spread 연산이 가능하다. [[key, value]]

// Set의 스프레드 문법 적용 : Set은 이터러블한 객체이므로 스프레드 문법, for...of가 가능하다.

const sets = new Set(arrays);

console.log('sets', sets);              // [1, 2, 3, 4, 5]
console.log('...sets', ...sets);        // 1 2 3 4 5

console.log('... Hello', ...'Hello');   // 'H' 'e' 'l' 'l' 'o'

const sets2 = new Set('strings');

console.log(sets2, ...sets2);

/**
 * 배열의 요소 중 최댓값, 최솟값을 구할 때 함수에 배열이 아닌 스프레드 문법이 적용된 배열을 전달한다.
 * ex)
 * Math.max(1, 2, 3, 4, 5) => 5
 * Math.max([1, 2, 3, 4, 5]) => NaN
 */

console.log('max ---- ', Math.max(...arrays));
console.log('min ---- ', Math.min(...arrays));

/**
 * 다만 함수의 간접호출로 사용은 가능하다.
 */
console.log(Math.max.apply(null, arrays)); // apply함수의 두번째 인자는 배열이 들어간다.

// 함수 호출시 전달하는 여러값을 배열로 변환할 수도 있다.
function foo (...args) {
    console.log(args);  // [1, 2, 3, 4, 5]
}

foo(1, 2, 3, 4, 5);

const arrays2 = ['smart', false];
// es5방식의 concat
console.log(arrays.concat(arrays2));
console.log([...arrays, ...arrays2]);   // spread 문법은 배열의 concat기능도 구현이 가능하다.

// splice메서드에도 세번째 연산자로 ...(스프레드)문법을 사용하면 가독성있게 표시 가능
// 스프레드 문법 사용하지 않으면 배열 통째로 들어감.
const arr1 = [1, 4];
const arr2 = [2, 3];

arr1.splice(1, 0, ...arr2);
console.log(arr1);
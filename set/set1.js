/**
 * Set
 * - 중복되지 않는 유일한 값의 집합 
 * - 동일한 값을 중복하여 포함할 수 없다.
 * - 요소 순서에 의미가 없음
 * - 인덱스로 요소를 접근할 수 없음.
 */

// Set 객체의 생성

const set = new Set(); // 빈 Set 객체가 생성됨.
console.log('set', set);                           // Set {}

// Set함수에 리터러블한 값을 전달받는다. 만약 리터러블 값 중 중복되는 요소는 제거된다.

const iterable = [1, 2, 2, 3, 3, 4, 5];

const set2 = new Set(iterable); // 중복 요소 2, 3은 한개만 표시됨.
console.log('set2', set2);                          // Set { 1, 2, 3, 4, 5 }

// 문자열 또한 이터러블한 객체이기 때문에 사용이 가능함.
const set3 = new Set('happy');              
console.log('set3', set3);                          // Set { 'h', 'a', 'p', 'y' }

// Set객체의 요소 개수 확인 : Set.prototype.size
console.log('set3.size', set3.size);                     // 4

// Set객체의 요소 추가 :  Set.prototype.add (method)
// 중복요소의 추가는 허용하지 않음.
// 메서드 체이닝을 이용하여 연속적으로 추가가 허용됨.
set2.add(Symbol.for('i1')).add(Symbol('li'));

console.log('after add ------- set2 ', set2, set2.size);

// Set객체는 자바스크립트의 모든 값을 요소로 저장할 수 있다.
const set4 = new Set();
set4.add(10)
    .add(true)
    .add(null)
    .add(NaN)
    .add(undefined)
    .add(Infinity)
    .add({})
    .add('true')
    .add(() => {})
    .add([1, 2, 3]);

console.log(set4);
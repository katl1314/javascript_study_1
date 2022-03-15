const array = [1, 2, 3];

const iterator = array[Symbol.iterator]();
/**
 * next메서드는 이터러블을 순회하며 순회 결과를 나타내는 이터레이터 리절트 객체를 반환.
 * 이터러블 리절트 객체의 경우 value와 done을 프로퍼티로 가진 객체이다.
 * 순회가 종료되면 done은 false가 반환된다.
 * value : 현재 이터러블을 순회하면서 갖는 값
 * done : 이터러블의 순회 완료 여부를 갖는다.
 */
/* console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); */

/**
 * 이터러블의 Symbol.iterator 메서드가 반환하는 이터레이터는 next메서드를 갖는다.
 */
console.log("'next' in iterator : ", 'next' in iterator);   // iterator에 next메서드가 있는지 여부 체크

while (true) {
    const {value, done} = iterator.next();
    if (done) {
        break;
    }
    console.log(`value : ${value}`);
}

/**
 * 이터러블한 객체 (배열, 유사 배열 객체, 문자열 Set, Map, ...)이면 for...of를 사용가능하다.
 * 즉 Symbol.Iterator를 상속받는 경우만 해당.
 * 
 * 일반 객체는 for...of를 사용하지 않고 for...in을 사용한다.
 * 
 * for (변수 of 이터러블)
 * for (변수 in 객체)
 */

for (const item of [1, 2, 3]) {
    console.log(`item : ${item}`);
}
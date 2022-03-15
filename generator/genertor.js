/**
 * Generator(제너레이터): 코드 블록의 실행을 중지했다가, 필요 시점에 재개할 수 있는 특수 함수이다.
 * 키워드는 function*를 사용하여 제너레이터 함수를 선언한다.
 * 제너레이터는 함수 호출자에게 실행 제어권 양도가 가능함. yield
 * 제너레이터 함수는 함수 호출자와 함수의 상태를 주고받는다.
 * 제너레이터 함수를 호출시 제너레이터 객체를 반환한다.
 * 
 * !! 제너레이터 함수 선언시 화살표 함수로 정의할 수 없다.
 * new 연산자와 함깨 생성자 함수로 정의할 수 없다.
 */

// 제너레이터 함수 선언문
// generator함수를 호출하면 이터러블한 객체 generator객체가 반환되며
// Symbol.iterator를 프로토타입 체인을 이용하여 next메서드를 호출할 수 있다.
function* generator1() {
    try {
        yield 1;
        yield 2;
        yield 3;
    } catch(e) {
        throw new Error(e);
    }
    
}

const myGenerator = generator1();
/**
 * Generator.prototype.next()     : 프로퍼티 value(값)과 done(순환 완료 여부)를 가진 객체를 반환한다.
 * Generator.prototype.throw()    : 인자로 전달받은 값을 value의 프로퍼티로, true를 done 프로퍼티 값으로 갖는 이터레이터 리절트 객체 반환
 * Generator.prototype.return()   : 인수로 전달받은 에러를 발생, value를 undefined, done을 true으로 갖는 이터레이터 리절트 객체 반환
 */
// 제너레이터 객체는 이터러블한 객체이다.
// 이터러블은 Symbol.iterator를 실제로 구현하거나, 프로토타입 체인을 이용하여 상속받은 객체이다.
console.log(Symbol.iterator in myGenerator);   // true
console.log('next' in myGenerator);            // true
console.log(myGenerator.next());                // { value: 1, done: false }
console.log(myGenerator.next());                // { value: 2, done: false }
// console.log(myGenerator.return('return'));      // { value: 'return', done: true }
console.log(myGenerator.throw('제너레이터 에러'));
console.log(myGenerator.next());                // { value: 3, done: false }
console.log(myGenerator.next());                // { value: undefined, done: true }

/* // 제너레이터 함수 표현식
const generator = function* (){
    yield 2;    // generator함수는 함수 호출자에 실행 제어권을 양도한다.
}

console.log(generator());   // 제너레이터 함수 호출 시 제너레이터 객체를 반환함.

// 객체 내 제너레이터 함수
const obj = {
    * generator() {
        yield 3;
    }
}

// 클래스 내 제너레이터 함수
class MyGenerator {
    * myGenerator() {

    }
} */
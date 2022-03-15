/**
 *  화살표 함수의 몸체를 {}으로 감싸지 않으면 return 값을 의미함.
 *  변수 선언하기 위해서는 {}(중괄호)를 이용하여 감싼다.
 */

const power = x => x ** 2;   // x^2
console.log(power(3));

// 화살표 함수를 이용해서 객체를 반환하고자 할 경우 ()(소괄호)를 이용해야한다.
// ex) const makeObject = () => ({key1: property1, key2: property2, ...})
// == const makeObject = () => { return {key1: property1, key2: property2, ...}; }
// 만약 소괄호가 없으면 함수 몸통으로 인식한다.
const makeObj = (name, age) => ({name, age});
console.log(makeObj('Jake', 30));   // {name : 'Jake', age : 30}

/**
 * 함수 몸체가 여러 행의 문장으로 구성된다면 중괄호를 이용한다.
 */

// 즉시 실행 함수
const sum = ((a, b) => {
    const result = a + b;
    return result;
})(10, 20);

console.log(sum);

// 화살표 함수 몸통에 객체를 생성 (메소드 포함된) 그리고 객체를 반환하는 즉시 실행 함수
const person = (name => 
    (
        {
            // ES6형태의 메서드 생성
            sayHi() {
                return `Hi? My name is ${name}`;
            }
        }
    )
)('Lee');

console.log(person.sayHi());

const resultMap = [1, 2, 3].map(v => v ** 2); // [1, 4, 9];
console.log('resultMap : ', resultMap);

/**
 * 일반 함수와 화살표 함수의 차이
 * - 화살표 함수는 인스턴스를 생성할 수 없는 non-constructor이다.
 * 인스턴스를 생성할 수 없으면, prototype프로퍼티가 없고, 프로토타입도 생성하지 않는다.
 */
 const foo = () => {};
//  console.log(new foo());

// - 일반 함수는 중복된 매개변수를 받을 수 있으나, 화살표 함수는 받을 수 없다.
(function sum2(a, a) {
    console.log(a + a); // 중복된 매개변수는 마지막 값만 참조함.
})(10, 20); // 40

// 화살표 함수
// const sum3 = ((a, a) => a + a)(10, 20);  // SyntaxError발생함.

/*
    화살표 함수에는 super, arguments, this, new.target 바인딩을 갖지 않는다.
    스코프 체인을 통해 상위 스코프의 super, arguments, this, new.target을 참조한다.
*/



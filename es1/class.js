/**
 * 자바스크립트는 프로토타입 기반 객체지향언어로, 강력한 객체 지향 프로그래밍 능력을 가지고 있다.
 * 아래 소스는 프로토타입을 이용하여 객체지향을 구현하였다.
 * 다만 타 객체지향 프로그래밍을 한 사람으로는 이러한 프로토타입이 벽을 느낌.
 * 그래서 ES6부터 class를 제공하여 prototype과 class를 모두 사용가능함.
 */

// 생성자 함수
/* var Person = (function() {
    function Person(name) {
        this.name = name;
    }

    // 프로토타입 메서드
    Person.prototype.sayHi = function() {
        console.log(`Hi My name is ${this.name}`);
    }

    // 정적 메서드
    Person.sayHello = function() {
        console.log('Hello');
    }
    return Person;
})();

const man = new Person('Lee');
man.sayHi();
console.log(man, Person.prototype); */

// 클래스 정의
// class Car {} // 클래스 선언문

// 익명 클래스 표현식
// const Car = class {};

// 기명 클래스 표현식
// const Car = class MyClass {};

// 클래스 선언문
class Person {
    constructor(name) {
        // 인스턴스 생성 및 초기화
        this.name = name;   // public
    }
    // 프로토타입 메서드
    sayHi() {
        console.log(`My name is ${this.name}`);
    }

    // 정적 메서드 static
    static sayHello() {
        console.log(`Hello`);
    }
}

const lee = new Person('Lee');
console.log(lee);       // static, 프로토타입 메서드는 없다!

lee.sayHi();            // 프로토타입 메서드 호출
// lee.sayHello();      // static메서드는 인스턴스로 호출 불가능
Person.sayHello();      // static메서드 호출

/**
 * 자바스크립트에는 접근 제어자(public, private, protected...)가 없으며
 * 프로퍼티와 메서드는 기본적으로 공개되어 있다.
 * 만약 private하게 사용하고자 하면 let, const를 이용하여 대체한다.
 */

/* function Person(name, age) {
    // property
    this.name = name;       // public
    
    // local variable
    let _age = age;         // private

    Person.prototype.sayHello = function() {
        console.log(`Hi My name is ${this.name} am ${_age} old.`);
    }
} */


// 즉시 실행 함수를 이용하여 생성자 함수 호출하기
const Person = (function () {
    let _age = 0;   // private 변수

    // 생성자 함수
    function Person(name, age) {
        // 즉시 실행 함수가 종료된 이후 호출되는 생성자 함수
        this.name = name;   // public 변수
        _age = age;
    }

    // 프로토타입 메서드 선언
    // 즉시 실행 함수가 종료된 이후 호출된다.
    Person.prototype.sayHello = function() {
        console.log(`Hi My name is ${this.name} am ${_age} old.`);
    }

    // 생성자 함수 반환
    return Person;
})();
// const man = new Person('Lee', 30);
// man.sayHello();
// console.log(man, Person);   // 외부에서는 Person의 지역 변수 _age에 접근 할 수 없다. 
// // 인스턴스로 접근하고자 하면 함수내 프로퍼티를 생성하는 수 밖에...

const man = new Person('Lee', 30);  // Person의 생성자 함수 호출함.
man.sayHello(); // Person의 프로토타입 메서드 sayHello 호출

console.log(man.__proto__);
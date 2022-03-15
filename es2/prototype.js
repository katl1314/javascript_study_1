function Person(name) {
    this.name = name;
}

Person.prototype = {
    // constructor 프로퍼티와, 생성자 함수와 연결을 재설정
    constructor : Person,
    // ES6 메서드 축약 표현
    sayHi() {
        console.log(`Hi, ${this.name}`);
    }
}

const p1 = new Person('Choi');
p1.sayHi();

// Bad
class Person2 {
    name = 'Lee';
    sayHi = () => {console.log(`Hi! ${this.name}`);};
}

var p2 = new Person2();
p2.sayHi();

class Base {
    constructor() {
        this.name = 'Lee';
        // 클래스가 생성한 인스턴스(this)의 sayHi메서드에 화살표 함수를 할당함.
        // 따라서 sayHi의 프로퍼티는 인스턴스 프로퍼티이다.
        /* this.sayHi = () => {
            console.log(`Hi! ${this.name}`);
        } */
    }

    sayHi() {
        return `Hi, ${this.name}`;
    }
}

var p3 = new Base();
p3.sayHi();

class Derived extends Base {
    sayHi = () => {
        // 화살표 함수의 super는 상위 스코프인 constructor의 super를 가리킨다.
        return `${super.sayHi()}. How are you doing?`   
    }
}

var derived = new Derived();
console.log(derived.sayHi());
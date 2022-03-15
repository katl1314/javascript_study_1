// 클래스
class Person {
    // 생성자 => 인스턴스를 반환한다.
    constructor(name, addr) {
        this.name = name;
        this.addr = addr;
        // constructor은 인스턴스를 반환하기 때문에 return문은 무시되고, this가 return된다. (원시값은 리턴되지 않는다.)
        // 다만 원시값이 아닌 객체가 반환되면 this반환이 무시된다.
        // return {};
        // return 1;   
    }

    // 클래스의 프로토타입 메서드 선언시 기존처럼 Person.prototype.함수명 = function() {}으로 선언하지 않는다.
    // 사용하지 않아도 기본적으로 프로토타입 메서드가 된다.
    // 클래스가 생성한 인스턴스는 프로토타입 체인의 일원이 된다.
    sayHi() {
        console.log(`Hello, ${this.name}, ${this.addr}`);
    }

}

// 생성자 함수
// new연산자를 사용하지 않고 일반 함수로 호출해도 문제 없음.
function Person2(name) {
    this.name = name;
}
/**
 * class constrcutor, prototype constructor의 차이점
 * 이름이 constructor으로 동일한 함수명을 가지고 있어 혼동하기 쉬움
 * 다만 직접적인 연관성은 없음.
 * 프로토타입의 constructor은 모든 프로토타입 객체가 가지고 있는 프로터피며, 생성자 함수를 가리킨다.
 * 
    클래스의 constructor는 반드시 한개만 존재
    constructor생략 가능 => constructor() {}

    객체의 인스턴스를 초기화 하기 위해서는 constructor을 이용해야 한다.
    constructor에 return문을 명시하지 않는다. new연산자와 함깨 클래스가 호출되면 this, 즉 인스턴스를 반환된다.
 */

const man = new Person('Choi', 'Incheon');
man.sayHi();
console.log(Object.getPrototypeOf(man), Person.prototype);

console.log(man instanceof Person);
console.log(man instanceof Object);
console.log(Person.prototype, Object.prototype)
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);

// 프로토타입 체인 순서 : man -> Person -> Object
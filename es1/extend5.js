class SuperClass {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        return `Hi!, ${this.name}`;
    }
}

class SubClass extends SuperClass {
    // constructor 생략
    // constructor(...args) { super(...args); }
    sayHi() {
        // super를 이용하여 슈퍼클래스의 sayHi 프로토타입 메서드를 호출함.
        // super는 자신을 참조하는 메서드가 바인딩된 객체의 프로토타입을 의미한다.
        // console.log(Object.getPrototypeOf(SubClass.prototype));
        const __super = Object.getPrototypeOf(SubClass.prototype);  // SuperClass.prototype
        console.log(__super === SuperClass.prototype);
        return `${__super.sayHi.call(this)}. How are you doing?`;   
    }
}

const sub = new SubClass('Park');
console.log(sub.sayHi());   // Hi!, Park. How are you doing?

console.log(Object.getPrototypeOf(SubClass.prototype));
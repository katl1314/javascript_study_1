/**
 * 서브클래스에서 constructor를 생략하면 클래스에 암묵적으로 constructor가 생성된다.
 * constructor() {}
 */

// 슈퍼클래스
class Base {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}

// 서브클래스
class Sub extends Base {
    // 다음과 같이 암묵적으로 constructor가 생성된다
    // super를 호출하면 수퍼클래스의 constructor를 호출한다.
    // super연산자는 서브 클래스의 constructor에 반드시 추가해야한다.
    // constructor(...args) { super(...args); }
    constructor(a, b, c) {
        super(a, b);
        this.c = c;
    } 
}

const derived = new Sub(1, 2, 10);  // Sub { a: 1, b: 2, c: 10 }
console.log(derived);
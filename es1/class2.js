/**
 * 클래스 호이스팅
 * 클래스는 함수로 평가된다.
 * typeof Person 시 function이 반환됨
 * 클래스 선언문도 변수 선언, 함수 정의와 마찬가지로 호이스팅이 발생한다., 단 var와 다르게 let, const처럼 호이스팅이 발생함.
 * 선언 및 초기화가 별도로 이루어지기 때문에 사각지대가 발생하기 때문에 호이스팅이 발생하지 않는것처럼 보인다.
 * 
 * var, let, const, function, function*, class 키워드를 사용하여 선언된 모든 식별자는 호이스팅이 발생한다. 모든 선언문은 런타임 이전에 실행되기 때문 
 */

// 인스턴스 생성

class Person {
    constructor() {}
}

// class는 new연산자를 이용하여 호출하지 않으면 에러가 발생함.
const lee = new Person();
console.log(lee);   

// 클래스 표현식
const Person1 = class {
    // 생성자 함수
    constructor(name) {
        // 인스턴스 생성 및 초기화
        this.name = name;
    }

    // 프로토타입 메서드
    sayHi() {
        console.log(`H! My name is ${this.name}`);
    }

    // 정적 메서드
    static sayHello() {
        console.log(`Hello`);
    }
}

const p1 = new Person1('Choi');
console.log(p1, Person1, typeof Person1);
console.dir(p1);
p1.sayHi();
Person1.sayHello();
/**
 * 클래스 몸에는 0개 이상 메서드를 선언할 수 있음.
 * 메서드에는, constructor, 프로토타입 메서드, 정적 메서드가 있음.
 */
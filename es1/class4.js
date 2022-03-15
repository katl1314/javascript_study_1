// 정적 메서드
// 인스턴스를 생성하지 않아도 호출 할 수 있는 메서드
// 명시적으로 생성자 함수에 메서드를 추가해야한다.
// 클래스명.함수명 = 함수 선언문
function Person(name) {
    this.name = name;
}

// 정적 메서드 선언
Person.sayHi = function() {
    console.log('Hi!');
}

// 정적 메서드 호출
Person.sayHi();

// class의 경우 함수명 앞에 static 키워드를 붙이면 정적 메서드이다.
class Person2 {
    // 생성자 함수 선언
    constructor() {}

    // 정적 메서드 선언
    static sayHi() {
        console.log('Hi!');
    }
}

Person2.sayHi();    // 클래스의 정적메서드 호출

console.log(Person, Person2);

/**
 * 정적 메서드는 프로토타입 체인에 속하지 않는다.
 * 정적 메서드는 인스턴스 프로퍼티에 접근할 수 없다.
 */
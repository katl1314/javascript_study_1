class Person {
    // 생성자 함수
    constructor(firstName, lastName) {
        // 데이터 프로퍼티
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static sayHello() {
        return `Hello!`;
    }

    // 접근자 프로퍼티 사용함.
    // 클래스의 메서드는 기본적으로 Prototype메서드 이다.
    // 그래서 접근자 프로퍼티 선언시 클래스의  prototype 프로퍼티가 된다.
    // set 함수명(파라미터) {}
    // get 함수명() {}

    // setter함수
    set fullName(fullName) {
        [this.firstName, this.lastName] = fullName.split(" ");
    }

    // getter함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const me = new Person('MinHyeok', 'Choi');  // 생성자 함수 실행

// 인스턴스를 이용한 직접 데이터 프로퍼티 참조
console.log(`${me.firstName} ${me.lastName}`);

// 접근자 프로퍼티를 이용한 데이터 프로퍼티 값 저장
me.fullName = "MinHyeok Park";  // setter
console.log(me.fullName);       // getter

console.log(`${me.firstName} ${me.lastName}`);

console.log(Object.getOwnPropertyNames(me));    // 클래스의 접근자 프로퍼티는 표시되지 않는다.
console.log(Object.getOwnPropertyDescriptors(Person.prototype));

console.log(Person.sayHello());
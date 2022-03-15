function Circle(){
    // 프로퍼티
    this.radius = 5;
    // 메서드
    Circle.prototype.getDiameter = function() {
        return 2 * this.radius;
    }
};

// 생성자 함수로 인스턴스를 생성하려면 생성자 함수가 정의되어야 함.
const circle = new Circle();    // 일반 함수 객체일 때만
console.log(circle.getDiameter());
/**
 * 객체지향 프로그래밍에서 객체는 상태를 나타내는 프로퍼티와 상태를 참조하고 동작을 나타내는 메서드로 구성되어있음.
 * 자신이 속한 객체를 가리키는 식별자를 참조해야 함.
 * 자신이 속한 객체를 재귀적으로 참조하는 방식은 일반적이지 않으며, 바람직하지 않음.
 * 
 * 자바스크립트에서는 this를 제공하는데, 자신이 속한 객체 또는 객체 인스턴스를 가리키는 자기 참조 변수
 * 
 * 바인딩이란 식별자와 값이 연결되는 과정,
 * this바인딩은 this와 가리킬 객체가 연결되는 것
 */

const circle2 = {
    radius : 5,
    getDiameter() {
        return 2 * this.radius; // this는 객체 circle2를 가리킨다.
    }
};

console.log(circle2.getDiameter());

console.log(this);  // window & global

function square(number) {
    // window & global
    // 생성자 함수가 아니면 this는 window가 반환
    console.log(this);  
    return number * number;
}

square(5);

const person = {
    name : 'Lee',
    getName() {
        // 메서드를 호출하는 객체(person)을 가리킴
        console.log(this);
        return this.name;            
    }
}

person.getName();

function Person(name) {
    this.name = name;
    this.getName = function() {
        // 생성자 함수이므로 생성할 인스턴스를 가리킴
        console.log(this);
        return this.name;
    } 
}

const person2 = new Person('Lee');
person2.getName();
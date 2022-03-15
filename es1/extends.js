
/**
 * extends키워드는 상속관계를 나타내기 위함.
 * class 자식클래스(서브 클래스) extends 부모 클래스(슈퍼 클래스)
 * 프로토타입 메서드, 정적 메서드 모두 상속 가능
 */
class Animal {
    constructor(age, weight) {
        this.age = age;
        this.weight = weight;
    }

    eat() {
        return 'eat';
    }

    move() {
        return 'move';
    }
}

class Dog extends Animal {
    // constructor(type, age, weight) {
    //     super(age, weight);
    //     this.type = type;
    // }

    bark() {
        return '멍멍';
    }

    // move() 오버라이딩
    move() {
        return 'run';
    }
}

const dog1 = new Dog(3, 18.5);  // Animal의 생성자 함수 호출.
console.log(dog1.eat());        // eat
console.log(dog1.move());       // move => run
console.log(dog1.bark());       // '멍멍'

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);    // Dog는 부모 클래스 Animal을 상속받았기 때문에 true

console.log('age :',dog1.age);
console.log('weight :',dog1.weight);
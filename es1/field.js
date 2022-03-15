class Car {
    // 자바스크립트에서 java처럼 class field사용시 Node버전 12이후에는 다음과 같이 사용 가능함.
    // 이전 버전의 경우 constructor에서 this를 사용하여 필드를 구현해야함.
    constructor(brand) {
        this.brand = brand; // 클래스 필드 초기화
        this.count = 0;
    }

    // 클래스내 선언된 함수는 프로토타입 프로퍼티로 들어가지 않는다.!!!!!!!!!!!!!!!!!!!! (인스턴스 메서드)
    getBrand = function() {
        console.log(this);
    }

    sayHello = () => {
        this.count++;
        console.log(this.count);
    }

    // 클래스의 메서드는 프로토타입 프로퍼티로 들어간다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    go() {
        console.log(this);
    }

    // 클래스는 일등 객체이므로, 함수를 클래스 내부에 선언이 가능하며, 또한 화살표 함수도 가능함.
}

const car = new Car('volvo');
console.log(car);

car.getBrand();
car.sayHello();
console.log(Object.getOwnPropertyDescriptor(Car.prototype, 'go'));
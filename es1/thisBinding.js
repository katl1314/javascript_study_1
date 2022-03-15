/*
* 클로저 
*/

const x = 1;

function outerFunc() {
    const x = 10;
    function innerFunc() {
        // innerFunc 스코프에 x변수가 없기 때문에 상위 스코프인 outerFunc내 변수 x를 참조한다.
        // 렉시컬 스코프 : 함수가 어디서 정의했는지에 따라 스코프가 결정됨
        console.log(x); // 10
    }
    innerFunc();
}

outerFunc();

function f1() {
    const x = 20;
    f2();
}

function f2() {
    // 해당 함수는 f1함수에서 호출하나 렉시컬 스코프로 인해 f1에 선언된 x가 아닌 전역 변수 x를 참조한다.
    console.log(x);     // 전역 변수 x에 바인딩값 1
}

f1();
f2();

/**
 * 함수 객체의 내부 슬롯 [[Environmenet]]
 * 함수가 정의된 위치와 호출한 환경이 다름 
 * 렉시컬 스코프를 사용하려면 함수가 정의된 환경, 함수의 호출한 환경 을 기억해야함.
 * 이를 내부 슬롯 [[Environment]]에 자신이 정의한 함수의 환경, 상위 스코프의 참조를 저장한다.
 */

function Car(brand) {
    this.brand = brand;
    return 1;
}

console.log(Car()); // 일반 함수 호출   ==> this는 전역 객체를... => 1
console.log(new Car()); // 생성자 함수 호출 ==> this는 생성자 함수로 만들어진 인스턴스를... => Car {brand : 'benz'}

Car.prototype.getBrand = function() {
    return this.brand;
}

Car.prototype.setBrand = function(newBrand) {
    this.brand = newBrand;
}

const myCar = new Car('audi');
console.log(myCar.getBrand());  // audi

myCar.setBrand('benz');
console.log(myCar.getBrand());  // benz ==> Car의 프로토타입 메서드 setBrand를 이용하여 인스턴스의 속성 brand를 변경함.

console.log(myCar.__proto__);   // Car {getBrand: [Function], setBrand: [Function]}

console.log(Object.getPrototypeOf(myCar) == Car.prototype);
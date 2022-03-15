
/**
 * ES6사양에서 정의한 메서드는 인스턴스를 생성할 수 없는 non-constructor이다.
 * 즉 es6메서드는 생성자 함수로 선언 불가.
 * es6에서는 super키워드를 사용할 수 있다. => 내부 슬롯 [[HomeObject]]를 갖혀야 한다.
 */
const base = {
    name : 'Lee',
    sayHi() {
        return `Hi! ${this.name}`;
    }
};

const derived = {
    __proto__ : base,
    // sayHi는 ES6의 메서드다. ES6메서드는 [[HomeObject]]를 갖는다.
    // sayHi의 [[HomeObject]]는 sayHi가 바인딩된 derived를 가리킨다.
    // super는 sayHi의 [[HomeObject]]의 프로토타입인 base를 가리킨다.
    sayHi() {
        return `${super.sayHi()}, How are you doing?`;
    }
}

console.log(derived.sayHi());
console.log(derived.__proto__);
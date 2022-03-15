const add = (a, b, c) => a + b + c;

console.log(add.call(null, 10, 20, 5));        // 35
console.log(add.apply(null, [15, 16, 5]));     // 36
console.log(add.bind(null, 20, 30, 5)());      // 55

/**
 *  간접 함수 호출 call, apply, bind가 있음.
 *  함수명.call(thisArg, ...arguments);
 *  함수명.apply(thisArg, [arguments]);
 *  함수명.bind(thisArg, ...arguments); => 함수가 반환됨 
 */

const person = {
    name : 'Lee',
    sayHi() {
        return `Hi? My name is ${this.name}`;
    }
};

console.log(person.sayHi());        // Hi? My name is Lee

/**
 * 메서드 정의할 때 화살표 함수가 아닌, ES6 메서드 축약 표현을 이용하여 정의한다.
 * 프로토타입 객체의 프로퍼티에 화살표 함수 사용하지 않아야 한다.
 */


function Person(name)  {
    this.name = name;
}

// 프로퍼티를 동적으로 추가할 때 ES6 메서드 정의를 사용할 수 없으므로, 일반 함수를 할당한다.
Person.prototype.sayHi = function () { return `Hi!, My name is ${this.name}` };

const p1 = new Person('Lee');
console.log(p1.sayHi());    // Hi!, My name is Lee
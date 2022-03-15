/**
 * ES6 함수 추가 기능
 */

var foo = function() {
    return 1;
}

// 일반 함수 호출
console.log(foo());

// 생성자 함수 호출
console.log(new foo());

// 메서드로서 호출

const obj = {
    foo // key와 value명이 같으면 value는 생략한다.
}

console.log(obj.foo());

/**
 * ES6이전의 함수는 생성자 함수, 일반 함수 형태로 모두 호출할 수 있음.
 * 다시말해, es6 이전 모든 함수는 Callable, Constructor이다.
 */

var obj2 = {
    x : 10,
    f : function() {
        return this.x;
    }
};

// 프로퍼티 f에 바인딩된 함수를 메서드로서 호출
console.log(obj2.f());  // 10

// 프로퍼티 f에 바인딩된 함수를 일반함수로서 호출
var _f = obj2.f;
console.log(_f());      // undefined

// 프로퍼티 f에 바인딩된 함수를 생성자 함수로서 호출
console.log(new obj2.f());  // f{}

/**
 * 위 예제와 같이 객체에 바인딩된 함수를 생성자 함수로 호출하는 것은 문법상 가능하는 문제가 있음.
 * constructor라는 것은 객체에 바인딩된 함수가 prototype 프로퍼티를 가지며, 프로토타입 객체를 생성한다 라는 것을 의미한다.
 */

// 콜백 함수를 사용하는 고차함수 map, 콜백 함수도 constructor가 생성된다...
console.log([1, 2, 3].map((value, index, array) => value + 1)); // [2, 3, 4]

// 메소드 : 객체 내 생성한 함수
/**
 * 함수 선언 방식과 this바인딩
 * 렉시컬 스코프와 this바인딩은 결정 시기가 다르다.
 * 함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프는 함수 정의가 평가되어, 함수 객체가 생성되는 시점에 상위 스코프를 결정한다.
 * this바인딩은 함수 호출 시점에 결정된다.
 */

// this바인딩은 함수 호출 방식에 따라 동적으로 결정된다.
const foo = function() {
    console.dir(this);
}
// 1. 일반 함수 호출
// foo함수를 일방적인 호출
// foo함수는 this가 전역 window를 가리킨다.
// foo();  // window

// 2. 메소드 호출
// foo함수를 프로퍼티값으로 할당하여 호출
// foo함수 내부의 this는 메서드를 호출한 객체 obj를 가리킴
const obj = { foo };
obj.foo();  // this는 object obj를 가리킴

// 3. 생성자 함수 호출
// foo함수를 new연산자를 이용하여 생성자 함수로 호출

new foo();  // 생성자 함수 foo로 만들어진 인스턴스를 가리킴

// 4. Function.prototype.apply/call/bind를 이용한 간접 호출
// this는 메소드에 전달받은 obj를 가리킴.
const bar = { name : 'bar' };
foo.call(bar);      // bar
foo.apply(bar);     // bar
foo.bind(bar)();    // bar

// 일반 함수 호출
// 중첩함수를 일반 함수로 호출할 경우 함수 내부의 this에는 전역 객체 window가 바인딩된다.
// 일반함수에서 this는 프로퍼티 및 메소드를 참조할 일이 없기 때문에 'use strict'사용시 this는 undefined로 바인딩된다.
function foo2() {
    console.log('foo2 this', this);             // this -> window
    function foo3() {
        console.log('foo3 this', this);         // this -> window
    }

    foo3();
}

foo2();


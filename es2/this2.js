/**
 * 중첩 함수 foo의 상위 스코프는 즉시 실행 함수이다!
 * 따라서 화살표 함수 foo의 this는 상위 스코프의 즉시 실행 함수의 this이다.
 */

(function () {
    const foo = () => {
        console.log(this);
    }
    foo();
}).call({a : 1});

(function () {
    // 고차함수
    const bar = () => () => console.log(this);
    bar()();
}).call({name : 'Kim'});

global.x = 1;      // 전역 객체에 변수 x를 선언 후 10을 초기화한다.

const normal = function() {
    return this.x;
}

const arrow = () => {
    return this.x;
}

console.log(normal.call({x : 10}));     // 10
console.log(arrow.call({x : 10}));      // 1, 화살표 함수는 this가 없기 때문에 상위 스코프의 this를 참고한다.

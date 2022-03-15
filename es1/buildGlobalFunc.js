/**
 * 빌트인 전역 함수
 * 애플리케이션 전역에서 사용할 수 있는 함수를 정의함.
 * 1. eval
 *  자바스크립트 코드를 나타내는 문자열을 인수로 받음. -> 전달받은 인자가 표현식이 아닌 문인 경우 런타임에 실행
 *  만약 여러 개의 문으로 구성되어 있으면 모든 문을 실행하고, 마지막 문을 반환한다.
 */

eval('console.log("Hello World")'); // Hello World
eval('var x = 5');                  // 표현식이 아닌 문
eval('x');                          // 5

const o = eval('({ x : 1, y : 2})');
console.log(o);                     // { x : 1, y : 2 }

eval('function sum(a, b) { return a + b; }');
console.log(sum(3, 10));            // 13

// 함수 리터럴은 반드시 중괄호로 둘러싼다.
const f = eval('(function(n) {console.log(n)})');
f(3);                               // 3

eval('console.log(1 + 5)');         // 6

var num = eval('1 + 5; 6 + 10');
console.log(num);                   // 16

const x1 = 1;

function foo() {
    eval('var x1 = 2');
    // eval함수는 자신이 위치한 스코프를 런타임에 동적으로 수정함.
    console.log(x1);
}

foo();
console.log(x1);

var y3 = 3;

{
    eval('var y3 = 10');
    console.log(y3);
}

console.log(y3);

/** 결론
 * eval함수는 자신이 위치한 스코프를 자바스크립트 런타임에 동적으로 수정함.
 * 그래서 그 위치에 존재했던 코드처럼 동작하게 된다.
 * 다만 strict mode에서는 eval함수는 기존 스코프를 수정하지 않고, 자체적인 스코프를 만듦.
 * 그리고, let, const는 strict mode가 적용되기 때문에 자체적으로 스코프가 만들어진다.
 * 
 * eval함수 사용은 금지해야함. 성능 속도가 낮고, 최적화가 수행되지 않기 때문, 보안에 매우 취약!!!!!!!!!!!!!!!!!!
 */
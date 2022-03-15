/**
 * Rest파라미터
 * 
 */

function sum(...args) {
    return args.reduce((prev, current, index) => prev + current, 0);
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(5, 8, 9, 12, -5));
console.log(sum(2, 15, 7.5, 15, 300));

/** 
 * rest는 함수 파라미타 중 가장 마지막에 와야 함.
 * rest연산자는 단 1개만 파라미터로 올 수 있다.
 * 함수 정의 시 선언한 매개변수 개수에 영향을 미치지 않는다.
*/

function foo(param1, param2, ...args) {
    console.log('param1', param1);      // choi
    console.log('param2', param2);      // 10
    console.log('args', args);          // [20, 30]
    console.log(foo.name, foo.length);  // foo, 2 (rest파라미터는 제외)
}

foo('choi', 10, 20, 30);

function sum2() {
    console.log(Array.prototype.slice.call(arguments));
}

sum2(1, 2, 3, 4, 5);
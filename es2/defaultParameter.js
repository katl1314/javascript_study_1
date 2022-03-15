function sum(x, y) {
    // 인자로 들어온 값이 undefined이면 0으로 할당된다.
    x = x || 0;
    y = y || 0;
    return x + y;
}

var result = sum(undefined, 20);
console.log(result);


// 매개변수 기본값
function sum2(x = 0, y = 0) {
    return x + y;
}

console.log('sum2()', sum2());                              // 0
console.log('sum2(undefined)', sum2(undefined));            // 0
console.log('sum2(undefined, 15)', sum2(undefined, 15));    // 15
console.log('sum2(5)', sum2(5));                            // 5
console.log('sum2(5, 10)', sum2(5, 10));                    // 15

// 매개변수 기본값 사용시 매개변수의 length에서 제외된다.

console.log('sum.length', sum.length);                      // 2
console.log('sum2.length', sum2.length);                    // 0

// Rest연산자 사용시 기본값을 사용 할 수 없다.
// Rest parameter may not have a default initializer
/* function restFn (...args = {}) {
    console.log(args);
}

restFn(); */
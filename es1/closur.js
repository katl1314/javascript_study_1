const x = 1;

function outer() {
    const x = 10;
    
    function inner() {
        console.log(x);
    }

    return inner;
}
// outer 함수 호출
// 중첩함수인 inner가 반환됨.
// 반환이 되면 outer함수는 실행 컨텍스트 스택에서 pop되어 제거됨.
const inner = outer();

// 중첩함수 inner호출.
inner();    // 10

/**
 * 클로저는 중첩 함수가 종료된 외부 함수의 변수를 참조할 수 있다. => 이러한 중첩 함수를 클로저라고 한다.
 클로저의 활용에는 정보은닉을 하고, 특정 함수에게만 참조할 수 있도록 허용함.
 전역변수의 경우 외부에서 의도치 않은 값을 할당시 문제가 발생할 수 있기 때문에 클로저를 이용하여 처리하도록 권장함.
 */

const counter = (function() {
    let n = 0;
    
    function func(type = 'i') {
        if (type === 'i')
            return ++n;
        else
            return --n;
    }

    return func;
})();

var counterFunc = counter;

// increase
console.log('increase : ', counterFunc());  // 1
console.log('increase : ', counterFunc());  // 2
console.log('increase : ', counterFunc());  // 3
// decrease
console.log('decrease : ', counterFunc('d'));   // 2
console.log('decrease : ', counterFunc('d'));   // 1    
console.log('decrease : ', counterFunc('d'));   // 0

// console.log(n); // 정보은닉으로 인해 해당 변수에 직접 접근 불가능
/**
 * 즉시 실행함수는 한 번만 호출하기 때문에 함수 내 변수가 초기화 될 일이 없음.
 */

const counter2 = (function(){
    let n = 0;
    const MAX = 10;
    const MIN = 0;
    return {
        increase() {
            return n < MAX ? ++n : MAX;
        },
        decrease() {
            return n > MIN ? --n : MIN;
        }
    }
})();

console.log(counter2);
// 0 ~ 10까지 표현
console.log(counter2.increase());
console.log(counter2.increase());

console.log(counter2.decrease());
console.log(counter2.decrease());

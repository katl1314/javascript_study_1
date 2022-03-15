/**
 * strict mode가 발생시키는 에러
 * 암묵적 전역
 * - 변수, 함수, 매개변수 삭제
 * - 매개변수 이름의 중복
 */

/* 선언하지 않는 변수를 참조하면 ReferenceError가 발생함. */
/* a = 10;
console.log(a); */
/* 변수, 함수, 매개변수 삭제 */
/* (function() {
    let x = 10;
    delete x;
    
    function foo(x) {
        delete x;
    }

    delete foo;

})(); */

/* 매개변수명 중복 */
function sum(a, a) {
    return a + a;
}
var x = 10;     // 전역 변수

function foo() {
    // 암묵적 전역 변수(프로퍼티 window.y)
    // y는 변수가 아니므로 호이스팅이 발생하지 않습니다.
    y = 20;
}

console.log(global);
foo();
// 선언되지 않는 y변수는 암묵적 전역 변수로 인해 참조할 수 있음.
console.log(x + y);
delete y;   // delete window.y => 전역 객체내 y 프로퍼티 삭제함.
// console.log(x, y);
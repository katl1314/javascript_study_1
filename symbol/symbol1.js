/**
 * 심볼(Symbol)은 ES6에 도입된 7번째 데이터 타입으로, 변경 불가능한 원시 타입 값.
 * 이는 이름 충돌이 없는 유일한 프로퍼티 키를 만들기 위해 사용된다.
 * 절대절대 다른 값과 중복되지 않는 유일한 값
 * new연산자를 이용하여 생성자 함수 형태로 호출할 수 없음.
 * Symbol함수 내 들어가는 인수는 description으로, 실행시 아무런 영향이 없음.
 * => 요약 : 중복안되는 값
 */

// Symbol 생성
const mySymbol = Symbol();
console.log('mySymbol type', typeof mySymbol);
console.log('mySymbol', mySymbol);

const mySymbol1 = Symbol('mySymbol1');
const mySymbol2 = Symbol('mySymbol1');
console.log(typeof mySymbol1, mySymbol1);
console.log(typeof mySymbol2, mySymbol2);

console.log(mySymbol1 === mySymbol2);

console.log('mySymbol1.description', mySymbol2.description);    // 심벌 값도 문자열, 숫자, 불리언과 같이 객체처럼 접근하면 암묵적으로 래퍼객체를 생성한다. => 함수 내 인자값 출력
console.log('mySymobl1.toString()', mySymbol2.toString());      // 암묵적으로 래퍼객체를 생성하기 때문에 toString()같은 메서드도 호출 가능함.

// 다만 심벌값은 변경불가능한 유일무이한 값이기 때문에 암묵적으로 형변환되지 않음.(숫자, 문자) 다만 !!을 이용하여 불리언 타입으로 형변환이 가능하다.
console.log('!!mySymbol1', !!mySymbol1);

if (!!mySymbol1) {
    console.log('mySymbol1 is not empty');
}

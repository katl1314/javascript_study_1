/**
 * 자바스크립트 객체에는 3가지 객체로 구성되어 있는데...
 * 1. 빌드인 객체: ECMAScript에 정의된 객체, 애플리케이션 전역의 공통 기능을 의미. ---> 환경에 관계없이 언제나 사용 가능(node또는 webbrowser)
 * 표준 빌드인 객체인 String, Number, Boolean, Function, Array, RegExp, Date는 생성자 함수를 호출하여 인스턴스를 생성한다.
 * 
 * 생성자 함수인 표준 빌드인 객체가 생성한 인스턴스의 프로토타입은 표준 빌트인 객체의 prototpye에 바인딩된 객체이다.
 */

// String 생성자 함수를 이용한 String객체 생성
const str = new String('Lee');
console.log(str, typeof str);
console.log(Object.getPrototypeOf(str) === String.prototype);           // true
console.log(str.length);    // String.prototype.length              
console.log(String.prototype.indexOf.call(str, 'e'));                   // str.indexOf('e')
console.log(str.toUpperCase());     // 문자열 대문자로 변환
console.log(str.toLowerCase());     // 문자열 소문자 변환

// Number 생성자 함수를 이용한 Number객체 생성
/* const num = new Number(10);
console.log(num, typeof num);
console.log(Object.getPrototypeOf(num) === Number.prototype);           // true

// Boolean 생성자 함수를 이용한 Boolean객체 생성
const bool = new Boolean(true);
console.log(bool, typeof bool);

// Function 생성자 함수를 이용한 Function객체 생성
const func = new Function('x', 'return x');
console.log(func, typeof func);

// Array 생성자 함수를 이용한 Array객체 생성
const array = new Array(5);
console.log(array, typeof array);

// RegExp 생성자 함수를 이용한 RegExp객체 생성
const regExp = new RegExp(/ab+c/i);
console.log(regExp, typeof regExp);

// Date 생성자 함수를 이용한 Date객체 생성
const date = new Date();
console.log(date, typeof date); */

const num = new Number(1.2);
// Number.prototype의 프로토타입 메서드
// toFixed()는 소수점 자리를 반올림하여, string으로 반환한다.
console.log(num.toFixed() + 2); // '1' + 2 = '12'

// Number의 정적 메서드
// Number.isInteger()는 해당 인자가 정수인지 체크하여 boolean으로 반환한다.
console.log(Number.isInteger(1.5));     // false
console.log(Number.parseFloat('1.23') + 2); 

/**
 * 원시값은 객체가 아님, 그래서 원래 프로퍼티와 메서드에 접근할 수없다.
 * 다만 문자열, 숫자, 불리언 타입의 경우 자바스크립트 엔진에서 임시 객체인 래퍼 객체를 생성함.
 * 문자열은 랩퍼 객체의 StringData에 저장된다.
 * 만약 프로퍼티를 사용 또는 메소드를 호출한 다음 다시 원자값으로 돌아간다.
 * 
 * 
 */

 
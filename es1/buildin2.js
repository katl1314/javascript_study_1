const str = 'Lee';  // 원자값 생성
console.log(str.length);    // 래퍼 객체를 생성한다(new String()). 프로퍼티 참조
console.log(str.toUpperCase()); // 메소드 호출
console.log(typeof str); // 원시값 string으로 돌아간다.

/**
 * 원시값이 프로퍼티 참조, 메소드 호출시 자바스크립트 엔진에서 잠시나마 임시 객체인 Wrapper Object를 생성한다.
 * 프로퍼티 참조, 메소드 호출이 끝나면 가비지 컬렉터 대상이 된다.
 */

const num = 10.5;
console.log(num.toFixed()); // 소수점 반올림. 프로퍼티에 접근, 메소드 호출을 위해 Number Wrapper Object가 생성됨.
console.log(typeof num);    // number
/**
 * String은 표준 빌트인 객체이다. new연산자와 함깨 호출하는 생성자 함수로 호출하여 인스턴스 생성 가능.
 * 문자열을 다룰때 필요하는 프로퍼티와 메서드를 제공한다.
 */

// new연산자와 함깨 String 생성자 함수로 호출할 경우 String래퍼 객체가 생성됨.
// String래퍼 객체는 배열과 마찬가지로, length프로퍼티와, 인덱스를 나타내는 숫자 형식의 문자열의 프로퍼티 키로, 각 문자를 프로퍼티 값으로 갖는 유사 배열 객체이면서 이터러블이다.
// 따라서 배열과 유사하게 문자를 인덱스를 이용하여 접근할 수 있다.
const str = new String('string');
console.log(str, str.length);

console.log(str[0]);    // 문자열의 0번째 인덱스에 해당하는 문자 's'를 접근한다.

// string 생성자 함수에 문자열이 아닌 값을 전달할 경우 강제 형변환 후 String래퍼 객체가 생성된다.
const str2 = new String(123);
console.log(str2[0], str2.length);  // 문자열의 0번째 인덱스에 해당하는 '1'을 접근한다.

const str3 = new String();          // 생성자 함수에 아무것도 입력하지 않으면 ''을 String래퍼 객체를 생성.
console.log(str3, str3.length);    

const str4 = new String(null);      // null을 string으로 강제 형변환('null')후 String래퍼 객체 생성함.
console.log(str4, str4.length);

const str5 = new String(Infinity);
console.log(str5, str5.length);

const str6 = new String(NaN);
console.log(str6, str6.length);

const str7 = new String(true);
console.log(str7, str7.length);
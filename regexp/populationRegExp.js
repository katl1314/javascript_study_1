/**
 * 자주 사용되는 정규표현식
 * 다음 예제는 'http://' or 'https://'으로 시작하는지 검사한다.
 */

const url = 'http://examples.com';

const pattern = /^https?:\/\//;     // /^https?:\/\//
console.log('(/^https?:\/\//).test("http://examples.com")', pattern.test(url));

// 이렇게 해도 가능하다.        /^(http|https):\/\//
const pattern2 = /^(http|https):\/\//;
console.log('(/^(http|https):\/\//).test("http://examples.com")', pattern2.test(url));

// 확장자가 html인지 검사한다.  /.html$/
const url3 = 'index.html';
const pattern3 = /.html$/;
console.log('(/.html$/).test("index.html")', pattern3.test(url3));

// 숫자로만 이루어진 문자열인지 검사한다. /^[\d]+$/
const url4 = '12345';
const pattern4 = /^[\d]+$/;           // 숫자로만 이루어진 건지 검사한다.
console.log('(/^[%d]+$/).test("12345")', pattern4.test(url4));

// 하나 이상의 공백으로 시작하는지 검색한다. /^[\s]+/
// \s은 여러 가지 공백 문자(space, tab)을 의미한다. 즉 \s는 [\t\r\n\v\f]를 의미한다.
const target5 = '  hi';
const pattern5 = /^[\s]+/;
console.log('(/^[\s]+/).test("  hi")', pattern5.test(target5));

// 아이디로 사용 가능한지 검사  /^[a-zA-Z0-9]{4,10}$/
// 검색 대상 문자열이 알파벳 대소문자 또는 숫자로 시작하며 4 ~ 10자리인지 검색한다.
const id = 'abc123';
const pattern6 = /^[a-zA-Z0-9]{4,10}$/;
console.log('(/^[a-zA-Z0-9]{4,10}$/).test("abc123")', pattern6.test(id));

// 메일 주소 형식에 맞는지 검사
// /^[a-zA-Z0-9]([-_\.]?[a-zA-Z0-9]) *@[a-zA-Z0-9]([-_\.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,3}$/;
const email = 'minhyeo_choi1@gmail.com';
const pattern7 = /^[a-zA-Z0-9]([-_\.]?[a-zA-Z0-9])*@[a-zA-Z0-9]([-_\.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,3}$/;

console.log(pattern7.test(email));

// 휴대폰 번호의 형식이 맞는지 검사
const phone = '010-1234-5678';
const pattern8 = /^([\d]{3})-([\d]{3,4})-([\d]{3,4})$/;
console.log(pattern8.test(phone));

// 해당 문자열에 특수문자가 포함되어있는지 검색한다.
const target9 = "abc#123";
const pattern9 = /[^0-9A-Za-z]/g;   // 이렇게 사용하면 선택적으로 특수문자를 검색할 수 없다는 단점을 가지고 있음.
console.log(pattern9.test(target9));

// 특수문자를 삭제하기 위해서는 String.prototype.replace메서드를 이용하자
const str10 = target9.replace(pattern9, '');    // 특수문자를 공백으로 바꾼다.
console.log(target9, str10);
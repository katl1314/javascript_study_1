/**
 * 객체 디스트럭처링 => 객체 구조 분해
 * 객체 디스트럭처링시 프로퍼티 키를 이용한다.
 */

var user = { 
    lastName : 'Kim',
    firstName : 'Ungmo'
};

const {lastName, firstName} = user;

console.log(lastName, firstName);

// 좌항에는 할당받을 변수명(프로퍼티명) 우항에는 객체가 있어야 함.

const {lastName: ln2, secondName = 'M'} = user;  // default value 설정도 가능하다.

console.log(ln2, secondName);  // Kim, M

// 객체의 프로퍼티 키가 아닌 다른 변수명으로 값을 할당받고자 하면 다음과 같이 변수를 선언해야한다.
const {lastName: ln, firstName: fn} = user;
// 기존의 프로퍼티 키가 아닌 다른 변수명으로 값을 반환한다.
console.log(ln, fn);
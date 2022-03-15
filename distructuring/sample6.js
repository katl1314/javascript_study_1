const todos = [
    {id : 1, content : 'HTML', complete : true},
    {id : 2, content : 'CSS', complete : false},
    {id : 3, content : 'Javascript', complete : true},
];

/**
 * 객체 디스트럭처링과 배열 디스트럭처링의 할당을 혼용할 수 있음.
 */
const [, {id : id2, content : content2}, {id : id3, content : content3}] = todos;
console.log(id2, content2); // 2 CSS
console.log(id3, content3); // 3 Javascript

/**
 * 중첩객체의 경우 다음과 같이 사용한다.
 * 중첩객체 address의 zipCode, city추출
 */
const user = {
    name : 'James',
    address : {
        zipCode : '08068',
        city : 'Seoul'
    }
};

const { address: {city, zipCode} } = user;

console.log(city, zipCode); // Seoul 08068

/**
 * 객체 디스트럭처링도 배열 디스트럭처링처럼 REST 문법을 사용할 수 있다.
 * 다만 REST 문법의 경우 변수 선언의 마지막에 위치해야한다.
 */

const {one, ...other} = { one : 1, two : 2, three : 3} ;
console.log(one, other);        // 1 { two: 2, three: 3 }
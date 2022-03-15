/**
 * encodeURIComponent함수는 URI 구성 요소를 인수로 전달받아 인코딩함.
 * 인코딩이란? uri문자들을 이스케이프 처리함. 
 * encodeURI와 다르게 '=, ?, &'은 인코딩 한다.
 */

const query = "name=이응모&age=30&job=programmer";

let enc = encodeURIComponent(query);
console.log(enc);
// name%3D%EC%9D%B4%EC%9D%91%EB%AA%A8%26age%3D30%26job%3Dprogrammer

let dec = decodeURIComponent(enc);
console.log(dec);
// name=이응모&age=30&job=programmer

let enc2 = encodeURI(query);
console.log(enc2);
// name=%EC%9D%B4%EC%9D%91%EB%AA%A8&age=30&job=programmer

let dec2 = decodeURI(enc2);
console.log(dec2);
// name=이응모&age=30&job=programmer
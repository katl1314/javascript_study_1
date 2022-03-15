/**
 * encodeURI는 완전한 URI를 문자열로 받아 이스케이프 처리를 위해 인코딩한다.
 * URL의 경우 아스키코드로 구성되어야 하며, 해당되지 않는 경우 이스케이프를 이용하여 처리해야한다.
 * EX) 한국어의 경우 아스키코드가 해당되지 않기때문에 이점주의
 * PARAM
 *  - string, url주소
 * RETURN
 *  - string, 인코딩된 url
 */

const URI = 'https://examples.co.kr?name=이응모&job=programmer&teacher'
const encodeURI1 = encodeURI(URI);
console.log(encodeURI1);    // 인코딩된 URI 반환됨.
// https://examples.co.kr?name=%EC%9D%B4%EC%9D%91%EB%AA%A8&job=programmer&teacher

// decode
const decodeURI1 = decodeURI(encodeURI1);

// difference
console.log('decodeURI1 === encodeURI1:',decodeURI1 === encodeURI1);
console.log('encodeURI1 === URI:',decodeURI1 === URI);
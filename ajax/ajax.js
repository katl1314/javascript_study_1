/**
 * Ajax (Asynchronous Javascript and XML)
 * - 자바스크립트를 이용하여 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고, 서버에서 응답한 데이터를 수신하여 웹페이지를 동적으로 갱신하는 프로그래밍 방식
 * 브라우저에서 지원하는 WEB API인 XMLHttpRequest 기반으로 동작함.
 * 변경할 필요가 있는 부분만 한정적으로 렌더링함.
 * 
 * JSON (Javascript Object Model) 클라이언트와 서버간 HTTP 통신을 위한 데이터 포멧
 * JSON표기 방식은 자바스크립트의 객체 리터럴과 유사하다. (키와 값으로 구성됨)
 * {
 *      "name" : "Lee",
 *      "age"  : 30,
 *      "alive" : true,
 *      "hobby" : ["traveling", "tennis"]
 * }
 * 
 * - JSON 메서드
 * - JSON.stringify(jsonObj, replacer:(value, key) => function, space) : JSON데이터 포멧(또는 배열)을 문자열로 변환합니다.
 * - 첫번째 인자[필수] : 문자열화 변경을 위한 JSON 데이터 포맷을 전달합니다.
 * - 두번째 인자 : 문자열화 동작 방식을 변경하는 함수입니다. 함수의 인자로 key, value가 들어갑니다.
 *   값이 undefined인 경우 문자열화에서 제외됩니다. (Number) => any
 * - 세번째 인자 : 가독성을 위한 스페이스(공백)개수를 지정합니다. (Number)
 *  */

const jsonObj = {"name" : "Lee", "age" : 30, "alive" : true, "hobby" : ["traveling", "tennis"]};


var jsonToStr = JSON.stringify(jsonObj, null, 2);

console.log(`JSON to String : ${jsonToStr}`);

/* function filter(key, value) {
    return typeof value === 'number' ? undefined : value;
} */

var jsonToStr2 = JSON.stringify(jsonObj, (key, value) => typeof value === 'number' ? undefined : value, 2);

console.log(jsonToStr2);

var arrayToStr = JSON.stringify(['happy', 'apple', 'Banana']);
console.log('arrayToStr', arrayToStr);

/**
 * JSON.parse(str) : string을 JSON 데이터 포맷으로 변환합니다.
 * 첫번째 인자[필수] : json 데이터 포맷 변환을 위한 string을 입력받습니다.
 * 두번째 인자 : 변환 결과를 반환하기 위해 이 인수에 전달하여 변형합니다. 
 * 값이 undefined인 경우 변환에서 제외됩니다. (Number) => any
 */
var strToJson = JSON.parse(jsonToStr);
console.log(`JSON to String : `, strToJson);

function reviver(key, value) {
    // value가 number인 경우 undefined로 설정하여 변환에서 제외함.
    return typeof value !== 'number' ? value : undefined; 
}

var strToJsonReviver = JSON.parse(jsonToStr, reviver);
console.log(strToJsonReviver);

import { XMLHttpRequest } from "xmlhttprequest";

// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();

const url = 'http://localhost:3000/todos';  // Resource url => id를 가지고 리소스 추출
// const method = 'GET';                       // HTTP 메서드 (GET)
const method = 'POST';                          // HTTP 메서드 (POST)

// HTTP 요청 초기화
// xhr.open(method, url, async, user, password);
// readyState = UNSENT
xhr.open(method, url); // => readyState = OPENED

// XMLHttpRequest HTTP 요청의 헤더 값을 설정
xhr.setRequestHeader('content-type', 'application/json');

// HTTP 요청을 전달.
// xhr.send(data) => xhr.readyState = HEADER_RECEIVED
// data의 경우 JSON.stringify를 이용하여 직렬화 할 것.
// xhr.send();
xhr.send(JSON.stringify({id : 4, content : 'Angular', complete : false}));

// xhr.readyStatus가 변경될 때마다 onreadystatuschange가 실행됨.
xhr.onreadystatechange = () => {
    // HTTP 요청 상태가 xhr.DONE인 경우...
    if (xhr.readyState === xhr.DONE) {
        // HTTP 요청에 대한 응답 상태가 200, 201(정상)인 경우...
        if (xhr.status === 200 || xhr.status === 201) {
            console.log(JSON.parse(xhr.responseText));
        } else {
            console.error(`에러 발생 : ${xhr.status}`);
        }
    }
}

xhr.onload = () => {
    console.log(xhr.status);
}

xhr.onerror = () => {
    console.log('error', xhr.status);
}
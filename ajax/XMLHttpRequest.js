/**
 *  MIT License
    Copyright (c) 2017 gwiazdorrr
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
 */
import { XMLHttpRequest } from "xmlhttprequest";
/**
 * XMLHttpRequest
 * HTTP 데이터 요청을 전송하기 위한 객체
 * WEB API인 XMLHttpRequest객체는 HTTP 요청 및 수신을 위한 메서드와 프로퍼티를 제공함.
 * 
 * XMLHttpRequest 객체 프로퍼티
 * 1. readyState : HTTP 요청 전송시 상태를 나타냄
 *   - 0. UNSENT : open메서드 호출 전
 *   - 1. OPENED : open메서드 호출 후
 *   - 2. HEADERS_RECEIVED : send메서드 호출 이후
 *   - 3. LOADING : 서버 응답 중
 *   - 4. DONE : 서버 응답 완료
 * 2. status : HTTP 요청에 대한 응답 상태 ex) 200, 404, ...
 * 3. statusText : HTTP 요청에 대한 응답 메시지 나타냄
 * 4. responseType : HTTP 응답 타입
 * 5. response : HTTP 응답에 대한 몸체(데이터 responseType에 따라 달라짐)
 * 6. responseText : 서버가 전송한 HTTP 요청에 대한 응답 문자열
 */

// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();
const url = 'https://api.corona-19.kr/korea/beta/?serviceKey=Fn5kjtwmypLOQ19SZN2uEvCARP47qrHGs';

// HTTP 요청 초기화
// xhr.open(method, url, async);
// 1. method :  HTTP요청 메서드 (GET|POST|PUT|DELETE)
// 2. url : HTTP 요청을 전송할 URL(string)
// 3. async : 비동기 요청 여부(기본값 : true)
xhr.open('GET', url);

// HTTP 요청 헤더 설정
// 클라이언트가 서버로 전송할 데이터의 MIME타입 지정 : JSON
xhr.setRequestHeader('content-type', 'application/json');

// HTTP 요청 전송 
xhr.send();

// xhr.readyState가 변경될때마다 실행되는 이벤트
xhr.onreadystatechange = function() {
    const { readyState, status, statusText } = xhr;

    if (readyState !== xhr.DONE) return;

    if (status === 200) {
        console.log('statusText', statusText);
        console.log(JSON.parse(xhr.responseText));  // XML 응답 한 상태인 경우 데이터를 json데이터 포맷으로 변경한다.
    }
}

xhr.onerror = function() {
    console.log('error', xhr.status);
}

xhr.onload = function() {
    // onreadystatechange메서드 이후 정상적으로 http요청이 성공적으로 완료되는 경우 호출함.
    if (xhr.status !== 200) return;
    console.log('statusText', xhr.statusText);
    console.log('onload', xhr.status);
}
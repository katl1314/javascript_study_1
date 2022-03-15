/**
 * Promise.all : 여러 비동기 처리(프로미스)를 병렬 처리할 때 사용함.
 * 프로미스가 담긴 배열(이터러블)을 함수 인자로 사용되며,
 * 모든 프로미스가 fulfilled상태일 때까지 중단하지 않으며, 단 하나의 프로미스가 rejected상태이면 즉시 중단되며
 * rejected한 새로운 프로미스가 반환되고, 정상적으로 동작시 resolved한 프로미스가 반환됨. => 결과는 배열형태로 반환
 * 
 * Promise.race : Promise.all과 마찬가지로 여러 비동기 처리를 병렬 처리할 때 사용되며
 * 프로미스가 담긴 배열(이터러블)을 함수의 인자로 전달하며,
 * 가장 먼저 완료되는 프로미스 상태가 fulfilled일 때 resolve한 프로미스를 반환하고,
 * rejected인 경우 reject한 프로미스를 반환한다.
 * 
 * Promise.allSettled : 프로미스가 담긴 배열(이터러블)을 함수의 인자로 전달하며,
 * 모든 프로미스가 수행(fulfilled, rejected)되었을 때 처리 결과를 배열로 반환함.
 * 
 * Promise의 prototype메서드(then, catch)의 콜백은 마이크로태스크 큐에 저장되며, setTimeout의 콜백함수는 태스크 큐에 저장되어 서로 다른 곳에 저장된다.
 * 다만 마이크로태스크 큐가 태스크 큐보다 우선순위가 높기 때문에 마이크로태스크 큐의 내용이 먼저 처리가 되고, 태스크 큐의 내용이 처리가 된다.
 * 
 * fetch : XMLHttpRequest 객체와 마찬가지로 http 요청 전송 기능을 제공함.
 * fetch의 경우 XMLHttpRequest에 비해 사용법이 간단하며, 프로미스를 이용하기 때문에 콜백 패턴의 단점을 극복하였다.
 * 다만 현재 모던 브라우저에서는 지원되나 익스플로러에서는 지원되지 않는 단점이 있음.
 * fetch는 HTTP 응답을 나타내는 response 객체를 래핑한 Promise 객체를 반환.
 */

/**
 * The MIT License (MIT)
   Copyright (c) 2016 - 2020 Node Fetch Team
   Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
   to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
   and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
   The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
   IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import fetch from 'node-fetch';

// fetch함수는 프로미스를 반환한다.
// fetch(url, [options]): Promise
// fetch함수에 url만 인수로 전달시 GET 메서드로 리소스를 취득한다.

/* const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');  // http 요청 전달
promise
    .then(response => {
        // response은 리소스 url에 HTTP 응답 결과를 나타내는 객체
        // json메서드를 사용하여 Response객체에서 HTTP 응답 몸체를 취득하여 역직렬화한다.
        console.log(response.status);
        if (!(response.status === 200 || response.status === 201)) {
        throw new Error(response.status);   // http 응답 상태가 200, 201이 아닌경우 강제로 catch로 전달함.
        }
        return response.json()
    })
    .then(json => {
        // 위 변수들은 json메서드로 역직렬화한 HTTP 응답 몸체이다.
        console.log(json);
    })
    .catch(e => console.error('에러', e)); */

const request = {
    get : function(url) {
        return fetch(url);
    },
    post : function(url, payload) {
        console.log(url, payload)
        return fetch(url, {
            method : 'POST',
            headers : {'content-Type' : 'application/json'},
            body : JSON.stringify(payload)
        })
    },
    patch : function(url, payload) {
        return fetch(url, {
            method : 'PATCH',
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify(payload)
        })
    },
    delete : function(url) {
        return fetch(url, {
            method : 'DELETE'
        })
    }
}

const url = 'https://jsonplaceholder.typicode.com/todos';

/* request.post(`${url}`, {
    userId : 1,  
    title : 'Javascript', 
    completed : true
}).then(response => {
    if ((response.status !== 201)) {
        return new Error(response.status);
    }
    console.log(response);
    return response.json();
})
.then(response => console.log('post', response)); */

/* request.get(`${url}/1`)
    .then(response => response.json())
    .then(json => console.log(json)); */

/* request.patch(`${url}/1`, {
    completed : true
}).then(response => {
    return response.json();
})
.then(response => console.log('post', response)); */

request.delete(`${url}/1`)
    .then(response => response.json())
    .then(d => console.log(d));

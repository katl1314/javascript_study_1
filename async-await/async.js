/**
 * node.js의 경우 fetch를 사용하기 위해서는 npm i node-fetch를 이용하여 패키지를 설치해야한다.
 */
import fetch from 'node-fetch';

(async function fetchTodo() {
    /**
     * ES2017부터 async/await 함수가 추가됨.
     * then/catch/finally와 같이 콜백함수를 이용하여 처리하지 않아도 됨.
     */
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const response = await fetch(url);
    const todo = await response.json();
    console.log(todo);
})();

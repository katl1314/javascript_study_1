import fetch from 'node-fetch';

/**
 * 프로미스가 settled상태(비동기 처리가 수행)상태가 될때가지 pending(대기) 후 settled상태가 되면 resolve한 결과를 반환함.
 */

(async function awaitFunc() {
    /* const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const get = await fetch(url);
    const json = await get.json();
    console.log(json); */
    const a = () => new Promise(resolve => setTimeout(() => resolve(1), 3000));
    const b = () => new Promise(resolve => setTimeout(() => resolve(2), 2000));
    const c = () => new Promise(resolve => setTimeout(() => resolve(3), 1000));
    const promiseAll = await Promise.all([a(), b(), c()])
    console.log(promiseAll); // await키워드 사용시 프로미스가 settled상태가 될때 까지 대기함.
})();
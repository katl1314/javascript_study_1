/* // 객체 Promise의 정적 메서드
// Promise.resolve(data?) : 이미 존재하는 값을 래핑하여 프로미스를 생성한다.
const promiseResolved = Promise.resolve([1, 2, 3]);
promiseResolved.then(value => console.log(value));

// 위 예제를 Promise 생성자 함수를 이용하여 동일하게 구현한다.
const promiseResolved2 = new Promise((resolve, reject) => resolve([1,2,3]));
promiseResolved2.then(value => console.log(value));

// Promise.reject 메서드는 인수로 전달받은 값을 reject하는 함수이다.
// reject의 경우 Promise.prototype.catch를 이용하여 처리한다.
const promiseReject = Promise.reject(new Error('에러에러!!!!'));
promiseReject.catch(err => console.log(err));

// 위 예제를 Promise 생성자 함수를 이용하여 동일하게 구현한다.
const promiseReject2 = new Promise((resolve, reject) => reject(new Error('에러에러!!!!')));
promiseReject2.catch(err => console.log(err));
 */
/**
 * Promise.all 메서드
 * 여러 개의 비동기 처리를 모두 병렬 처리할 때 사용한다.
 * 비동기 처리(프로미스)를 배열(이터러블)로 묶은 다음 Promise.all함수의 인자로 전달하며, 모든 비동기 처리가 resolve이면 then, 하나라도 reject이면 catch를 호출합니다.
 */
//  console.time('a');
// const promiseAll = Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then(d => {console.log('2', d); console.timeEnd('a');}).catch(e => console.error('1', e));

// 6초 정도 소요됨.
// 함수로 하지 않으면 개별적으로 3초 뒤에 프로미스가 생성되기 때문에 연속적으로 출력함.
const Promise1 = () => new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000));
const Promise2 = () => new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000));
const Promise3 = () => new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000));

/* Promise1()
    .then(d => {
        console.log(d);
        return Promise2();
    })
    .then(d => {
        console.log(d);
        return Promise3();
    })
    .then(d => {
        console.log(d);
        console.timeEnd('a');
    }); */
// 3초정도 소요됨
// Promise.all은 모든 프로미스 상태값이 fulfilled인 경우 종료한다.
// 하나의 프로미스가 fulfilled가 아니면 다음 프로미스가 fulfilled가 되는 것을 기다리지 않는다.
const promiseAll = Promise.all([Promise1(), Promise2(), Promise3()]).then(d => {console.log(d);});
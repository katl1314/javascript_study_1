/**
 * Promise.race는 Promise.all과 동일하게 프로미스를 이터러블한 인수로 전달받는다. [Promise.race(1), new Promise.race(2)]
 * 다만 Promise.all과 다르게 Promise의 상태가 모두 fulfilled가 아니어도 중단되지 않는다. 
 * 가장 먼저 Promise fulfilled 상태가 된 프로미스의 처리 결과를 resolve하는 새로운 프로미스를 반환
 * 
 * 프로미스가 reject한 상태가 되면 Promise.all처럼 reject하는 새로운 프로미스를 반환한다.
 */

const Promise1 = () => new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000));
const Promise2 = () => new Promise((resolve, reject) => setTimeout(() => resolve(2), 1000));
const Promise3 = () => new Promise((resolve, reject) => setTimeout(() => resolve(555), 3000));
/**
 * Promise.race메서드는 가장 먼저 Promise가 fulfilled상태이면 resolve한 새로운 프로미스를 반환, 프로미스가 rejected상태가 되면 에러를 reject하는 프로미스를 반환한다.
 * 함수의 인자의 경우 Promise.all과 마찬가지로 프로미스를 배열과 같은 이터러블한 상태로 전달한다.
 * 
 */
console.time('a');
Promise.all([Promise1(), Promise2(), Promise3()])
    .then(d => console.timeEnd('a'))
    .catch(e => console.timeEnd('a'));

/**
 *  Promise.allSettled은 프로미스 요소를 갖는 배열을 전달하여 모두 fulfilled 또는 rejected상태이면 resolve한 프로미스를 반환한다.
 */
const p1 = Promise.allSettled([
    new Promise((resolve, reject) => resolve('resolved')),
    new Promise((resolve, reject) => reject('rejected'))
]).then(d => console.log(d));

console.log(p1);
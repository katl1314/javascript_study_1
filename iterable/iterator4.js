/**
 * 피보나치 수열의 구현한 사용자 정의 이터러블을 반환하는 함수
 * 함수에 파라미터로 최대값을 전달받는다.
 * fibonacciFn함수를 호출할 경우 Symbol.iterator를 호출하는 객체를 반환한다. 
 * @param {number} max 
 * @returns 
 */
const fibonacciFn = function (max) {
    if (typeof max !== 'number') {
        return;
    }

    let [pre, cur] = [0, 1];
    
    return {
            [Symbol.iterator]() {
            return {
                next() {
                    [pre, cur] = [cur, cur + pre];
                    return {value : cur, done : cur >= max}
                }
            }
        }
    }
}

const fibonacci = fibonacciFn(20);
// console.log([...fibonacci]);

for (const f of fibonacci) {
    console.log(f);
}
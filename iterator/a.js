/* const infiniteFibonacci = (function() {
    let [pre, cur] = [0, 1];
    return  {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            [pre, cur] = [cur, pre + cur];
            return {value : cur};
        }
    }
})();

for (const num of infiniteFibonacci) {
    if (num > 10000) break;
    console.log(num);
} */

const test = (function () {
    let num = 0;
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            return {
                value : ++num,
                done : num === 10
            }
        }
    }
})();

// 이터러블한 객체는 for...of를 이용할 수 있음.
for (let item of test) {
    console.log(item);
}
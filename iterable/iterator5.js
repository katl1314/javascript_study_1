const iterator = function(max) {
    [pre, cur] = [0, 1];
    // iterable을 반환한다.
    return {
        [Symbol.iterator]() {
            // 이터레이터를 생성하려면 이터러블의 Symbol.iterator를 호출해야한다.
            return this;
        },
        next() {
            [pre, cur] = [cur, cur + pre];
            return {value : cur, done : cur >= max};
        }
    }
}

// 이터레이터 생성
// fibonacci는 이터레이터이자 이터러블이다.
const fibonacci = iterator(10);

for (const o of fibonacci) {
    console.log(o);
}

const iter = iterator(10);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
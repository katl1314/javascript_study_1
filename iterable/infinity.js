const fibonacciFn = function() {
    let [pre, cur] = [0, 1];
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            [pre, cur] = [cur, pre + cur];
            return {value : cur, done : cur >= 10}
        }
    }
}

// fibonacciFn()호출시 이터러블이자 이터레이터가 반환됨.
for (const o of fibonacciFn()) {
    console.log(o);
    if (o > 100) {
        break;
    }
}

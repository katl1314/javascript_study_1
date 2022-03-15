const iterator = {
    // iterable : 순환 가능한 자료구조
    [Symbol.iterator]() {
        let cur = 1;
        const max = 5;
        return {
            // iterator
            /*
                iterator 객체
                value : 값
                done : 반복 여부 true시 반복을 종료함.
            */
            next() {
                return { value : cur ++, done : cur > max + 1};
            }
        }
    }
}

for (const it of iterator) {
    console.log(it);
}
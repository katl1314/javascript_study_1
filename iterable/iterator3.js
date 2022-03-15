/**
 * 사용자 정의 이터러블
 */
const fibonacci = {
    // Symbol.iterator 메서드롤 호출하여 이터레이터 프로토콜을 준수!
    [Symbol.iterator]() {
        let [pre, cur] = [0, 1];  // 배열 디스트럭터 할당
        const max = 10;             // 최대값 설정
        return {
            next() {
                [pre, cur] = [cur, cur + pre];
                return {value : cur, done : pre > max}
            }
        }
    }
}

for (const num of fibonacci) {
    console.log(num);
}

console.log([...fibonacci]);    // spread 연산자

// 배열 디스트럭처링
[first, second, ...other] = fibonacci;

console.log('first ----- ', first);
console.log('second ---- ', second);
console.log('other ----- ', other, ...other);

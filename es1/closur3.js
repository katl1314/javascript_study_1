// 함수를 인자로 전달받고, 함수를 반환하는 고차함수
// 이 함수는 카운트 상태를 유지하기 위한 변수 counter를 기억하는 클로저를 반환한다.

function makeCounter(aux) {
    let counter = 0;
    // 클로저를 반환
    return function() {
        counter = aux(counter);
        return counter;
    }
}

function increase(counter) {
    return ++counter;
}

function decrease(counter) {
    return --counter;
}

// makeCounter는 고차함수로, 함수를 인자로 받고 함수를 반환하는 함수이다.
// makeCounter에서 반환하는 함수는, 자신이 생성시 렉시컬 환경인 makeCounter의 스코프에 속한 counter변수를 갖는 클로저이다.
// 고차함수로 반환된 함수는 독자적인 렉시컬 환경을 갖는다.
const increase2 = makeCounter(increase);     
console.log(increase2());   // 1
console.log(increase2());   // 2
console.log(increase2());   // 3

const decrease2 = makeCounter(decrease);
console.log(decrease2());   // -1
console.log(decrease2());   // -2
console.log(decrease2());   // -3
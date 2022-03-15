/**
 * 생성자 함수를 이용한 클로저
 */

const Counter = (function(){
    // 카운트 변수 선언
    // 즉시 실행 함수 내 선언된 변수로, 인스턴스로 접근할 수 없으며, 함수 외부에서 접근이 불가능한 은닉된 변수이다.
    let count = 0;
    const MIN = 0;

    // increase, decrease 프로토타입 메서드 선언
    Counter.prototype.increase = function() {
        return ++count;
    }

    Counter.prototype.decrease = function() {
        return count <= MIN ? MIN : --count;
    }
})
// 생성자 함수 호출
const counter = new Counter();
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.decrease());
console.log(counter.decrease());
console.log(counter.decrease());
console.log(counter.decrease());
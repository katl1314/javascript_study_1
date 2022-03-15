/**
 * 표준 빌트인 객체 (Array)에 사용자 정의 메서드를 정의하여 확장하는 것은 비추천
 * 표준 빌트인 객체는 읽기 전용으로 사용할 것
 * 왜냐, 나중에 추가될수 있는 함수명이 중복될 수 있다.
 * 만약 Array.prototype.find메서드를 사용자 정의 함수로 선언 후, 차후 버전으로 동일한 함수가 추가되었을때 추가된 기능은 커녕 기존 사용자 정의 함수로 덮어씌우기 때문.
 * 즉 사용자 정의 함수를 추가할 때 심벌값을 이용할 경우 해당 문제가 해결된다!
 */
const numbers = [1, 2, 3, 4, 5];
Array.prototype.sum = function() {
    // this는 sum메서드를 호출하는 배열을 의미한다.
    return this.reduce((prev, cur) => prev + cur, 0);
}

console.log(numbers.sum()); 

/**
 * Symbol을 이용한 Array 빌트인 객체의 사용자 정의함수 만들기
 */
Array.prototype[Symbol.for('multiply')] = function() {
    // Array.prototype.reduce(callback(previousValue, currentValue, currentIndex, array), initValue);
    return this.reduce((acc, value) => acc * value, 1); 
}

console.log(numbers[Symbol.for('multiply')]()); // 심볼값으로 정의된 사용자 정의 함수.
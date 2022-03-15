// 즉시 실행 함수

const Counter = (function() {
    let counter = 0;

    return function(aux) {
        counter = aux(counter);
        return counter;
    }
})();

const increase = function(num) {
    return ++num;
}

const decrease = function(num) {
    return --num;
}

console.log(Counter);   // Counter내 선언된 중첩 함수를 가지고 있음. function(aux)

console.log(Counter(increase));
console.log(Counter(increase));
console.log(Counter(increase));
console.log(Counter(decrease));
console.log(Counter(decrease));
console.log(Counter(decrease));
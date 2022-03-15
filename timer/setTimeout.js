// 1. 타이머 함수
// setTimeout, clearTimeout
// setTimeout함수는 두번째 인자로 ms을 전달받아 해당 ms가 지난 후에 콜백 함수를 실행한다.
// setTimeout(callback(...params), millisecond, ...params);
// 세번째 파라미터는 콜백함수의 인수가 된다.

// 10초뒤에 콜백함수를 실행합니다.
// ms가 기입하지 않으면 0초뒤에 실행합니다.
const timer1 = setTimeout(() => console.log('3초뒤에 콜백함수를 실행합니다.'), 1000);

// 3초뒤에 콜백함수를 실행합니다. 콜백함수의 인자로 Choi, Hello가 전달됩니다.
const timer2 = setTimeout(function(...arr) {
    console.log(arr[0], arr[1]);
    // setTimeout함수가 반환된 id를 clearTimeout함수의 인수로 전달하면 타이머가 취소됨.
    // timer1의 콜백함수가 실행하지 않는다.
    clearTimeout(timer1);   
}, 3000, 'Choi', 'Hello');


// 2. setInterval/clearInterval
// ms마다 주기적으로 콜백함수를 실행한다.
/* setInterval(function() {
    console.log('3초마다 실행됨');
}, 3000); */
// clearInterval(id): setInterval함수의 반환값을 clearInterval함수의 인수로 전달하여 타이머를 중단한다.

(function Timer() {
    let count = 0;
    let interval = setInterval(function() {
        console.log('1초마다 실행됨', count++);
        if (count === 5) {
            clearInterval(interval); // count가 5이면 interval을 취소합니다.
            console.log('타이머를 취소한다.');
        }
    }, 1000);
    return interval;
})();
console.log('먼저 실행합니다.');
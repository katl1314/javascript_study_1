/**
 * closur를 통한 자주 나오는 실수
 */

var funcs = [];

// var는 함수 스코프이기 때문에 전역변수이다.
// 전역변수 a는 0, 1, ... 4의 값을 순차적으로 할당한다.
// funcs배열의 요소를 추가한 함수에는 전역 변수 i를 참고하여 4가 반환됨
// 변수 i가 전역변수이면 아래 function은 반복문이 끝나는 시점에 호출된다.
/* for (var i = 0; i < 5; i++) {
    funcs[i] = (function(i) {
        return i;
    })(i);
} */

for (let i = 0; i < 5; i++) {
    console.log('i', i);
    funcs[i] = function() {
        console.log('i2', i);
        return i;
    }
}

for (var j = 0; j < funcs.length; j++) {
    console.log(funcs[j]());
}
// 제너레이터 함수
function* generator() {
    try {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    } catch(e) {
        console.error(e);
    }
}

/**
 * 제너레이터의 일시 중지 및 재개
 * Generator.prototype.next()호출 시 제너레이터 함수 내 yield를 실행하여 
 * value와 done 프로퍼티로 구성된 객체를 반환합니다.
 */
const myGenerator = generator();
// console.log(myGenerator.next()); // { value: 1, done: false }
// console.log(myGenerator.next()); // { value: 2, done: false }
// console.log(myGenerator.next()); // { value: 3, done: false }
// // console.log(myGenerator.return('done success')); // { value: 'done success', done: true }
// console.log(myGenerator.throw('throw'));
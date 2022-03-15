/**
 * 이터레이션 프로토콜
 * - ES6에 도입
 * - 순회가능한 데이터 컬렉션(자료구조)를 만들기 위해 정의함. => 약속된 규칙
 * - 배열, 문자열, 유사 배열 객체(arguments ...), DOM컬렉션등 순회 가능한 데이터면 가능함.
 */

const isFunction = (d) => {
    return typeof d === 'function';
}

const isNull = (d) => {
    return d === null;
}

const iterable = v => !isNull(v) && isFunction(v[Symbol.iterator]);

console.log(iterable([]));
console.log(iterable(''));
console.log(iterable(new Map()));
console.log(iterable(new Set()));
console.log(iterable({}));

function sum() {
    const datas = Array.prototype.slice.call(arguments);
    console.log('arguments', datas);
}

sum(1, 2, 3, 4, 5);

const data = [1, 2, 3, 4, 5];
data.splice(0, 0, 'a');
console.log(data);
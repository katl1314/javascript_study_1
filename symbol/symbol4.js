// Object.freeze(object|array) : 해당 메서드 사용시 프로퍼티의 값을 변경할 수 없음. (객체 또는 배열을 동결(불변)시킨다.)
const obj = Object.freeze({
    a : 1,
    b : 2,
    c : 3,
    d : 4
});

const obj2 = {
    a : 1,
    b : 2,
    c : 3,
    d : 4
}

console.log('obj', obj);
console.log('obj2', obj2);

obj.a = 3;
obj2.a = 3;

console.log('obj', obj);
console.log('obj2', obj2);

// 배열 요소 추가, 삭제, 변경이 불가능함.
const arr = Object.freeze([1, 2, 3, 4, 5]);
// const arr = [1, 2, 3, 4, 5];

console.log('arr', arr);
// arr[0] = 10;         //  Object.freeze() 메서드 사용한 배열일 때 데이터 조작 모두 불가능.
// arr.push(10);        //  
// arr.pop();           // 
console.log('arr', arr);

const symbolObj = Object.freeze({
    a : Symbol('A'),
    b : Symbol('B'),
    c : Symbol('C'),
    d : Symbol('D'),
});

console.log('symbolObj', symbolObj);

const mySymbol = Symbol('symbol');
console.log(mySymbol.description);

/**
 * 객체의 프로퍼티는 문자열과 심볼 값으로 만들 수 있으며, 동적으로 생성이 가능하다.
 * 심벌값의 경우 [](대괄호)를 사용해야한다.
 * 다만, 심볼 값을 프로퍼티 key로 사용하여 생성된 프로퍼티는 for...in, Object.keys, Object.entries, Object.getOwnPropertyNames의 메서드로 찾을 수 없다.
 * 즉, 특정 프로퍼티를 외부에 노출하지 않을 경우 심볼 값을 프로퍼티 key로 사용하자.
 * 프로퍼티 키를 심볼값으로 사용시 어떠한 경우에도 다른 프로퍼티 키와 중복되지 않는다.
 */

const obj3 = {
    [mySymbol] : 10
};

console.log(obj3[mySymbol]);

const obj4 = {
    [Symbol.for('foo')] : 'symbol키로 만들어진 프로퍼티',
    b : 2
};

console.log(obj4[Symbol.for('foo')]);

/**
 * 아래 네개의 예제를 보면 심볼 값으로 프로퍼티 키로 설정한 프로퍼티는 표시되지 않는다.
 * 일반 프로퍼티는 반환된다.
 */
console.log('Object.getOwnPropertyNames(obj4)', Object.getOwnPropertyNames(obj4));

for (let p in obj4) {
    console.log('for...in', p);
}

console.log('Object.keys(obj4)',Object.keys(obj4));
console.log('Object.entries(obj4)',Object.entries(obj4));

/**
 * 다만 심볼 값을 key로 설정한 프로퍼티를 완전히 숨길 수는 없다.
 * Object.getOwnPropertySymbols(obj)를 호출하여 심볼값으로 설정한 프로퍼티 키를 확인할 수 있다.
 */
console.log('Object.getOwnPropertySymbols(obj4)', Object.getOwnPropertySymbols(obj4));

const symbolKey = Object.getOwnPropertySymbols(obj4)[0];
console.log(obj4[symbolKey]);

console.log(symbolKey, Symbol.keyFor(symbolKey));


/**
 * Symbol.for, Symbol.keyFor 메서드
 * - Symbol.for메서드는 전역 심볼 레지스트리에 해당 키로 저장된 심볼 값이 없으면 새로운 심볼 값을 저장한다.
 * 만약 전역 심볼 레지스트리에 키로 저장된 심볼 값이 있으면 해당 심볼 값을 반환한다.
 * Symbol.for(key)
 */

const s1 = Symbol.for('Symbol1');
const s2 = Symbol.for('Symbol1');

console.log(s1, s2, s1 === s2);

/**
 * Symbol.keyFor(key) : 전역 심볼 레지스트리에 인수로 전달한 키값으로 저장된 심볼 값을 반환합니다.
 */

console.log(Symbol.keyFor(s1));

// Symbol함수로 생성한 심볼은 전역 심볼 레지스트리에 따로 저장하지 않는다.
const s3 = Symbol('foo');
console.log(Symbol.keyFor(s3));
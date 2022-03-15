// Set 객체의 요소 삭제
// 1. 지정된 요소 삭제
// Set.prototype.delete 메소드를 이용하여 Set객체에 저장된 요소를 삭제할 수 있다.
// 함수 인자를 저장된 값을 입력

const set = new Set([1, true, 'happy', {}]);

console.log('before delete', set, set.size);

set.delete(true).delete({});       // Set객체의 true를 삭제한다.

console.log('after delete', set, set.size);

// Set객체의 요소 존재 여부 확인
// Set.prototype.has 메서드를 이용하여 Set객체에 해당 요소가 있는지 boolean값으로 반환한다.

console.log('set.has(\'happy\')', set.has('happy'));    // Set객체 내 요소 중 happy가 있으므로 true
console.log('set.has(false)', set.has(false));          // Set객체 내 요소 중 false가 없으므로 false

set.clear();    // Set객체의 모든 요소 삭제
console.log('after clear', set, set.size);
/* import *  as _ from 'underscore';

_.forEach([1, 2, 3, 4, 5], function(element, key) {
    console.log(element, key);
}) */

/**
 * Map
 * 키와 값의 쌍으로 이루어진 컬렉션임.]
 * 객체와 유사하나 다음과 같은 차이점이 있음.
 * Map객체의 경우 키로 사용할 수 있는 값은 객체를 포함한 모든 값.
 * 객체와 다르게 이터러블함.
 * 요소 개수 확인 Map.prototype.size를 이용하여 구할 수 있음.
 */

// Map객체 생성
const map = new Map([['key1', 'value1'], ['key2', 'value2']]);  
// 요소 추가
// Map객체에 요소를 추가하고 싶으면 Map.prototype.set메서드를 이용한다.
// set메서드 중복 추가 허용하지 않는다.
map.set('key3', 'value3');
console.log(map);

// Map객체에 요소를 가져오고 싶으면 Map.prototype.get메서드를 이용한다.
// 함수 인자로 key를 전달하여 매칭되는 value를 반환한다.
console.log(map.get('key3'));

// Map객체 요소가 있는지 검사한다. Map.prototype.has메서드를 이용한다.
// 함수 인자로 key를 전달하여 객체 내 해당 key가 있는지 검사한다. => boolean
console.log(map.has('key1'));

console.log(map.entries());
console.log(map.size);

console.log(map.keys());
console.log(map.values());

map.forEach(function(value, key) {
    console.log(`key : ${key}, value : ${value}`);
})

// Ma객체 내 요소를 삭제, Map.prototype.delete메서드를 이용한다,
// 객체 내 해당 key가 있는 경우 key에 해당하는 요소를 삭제한다.
// set메서드와 달리 연속적으로 호출(메서드 체이닝)이 불가능하다.
map.delete('key1');
console.log(map.size);

// Map객체 모든 요소 일괄 삭제 Map.prototype.clear메서드 이용
map.clear();
console.log(map.size);
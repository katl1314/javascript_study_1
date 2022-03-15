// 요소 순회 
// Set.prototype.forEach함수를 이용하여 요소를 순회할 수 있음.
/**
 * Set.prototype.forEach함수 내 콜백함수를 이용하여 순회중인 요소를 가져올 수 있으며,
 * 콜백함수에는 3가지 인수를 입력받는다.
 * 
 * 1. 첫번째 인자 : 순회중인 요소 값
 * 2. 두번째 인자 : 순회중인 요소 값
 * 3. 세번째 인자 : 현재 순회중인 Set객체
 * 
 * Set객체 자체 순서가 중요시 되지 않아 index를 받지 않는다. 
 */
const array = [1, 2, 2, 3, 4, 5];

const mySet = new Set(array);
console.log('mySet ----- ', mySet);

mySet.forEach(function (val1, val2, set) {
    console.log(val1, val2, set);
});

/**
 * Set객체는 이터러블한 객체이므로, Set.prototype.forEach 또는 for...of를 이용하여 요소를 순회할 수 있다.
 */

for (const item of mySet) {
    console.log('for...of --- ', item);
}
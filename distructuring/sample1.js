/**
 * 디스트럭처링 할당
 * 구조 분해 할당은 구조화된 배열을 이터러블 또는 객체를 디스트럭처링하여 1개 이상 변수에 개별적으로 할당함.
 */

var arrays = [1, 2, 3];
// [할당받을 변수들] = 원본 배열(이터러블)
const [one, two, three] = arrays;

console.log(one + two + three);

// 기존 배열의 요소를 변수에 할당하려면 다음과 같이 해야한다.
const num1 = arrays[0];
const num2 = arrays[1];
const num3 = arrays[2];

console.log(num1, num2, num3);

const [a , b] = [1];
console.log(a, b);  // 첫번째 변수에는 1이 들어가고, 나머지 변수에는 undefined가 들어간다.
// 반드시 변수의 개수와 배열요소 개수가 일치할 필요는 없다.


const [g, , m] = [1, 2, 3];
console.log(g, m);
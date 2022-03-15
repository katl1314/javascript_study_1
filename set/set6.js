/**
 * 부분 집합과 상위 집합
 * 집합 A가 집합 B에 포함되는 경우 집합 A는 집합 B의 부분 집합이며, 집합 B는 집합 B의 상위 집합이다.
 */

Set.prototype.subSet = function (array) {
    let isSubSet = true;
    for (const item of array) {
        if(!this.has(item)) isSubSet = false
    }
    return isSubSet;
}

Set.prototype.subSet2 = function (array) {
    return [...array].every((val, i, array) => this.has(val));
}

const A = new Set([1, 2, 3, 4]);
const B = new Set([2, 4]);

// 집합 A는 집합 B의 상위 집합인지 검사한다.
console.log(A.subSet(B));

// 집합 B는 집합 A의 상위 집합인지 검사한다.
console.log(B.subSet(A));

A.subSet2(B);
B.subSet2(A);
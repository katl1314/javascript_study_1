/**
 * 모듈은 독자적인 스코프(모듈 스코프)를 갖는다.!!!!!
 * export : 모듈 내부의 식별자를 공개하여 외부에서 재사용할 수 있게 해줌.
 * export를 사용한다.
 */

// 각각 export키워드를 붙이는 방법

export const PI = 3.141592; // 변수 공개

export const sum = (a, b) => a + b; // 함수 공개

export class People {               // 클래스 공개
    constructor(name) {
        this.name = name || 'none';
    }
}

// 한꺼번에 export하는 법
let a1 = 1;
let a2 = 2;
const a3 = function() {
    return a1 + a2;
}

export {a1, a2, a3};    // 한꺼번에 export를 할 수 있다.
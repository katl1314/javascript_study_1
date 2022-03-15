class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        // Array.prototype.map(callback:(data, index, array), thisArg?: this)
        /* return arr.map(function(v, i, arr) {
            return `${this.prefix}${v}`;
        }.bind(this)); */
        return arr.map((v, i, arr) => `${this.prefix}${v}`);
    }
}

var prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select']));

/**
 * 일반 함수를 이용하여 콜백함수에 this를 객체로 바인딩하기
 * 1. 상위 스코프의 임의의 변수에 this를 바인딩
 * var that = this; 
 * arr.map(function(v, i) {
 *  console.log(that);
 * });
 * 
 * 2. bind함수 이용
 *  return arr.map(function(v, i, arr) {
        return `${this.prefix}${v}`;
    }.bind(this));  // 익명 함수에 상위 스코프의 this를 바인딩한다. 

    3. 화살표 함수 이용
    화살표 함수는 함수 자체 this를 가지고 있지 않으나, 스코프 체인에 의해 상위 스코프의 this를 참조한다.
 */
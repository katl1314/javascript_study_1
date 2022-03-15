var obj = {
    x : 1,
    // foo는 메서드이다. (메소드 축약 표현)
    foo() {
        return this.x;
    },
    // bar에 바인딩된 함수는 일반함수이다.
    bar : function() {
        return this.x;
    }
}

/**
 * ES6사양에서 메서드는 메서드 축약 표현으로 정의된 함수를 의미한다.
 */

console.log(obj.foo());     // 1
console.log(obj.bar());     // 1

// console.log(new obj.foo());      // ES6에서 권고하는 메소드 축약 표현 사용시, TypeError 발생  
// console.log(new obj.bar());      // bar {}

console.log('foo', obj.foo.hasOwnProperty('prototype'));       // Object.prototype.hasOwnProperty(propertyKey);
console.log('bar', obj.bar.hasOwnProperty('prototype'));       // Object.prototype.hasOwnProperty(propertyKey);
console.log('foo', Object.getOwnPropertyDescriptors(obj.foo)); // static Object.getOwnPropertyDescriptiors
console.log('bar', Object.getOwnPropertyDescriptors(obj.bar)); // static Object.getOwnPropertyDescriptiors

// new obj.bar();
console.log(new obj.bar());

// new obj.foo(); 메소드 축약 표현으로 구성된 메서드 => 생성자 함수 호출 불가
// console.log(new obj.foo());
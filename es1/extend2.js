/**
 * 동적 상속
 */
const Base1 = (function() {
    function Base1(a) {
        this.a = a;
    }

    Base1.prototype.getA = function() {
        return `Base1 ${this.a}`;
    }

    Base1.sayHello = function() {
        console.log('Hello!!!!');
    }
    return Base1;
})();


class Derived extends Base1 {}

const derived = new Derived(10);

console.log(derived, derived.getA());
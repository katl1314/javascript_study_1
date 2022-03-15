function Base1(a) {
    this.a = a;
}

class Base2 {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}

let condition = true;

class Derived extends (condition ? Base1 : Base2) {

}

const derived = new Derived(10);

console.log(derived instanceof Base1);
console.log(derived instanceof Base2);

function add(...nums) {
    console.log(nums.reduce((acc, value) => acc + value, 0));
}

add.apply(null, [1, 2, 3, 4, 5]);
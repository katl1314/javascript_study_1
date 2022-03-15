const map = new Map([['key1', 'value1']]);
map.set('key2', 'value2');
map.set('key3', 'value3');

/**
 * Map객체는 이터러블한 객체이므로 forEach, for...of를 이용하여 요소 순회가 가능하다.
 */

map.forEach((v, k, m) => {
    console.log('forEach ---- ', v, k, m);
});

for (const [m, v] of map) {
    console.log('for...of', m, v);
}

console.log(map.entries());

console.log(Array.from(new Set([1, 2, 2, 3, 3])));
console.log([... new Set([1, 2, 2, 3, 3])]);

class Type {
    constructor (value) {
        this.value = value;
    }

    static isString (value) {
        return typeof value === 'string';
    }

    static isBoolean (value) {
        return typeof value === 'boolean';
    }

    static isNumber (value) {
        return typeof value === 'number';
    }

    static isArray (value) {
        return Array.isArray(value);
    }

    static isObject (value) {
        return typeof value === 'object' && !this.isArray(value);
    }

    getLength () {
        return this.value.length;
    }
}
const type = new Type('1111');
console.log(Type.isString('true'));
console.log(Type.isString(true));
console.log(Type.isNumber('10'));
console.log(Type.isNumber(10));
console.log(type.__proto__, Type.prototype, type.getLength());
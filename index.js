/**
 * @description Set객체를 이용하여 교집합을 for...or, Set.prototype.has를 이용하여 구현함.
 * @param {any[]} arrays  원본 배열
 * @returns {Set}
 */
 const intersection = function (arrays) {
    const result = new Set();
    for (const item of arrays) {
        if (this.has(item)) {
            result.add(item);
        }
    }
    return result;
}

/**
 * @description Set객체를 이용하여 교집합을 Array.prototype.filter, spread문법, Set.prototype.has를 이용하여 구현함.
 * @param {any[]} arrays  원본 배열
 * @returns {Set}
 */
const intersection2 = function (arrays) {
    return new Set([...arrays].filter((v, i, arr) => this.has(v)));
}

/**
 * @description 합집합 
 * @param {any[]} arrays 원본 배열
 * @returns {Set} 
 */
const union = function (arrays) {
    return new Set([...this, ...arrays]);
}

/**
 * @description 합집합 2
 * @param {any[]} arrays 원본 배열
 * @returns {Set} 
 */
const union2 = function (arrays) {
   for (const item of arrays) {
        this.add(item);
   } 
   return this;
}

/**
 * @description 차집합 
 * @param {any[]} arrays 원본 배열
 * @returns {Set} 
 */
const difference = function (arrays) {
    const result = new Set();
    for (const item of arrays) {
        !this.has(item) && result.add(item);
    }
    return result;
}

/**
 * @description 차집합 2
 * @param {any[]} arrays 원본 배열
 * @returns {Set} 
 */
const difference2 = function (arrays) {
    return new Set([...this].filter((v, i, arr) => !arrays.has(v)));
}


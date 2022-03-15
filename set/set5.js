/**
 * @description Set객체를 이용하여 교집합을 for...or, Set.prototype.has를 이용하여 구현함.
 * @param {any[]} arrays 
 * @returns Set
 */
Set.prototype.intersection = function (arrays) {
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
 * @param {any[]} arrays 
 * @returns Set
 */
Set.prototype.intersection2 = function (arrays) {
    return new Set([...arrays].filter((v, i, arr) => this.has(v)));
}

/**
 * @description 합집합 
 * @param {any[]} arrays
 * @returns Set 
 */
Set.prototype.union = function (arrays) {
    return new Set([...this, ...arrays]);
}

/**
 * @description 합집합 2
 * @param {any[]} arrays
 * @returns Set 
 */
Set.prototype.union2 = function (arrays) {
   for (const item of arrays) {
        this.add(item);
   } 
   return this;
}

/**
 * @description 차집합 
 * @param {any[]} arrays
 * @returns Set 
 */
Set.prototype.difference = function (arrays) {
    const result = new Set();
    for (const item of arrays) {
        !this.has(item) && result.add(item);
    }
    return result;
}

/**
 * @description 차집합 2
 * @param {any[]} arrays
 * @returns Set 
 */
Set.prototype.difference2 = function (arrays) {
    return new Set([...this].filter((v, i, arr) => !arrays.has(v)));
}

const arr1 = [1, 2, 3, 4];
const arr2 = [2, 4];

const set1 = new Set(arr1);
const set2 = new Set(arr2);

// 교집합
console.log('set1.intersection(set2)', set1.intersection(set2));    // Set(2) { 2, 4 }        
console.log('set1.intersection2(set2)', set1.intersection2(set2));  // Set(2) { 2, 4 }

// 합집합
console.log('set1.union(set2)', set1.union(set2));                  // Set(4) { 1, 2, 3, 4 }
console.log('set2.union(set1)', set2.union(set1));                  // Set(4) { 2, 4, 1, 3 }

console.log('set1.union2(set2)', set1.union2(set2));                // Set(4) { 1, 2, 3, 4 }
console.log('set2.union(set1)', set2.union(set1));                  // Set(4) { 2, 4, 1, 3 }


// 차집합
console.log('set1.difference(set2)', set1.difference(set2));        // Set(0) {}
console.log('set2.difference(set1)', set2.difference(set1));        // Set(2) {1, 3}

console.log('set1.difference2(set2)', set1.difference2(set2));      // Set(2) {1, 3}
console.log('set2.difference2(set1)', set2.difference2(set1));      // Set(0) {}


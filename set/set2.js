const numbers = [1, 2, 2, 3, 4, 3, 5];
const uniq = (array) => array.filter((value, index, temps) => temps.indexOf(value) === index);

console.log(`uniq([${numbers}])`, uniq(numbers));

const setUniq = (array) => new Array(...new Set(array));

console.log(`setUniq([${numbers}])`, setUniq(numbers));
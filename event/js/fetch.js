export function sum (...numbers) {
    return numbers.reduce((previousValue, currentValue, currentIndex, array) => previousValue + currentValue, 0);
}

export function multiply (...numbers) {
    return numbers.reduce((previousValue, currentValue, currentIndex, array) => previousValue * currentValue, 1);
}
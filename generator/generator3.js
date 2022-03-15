function* getFunc() {
    const x = yield 1;

    const y = yield (x + 10);

    return x + y;
}

const myGenerator = getFunc(0);
console.log(myGenerator.next());
console.log(myGenerator.next(10));
console.log(myGenerator.next(20));

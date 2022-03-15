(function func() {
    const iterable = Array.from(arguments);
    const iterator = iterable[Symbol.iterator]();
    
    while (true) {
        /*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
        const {value, done} = iterator.next();
        console.log(`value : ${value}, done : ${done}`);
        if (done) {
            break;
        }
    }
})(1, 2, 3, 4, 5, 6);
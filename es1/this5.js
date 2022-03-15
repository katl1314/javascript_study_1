var value = 1;

const obj = {
    value : 100,
    func() {
        /* setTimeout(function() {
            console.log(this.value);
        }.bind(this), 1000); */
        setTimeout(() => {
            console.log(this.value);
        }, 100);
    }
}

obj.func();
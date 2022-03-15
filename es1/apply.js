function getThisBinding() {
    console.log(this);
}

const obj = { a : 1 };

getThisBinding.call(obj);
getThisBinding.apply(obj);
getThisBinding.bind(obj)();
/**
 * Function.prototype.call와 Function.prototype.apply은 함수를 간접적으로 호출하기 위한 메소드
 * 함수 간접 호출 시 this는 인자로 전달받은 객체 obj가 된다.
 */

function getThisBindingArgs(...args) {
    console.log(args);
    console.log(Array.prototype.slice.apply(arguments)); // arguments는 배열이 아니기 때문에 slice를 사용할 수 없으나 call, apply을 이용하여 간접 호출이 가능함.
}

// getThisBindingArgs함수를 호출하면서 첫번째 인자로 전달한 객체를 함수내 this와 바인딩된다.
getThisBindingArgs.call(obj, 1, 2, 3);  // call함수 호출시 인자는 리스트 형태로...
getThisBindingArgs.apply(obj, [1, 2, 3]);  // apply함수 호출시 인자는 배열 형태로...
getThisBindingArgs.bind(obj, 1, 2, 3)();    // call함수와 비슷함...

// apply메서드는 호출한 함수의 인수를 배열로 묶어서 전달함.
// call메서드는 호출한 함수의 인수를 쉼표로 구분하여 리스트 형식으로 전달함.

const person = {
    name : 'Lee',
    foo(callback) {
        console.log('1', this);  // person.foo함수의 this는 person이다.
        // 다만 person.foo의 콜백함수는 일반함수로서 this는 전역 객체 window or global을 가리킨다.
        // 그래서 callback함수에 this를 binding하는 샘플이다.
        /* setTimeout(function() {
            // setTimeout의 콜백함수도 일반함수이므로 bind(this)설정
            console.log('2', this);
            callback.call(this);
        }.bind(this), 100); */
        // setTimeout(callback.bind(this), 100);
        /* setTimeout(() => {
            callback.call(this);
        }, 100); */
    }
}

person.foo(function(){
    console.log(`My name is ${this.name}.`);
})
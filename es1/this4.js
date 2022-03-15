var value = 1;
const obj = {
    value : 100,
    func () {
        console.log('func this.value', this.value);
        const that = this;
        const bar = function(){
            // console.log('bar this',this);
            // 화살표함수내 this는 상위 스코프의 this를 가리키기 때문에 obj객체를 가리킨다.
            console.log('bar this.value', this.value);
        }
        /**
         * 중첩함수에서 this호출하는 법
         * 1. 상위 스코프에서 this값을 참조하는 변수를 받아서 중첩함수에서 해당 변수를 참조하는 방법
         * 2. 간접 메소드 호출 Function.prototype.call, apply, bind를 이용
         */
        // bar.call(this);
        // bar.apply(this);
        bar.bind(this)();
    }
}

obj.func();
// var 키워드로 전역변수를 선언.
const value = 1;

const obj = {
    value : 100,
    func() {
        console.log('foo\'s this : ', this);    // {value, func() {}}
        console.log('foo\'s this.value : ', this.value);    // 100

        // 메소드 내 정의한 중첩 함수
        function bar() {
            console.log('bar \'s this : ', this === global);    // true
            console.log('bar \'s this.value : ', this.value);   // 1
        }

        // 메소드 내 선언된 중첩함수는 일반 함수로 호출함.
        // 중첩함수 내 this는 일반함수로 호출했기 때문에 전역 객체가 반환됨.
        bar();  // 중첩함수 호출
    }
};

obj.func();  // 객체를 이용하여 foo메소드를 호출함. this는 객체인 obj
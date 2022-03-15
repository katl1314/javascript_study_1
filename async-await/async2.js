// async 함수는 암묵적으로 Promise를 반환하기 때문에 then, catch, finally함수를 사용할 수 있다.
// await는 async함수 내 사용해야 한다.
// class의 constructor에 async를 사용할 수 없다.

// async 함수 선언문
async function foo(n) { return n; }
foo(1).then(d => console.log('foo', d));

// async 함수 표현식
const foo2 = async function (n) { return n; }
foo2(10).then(d => console.log('foo2', d));

// async 화살표 함수
const foo3 = async n => {
    return n;
}

foo3(20).then(d => console.log('foo3', d));

// async 메서드
const obj = {
    async foo4(n) {
        return n;
    }
}

obj.foo4(10).then(d => console.log('foo4', d));

class classTest {
    async foo5(n) {
        return n;
    }
}

new classTest().foo5(18).then(d => console.log('foo5', d));
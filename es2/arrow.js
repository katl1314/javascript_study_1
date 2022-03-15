/**
 * 화살표 함수
 * (=>)을 이용하여 함수를 구현함.
 * 콜백 함수 내부에서 this가 전역 객체를 가리키는 문제를 해결할 수 있음.
 */

const multiply = (a, b) => a * b;
console.log(multiply(5, 3));        // 15

var obj = {
    name : 'Choi',
    sayName : function() {
        this.name += ' MinHyeok';
        return () => {
            // 콜백 함수내 this가 전역객체를 가리키지 않도록 화살표 함수를 이용함.
            console.log(this.name);
        }
    }
}
const fn = obj.sayName();

fn();

// 매개변수가 1개이면 괄호를 생략해도 된다.
const oneParameter = x => x + 1;
console.log(oneParameter(5));   // 6 

// 매개변수가 없으면 괄호를 생략할 수 없다.
const noneParameter = () => 0;
console.log(noneParameter());   // 0
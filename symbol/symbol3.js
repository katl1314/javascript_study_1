// 심벌과 상수
// 위, 아래, 좌, 우를 나타내는 상수를 의미한다.
// 중복될 가능성이 없는 심벌 값으로 상수 값을 정의한다.
// 값이 숫자나 문자일 때 값이 중복되거나 변경되는 가능성이 있기 때문에 중복될 수 없는 유일무이한 심벌 값을 사용한다.
const Direction = {
    UP : Symbol('up'),
    DOWN : Symbol('down'),
    LEFT : Symbol('left'),
    RIGHT : Symbol('right')
};

const myDirection = Direction.UP;
console.log('myDirection', myDirection);

if (Direction.UP === myDirection) {
    console.log('You are going Up')
}

// Symbol.for와 Symbol.keyFor를 이용하여 전역 심볼 레지스트리에 키와 심벌값을 저장하고, 키를 반환해보는 실습.

const symbol1 = Symbol.for('mySymbolKey');  // 전역 심볼 레지스트리에 해당 key로 저장된 심볼값이 없으면 새로운 심볼값을 생성, 해당 key로 저장된 심볼값이 있으면 심볼값을 반환합니다.
console.log('Symbol.keyFor(key)', Symbol.keyFor(symbol1));  // Symbol.keyFor는 전역 심볼 레지스트리에 저장된 심볼값의 키를 반환. 
const iterable = [1, 2, 3]; // 이터러블한 배열 (반복이 가능한 데이터 구조)

// Symbol.iterator를 호출하여 이터레이터를 생성한다.
const iterator = iterable[Symbol.iterator]();

// 무한 루프
for (;;) {
    const res = iterator.next();

    // next메소드 반환값 중 done이 true이면 무한 루프를 종료한다. => done이 true이면 이터러블 반복 종료
    if (res.done) {
        break;
    }
    // 이터레이터 리절트 객체 중 현재 위치의 이터러블 값을 가지고 있는 value를 변수 item에 할당한다.
    const item = res.value;
    console.log('item', item);
}

function sum() {
    // 유사 배열 객체를 가지고 Symbol.iterator를 호출하여 이터레이터를 생성한다.
    // 이터러블한 유사 배열 객체는 for...of를 이용할 수 있다.
    const iterator = arguments[Symbol.iterator]();

    for (const item of iterator) {
        console.log('iterator ---- ', item);
    }

    for (const item of arguments) {
        console.log('arguments --- ', item);
    }

    // Array.from은 이터러블 또는 유사 배열 객체를 배열로 변환한다.
    console.log(Array.of(1, 2, 3, 4, 5));   // 인자로 받은 값을 배열로 변환함.
    console.log(Array.from(arguments)); // 유사 배열 객체를 배열로 변환함.
    console.log(Array.from('happy'));
}
sum('최민혁', '인성', '최고', '부대찌개', '닭갈비');

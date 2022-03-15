(function() {
    console.log('argumetns', arguments);
    const foo = () => {
        // 화살표 함수는 arguments를 갖지 않기 때문에 상위 스코프의 arguments를 참조한다.
        console.log('foo', arguments);
    }
    foo();
})(3, 4);
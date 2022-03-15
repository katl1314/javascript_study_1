
// 이벤트의 전파는 다음 순서로 진행한다.
// 캡처링 -> 타깃 단계 -> 버블링 단계
// 이벤트 전파 단계에서 이벤트 캐치를 해보자.

// body영역 클릭시
// target과 currentTarget이 body이면 타깃 단계

// p영역 클릭시
// body내 p태그가 있음.
// body는 버블링, p는 캡처링이므로 p -> body순으로 이벤트가 전파된다.

// button클릭시
// button은 body의 자식 노드인 p태그의 자식 노드임.
// 캡처링 -> 타깃 -> 버블링 순이므로, p(캡처링) -> button(타깃) -> body(버블링순으로 이벤트가 전파됨

// 버블링 단계에서 이벤트 캐치 ----------------- 3
// event.currentTarget : 이벤트 핸들러가 바인딩된 요소 노드
// event.target : 이벤트가 실제로 발생한 요소 노드
document.querySelector('body').addEventListener('click', function(event) {
    console.log('Handler on body');
    const {eventPhase, target, currentTarget} = event;
    console.log('body ------ ', eventPhase, target, currentTarget);
});

// 캡처링 단계에서 이벤트 캐치 ----------------- 1
document.querySelector('p').addEventListener('click', function(event) {
    console.log('Handler on Paragraph');
    const {eventPhase, target, currentTarget} = event;
    console.log('p ------ ', eventPhase, target, currentTarget);
}, true);

// 타깃 단계에서 이벤트 캐치 ------------------ 2
document.querySelector('button').addEventListener('click', function(event) {
    console.log('Handler on button');
    const {eventPhase, target, currentTarget} = event;
    console.log('button ------ ', eventPhase, target, currentTarget);
});

/**
 * 이벤트는 이벤트를 발생시킨 이벤트 타깃 요소은 물론 상위 DOM요소에서도 캐치할 수 있다.
 * 이벤트는 캡처링과 버블링으로 전파된다.
 * 다음 이벤트는 버블링으로 전파되지 않는다.
 * 1. onfocus, onblur (포커스 on, 포커스 off)
 * 2. onmouseenter, onmouseleave (마우스 이벤트)
 * 3. load, unload, about, error (리소스 이벤트)
 * 이 외의 나머지 이벤트는 버블링과 캡처링으로 상위 DOM요소 또는 타깃 요소로 이벤트가 전파된다.
 */
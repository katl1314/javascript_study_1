// 이벤트 전파
// DOM 트리 상에 존재하는 요소 노드에서 발생한 이벤트는 DOM 트리를 통해 '전파'된다.
// 이를 이벤트 전파라고 한다.
/*
    이벤트 전파에는 다음 3가지가 존재한다.
    캡처링 단계 : 이벤트가 상위요소에서 하위요소로 전파
    타겟 단계 : 이벤트가 이벤트 타겟에 도달
    버블링 단계 : 이벤트가 하위 요소에서 상위 요소로 전파
*/
var $fruits = document.querySelector('#fruits');

$fruits.addEventListener('click', function(e) {
    console.log('이벤트 단계 : ', e.eventPhase);    // 3단계 버블링 단계
    console.log('이벤트 타깃 : ', e.target);        // Banana, 이벤트가 발생한 DOM요소
    console.log('커런트 타깃 : ', e.currentTarget); // fruits, 이벤트 핸들러가 바인딩된 DOM요소
});   // 세번째 인자가 없는 경우(false) 버블링 단계에서 이벤트 객체를 캐치하고, true시 캡처링 단계에서 이벤트 객체를 캐치한다.

// 이벤트 타깃과 커런트 타깃이 일치하면 타깃 단계에서 이벤트 객체를 캐치한다.
var $apple = document.querySelector('#apple');

$apple.addEventListener('click', function(e) {
    console.log('이벤트 단계 : ', e.eventPhase);    // 1단계 타깃 단계
    console.log('이벤트 타깃 : ', e.target);        // apple
    console.log('커런트 타깃 : ', e.currentTarget); // apple
});   // 세번째 인자가 없는 경우(false) 버블링 단계에서 이벤트 객체를 캐치하고, true시 캡처링 단계에서 이벤트 객체를 캐치한다.

$fruits.addEventListener('click', function(e) {
    console.log('이벤트 단계 : ', e.eventPhase);    // 2단계 캡처링 단계 addEventListener에 세번째 인자 true설정
    console.log('이벤트 타깃 : ', e.target);        // Banana, 이벤트가 발생한 DOM요소
    console.log('커런트 타깃 : ', e.currentTarget); // fruits, 이벤트 핸들러가 바인딩된 DOM요소
}, true); 
/**
 * ul#fruits 내 자식 요소 노드 li를 클릭하면 이벤트가 발생하여, 클릭 이벤트 객체가 생성됨.
 * 클릭한 li요소가 이벤트 타깃이 된다.  ===> 클릭한 요소 노드
 * 이때 클릭 이벤트 객체는 window에서 시작하여 이벤트 타깃으로 전파된다. 이 것이 캡처링 단계
 * 전파된 이벤트가 이벤트 타깃을 도달한다 이 것이 타깃 단계
 * 이후 이벤트 객체는 이벤트 타깃에서 window방향으로 전파된다. 이것이 버블링
 * 1. 캡처링 단계 (window -> 이벤트 타깃까지 이벤트 객체를 전파) 
 * 2. 타깃 단계 (이벤트 객체가 이벤트 타깃 도달)
 * 3. 버블링 단계 (이벤트 타깃 -> window 방향으로 이벤트 객체를 전파한다.)
 * 
 * addEventListener는 세번째 인자를 가지고 캡처링 단계의 이벤트를 캐치 하기 위해서 true를 설정한다. => 이벤트 캐치를 어느 단계에서 할 것인가?
 * 반드시 캡처링 단계/버블링 단계만 캐치할 수 있다.
 */


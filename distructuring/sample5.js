const user = {
    firstName : 'Kim',
    lastName : 'Minsu'
};

const { firstName, lastName } = user;

console.log(lastName, firstName);

// 배열 디스트럭처링 할당과 마찬가지로 객체 디스트럭처링 할당을 위해서는 할당 연산자 왼쪽에 프로퍼티 값을 할당받은 변수를 선언해야하며,
// 변수를 객체 리터럴 형태로 선언함.
// 또한 우항의 경우 객체로 평가할 수 있는 표현식(객체, 문자열 등)이 아니면 에러가 발생함.

const { length } = 'strings';
console.log(length);    // 7

const {lastName : a = 1 , firstName : b = 2} = {}
console.log(a, b);

const todos = {
    id : 1,
    content : 'HTML',
    complete : true
}

const { id } = todos;

console.log(id);

function printTodo(todo) {
    console.log(`할일 ${todo.content}은 ${todo.complete ?  '완료' : '비완료'} 상태입니다.`);
}

printTodo(todos);

/**
 * 함수의 인자에 디스트럭처링 연산을 사용하면 좀더 간단하고 가독성이 좋아보인다.
 */
function printTodo2({content, complete}) {
    console.log(`할일 ${content}은 ${complete ? '완료' : '비완료'} 상태입니다.`);
}

printTodo2(todos);
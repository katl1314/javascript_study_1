const person = {
    name : 'Lee',
    getName() {
        // this는 person 인스턴스로 바인딩
        return this.name;
    }
}

console.log(person.getName());  // person객체의 getName메소드 호출

const anotherPerson = {
    name : 'Kim'
};

// person객체의 getName을 anotherPerson.getName 메서드로 할당함.
anotherPerson.getName = person.getName;

console.log(anotherPerson.getName());   // 해당 객체는 anotherPerson

const getName = person.getName; // person.getName 메소드를 전역 객체에 메소드로 할당함.
global.name = 'Choi';
console.log(getName());     // global.name

function Circle(radius) {
    console.log(this);  // new연산자를 통해 만들어진 객체를 가리킴.
    this.radius = radius;
}

const c1 = new Circle(5);
const c2 = new Circle(5);

console.log(c1 == c2);
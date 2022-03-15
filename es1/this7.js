function Person(name) {
    this.name = name;
}

// 프로토타입 메소드
Person.prototype.getName = function() {
    return this.name;
}

const me = new Person('Lee');
console.log(me.getName());  // Lee, getName메소드를 호출한 객체는 me

// 프로토타입 프로퍼티
Person.prototype.age = 30;

console.log(me.age);    // 30, age 프로퍼티를 참조하는 객체는 me
const person = {
    firstName : 'MinHyeok',
    lastName : 'Choi',
    
    // fullName은 접근자 함수로 구성된 접근자 프로퍼티이다.
    // 접근자 프로퍼티는 값을 갖지 않고, 데이터 프로퍼티의 값을 읽거나 저장할때 사용하는 접근자 함수로 setter, getter가 있다.
    // getter 함수
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    },

    // setter 함수
    set fullName(fullName) {
        const [lastName, firstName] = fullName.split(" ");
        this.lastName = lastName;
        this.firstName = firstName;
    }
}

person.fullName = "Kim ChulSu";

console.log(person.fullName);   // Kim ChulSu

// console.log(Object.getOwnPropertyDescriptors(person));
console.log(Object.getOwnPropertyDescriptor(person, 'fullName')); // fullName은 접근자 프로퍼티로 get, set, enumerable, configurable
console.log(Object.getOwnPropertyNames(person)); // [ 'firstName', 'lastName', 'fullName' ] 접근자 프로퍼티와 데이터 프로퍼티명 모두 배열로 표시됨.


const newPrototype = { 
    a : 1
}

Object.setPrototypeOf(person, newPrototype);
/**
 * Relect.has는 prototype property도 true으로 반환된다.
 * 그래서 prototype 을 제외하기 위해서는  Object.prototype.hasOwnPrototype을 사용한다.
 */
for (let p in person) {
    console.log(p, Reflect.has(person, p));
}
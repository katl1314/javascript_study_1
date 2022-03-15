const base = {
    name : 'Mike',
    sayHi() {
        return `Hello, ${this.name}`;
    }
}

const derived = {
    __proto__ : base,
    sayHi() {
        console.log(super.sayHi());
    }
}

derived.sayHi();

class Base {
    // 수퍼클래스의 정적메서드
    static sayHi() {
        return 'Hi';
    }
}

class Derived extends Base {
    static sayHi() {
        // super.sayHi는 수퍼클래스의 정적메서드를 가리킨다.
        return `${super.sayHi()}, How are you doing?`;
    }
}

console.log(Derived.sayHi());
class Square {
    // 생성자 함수
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // 프로토타입 메서드
    area() {
        return this.width * this.height;
    }

    // 정적 메서드
    static staticArea(w, h) {
        // 인스턴스의 프로퍼티에 접근할 수 없다.
        return w * h;
    }
}

const square = new Square(5, 10); // 생성자 함수 실행
console.log(square.area());
console.log(Square.staticArea(5, 10));

// 표준 빌트인 객체의 정적 메서드
console.log(Number.parseInt('100') + 10);       // 110
console.log(Number.parseFloat('12.25') + 5);    // 17.25
var obj = {a : 1, b : 2};

console.log(Number.isNaN(NaN));                 // true
console.log(Number.isNaN(10));                  // false
console.log(Number.isNaN(undefined));           // false
console.log(Number.isNaN(null));                // false
console.log(Reflect.has(obj, 'a'));  // true     // Reflect.has(target, key);
console.log(Object.is(3, 3)); // 두 값을 비교 
console.log(JSON.stringify(obj));    // {"a":1,"b":2}

var stringObj = JSON.stringify(obj);
console.log(JSON.parse(stringObj));     // { a: 1, b: 2 }

console.log(Math.max(1, 3, 2, 4, 1));   // 4 n개의 인자 중 최고값 구하기
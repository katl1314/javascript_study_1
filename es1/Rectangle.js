class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        // new연산자와 함깨 호출한 함수를 의미함. new.target
        console.log(new.target);    // ColorRectangle
    }

    // 프로토타입 메서드
    getArea() {
        return this.width * this.height;
    }

    toString() {
        return `width = ${this.width}, height = ${this.height}`;
    }
}

class ColorRectangle extends Rectangle {
    constructor(width, height, color) {
        super(width, height);
        this.color = color;
    }

    // 메소드 오버라이딩
    toString() {
        return `${super.toString()}, color = ${this.color}`;
    }
}

const colorRectangle = new ColorRectangle(10, 20, 'red');
// 오버라이딩된 서브클래스의 toString호출
console.log(colorRectangle.toString());
// 수퍼클래스의 프로토타입 메서드 getArea호출
console.log('area', colorRectangle.getArea());
console.log(colorRectangle);
/**
 * 자바스크립트 엔진에서 클래스를 평가할 때 내부 슬롯 [[ConstructorKind]]를 가지고 비교를 하는데, 상속받지 않는 클래스는 base, 상속받은 클래스는 derived
 */
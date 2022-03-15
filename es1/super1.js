class Rectangle {
    constructor(width, height) {
        console.log(this); // 인스턴스
        // new.target은 함수 또는 생성자가 new연산자를 사용하여 호출됐는지 확인 가능함.
        // 일반 함수 호출시 new.target은 undefined으로 반환됨.
        console.log(new.target);    

        // 인스턴스 초기화
        this.width = width;
        this.height = height;

        console.log(Object.getOwnPropertyDescriptors(this));
        console.log(Object.getPrototypeOf(this) === Rectangle.prototype);
        console.log(Object.getPrototypeOf(this) === ColorRectangle.prototype);
        console.log(Object.getPrototypeOf(this));
        console.log(this instanceof Rectangle);
        console.log(this instanceof ColorRectangle);
    }
}

class ColorRectangle extends Rectangle {
    constructor(width, height, color) {
        // 서브클래스의 constructor는 반드시 super()을 호출해야함.
        // 왜냐하면 인스턴스 생성시 서브클래스에서 생성하는 것이 아닌 슈퍼 클래스로 위임하기 때문이다.
        super(width, height);
        
        this.color = color;

        console.log('2 ====================');
        console.log(Object.getOwnPropertyDescriptors(this));
        console.log(Object.getPrototypeOf(this));
        console.log(this);
        // 인스턴스 반환 (암묵적으로 반환)
    }
}

const rectangle = new ColorRectangle(1, 2, 'red');
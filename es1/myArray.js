/**
 * 빌트인 객체를 이용하여 생성자 함수 확장
 */
class MyArray extends Array {
    // 모든 메서드가 Array타입의 인스턴스를 반환하도록 한다. => 메서드 체이닝 방지
    static get [Symbol.species]() {
        return Array;
    }

    // 중복된 배열 요소를 제거하고 반환한다.
    uniq() {
        // 상단 [Symbol.species]를 명시하지 않으면 MyArray인스턴스가 반환된다.
        // 명시가 되면 Array인스턴스가 반환된다.
        return this.filter((v, i, self) => self.indexOf(v) === i);
    }

    // 배열 요소의 평균을 구한다.
    average() {
        // 상단 [Symbol.species]를 명시하지 않으면 MyArray인스턴스가 반환된다.
        // 명시가 되면 Array인스턴스가 반환된다.
        return this.reduce((acc, v) => acc + v, 0) / this.length;
    }
}

const myArray = new MyArray(1, 1, 2, 3);
console.log(myArray.uniq());
console.log(myArray.average());

// 메서드 체이닝
console.log('filter', myArray.filter(v => v % 2));
console.log('uniq', myArray.uniq());
console.log('averange', myArray.average());

console.log(myArray.uniq() instanceof Array);
console.log(myArray.uniq() instanceof MyArray);
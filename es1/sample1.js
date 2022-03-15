// 실행 컨텍스트 생성과 식별자 검색 과정
var x = 1;
const y = 2;

function foo(a) {
    var x = 3;
    const y = 4;
    function bar(b) {
        const z = 5;
        console.log(a + b + x + y + z); // 20 + 10 + 3 + 4 + 5 = 42
    }

    bar(10);
}

foo(20);

/**
 * 1. 전역 실행 컨텍스트 생성
 * 2. 전역 렉시컬 환경 생성 (식별자와 식별자에 바인딩된 값 저장 또는 상위 스코프 참조 기록 목적)
 *    2-1.  전역 환경 레코드 생성   (식별자와 바인딩된 값 저장)
 *      2-1-1 객체 환경 레코드 생성
 *      2-1-2  선언적 환경 레코드 생성 
 *    2-2. this바인딩
 *    2-3. 외부 렉시컬 환경에 대한 참조 생성 (상위스코프 참조)
 * 1. Global Execution Context 실행
 * 2. Global Lexical Environment 실행
 *      2.1. Global Environment Recode 실행
 *          2.1.1. Object Environment Recode 실행  객체 환경 레코드 (var로 선언된 전역변수, 함수 선언문 ...)
 *          2.1.2. declarative Environment Recode 실행 선언적 환경 레코드(let, const로 선언된 전역변수, 함수 선언문, ...)
 *      2.2. this 바인딩
 *      2.3 Outer Lexical Environment Reference 실행
 * 
 *  OuterLexicalEnvironmentReference
 * 
    객체 환경 레코드는 var키워드로 선언한 전역 변수, 함수 선언문으로 정의한 전역 함수, 빌트인 전역 객체등을 관리
    선언적 환경 레코드는 let, const으로 선언한 전역변수를 관리한다.

    var의 경우 선언 단계와 초기화 단계가 동시에 발생 그래서 선언시 자동으로 undefined가 초기화됨. => 객체 환경 레코드에 저장
    
    const, let은 var와 다르게 선언단계와 초기화단계가 별도로 되어 있어. 초기화 단계 이후, 런타임 실행 흐름이 변수 선언문에 도달할 때 까지 일시적 사각 지대에 빠짐.
 */

let a = 1;  // 전역 변수
{
    // 호이스팅이 되지 않는다면 전역 변수 a가 출력되어야한다.
    // 다만 전역 변수 a가 호출되지 않고, ReferenceError가 발생한다.
    // 이는 let또한 호이스팅이 발생하기 때문이다.
    // 다만 런타입 실행 순서가 변수 선언 위치까지 도달하지 못해 일시적 사각지대에 빠져 지역 변수 a를 참조하지 못함.
    // 따라서 var 키워드는 코드 실행 단계서 변수 선언 이전에도 참조가 가능함. 단 참조된 변수의 값은 undefined이다.
    console.log(a); 
    let a = 10;
}
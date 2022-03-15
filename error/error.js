try {
    throw new Error('에러');    // 에러 강제 발생
} catch (e) {
    console.error(e);
} finally {
    console.log('finally');     // catch가 발생해도 무조건 동작함.
}

console.log(22222); // try내 에러를 강제 발생해도 정상적으로 출력함.
/**
 * try-catch-finally을 이용하여 에러를 적절하게 처리하면 프로그램이 강제로 종료되지 않고, 계속해서 코드를 실행함.
 */

function camelToSnake(camelCase) {
    // 문자열 내 대문자를 검사하여 해당 문자열을 소문자로 변환하고 앞에 _(언더바)를 붙인다.
    return camelCase.replace(/[A-Z]/g, (ch) => `_${ch.toLowerCase()}`);
}

const camelCase = 'helloWorldShape';
const snakeCase = camelToSnake(camelCase);
console.log('snakeCase', snakeCase);

function snakeToCamel(snakeCase) {
    return snakeCase.replace(/_[a-z]/g, (ch) => {
        // 언더바 다음 문자는 대문자로 변환, 언더바는 공백으로 변경함.
        return ch.toUpperCase().replace('_', '');
    });
}

const camelSnake2 = snakeToCamel(snakeCase);
console.log('camelSnake2', camelSnake2, camelCase);
/**
 * new RegExp(pattern : RegExp, String, flag?: string)
 */

const target = 'Is this all there is?';
const counter = (str, char) => (str.match(new RegExp(char, 'gi')) ? str.match(new RegExp(char, 'ig')).length : 0);

console.log(counter(target, 'is'));
console.log(counter(target, 'xx'));

/**
 * RegExp.prototype.exec(string: string): exec메서드는 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 배열로 반환.
 * 다만 플래그에 ig를 사용하여 모든 패턴을 검색하지 않고 단 하나의 검색결과만 반환한다.
 */
console.log(/is/.exec(target));

/**
 * RegExp.prototype.test(string: string): test메서드는 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 매칭하여 결과를 boolean타입으로 반환한다.
 */
console.log(/is/.test(target));

/**
 * String.prototype.match(regExp: RegExp | String): String빌트인 객체가 제공하는 match메서드는 대상 문자열과 인수로 전달한 정규 표현식 패턴을 매칭하여 배열로 반환한다.
 * flag로 g를 이용하여 모든 요소를 검색할 때 exec와 다르게 일치한 요소를 모두 배열로 반환한다.
 */

console.log(target.match(/is/g));

/**
 * 플래그
 * 1. i(Ignore Case) : 대소문자 무시
 * 2. g(Global) : 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색
 * 3. m(MultiLine) : 문자열 행이 다르더라도, 패턴 검색을 계속한다.
 */
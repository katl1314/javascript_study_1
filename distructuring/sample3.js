function parseURL(url = "") {
    const regExp = /^(\w+):\/\/([^/]+)\/(.*)$/;
    const [url2, protocol, host, path] = url.match(regExp);
    return {protocol, host, path};
} 

const parsedURL = parseURL("https://developer.mozilla.org/ko/docs/Web/JavaScript");
console.log(parsedURL);

// 배열 디스트럭처링 할당을 위한 변수에 Rest파라미터와 유사하게 Rest문법(...)을 사용하면 이후의 데이터는 배열로 변환된다. 
// Rest문법 사용시 가장 마지막에 위치해야한다.

const [one, ...other] = [1, 2, 3, 4];
console.log(one, other);    // 1, [2, 3, 4]


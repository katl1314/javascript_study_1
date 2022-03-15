/**
 * import : 외부 모듈에서 오픈한 식별자(함수,...)를 자신의 스코프 내부에서 로드하기 위해서 사용함
 * import 키워드를 이용함.
 * 다른 모듈이 export한 식별자 이름으로 import해야함. ESM의 경우 파일 식별자를 생략할 수 없다.
 */
// import * as _ from './export.js'; // *를 이용하여 식별자를 대신 접근 할 수 있음.

/* console.log(_.PI);  // export 모듈 내 변수 PI
console.log(_.sum(1, 2));
console.log(new _.People());
console.log(_.a1);
console.log(_.a2);
console.log(_.a3()); */

import {PI as P, sum as S, People} from './export.js';

console.log(P);
console.log(S(1, 2));
console.log(new People());
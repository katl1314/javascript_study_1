(function printNow() {
    const today = new Date();

    const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

    const day = dayNames[today.getDay()];
    const year = today.getFullYear();       // Date객체의 년도를 반환
    const month = today.getMonth() + 1;     // Date객체의 월을 반환 (0 ~ 11)
    const date = today.getDate();           // Date객체의 일을 반환 (1 ~ 31)
    let hour = today.getHours();            // Date객체의 시간을 반환 (0 ~ 23)
    let minute = today.getMinutes();        // Date객체의 분을 반환 (0 ~ 59)
    let second = today.getSeconds();        // Date객체의 초를 반환 (0 ~ 59)

    const ampm = hour < 12 ? 'AM' : 'PM';   // hour이 12보다 작으면 오전(AM), 크거나 같으면 오후(FM)

    // 12시간제로 변경
    hour = hour % 12;
    hour = hour || 12;  // hour가 undefined이거나 0이면 12로 재할당.

    // 10 미만의 분과 초를 2자리로 변경
    minute = minute < 10 ? `0${minute}` : `${minute}`;
    second = second < 10 ? `0${second}` : `${second}`;

    const now = `${year}년 ${month}월 ${date}일 ${day}, ${ampm} ${hour}시 ${minute}분 ${second}초`;
    console.log(now);

    setTimeout(printNow, 1000); // 함수명을 전달하여 1초(1000ms)마다 함수를 실행하도록함.
})();
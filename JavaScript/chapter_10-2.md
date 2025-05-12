## 📖 Date 객체

### ✏️ 현재 날찌와 시간

        <script>
        const now = new Date();
        document.getElementById("show").innerHTML = now;
        </script>

- new Date()는 현재의 날짜와 시간을 가진 Date 객체를 생성

### ✏️ 날짜 가져오기

        <script>
        const now = new Date(); //현재 날짜와 시간을 가진 Date 객체를 반환
        const year = now.getFullYear(); //현재 날짜와 시간을 가진 객체 now에서 4자리로 된 연도를 반환
        const month = now.getMonth() + 1; //객체 now에서 월을 반환, 월에 사용되는 숫자는 0~11
        const date = now.getDate(); //now에서 일자를 반환, 일에 사용되는 숫자는 1~31

        let text = year + "년" + month + "월" + date + "일";
        document.getElementById("show").innerHTML = text;
        </script>

### ✏️ 시간 가져오기

        <script>
        const now = new Date();
        const hour = now.getHours(); //현재 날짜와 시간을 가진 객체 now에서 시간(0~23)을 가져옵니다.
        const min = now.getMinutes(); //객체now에서 분(0~59)을 가져옵니다.
        const second = now.getSeconds(); //객체now에서 초초(0~59)을 가져옵니다.

        let text = hour + "시" + min + "분" + second + "초";
        document.getElementById("show").innerHTML = text;
        </script>

### ✏️ 날짜와 시간 설정하기

        <script>
        const a = new Date(2025, 11, 25, 10, 30, 25); // (연, 월, 일, 시, 분, 초), 사용되는 숫자는 0~11
        const b = new Date(1998, 8, 13, 18, 20); // (연, 월, 일, 시, 분)
        const c = new Date(2000, 1, 20); (연, 월, 일)

        text = "";
        text += a + "<br>";
        text += b + "<br>";
        text += c;
        document.getElementById("show").innerHTML = text;
        </script>

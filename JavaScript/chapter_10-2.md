## 📖 Date 객체

### ✏️ 현재 날찌와 시간

        <script>
        const now = new Date();
        document.getElementById("show").innerHTML = now;
        </script>

- new Date()는 현재의 날짜와 시간을 가진 Date 객체를 생성

### ✏️ 날짜 가져오기

        <script>
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const date = now.getDate();

        let text = year + "년" + month + "월" + date + "일";
        document.getElementById("show").innerHTML = text;
        </script>

- new Date()는 현재의 날짜와 시간을 가진 Date 객체를 생성

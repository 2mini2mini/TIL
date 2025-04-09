## 📖 배열 병합/복사/정렬

### ✏️ concat()메서드

- 두 개 이상의 배열을 서로 병합하는데 사용

        <script>
        const animals1 = ["사자", "호랑이", "사슴", "펭귄"];
        const animals2 = ["개미", "메뚜기", "풍뎅이"];

        let arr = animals1.concat(animals2);
        let text = "";
        text += arr + "<br>";
        text += animals1;
        document.getElementById("show").innerHTML = text;
        </script>

- 기존 배열의 내용은 변경되지 않고 기존값을 그대로 유지함

### ✏️ copyWithin()메서드

- 특정 요소를 배열 내 다른 위치에 복사하는 데 사용

        <script>
        const animals1 = ["사자", "호랑이", "사슴", "펭귄"];
        const animals2 = ["개미", "메뚜기", "풍뎅이"];

        let arr = animals1.concat(animals2);
        let text = "";
        text += arr + "<br>";
        text += animals1;
        document.getElementById("show").innerHTML = text;
        </script>

- 원래의 배열에 대해 덮어쓰기로 복사 작업이 진행

### 🚨 잠깐 퀴즈! 오답

<b></b>

### 💡 알게된 기타 내용 및 느낀점

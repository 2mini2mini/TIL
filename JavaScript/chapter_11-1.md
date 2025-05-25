## 📖 문서 객체 모델(DOM)이란?

- 웹 페이지의 HTML 요소들을 자바스크립트가 다룰 수 있도록 객체로 만든 구조

### ✏️ Map 객체 생성

        <script>
        const fruits = new Map([
                ["사과", 10],
                ["오렌지", 20],
                ["수박", 30],
        ]);

        let text = "";
        fruits.forEach(function (value, key) {
                text += key + ":" + value + "<br>";
        });
        document.getElementById("show").innerHTML = text;
        </script>

### ✏️ set() 메서드

- 요소 추가할때 사용

        <script>
        const set1 = new Set(); //빈 Set 객체 생성
        set1.add("사과"); //add()메서드 이용해 요소 추가
        set1.add("오렌지");
        set1.add("수박");

        let text = "";
        set1.forEach(function (value) { //  forEach문을 이용 set1객체의 요소 순회회
                text += value + "<br>";
        });
        document.getElementById("show").innerHTML = text;
        </script>

### ✏️ get() 메서드

- 특정 키에 해당하는 값을 가져오는데 사용

        <script>
        const fruits = new Map([
                ["사과", 10],
                ["오렌지", 20],
                ["수박", 30],
        ]);

        document.getElementById("show").innerHTML = fruits.get("오렌지");
        </script>

### ✏️ has() 매서드

- 특정 요소의 존재 여부를 판단

        <script>
        const set1 = new Set(["사과", "오렌지", "수박"]);

        let text = "";
        text += set1.has("사과") + "<br>"; // '사과'가 존재하는지 체크 -> true반환
        text += set1.has("키위");
        document.getElementById("show").innerHTML = text;
        </script>

### ✏️ delete() 매서드

- 특정 요소를 삭제

        <script>
        const set1 = new Set(["사과", "오렌지", "수박"]);

        let text = "";
        text += set1.has("사과") + "<br>"; // '사과'가 존재하는지 체크 -> true반환
        text += set1.has("키위");
        document.getElementById("show").innerHTML = text;
        </script>

### ✏️ size 프로퍼티

- 요소의 개수 구하는데 사용

        <script>
        const fruits = new Map([
                ["사과", 10],``
                ["오렌지", 20],
                ["수박", 30],
                ["키위", 40],
        ]);
        document.getElementById("show").innerHTML = fruits.size;
        </script>

### 🚨 잠깐 퀴즈! 오답

<b>10-14)</b> 다음은 Map 객체의 요소를 ForEach() 메서드로 순회하는 프로그램입니다. 빈 칸을 채워보세요.
<b>실행결과</b>
title: 나의 꿈
author: 홍길동
price: 12000

    const book = new Map([
        ["title", "나의 꿈"],
        ["author", "홍길동"],
        ["price", 12000]
    ]);

    book.forEach(function(ㅁ, ㅁ) {
        document.write(key + ": " + value + "<br>");
    })

    ❌오답:key, value

    ⭕️정답: value, key
    ✳️풀이: Map.prototype.forEach() 메서드는 콜백 함수에 value, key, map 순으로 인자를 전달

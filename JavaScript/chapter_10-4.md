## 📖 Map 객체

- 키-값으로 구성된 자료 구조
- 키는 숫자, 문자열, 배열, 객체 등 어떠한 데이터 형도 사용 가능
- Set객체와는 달리 요소에 순서 있음음

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

### ✏️ size 프로퍼티

- 요소 개수 구할때 사용

        <script>
        const set1 = new Set("hello");

        let text = "";
        for (let value of set1) {
                text += value + "<br>";
        }
        text += "Set 크기:" + set1.size; // 객체 set1의 요소의 개수값 가짐
        document.getElementById("show").innerHTML = text;
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

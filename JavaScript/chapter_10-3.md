## 📖 Set 객체

- 요소들이 중복되지 않는 유일한 값을 가진 집합  
  예: `new Set([1, 2, 2, 3]) → Set {1, 2, 3}`

| 구분        | Set       | 배열 (Array) |
| ----------- | --------- | ------------ |
| 중복 허용   | ❌ 불가능 | ✅ 가능      |
| 순서 유지   | ✅ 유지됨 | ✅ 유지됨    |
| 인덱스 접근 | ❌ 불가능 | ✅ 가능      |

### ✏️ Set 객체 생성

        <script>
        const now = new Date();
        document.getElementById("show").innerHTML = now;
        </script>

- Set 객체에서는 인덱스로는 요소에 접근할 수 없고 For Of 문을 이용하여 set1 객체의 요소를 순회

### ✏️ add() 메서드

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

### 💡 알게된 기타 내용 및 느낀점

-

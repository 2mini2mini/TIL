## 📖 배열 요소 추출/검색

### ✏️ indexOf()메서드

- 배열에서 특정 문자열의 위치, 즉 인덱스 값을 반환

        <script>
            const fruits = ["사과", "오렌지", "수박", "감", "수박", "딸기", "키위"];
            let index1 = fruits.indexOf("수박");
            let index2 = fruits.indexOf("수박",3); //'수박'을 검색할때 인덱스 3의 위치에서 시작
            let index3 = fruits.indexOf("바나나"); //'바나나' 가 존재하지 않기 때문에 -1를 반환환

            let text = "";
            text +=index1 + "<br>";
            text +=index2 + "<br>";
            text +=index3;
            document.getElementById("show").innerHTML = text;
        </script>

- 배열에서 특정 요소가 발생하는 위치의 인덱스를 반환, 해당 요소 존재하지 않을 경우에는 -1 반환

### ✏️ includes()메서드

- 배열에서 특정 요소의 존재 여부 파악하는데 사용

    <script>
            const fruits = ["사과", "오렌지", "수박", "감", "키위"];
            let result1 = fruits.includes("키위");
            let result2 = fruits.includes("파인애플");
  
            let text = "";
            text += result1 += "<br>";
            text += result2;
            document.getElementById("show").innerHTML = text;
        </script>

- 배열에 특정 요소가 존재하면 true, 그렇지 않으면 false를 반환

### ✏️ silce()메서드

- 배열에서 특정 요소를 추출하는데 사용

    <script>
            const fruits = ["사과", "오렌지", "수박", "감", "키위"];
            let result1 = fruits.includes("키위");
            let result2 = fruits.includes("파인애플");
  
            let text = "";
            text += result1 += "<br>";
            text += result2;
            document.getElementById("show").innerHTML = text;
        </script>

- 배열에 특정 요소가 존재하면 true, 그렇지 않으면 false를 반환

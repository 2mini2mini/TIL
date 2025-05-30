## 📖 배열 요소 추출/검색

### ✏️ indexOf()메서드

- 배열에서 특정 문자열의 위치, 즉 인덱스 값을 반환

        <script>
            const fruits = ["사과", "오렌지", "수박", "감", "수박", "딸기", "키위"];
            let index1 = fruits.indexOf("수박");
            let index2 = fruits.indexOf("수박",3); //'수박'을 검색할때 인덱스 3의 위치에서 시작
            let index3 = fruits.indexOf("바나나"); //'바나나' 가 존재하지 않기 때문에 -1를 반환

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
            const animals = ["사자", "호랑이", "사슴", "펭귄", "여우", "앵무새"];
            let arr1 = animals.slice(1,3); // 인덱스 1부터 3사이의 요소(3은 포함하지 않음)
            let arr2 = animals.slice(2,); //인덱스 2부터 끝까지의 요소
            let arr3 = animals.slice(-3, -1); //끝에서 3번째 요소부터 끝에서 2번째 요소

            let text = "";
            text += arr1 + "<br>";
            text += arr2 + "<br>";
            text += arr3;
            document.getElementById("show").innerHTML = text;
        </script>

### ✏️ find()메서드

- 배열에서 특정 요소를 찾는 조건을 콜백 함수를 통해 전달하여 조건에 해당하는 첫번째 요소값을 반환

        <script>
            const scores = [78, 84, 98, 100, 67, 87];
            arr = scores.find(function(score) { //배열 scores에서 sorces >= 90을 만족하는 첫번째 요소를 찾음 (배열을 앞에서 부터 차례대로 검사)
                return score >=90;
            });
            document.getElementById("show").innerHTML = arr;
        </script>

- 매개변수로 콜백 함수가 사용

        function(score) {
          return score >= 90;
        }

### ✏️ forEach()메서드

- 배열 각 요소에 대해 매개변수로 설정된 함수를 실행

        <script>
            const animals = ["사자", "호랑이", "사슴", "펭귄"];
            let text = "";
            animals.forEach(func); //배열의 각 요소를 하나씩 꺼내서  func라는 함수에 전달해주는 반복문
            function func(item,index) {
                text += index + ":  " +item + "<br>"; //foreach로 부터 받은 item과 index를 받아서 text에 "0: 사자<br>" 같은 형태의 문자열 계속 추가
            }
            document.getElementById("show").innerHTML = text;
        </script>

        <script>
            const animals = ["사자", "호랑이", "사슴", "펭귄"];
            let text = "";
            for (let i = 0; i < animals.length; i++) { //for반복문을 사용해서 배열에 있는 동물들을 하나씩 꺼내고,
                text += i + ": " + animals[i] + "<br>"; //인덱스(i)와 함께 문자열로 만들어서 text에 계속 이어 붙임
            }
            document.getElementById("show").innerHTML = text;
        </script>

### ✏️ map()메서드

- 배열 각 요소에 대해 매개변수로 설정된 함수를 실행하여 얻어진 요소들을 구성된 새로운 배열을 반환

        <script>
            const numbers = [1, 2, 3, 4, 5];
            let arr = numbers.map(function(num) { //map()은 배열numbers의 각 요소에 대해 함수를 실행
                return num * num;
            })
            document.getElementById("show").innerHTML = arr;
        </script>

### 🚨 잠깐 퀴즈! 오답

<b>9-12)</b> 다음은 silce()메서드에 관한 문제입니다. 프로그램 실행 결과는?

    const music = ["가요", "팝송", "클래식", "재즈", "OST"];
    let array1 = music.silce(1, 4);
    let array2 = music.silce(-1);

    document.wrire(array1 + "/");
    document.wrire(array2);

    ❌오답:팝송/클래식/재즈/OST

    ⭕️정답: 팝송,클래식,재즈/OST
    ✳️풀이: array1 + "/" 는 그냥 문자열끼리 이어 붙이기이다.

### 💡 알게된 기타 내용 및 느낀점

| 메서드       | 설명                                       | 반환값                  | 비고                           |
| ------------ | ------------------------------------------ | ----------------------- | ------------------------------ |
| `indexOf()`  | 배열에서 특정 값의 **첫 번째 인덱스** 찾기 | 숫자 (없으면 -1)        | 정확히 일치하는 값만 찾음      |
| `includes()` | 배열에 특정 값이 **포함되어 있는지** 확인  | true 또는 false         | 문자열에도 사용 가능           |
| `slice()`    | 배열의 **일부를 잘라** 새로운 배열 반환    | 새로운 배열             | 원본 배열은 변경되지 않음      |
| `find()`     | 조건에 맞는 **첫 번째 요소** 반환          | 요소 또는 undefined     | 콜백 함수 사용                 |
| `forEach()`  | 배열의 모든 요소에 **함수 실행**           | 반환값 없음 (undefined) | 주로 반복 작업에 사용          |
| `map()`      | 배열의 각 요소를 변형하여 **새 배열** 생성 | 새로운 배열             | 원본 배열 유지, 반환값 꼭 필요 |

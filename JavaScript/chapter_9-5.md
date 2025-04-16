## 📖 2차원 배열

-> 2차원 배열은 배열의 각 요소가 배열인 경우를 말한다
EX) const arr = [
[1, 2], // 0번째 행
[3, 4], // 1번째 행
[5, 6], // 2번째 행
[7, 8], // 3번째 행
];

### ✏️ 2차원 배열 생성

        <script>
        // 4행 2열 2차원 배열 생성
        const arr = [
                [1, 2], //0번째 행
                [3, 4], //1번째 행
                [5, 6], //2번째 행
                [7, 8], //3번째 행
        ];
        let text = "";
        text += arr[2][0] + "<br>"; //2번째 행의 1열
        text += arr[2][1]; //2번째 행의 2열
        document.getElementById("show").innerHTML = text;
        </script>

        <script>
        // new 연산자 Array() 메서드 이용한 5행 3열의 빈 2차원 배열 생성
        const arr = new Array(5); // 1차원 배열 생성 (5칸)

        for (var i = 0; i < arr.length; i++) {
                arr[i] = new Array(3);  // 각 칸에 3칸짜리 배열 삽입
        }
        document.getElementById("show").innerHTML = arr;
        </script>

### ✏️ 2차원 배열에 값 입력

      <script>
      const arr = new Array(4); //1차원 배열 생성
      for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(3); // 각 요소에 new Array(3) 2차원 배열 생성
      }

      let num = 1;
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
          arr[i][j] = num;
          num++;
        }
      } //이중 for문으로 모든 칸 돌면서 num값 하나씩 넣고, 증가 시키기

      let text = "";
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
          text += arr[i][j] + " ";
        }
        text += "<br>";
      } //각 행을 출력, 끝날 때 마다 <br>로 줄바꿈
      document.getElementById("show").innerHTML = text;
    </script>

### ✏️ 2차원 배열의 합계와 평균

### 🚨 잠깐 퀴즈! 오답

<b>9-12)</b>

### 💡 알게된 기타 내용 및 느낀점

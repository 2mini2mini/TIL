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

    <script>
      const scores = [
        [83, 90, 70, 87],
        [87, 93, 62, 83],
        [98, 90, 77, 97],
      ]; //3명 학생에 대한 4과목의 성적을 3행 4열로 2차원 배열 scores에 저장
      let sum, avg;

      text = "";
      for (var i = 0; i < 3; i++) { //i는 0, 1, 2 값을 가짐 -> 이 값은 학생을 의미
        sum = 0;
        for (var j = 0; j < 4; j++) {
          sum += scores[i][j];
        } //하나의 i값, 학생에 대해 4과목 합계를 구해 sum에 저장장
        avg = sum / 4; //성적 합계 sum을 4로 나누어 평균 값을 구해 avg에 저장
        text += i + "번째 학생의 합계 :" + sum + ",평균: " + avg + "<br>";
      }
      document.getElementById("show").innerHTML = text; // 평균 값을 저장한 text 출력
    </script>

### 💡 알게된 기타 내용 및 느낀점

- 배열 인덱스도 0부터 시작한다는 걸 알게 되었다.

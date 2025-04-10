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

        <script>
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        let arr = numberss.copyWithin(5, 0, 3); //인덱스 5의 위치에서 0에서 2까지의 요소
        document.getElementById("show").innerHTML = arr;
        </script>

- 원래의 배열에 대해 덮어쓰기로 복사 작업이 진행

### ✏️ sort()/reverse() 메서드

- sort() 메서드는 요소들을 가나다 순으로 정렬할 때 사용, 반대로 reverse()메서드는 내림차순으로 정렬

        <script>
        const animals = ["코끼리", "사자", "호랑이", "사슴", "펭귄", "풍뎅이"];

        let text="";
        animals.sort();
        text += animals + "<br>";
        animals.reverse();
        text += animals;
        document.getElementById("show").innerHTML = text;
        </script>

### 🚨 잠깐 퀴즈! 오답

<b>9-12)</b> 다음은 copyWithin()메서드에 관한 문제입니다. 프로그램 실행 결과는?

    const music = ["가요", "팝송", "클래식", "재즈", "OST"];
    let arr = music.copyWithin(2, 1, 3);

    document.write(arr);

    ❌오답:클래식, 재즈

    ⭕️정답: 가요, 팝송, 팝송, 클래식, OST
    ✳️풀이: 인덱스 2부터 시작해서, 1~2 인덱스의 요소들을 복사해서 덮어쓴다. 즉 "팝송"과 "클래식"이 "클래식"과 "재즈" 자리에 덮어쓰기 된다.

### 💡 알게된 기타 내용 및 느낀점

| 메서드         | 설명                                                  | 원본 변경 | 반환값           | 사용 예시                            |
| -------------- | ----------------------------------------------------- | --------- | ---------------- | ------------------------------------ |
| `concat()`     | 두 개 이상의 배열을 이어 붙여 **새 배열을 반환**      | ❌ 아니오 | 새로운 배열      | `arr1.concat(arr2)`                  |
| `copyWithin()` | 배열 내 일부 요소를 복사하여 **다른 위치에 덮어쓰기** | ✅ 예     | 변경된 자기 자신 | `arr.copyWithin(2, 0, 2)`            |
| `sort()`       | 요소들을 **문자열 기준**으로 정렬                     | ✅ 예     | 정렬된 자기 자신 | `arr.sort()`, `arr.sort((a,b)=>a-b)` |
| `reverse()`    | 요소 순서를 **역순**으로 뒤집음                       | ✅ 예     | 뒤집힌 자기 자신 | `arr.reverse()`                      |

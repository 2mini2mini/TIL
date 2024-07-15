## 📖 자바스크립트 시작하기
### ✏️ 자바스크립트 코드 작성과 실행
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf=8"></head>
    <body>
        <p id="show"></p>
        <script>
            document.getElementById("show").innerHTML = "안녕하세요.";
        </script>
    </body>
    </html>
- '!'+'Tab'을 이용하면 HTML5의 기본구조를 자동 생성할 수 있다.

 ### ✏️ 데이터 출력 (innerHTML을 이용)

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
    <p id="show"></p>
    <script>
    document.getElementById("show").innerHTML = 10+20;
    </script>
    </body>
    </html>
- 

 ### ✏️ 경우의 수2(conflict): 같은 파일 내에서 같은 섹션 수정
    
    병합 충돌이 있을 경우 충돌 표식으로(<<<<<<<, =======, >>>>>>>) 안내해준다. 해결 방법에는 4가지가 있다.

    1) 수정사항을 유지하고 내 것을 제거하기
    2) 타인의 수정사항을 지우고 내 것을 유지하기
    3) 수정사항 둘 다 유지하기
    4) 수정사항 모두 지우기

    -> 이럴 경우 해당 작업자와 협의 후 해결한다.

### 💡 알게된 기타 내용 및 느낀점
* cd 파일명 : 해당 파일로 이동
* $ git status : 파일 상태 확인 (수시로 하기)
* 생각보다 터미널에서 친절하게 설명해주니 영어를 잘 읽어보자! 
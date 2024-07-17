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


 ### ✏️ 데이터 출력하기
 - <b>innerHTML</b>로 데이터 출력하기

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
        document.getElementById("show").innerHTML
        </script>
        </body>
        </html>
    - p id="show" : id 'show'가 가리키는 'p' 를 불러옴
    - getElementById : 객체메서드 (HTML 문서 내에서 특정 ID를 가진 요소를 찾고 반환하는 역할)
    - innerHTML : 브라우저 안에 있는 요소 출력

- <b>document.write()</b>로 출력하기 (실제 프로그램 시 잘 사용되지 않지만 실습에서 많이 사용)
   
        <!DOCTYPE html>
        <html>
        <head><meta charset="UTF-8"></head>
        <body>
        <script>
            document.write(10+20);
        </script>
        </body>
        </html> 
    
     - 괄호 안에 있는 내용을 출력함

- <b>alert()</b>로 알림창에 출력하기

        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body>
        <script>
        alert(10+20);
        </script>
        </body>
        </html> 

    - 브라우저의 알림창에 데이터를 출력함

- <b>console.log()</b>로 콘솔에 출력하기

        <!DOCTYPE html>
        <html>
        <head><meta charset="UTF-8"></head>
        <body>
        <script>
            console.log(10+20);
        </script>
        </body>
        </html>

    - 프로그램에서 사용된 변수나 데이터값을 콘솔에 출력하는 데 사용
    - 개발자 도구(F12)로 확인 가능

 ### ✏️ 주석문
- /* */ : 여러 줄의 주석을 다는 데 사용
- // : 한줄의 주석을 다는 데 사용

  -> 특정 문장의 실행을 임시로 멈추고자 할 때도 사용  

### 🚨 연습문제 오답
<b>1-1)</b> 웹에서 프런트엔드와 백엔드의 역할과 프런트엔드 개발자에 대해서 설명하시오

    - 프런트엔드: 사용자 측 웹페이지 디자인 / 페이지 내 요소의 동적인 움직임 구현
    - 벡엔드: 웹 서버, 데이터 베이스 구현
    - 프런트엔드 개발자: HTML, CSS, 자바스크립트 이용해 콘텐츠 디자인

<b>1-2)</b> 다음은 '안녕!'을 알림창에 출력하는 프로그램입니다. 밑줄 친 부분을 채워 프로그램을 완성하시오.
 
    <body>
    <p id="show"></p>
    <script>
        document.getElementById("____").____="안녕!";
    </script>
    </body>
     -> show / innerHTML


### 💡 알게된 기타 내용 및 느낀점
- '!'+'Tab'을 이용하면 HTML5의 기본구조를 자동 생성할 수 있다.
- 입력 시 소문자, 대문자 구분 매우 중요하다!
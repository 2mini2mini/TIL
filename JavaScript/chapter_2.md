## 📖 데이터 형과 연산자
### ✏️ 변수란?
 - 변수: 데이터가 컴퓨터 메모리에 저장되는 주소
 
 - 변수 선언

   - 자바스크립트에서는 먼저 변수를 선언한 다음 그 다음 변수 사용
   - 키워드: let, const, var(2015년 이전에 많이 사용)

- <b>let</b>으로 변수 선언하기
    
        <script>
            let name = "홍길동"; // 'let'으로 변수 'name'선언
            console.log(name); // console.log에 나타나게 하는 것

            name = "김길동";
            colsole.log(name);
        </script>
            
    - let은 변수 이름을 중복 선언 하지 않는다 (let name = "김길동" X)
    - "" -> 문자열, () -> 함수호출, = -> 값 할당

- <b>const</b>로 변수 선언하기

        <script>
            const name = "홍길동"
            console.log(name)

            name = "김길동"     //오류 발생: 재할당 불가
            console.log(name)
        </stript>

    - const를 이용하여 선언된 변수는 값을 재할당 할 수 없음
    - const는 값이 고정된 변수에 사용
    - 만약 위와 같은 상황에서 const를 사용하려면?
      -> 두 개의 상수 변수를 지정해서 이름을 각각 출력(const first name / const second name)

- 변수 이름 짓기

    - 자바스크립트에서는 변수의 이름을 <b>식별자(identifier)</b>라고 부름
    - 식별자 생성 규칙

        - 영어, 알파벳, 밑줄(_), $ 사용
        - 숫자로 시작하면 안됌
        - 동일한 알파벳의 대문자, 소문자는 서로 다른 것
        - 이름이 길 경우, 밑줄(_)이나 카멜 케이스(CamelCase)사용 


### 🚨 잠깐 퀴즈! 오답
<b>2-3)</b> 다음 프로그램에는 오류가 있습니다. 오류가 발생하는 이유가 무엇인지 설명하시오.

    const birth_year = 2000;
    birth_year = 2010;

-> const로 선언된 변수는 값을 재할당할 수 없다.



### 💡 알게된 기타 내용 및 느낀점
- 
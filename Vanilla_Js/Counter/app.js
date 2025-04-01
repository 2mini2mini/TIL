let count = 0; // count를 0으로 초기화 → 버튼을 눌렀을때 숫자를 업데이트하는 용도
const value = document.querySelector("#value"); //#value를 찾아서 value 변수 저장
const btns = document.querySelectorAll(".btn"); // .btn 클래스를 가진 모든 버튼을 찾아서 btns 변수에 저장
// querySelectorAll()을 사용했기 때문에 NodeList(배열 비슷한 형태로 가져옴

btns.forEach(function (btn) {
  //foreach()를 사용해서 각 버튼마다 이벤트 리스너를 추가
  btn.addEventListener("click", function (e) {
    //버튼 클릭 시 실행되는 이벤트 리스너 추가
    const styles = e.currentTarget.classList; // e.currentTarget → 현재 클릭한 버튼을 가리킴 / classList를 사용하면 어떤 버튼이 눌렸는지 확인 가능
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("reset")) {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
    value.textContent = count; //변경된 count 값을 #value(화면에 표시되는 숫자)에 적용
  });
});

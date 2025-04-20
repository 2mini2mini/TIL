## 📖 Math 객체

-> 내장객체로써 프로그램에서 수학적 연산을 위한 다양한 메서드를 제공

### ✏️ min()/max() 메서드

    <script>
      let min_value = Math.min(5, 12, 31, 2, 8);
      let max_value = Math.max(-9, 2, 21, 51, -30);
      text = "";
      text += "최솟값: " + min_value + "<br>";
      text += "최댓값: " + max_value;
      document.getElementById("show").innerHTML = text;
    </script>

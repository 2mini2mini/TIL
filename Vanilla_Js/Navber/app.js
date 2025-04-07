const reviews = [
  //리뷰 정보를 저장하는 배열 (객체 리스트)
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "hello",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-2_np9x5l.jpg",
    text: "haha",
  },
  {
    id: 3,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "allo",
  },
  {
    id: 4,
    name: "anna johnson",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-2_np9x5l.jpg",
    text: "hoho",
  },
];

// getElementById: 특정 id를 가진 요소를 가져옴
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// querySelector: 특정 클래스(.prev-btn 등)를 가진 요소를 가져옴
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0; // 현재 보여줄 리뷰의 인덱스 (배열의 첫 번째 값)

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
}); // 웹 페이지가 로드되면 (DOMContentLoaded) showPerson() 실행 → currentItem = 0이므로, 첫 번째 리뷰(reviews[0])가 표시됨

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
} // currentItem의 값에 맞는 reviews 데이터 가져옴 → 해당 데이터를 HTML 요소에 삽입하여 화면 업데이트

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
}); // currentItem 값을 1 증가 (currentItem++) → 마지막 인덱스를 초과하면 다시 첫 번째 리뷰로 순환 (currentItem = 0) → showPerson() 호출 → UI 업데이트

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
}); // currentItem 값을 1 감소 (currentItem--) → 0보다 작아지면 마지막 리뷰(reviews.length - 1)로 돌아감 → showPerson() 호출 → UI 업데이트

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson();
}); // Math.random()을 사용해 0 ~ reviews.length - 1 사이의 랜덤 인덱스 생성 → 콘솔에 currentItem 출력 (디버깅 용도) → showPerson() 호출 → UI 업데이트

const loginPage = document.querySelector(".login-page");
const mainPage = document.querySelector(".main-page");
const userNameDisplay = document.querySelector(".user-name");
const userInput = document.getElementById("name-input"); // 이름 바꿈

function showMainPage(name) {
  loginPage.style.display = "none";
  mainPage.classList.remove("main-page-hide");
  userNameDisplay.textContent = name;
}

// 이름이 이미 저장되어 있으면 로그인 페이지 건너뜀
const storedName = localStorage.getItem("userName");
if (storedName) {
  showMainPage(storedName);
} else {
  userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const enteredName = userInput.value.trim();
      if (enteredName) {
        localStorage.setItem("userName", enteredName);
        showMainPage(enteredName);
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const detailContainer = document.querySelector(".user-detail");
  const textarea = detailContainer.querySelector("textarea");
  const button = detailContainer.querySelector("button");

  // 저장된 내용 불러오기
  const savedDetail = localStorage.getItem("userDetail");

  // 텍스트 박스 생성
  const detailBox = document.createElement("div");
  detailBox.className = "detail-box";
  detailBox.style.whiteSpace = "pre-wrap"; // 줄바꿈 유지
  detailBox.style.marginTop = "10px";

  if (savedDetail) {
    textarea.style.display = "none";
    detailBox.textContent = savedDetail;
    detailContainer.insertBefore(detailBox, button);
    button.textContent = "Edit";
  }

  button.addEventListener("click", () => {
    if (button.textContent === "Save.") {
      const value = textarea.value.trim();
      if (value) {
        localStorage.setItem("userDetail", value);
        textarea.style.display = "none";
        detailBox.textContent = value;
        detailContainer.insertBefore(detailBox, button);
        button.textContent = "Edit";
      }
    } else {
      // Edit 상태
      textarea.style.display = "block";
      textarea.value = localStorage.getItem("userDetail") || "";
      if (detailBox.parentNode) {
        detailBox.remove();
      }
      button.textContent = "Save.";
    }
  });
});

// 북마크 불러오기 및 렌더링
function loadBookmarks() {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  const bookmarkList = document.getElementById("bookmark-list");
  bookmarkList.innerHTML = "<h2>List :</h2>";

  bookmarks.forEach((bookmark) => {
    const div = document.createElement("div");
    div.classList.add("bookmark");
    div.innerHTML = `<span>📂</span> <a href="${bookmark.url}" target="_blank">${bookmark.title}</a>`;
    bookmarkList.appendChild(div);
  });
}

// 북마크 추가 시
document
  .getElementById("bookmark-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("bookmark-title").value;
    const url = document.getElementById("bookmark-url").value;

    if (title && url) {
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
      bookmarks.push({ title, url });
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

      // 입력 필드 초기화
      document.getElementById("bookmark-title").value = "";
      document.getElementById("bookmark-url").value = "";

      loadBookmarks(); // 리스트 다시 그리기
      toggleBookmarkForm(); // 폼 닫기
    }
  });

// 폼 토글 (보이기/숨기기)
function toggleBookmarkForm() {
  const form = document.getElementById("bookmark-form");
  if (form.style.display === "none" || form.style.display === "") {
    form.style.display = "block";
    localStorage.setItem("form-visible", "true");
  } else {
    form.style.display = "none";
    localStorage.setItem("form-visible", "false");
  }
}

// + 버튼 클릭 시 폼 토글
document
  .getElementById("add-bookmark-btn")
  .addEventListener("click", toggleBookmarkForm);

// 페이지 로드 시
window.onload = function () {
  const form = document.getElementById("bookmark-form");
  const formVisible = localStorage.getItem("form-visible");

  // 폼 표시 여부 기억
  if (formVisible === "true") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }

  // 북마크 로드
  loadBookmarks();

  // 북마크 리스트 항상 보이게 하기
  const bookmarkList = document.getElementById("bookmark-list");
  bookmarkList.style.display = "block";
};

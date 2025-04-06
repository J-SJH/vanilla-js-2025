const eventImg = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.png",
  "img/9.jpeg",
  "img/10.jpg",
  "img/11.jpg",
];

const killingTimeDiv = document.querySelector(".killing-time");
const imgElement = killingTimeDiv.querySelector("img");

killingTimeDiv.addEventListener("mouseover", () => {
  killingTimeDiv.style.cursor = "pointer";
});

killingTimeDiv.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * eventImg.length);
  imgElement.src = eventImg[randomIndex];
});

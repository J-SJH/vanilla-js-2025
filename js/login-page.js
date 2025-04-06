const welcomeText = "Welcome<br>to<br>To-Do List";
const newText = "What<br>is<br>Your Name?";
const welcomeElement = document.getElementById("welcome-text");
const nameInput = document.getElementById("name-input");

function typeText(text, element, speed, callback) {
  let index = 0;
  const cleanText = text.replace(/<br>/g, "\n");
  const chars = cleanText.split("");

  element.innerHTML = "";
  element.classList.add("typing");

  const interval = setInterval(() => {
    const currentChar = chars[index];
    if (currentChar === "\n") {
      element.innerHTML += "<br>";
    } else {
      element.innerHTML += currentChar;
    }
    index++;
    if (index === chars.length) {
      clearInterval(interval);
      callback();
    }
  }, speed);
}

function deleteText(element, speed, callback) {
  const content = element.innerHTML.replace(/<br>/g, "\n");
  let index = content.length;
  const interval = setInterval(() => {
    index--;
    const newText = content.slice(0, index).replace(/\n/g, "<br>");
    element.innerHTML = newText;
    if (index <= 0) {
      clearInterval(interval);
      callback();
    }
  }, speed);
}

function startTypingAnimation() {
  typeText(welcomeText, welcomeElement, 100, () => {
    setTimeout(() => {
      deleteText(welcomeElement, 65, () => {
        typeText(newText, welcomeElement, 100, () => {
          nameInput.style.display = "block";
          nameInput.focus();
        });
      });
    }, 1000);
  });
}

window.onload = function () {
  startTypingAnimation();
};

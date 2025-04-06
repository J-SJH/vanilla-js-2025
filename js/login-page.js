document.addEventListener("DOMContentLoaded", function () {
  const welcomeText = "Welcome\nto\nMy Page!!!";
  const newText = "What\nis\nYour Name?";
  const welcomeElement = document.getElementById("welcome-text");
  const nameInput = document.getElementById("name-input");

  function typeText(text, element, speed, callback) {
    const lines = text.split("\n");
    let lineIndex = 0;
    let charIndex = 0;

    element.innerHTML = "";
    element.classList.add("typing");

    function typeLine() {
      if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
          element.innerHTML += lines[lineIndex].charAt(charIndex);
          charIndex++;
          setTimeout(typeLine, speed);
        } else {
          element.innerHTML += "<br>";
          lineIndex++;
          charIndex = 0;
          setTimeout(typeLine, speed);
        }
      } else {
        element.classList.remove("typing");
        callback && callback();
      }
    }

    typeLine();
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
  function deleteText(element, speed, callback) {
    let index = element.innerHTML.length;
    const interval = setInterval(() => {
      element.innerHTML = element.innerHTML.slice(0, index - 1);
      index--;
      if (index === 0) {
        clearInterval(interval);
        callback();
      }
    }, speed);
  }

  startTypingAnimation();
});

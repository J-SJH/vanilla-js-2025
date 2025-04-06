function updateTime() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const year = now.getFullYear();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("calendar").textContent = `${month}/${day}/${year}`;
  document.getElementById(
    "time"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);

updateTime();

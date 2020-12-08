const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYears = "1 jan 2021";

function countDown() {
  const endingDate = new Date(newYears);
  const currentDate = new Date();
  const milliseconds = endingDate - currentDate;
  const totalSeconds = milliseconds / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds % 60);
  daysEl.innerText = days;
  hoursEl.innerText = hours;
  minutesEl.innerText = minutes;
  secondsEl.innerText = seconds;
  if (seconds < 10) {
    secondsEl.innerText = "0" + seconds;
  }
  if (minutes < 10) {
    minutesEl.innerText = "0" + minutes;
  }
  if (hours < 10) {
    hoursEl.innerText = "0" + hours;
  }
}
countDown();
setInterval(countDown, 1000);

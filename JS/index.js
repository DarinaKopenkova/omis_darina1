// let secondEl = document.getElementById("seconds");
// let minuteEl = document.getElementById("minutes");
// let hourEl = document.getElementById("hours");

// function setTime(hour, minute, second) {
//   secondEl.innerHTML = second;
//   minuteEl.innerHTML = minute;
//   hourEl.innerHTML = hour;
// }

// let now = new Date();

// let currentHour = 23;
// let currentMinute = 59;
// let currentSecond = 59;

// function getNewTime() {
//   currentSecond -= 1;
//   if (currentSecond < 0) {
//     currentMinute -= 1;
//     currentSecond = 59;
//   }
//   if (currentMinute < 0) {
//     currentHour -= 1;
//     currentMinute = 59;
//   }
//   if (currentHour < 00) {
//     currentHour = 23;
//   }

//   setTime(currentHour, currentMinute, currentSecond);
//   setTimeout(getNewTime, 1000);
// }

// getNewTime();

let minuteEl = document.getElementById("minutes");
let secondEl = document.getElementById("seconds");
let hourEl = document.getElementById("hours");

function setTime(second, minute, hour) {
  secondEl.innerHTML = second;
  minuteEl.innerHTML = minute;
  hourEl.innerHTML = hour;
}

let now = new Date();
let currentSecond = now.getSeconds();
let currentMinute = now.getMinutes();
let currentHour = now.getHours();

function increaseTime() {
  currentSecond += 1;
  if (currentSecond > 59) {
    currentSecond = 0;
    currentMinute += 1;
  }
  if (currentMinute > 59) {
    currentMinute = 0;
    currentHour += 1;
  }
  if (currentHour > 23) {
    currentHour = 0;
  }
  setTime(currentSecond, currentMinute, currentHour);
  setTimeout(increaseTime, 1000);
}

increaseTime();

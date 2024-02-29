const leftPart = document.querySelector(".left");
const rightPart = document.querySelector(".right");
const today = new Date();

const allMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const allDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
leftPart.children[0].innerHTML =
  today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
leftPart.children[1].innerHTML = allDays[today.getDay() - 1];
rightPart.children[0].innerHTML = allMonths[today.getMonth()];
rightPart.children[1].innerHTML = today.getFullYear();

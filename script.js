const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const day = document.querySelector(".day");
const date = document.querySelector(".date");
const d = new Date();

const today = weekday[d.getDay()];
day.innerHTML = today;

const currentDate =
  d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
date.innerHTML = currentDate;

const form = document.getElementById("form");

const addEventBtn = document.querySelector(".add-task");
const plusIcon = document.querySelector(".plus");

addEventBtn.addEventListener("click", () => {
  form.classList.toggle("active");
  plusIcon.classList.toggle("rotate");
});

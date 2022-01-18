const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
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

function setTime() {
  const localDate = new Date();
  const hours = localDate.getHours();
  const hoursForTwelveHourClock = hours > 12 ? hours - 12 : hours;
  const minutes = localDate.getMinutes();
  const seconds = localDate.getSeconds();
  const day = localDate.getDay();
  const dateOfMonth = localDate.getDate();
  const month = localDate.getMonth();

  timeElement.innerHTML = `${hoursForTwelveHourClock}:${minutes} 
  ${hours < 12 ? "AM" : "PM"}`;

  dateElement.innerHTML = `${days[day - 1]}, ${months[month]} 
  <span>${dateOfMonth}</span>`;

  hourElement.style.transform = `rotate(${30 * hours}deg)`;
  minuteElement.style.transform = `rotate(${6 * minutes}deg)`;
  secondElement.style.transform = `rotate(${6 * seconds}deg)`;
}

setTime();

setInterval(setTime, 1000);

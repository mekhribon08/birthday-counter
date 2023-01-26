const elDay = document.querySelector("[data-day]");
const elHour = document.querySelector("[data-hour]");
const elMinut = document.querySelector("[data-minut]");
const elSecund = document.querySelector("[data-secund]");
const elBtn = document.querySelector("[data-btn]");
const elInputDate = document.querySelector("[data-input-date]");
const elInputMonth = document.querySelector("[data-input-month]");
const newDate = new Date();

elBtn.addEventListener("click", (evt) => {
  countTimer(evt);
});

function countTimer() {
  const num = new Date(`${elInputMonth}-${elInputDate} 00:00:00`) - newDate;
  const days = Math.round(num / (1000 * 60 * 60 * 24));
  const hours = Math.round(num / (1000 * 60 * 60)) % 24;
  const minutes = Math.round(num / (1000 * 60)) % 60;
  const seconds = Math.round(num / 1000) % 60;
  elDay.textContent = days;
  elHour.textContent = hours;
  elMinut.textContent = minutes;
  elSecund.textContent = seconds;
}

setInterval(countTimer, 1000);

function timeShower() {
  var timeNow = new Date();

  document.querySelector(".hours").textContent = timeNow.getHours();
  document.querySelector(".minutes").textContent = timeNow.getMinutes();
  document.querySelector(".seconds").textContent = timeNow.getSeconds();
}

timeShower();

setInterval(function () {
  timeShower();
}, 1000);

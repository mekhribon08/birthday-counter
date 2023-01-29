const elDate = document.querySelector("[data-date]");
const elInputDate = document.querySelector("[data-input-date]");

elInputDate.addEventListener("change", () => {
  setInterval(() => {
    startTimer(new Date(elInputDate.value));
  }, 1000);
});

function startTimer(date) {
  const now = new Date();
  let diff = Math.trunc((date.getTime() - now.getTime()) / 1000);
  const second = diff % 60;
  diff = Math.trunc(diff / 60);
  const minute = diff % 60;
  diff = Math.trunc(diff / 60);
  const hour = diff % 24;
  diff = Math.trunc(diff / 24);

  elDate.textContent = `${diff} day, ${hour} hour, ${minute} minute, ${second} second.`;
}

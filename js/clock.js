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

// const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
// const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
// const SpeechRecognitionEvent =
//   window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

// const colors = [
//   "aqua",
//   "azure",
//   "beige",
//   "bisque",
//   "black",
//   "blue",
//   "brown",
//   "chocolate",
//   "coral" /* … */,
// ];
// const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(
//   " | "
// )};`;

// const recognition = new SpeechRecognition();
// const speechRecognitionList = new SpeechGrammarList();

// speechRecognitionList.addFromString(grammar, 1);

// recognition.onresult = (event) => {
//   console.log(event);
//   const color = event.results[0][0].transcript;
//   diagnostic.textContent = `Result received: ${color}.`;
//   bg.style.backgroundColor = color;
//   console.log(`Confidence: ${event.results[0][0].confidence}`);
// };

// const diagnostic = document.querySelector(".output");
// const bg = document.querySelector("html");
// const hints = document.querySelector(".hints");

// let colorHTML = "";
// colors.forEach((color, i) => {
//   console.log(color, i);
//   colorHTML += `<span style="background-color:${color};"> ${color} </span>`;
// });
// hints.innerHTML = `Tap or click then say a color to change the background color of the app. Try ${colorHTML}.`;

// document.body.onclick = () => {
//   recognition.start();
//   console.log("Ready to receive a color command.");
// };

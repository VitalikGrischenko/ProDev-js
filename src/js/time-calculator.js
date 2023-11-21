const inputRef = document.querySelector("[data-input=time-calculator]");
const resultText = document.querySelector("[data-text=time-calculator]");
const buttonRef = document.querySelector(".time-calculator__button");

// buttonRef.addEventListener("click", () => {
//   // const days = Math.floor(inputRef.value / (24 * 60));
//   // const minutes = inputRef.value % (24 * 60);
//   // const hours = Math.floor(minutes / 60);
//   // const seconds = (minutes % 60) * 60;
//   if (Number(inputRef.value) !== 0) {
//     let days = 0;
//     let hours = 0;
//     let minutes = 0;
//     let seconds = 0;
//     days = Math.floor(inputRef.value / 1440);
//     hours = Math.floor((inputRef.value % 1440) / 60);
//     minutes = inputRef.value % 60;
//     resultText.textContent = `${days} дн. ${hours}:${minutes}:00`;
//   }
// });

buttonRef.addEventListener("click", () => {
  if (Number(inputRef.value) !== 0) {
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    days = Math.floor(inputRef.value / 1440);
    hours = Math.floor((inputRef.value % 1440) / 60);
    minutes = inputRef.value % 60;
    resultText.textContent = `${days} дн. ${hours}:${minutes}:00`;
  }
});

// if (Number(inputRef.value) !== 0) {
//     let days = 0;
//     let hours = 0;
//     let mins = 0;
//     let seconds = 0;

//     days = Math.floor(inputRef.value / 1440);
//     hours = Math.floor((inputRef.value % 1440) / 60);
//     mins = inputRef.value % 60;
// }

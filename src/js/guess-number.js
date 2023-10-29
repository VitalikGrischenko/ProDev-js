const inputRef = document.querySelector("[data-input=guess-number]");
const buttonRef = document.querySelector("[data-button=guess-number]");
const textRef = document.querySelector("[data-text=guess-number]");

inputRef.addEventListener("input", () => {
  buttonRef.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    if (Number(inputRef.value) === randomNumber) {
      textRef.textContent = `Вітаю, ви вгадали число! ${randomNumber}`;
      textRef.style.color = "#039900";
    } else {
      textRef.textContent = `Ви програли, комп’ютер загадав ${randomNumber}`;
      textRef.style.color = "#900";
    }
    if (isNaN(inputRef.value)) {
      textRef.textContent = "Ви ввели не число!";
      textRef.style.color = "#900";
    }
  });
});

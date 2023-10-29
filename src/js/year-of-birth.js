const inputRef = document.querySelector("[data-input=birth]");
const buttonRef = document.querySelector("[data-button=birth]");
const textRef = document.querySelector("[data-text=birth]");

inputRef.addEventListener("input", () => {
  buttonRef.addEventListener("click", () => {
    if (inputRef.value % 4 === 0) {
      textRef.style.color = "#039900";
      textRef.textContent = "Ви народилися у високосний рік!";
    } else if (!inputRef.value % 4 === 0) {
      textRef.style.color = "#900";
      textRef.textContent = "Ви народилися не у високосний рік!";
    }
    if (isNaN(inputRef.value)) {
      textRef.textContent = "Ви ввели не число!";
      textRef.style.color = "#900";
    }
  });
});

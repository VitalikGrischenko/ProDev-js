const stoneButtonRef = document.querySelector("[data-button=stone]");
const scissorsButtonRef = document.querySelector("[data-button=scissors]");
const paperButtonRef = document.querySelector("[data-button=paper]");
const computerResultRef = document.querySelector("[data-result=computer]");
const userResultRef = document.querySelector("[data-result=user]");
const textRef = document.querySelector("[data-text=paper]");

let computerResult = 0;
let userResult = 0;

stoneButtonRef.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * (4 - 1) + 1);
  if (randomNum === 2) {
    textRef.textContent = "Ви виграли раунд!";
    textRef.style.color = "#039900";
    userResult += 1;
  } else {
    textRef.textContent = "Комп’ютер виграв раунд!";
    textRef.style.color = "#900";
    computerResult += 1;
  }
  computerResultRef.textContent = computerResult;
  userResultRef.textContent = userResult;
});

scissorsButtonRef.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * (4 - 1) + 1);
  if (randomNum === 3) {
    textRef.textContent = "Ви виграли раунд!";
    textRef.style.color = "#039900";
    userResult += 1;
  } else {
    textRef.textContent = "Комп’ютер виграв раунд!";
    textRef.style.color = "#900";
    computerResult += 1;
  }
  computerResultRef.textContent = computerResult;
  userResultRef.textContent = userResult;
});

paperButtonRef.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * (4 - 1) + 1);
  if (randomNum === 1) {
    textRef.textContent = "Ви виграли раунд!";
    textRef.style.color = "#039900";
    userResult += 1;
  } else {
    textRef.textContent = "Комп’ютер виграв раунд!";
    textRef.style.color = "#900";
    computerResult += 1;
  }
  computerResultRef.textContent = computerResult;
  userResultRef.textContent = userResult;
});

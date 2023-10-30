const inputRefFirst = document.querySelector(
  "[data-input=bigger-number-first]"
);
const inputRefSecond = document.querySelector(
  "[data-input=bigger-number-second]"
);
const inputRefThird = document.querySelector(
  "[data-input=bigger-number-third]"
);
const listRef = document.querySelector("[data-list=bigger-number]");
const textRef = document.querySelector("[data-text=bigger-number]");

// let maxNum = 0;

listRef.addEventListener("input", findMax);

function findMax() {
  const arrayOfElems = [...document.querySelectorAll(".bigger-number__input")];
  const arrayOfValues = arrayOfElems.map((elem) => Number(elem.value));
  let max = arrayOfValues[0];
  arrayOfValues.forEach((value) => {
    if (max < value) {
      max = value;
      textRef.textContent = max;
    } else {
      textRef.textContent = max;
    }
  });
}

const sliderBoxRef = document.querySelector("[data-slider=team]");
const scrollLeftButtonRef = document.querySelector("[data-button=left]");
const scrollRightButtonRef = document.querySelector("[data-button=right]");
const sliderListRef = document.querySelector("[data-list=team]");
const sliderItemsRef = sliderListRef.children;
const previewImageRef = sliderItemsRef[0];
let i = 0;

scrollRightButtonRef.addEventListener("click", (e) => {
  if (i < sliderItemsRef.length - 1) {
    sliderItemsRef[i].classList.remove("is-show");

    sliderItemsRef[i + 1].classList.add("is-show");
    i++;
  } else {
    sliderItemsRef[i].classList.remove("is-show");
    i = 0;
    sliderItemsRef[i].classList.add("is-show");
  }
});

scrollLeftButtonRef.addEventListener("click", () => {
  if (i > 0) {
    // console.log('hello');
    sliderItemsRef[i].classList.remove("is-show");

    sliderItemsRef[i - 1].classList.add("is-show");
    i--;
  } else {
    sliderItemsRef[i].classList.remove("is-show");
    i = 2;
    sliderItemsRef[i].classList.add("is-show");
  }
});

function showText (param1) {
    console.log(param1);
};
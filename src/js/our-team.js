const sliderBoxRef = document.querySelector("[data-slider=team]");
const scrollLeftButtonRef = document.querySelector("[data-button=left]");
const scrollRightButtonRef = document.querySelector("[data-button=right]");
const sliderListRef = document.querySelector("[data-list=team]");
const sliderItemsRef = sliderListRef.children;
const previewImageRef = sliderItemsRef[0];
let i = 0;
// ! pagination
const paginationButtons = document.querySelectorAll("[data-button=pagination]");
const paginationList = document.querySelector(".team-pagonation__list");
const paginationItems = paginationList.children;
console.log(paginationItems);
// const paginationButton1 = paginationButtons[0];
// const paginationButton2 = paginationButtons[1];
// const paginationButton3 = paginationButtons[2];

scrollRightButtonRef.addEventListener("click", (e) => {
  if (i < sliderItemsRef.length - 1) {
    sliderItemsRef[i].classList.remove("is-show");
    paginationItems[i].firstElementChild.classList.remove(
      "team-active-pagination"
    );

    sliderItemsRef[i + 1].classList.add("is-show");
    paginationItems[i + 1].firstElementChild.classList.add(
      "team-active-pagination"
    );
    i++;
  } else {
    sliderItemsRef[i].classList.remove("is-show");
    paginationItems[i].firstElementChild.classList.remove(
      "team-active-pagination"
    );
    i = 0;
    sliderItemsRef[i].classList.add("is-show");
    paginationItems[i].firstElementChild.classList.add(
      "team-active-pagination"
    );
  }
});

scrollLeftButtonRef.addEventListener("click", () => {
  if (i > 0) {
    sliderItemsRef[i].classList.remove("is-show");
    paginationItems[i].firstElementChild.classList.remove(
      "team-active-pagination"
    );
    sliderItemsRef[i - 1].classList.add("is-show");
    paginationItems[i - 1].firstElementChild.classList.add(
      "team-active-pagination"
    );
    i--;
  } else {
    sliderItemsRef[i].classList.remove("is-show");
    paginationItems[i].firstElementChild.classList.remove(
      "team-active-pagination"
    );
    i = 2;
    sliderItemsRef[i].classList.add("is-show");
    paginationItems[i].firstElementChild.classList.add(
      "team-active-pagination"
    );
  }
});

paginationList.addEventListener("click", (evt) => {
  // if (evt.target !== null)
  const idx = evt.target.getAttribute("data-num");
  if (idx !== null && idx !== undefined) {
    i = Number(idx);
    for (const preview of sliderItemsRef) {
      preview.classList.remove("is-show");
    }

    for (const item of paginationItems) {
      item.firstElementChild.classList.remove("team-active-pagination");
    }

    sliderItemsRef[idx].classList.add("is-show");
    paginationItems[idx].firstElementChild.classList.add(
      "team-active-pagination"
    );
  }
});

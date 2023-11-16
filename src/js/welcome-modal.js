const closeModalButtonRef = document.querySelector("[data-close=welcome]");
const backdropRef = document.querySelector("[data-backdrop=welcome]");
const inputRef = document.querySelector("[data-input=welcome]");
const saveButtonRef = document.querySelector("[data-button-save=welcome]");
const nameRef = document.querySelector("[data-name=header]");
const erorText = document.querySelector(".welcome-eror__text");
const textRef = document.querySelector(".welcome__text");

function toggleModal() {
  backdropRef.classList.toggle("is-hidden-welcome");
}

closeModalButtonRef.addEventListener("click", toggleModal);
textRef.addEventListener("click", toggleModal);

saveButtonRef.addEventListener("click", (evt) => {
  if (inputRef.value.length >= 2) {
    nameRef.textContent = inputRef.value;
    toggleModal();
  } else if (inputRef.value.length < 2) {
    saveButtonRef.insertAdjacentHTML(
      "beforebegin",
      `<p class=welcome-eror__text>Будь ласка, перевірте вміст текстовго поля</p>`
    );
    // erorText.textContent = "Будь ласка, перевірте вміст текстовго поля";
  }
});

setTimeout(toggleModal, 10000);

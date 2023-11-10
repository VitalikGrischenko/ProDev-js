const closeModalButtonRef = document.querySelector("[data-close=welcome]");
const backdropRef = document.querySelector("[data-backdrop=welcome]");
const inputRef = document.querySelector("[data-input=welcome]");
const buttonRef = document.querySelector("[data-button-save=welcome]");
const nameRef = document.querySelector("[data-name=header]");
const erorText = document.querySelector(".welcome-eror__text");

function toggleModal() {
  backdropRef.classList.toggle("is-hidden-welcome");
  console.log('hello');
};
// toggleModal();

closeModalButtonRef.addEventListener("click", toggleModal);

if (inputRef.value > 3) {
  nameRef.textContent = inputRef.value;
  toggleModal();
} else {
  erorText.textContent = "Будь ласка, перевірте вміст текстовго поля";
}

setTimeout(toggleModal, 1000);

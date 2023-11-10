const refs = {
  openModalBtn: document.querySelector("[data-button=open-footer]"),
  closeModalBtn: document.querySelector("[data-button=close-footer]"),
  backdrop: document.querySelector("[data-backdrop=footer]"),
  footerInput: document.querySelector("[data-input=footer]"),
  erorText: document.querySelector('.footer-eror__text'),
};

const checkInput = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function toggleModal() {
  refs.backdrop.classList.toggle("is-hidden-footer");
}

refs.openModalBtn.addEventListener("click", () => {
  if (checkInput.test(refs.footerInput.value) === true && refs.footerInput.value.length > 8) {
    // refs.openModalBtn.addEventListener("click", toggleModal);
    toggleModal();
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.footerInput.value = '';
    refs.erorText.textContent = '';
  } else {
    refs.erorText.textContent = 'Будь ласка, перевірте вміст текстовго поля';
  };
});

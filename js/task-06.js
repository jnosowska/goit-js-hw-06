const inputValid = document.querySelector("#validation-input");
const maxLenght = inputValid.getAttribute("data-length");

inputValid.addEventListener("click", () => {
  inputValid.focus();
});

inputValid.addEventListener("blur", () => {
  if (inputValid.value.length >= maxLenght) {
    inputValid.classList.remove(...inputValid.classList);
    inputValid.classList.add("valid");
  } else {
    inputValid.classList.remove(...inputValid.classList);
    inputValid.classList.add("invalid");
  }
});

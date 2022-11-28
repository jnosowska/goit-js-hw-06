const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", () => {
  textOutput.textContent = textInput.value;
  if (textInput.value === "") {
    textOutput.textContent = "Anonymous";
  }
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector(".change-color");
const colorHolder = document.querySelector(".color");

colorBtn.addEventListener("click", () => {
  let generatedColor = getRandomHexColor();
  colorHolder.innerHTML = generatedColor;
  document.body.style.backgroundColor = generatedColor;
});

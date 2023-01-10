const inputNumber = document.querySelector("input");
let amount = 0;
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

inputNumber.addEventListener("change", (e) => {
  amount = e.currentTarget.value;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

createBtn.addEventListener("click", () => {
  if (amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = 30 + 10 * i + "px";
      box.style.height = 30 + 10 * i + "px";
      const color = getRandomHexColor();
      box.style.backgroundColor = color;
      boxes.append(box);
    }
  } else {
    alert(
      "You don't expect too much from this function, sir? 100 is enough :)"
    );
  }
});

destroyBtn.addEventListener("click", () => {
  boxes.innerHTML = "";
});

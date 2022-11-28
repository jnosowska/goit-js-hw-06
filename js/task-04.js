let counterValue = 0;

const decrementCounter = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementCounter = document.querySelector(
  'button[data-action="increment"]'
);
const counterValues = document.querySelector("#value");

decrementCounter.addEventListener("click", () => {
  counterValue--;
  counterValues.textContent = counterValue;
});

incrementCounter.addEventListener("click", () => {
  counterValue++;
  counterValues.textContent = counterValue;
});

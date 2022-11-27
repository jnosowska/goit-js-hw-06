const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

for (ingredient of ingredients) {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  list.append(item);
}

const categories = document.querySelector("#categories").children;
console.log("Number of categories:" + categories.length);

categories.forEach((category) => {
  console.log("Category:" + category.querySelector("h2").innerText);
  console.log("Elements:" + category.querySelector("li").length);
});

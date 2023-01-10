const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Uzupełnij wszystkie pola!");
  }

  const response = { email: email.value, password: password.value };

  e.target.reset();

  return console.log(response);
});

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Поле не може бути пустим!");
  }
  const obj = {
    Login: `${ email.value }`,
    Password: `${ password.value }`
  
}
  console.log(obj);
  event.currentTarget.reset();
}


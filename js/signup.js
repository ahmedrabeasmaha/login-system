var users = [];
var userName = document.querySelector("#name");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var signUp = document.querySelector("#signUp");
var emailError = document.querySelector("#emailValidation");
var passwordError = document.querySelector("#passwordValidation");
var nameError = document.querySelector("#nameValidation");
var alertLogin = document.querySelector("#alert");
console.log(location);
console.log(location.hostname);
if (localStorage.getItem("users")) {
  users = JSON.parse(localStorage.getItem("users"));
}

console.log(location);

function emailValidation() {
  var emailRegex = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
  if (!emailRegex.test(email.value)) {
    email.classList.add("is-invalid");
    emailError.innerHTML = "Please enter valid email";
    return false;
  } else if (users) {
    for (var i = 0; i < users.length; i++) {
      if (email.value == users[i].email) {
        email.classList.add("is-invalid");
        emailError.innerHTML = "Email is used before";
        return false;
      }
    }
  }
  return true;
}

function blankValidation(input, validation, msg) {
  if (input.value.trim()) {
    return true;
  }
  validation.innerHTML = msg;
  return false;
}

signUp.addEventListener("click", function () {
  if (
    emailValidation() &&
    blankValidation(userName, nameError, "Please enter your name") &&
    blankValidation(password, passwordError, "Please enter your password")
  ) {
    users.push({
      email: email.value,
      name: userName.value,
      password: password.value,
    });
    localStorage.setItem("users", JSON.stringify(users));
    location.replace(`https://${location.hostname}/login-system/signin.html`);
  }
});

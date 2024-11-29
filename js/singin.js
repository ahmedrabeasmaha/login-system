var users = [];
var userName = document.querySelector("#name");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var login = document.querySelector("#login");
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

login.addEventListener("click", function () {
  var auth = false;
  if (
    emailValidation() &&
    blankValidation(password, passwordError, "Please enter your password")
  ) {
    for (var i = 0; i < users.length; i++) {
      if (
        users[i].email == email.value &&
        users[i].password == password.value
      ) {
        auth = true;
        localStorage.setItem("currentUser", users[i].name);
        location.replace(`https://${location.hostname}/login-system`);
      }
    }
    if (!auth) {
      alertLogin.classList.remove("d-none");
      alertLogin.innerHTML("Please check email and password");
    }
  }
});

var currentUser;
var welcome = document.querySelector("#welcome");
var logOut = document.querySelector("#logOut");

if (localStorage.getItem("currentUser")) {
  currentUser = localStorage.getItem("currentUser");
  welcome.innerHTML = `Hello ${currentUser}`;
} else {
  location.replace(`https://${location.hostname}/login-system/signin.html`);
}

logOut.addEventListener("click", function () {
  localStorage.removeItem("currentUser");
});

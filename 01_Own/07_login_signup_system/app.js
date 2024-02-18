const buttons = document.querySelectorAll(".button");
const submitButton = document.querySelector(".btn_submit");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confpassword = document.querySelector("#confpassword");
const form = document.querySelector("form");
const errorMessage = document.querySelector(".error");

let users = [];

class User {
  constructor(username, email, password, confpassword) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.confpassword = confpassword;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!button.classList.contains("active")) {
      document.querySelector(".active").classList.remove("active");
      button.classList.add("active");
    }

    if (button.children[1].innerHTML == "Sign In") {
      submitButton.children[0].classList.remove("fa-user-plus");
      submitButton.children[0].classList.add("fa-user");
      submitButton.children[1].innerHTML = "Sign In";
      confpassword.removeAttribute("required");
      username.removeAttribute("required");
      confpassword.parentElement.classList.add("hide");
      username.parentElement.classList.add("hide");
    } else {
      submitButton.children[0].classList.remove("fa-user");
      submitButton.children[0].classList.add("fa-user-plus");
      submitButton.children[1].innerHTML = "Sign Up";
      confpassword.setAttribute("required", "");
      username.setAttribute("required", "");
      confpassword.parentElement.classList.remove("hide");
      username.parentElement.classList.remove("hide");
    }
  });
});

function signUpUser(isValid) {
  if (isValid) {
    const newUser = new User(
      username.value,
      email.value,
      password.value,
      confpassword.value
    );
    users.push(newUser);
    setData();
    alert("User sign up successfully!!");
    cleanUp();
  }
}
function validator(username, email, password, confpassword) {
  if (password !== confpassword) {
    errorMessage.innerHTML = "Password doesn't match";
    errorMessage.classList.remove("hide");
    return false;
  }
  const user = users.find((u) => u.email === email || u.username === username);
  if (user) {
    errorMessage.innerHTML = "User already exists";
    errorMessage.classList.remove("hide");
    return false;
  }
  errorMessage.classList.add("hide");
  return true;
}
function signInUser(email, password) {
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    alert("User sign in successfully!!");
    cleanUp();
    errorMessage.classList.add("hide");
    return;
  }
  errorMessage.innerHTML = "Incorrect email or password";
  errorMessage.classList.remove("hide");
}
function submitForm(e) {
  e.preventDefault();
  if (submitButton.children[1].innerHTML === "Sign Up") {
    const isValid = validator(
      username.value,
      email.value,
      password.value,
      confpassword.value
    );
    signUpUser(isValid);
  } else {
    signInUser(email.value, password.value);
  }
}
function setData() {
  localStorage.setItem("users", JSON.stringify(users));
}
function getData() {
  const data = JSON.parse(localStorage.getItem("users"));
  if (!data) {
    users = [];
  } else {
    users = data;
  }
}

function cleanUp() {
  username.value = "";
  email.value = "";
  password.value = "";
  confpassword.value = "";
}
form.addEventListener("submit", submitForm);
getData();

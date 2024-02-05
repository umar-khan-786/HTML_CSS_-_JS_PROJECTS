const showHideBtn = document.querySelector(".show_hide");
const passwordInput = document.querySelector("#password");
function showHidePassword() {
  if (showHideBtn.classList.contains("fa-eye")) {
    showHideBtn.classList.remove("fa-eye");
    showHideBtn.classList.add("fa-eye-slash");
    passwordInput.setAttribute("type", "text");
  } else {
    showHideBtn.classList.remove("fa-eye-slash");
    showHideBtn.classList.add("fa-eye");
    passwordInput.setAttribute("type", "password");
  }
}

showHideBtn.addEventListener("click", showHidePassword);

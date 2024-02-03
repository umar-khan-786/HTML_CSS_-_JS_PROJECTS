const buttons = document.querySelectorAll("button");
const toastBox = document.querySelector(".toast_box");

function showToast(e) {
  const div = document.createElement("div");
  div.className = "toast";
  const toastType = e.target.dataset.message;
  if (toastType === "success") {
    div.innerHTML =
      "<i class='fa-solid fa-circle-check'></i> Successfully submitted";
    div.classList.add("success");
  } else if (toastType === "warning") {
    div.innerHTML =
      "<i class='fa-solid fa-circle-exclamation'></i> Invalid input,check again";
    div.classList.add("warning");
  } else if (toastType === "error") {
    div.innerHTML =
      "<i class='fa-solid fa-circle-xmark'></i> Please fix the error";
    div.classList.add("error");
  }
  toastBox.appendChild(div);
  setTimeout(() => div.remove(), 4000);
}

buttons.forEach((button) => {
  button.addEventListener("click", showToast);
});

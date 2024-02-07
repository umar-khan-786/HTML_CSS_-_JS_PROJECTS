const inputBox = document.querySelector(".input_box");

inputBox.children[1].addEventListener("click", () => {
  if (inputBox.children[0].type == "password") {
    inputBox.children[1].src = "Images/eye-open.png";
    inputBox.children[0].type = "text";
  } else {
    inputBox.children[1].src = "Images/eye-close.png";
    inputBox.children[0].type = "password";
  }
});

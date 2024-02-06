const display = document.querySelector(".display input");
const buttons = document.querySelectorAll("input[type='button']");

buttons.forEach((button) => {
  if (button.value !== "AC" && button.value !== "DE" && button.value !== "=") {
    button.addEventListener("click", (e) => {
      display.value += e.target.value;
    });
  } else if (button.value === "=") {
    button.addEventListener("click", () => {
      display.value = eval(display.value);
    });
  } else if (button.value === "AC") {
    button.addEventListener("click", () => {
      display.value = "";
    });
  } else {
    button.addEventListener("click", () => {
      display.value = display.value.slice(0, -1);
    });
  }
});

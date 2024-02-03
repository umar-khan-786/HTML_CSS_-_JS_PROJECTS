const barCodeBox = document.querySelector(".bar_code_box");
const barCodeImg = document.querySelector(".bar_code_box img");
const button = document.querySelector(".btn");
const input = document.querySelector("#input");
const option = document.querySelector("select");
button.addEventListener("click", () => {
  if (input.value) {
    const source = `https://barcodeapi.org/api/${option.value}/${input.value}`;
    barCodeImg.src = source;
    barCodeBox.classList.add("show_img");
  } else {
    input.classList.add("error");
    setTimeout(() => {
      input.classList.remove("error");
    }, 1000);
  }
});

option.addEventListener("change", () => {
  if (option.value === "qr") {
    button.innerHTML = "Generate QR Code";
  } else {
    button.innerHTML = "Generate Bar Code";
  }
});

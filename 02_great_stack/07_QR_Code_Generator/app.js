const button = document.querySelector(".btn");
const input = document.querySelector("input");
const img = document.querySelector("img");
const qrCodeBox = document.querySelector(".qr_code");

button.addEventListener("click", () => {
  if (input.value) {
    const qrCodeSrc = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${input.value}`;
    img.src = qrCodeSrc;
    qrCodeBox.classList.add("show_img");
  } else {
    input.classList.add("error");
    setTimeout(() => {
      input.classList.remove("error");
    }, 1000);
  }
});

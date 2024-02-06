const buttonShowModal = document.querySelector(".show_modal");
const buttonCloseModal = document.querySelector(".close_modal");
const modal = document.querySelector(".modal");
buttonShowModal.addEventListener("click", () => {
  modal.classList.add("active");
});
buttonCloseModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

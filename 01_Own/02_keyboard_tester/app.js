const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  window.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.key === key.dataset.value) {
      key.classList.add("active_up");
    }
  });

  window.addEventListener("keydown", (e) => {
    e.preventDefault();

    if (e.key === key.dataset.value) {
      key.classList.add("active_down");
    }
  });
});

// window.addEventListener("keydown", (e) => {
//   e.preventDefault();
//   keys.forEach((key) => {
//     if (e.key === key.dataset.value) {
//       key.classList.add("active_down");
//     }
//   });
// });
// window.addEventListener("keyup", (e) => {
//   e.preventDefault();
//   keys.forEach((key) => {
//     if (e.key === key.dataset.value) {
//       key.classList.add("active_up");
//     }
//   });
// });

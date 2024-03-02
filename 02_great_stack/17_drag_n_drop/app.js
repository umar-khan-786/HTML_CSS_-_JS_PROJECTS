const items = document.querySelectorAll(".item");
const leftBox = document.querySelector(".left");
const rightBox = document.querySelector(".right");

items.forEach((item) =>
  item.addEventListener("dragstart", (e) => {
    let selected = e.target;

    rightBox.addEventListener("dragover", (e) => e.preventDefault());
    rightBox.addEventListener("drop", () => {
      rightBox.appendChild(selected);
      selected = null;
    });

    leftBox.addEventListener("dragover", (e) => e.preventDefault());
    leftBox.addEventListener("drop", () => {
      leftBox.appendChild(selected);
      selected = null;
    });
  })
);

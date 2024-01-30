const button = document.querySelector("button");
const notesContaner = document.querySelector(".notes_container");

function createNotes() {
  const p = document.createElement("p");
  const img = document.createElement("img");
  img.src = "images/delete.png";
  p.className = "input_box";
  p.contentEditable = true;
  notesContaner.appendChild(p).appendChild(img);
  saveData();
}

function deleteNotes(e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.tagName === "P") {
    const notes = document.querySelectorAll(".input_box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        saveData();
      };
    });
  }
}

function saveData() {
  localStorage.setItem("data", notesContaner.innerHTML);
}

function showData() {
  notesContaner.innerHTML = localStorage.getItem("data");
}
showData();

button.addEventListener("click", createNotes);
notesContaner.addEventListener("click", deleteNotes);
document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    document.execCommand("insertLineBreak");
    e.preventDefault();
  }
});

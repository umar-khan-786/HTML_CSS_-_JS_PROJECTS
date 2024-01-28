const input = document.querySelector(".add_item input");
const addButton = document.querySelector(".add_item button");
const listItems = document.querySelector(".list_items");

function addItem() {
  if (input.value) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerHTML = "&times;";
    li.innerHTML = input.value;
    li.appendChild(btn);
    listItems.appendChild(li);
    saveData();
    input.value = "";
  }
}

function manipulateItem(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    saveData();
  }
}

function saveData() {
  localStorage.setItem("data", listItems.innerHTML);
}

function showData() {
  listItems.innerHTML = localStorage.getItem("data");
}
showData();

listItems.addEventListener("click", manipulateItem, false);
addButton.addEventListener("click", addItem);

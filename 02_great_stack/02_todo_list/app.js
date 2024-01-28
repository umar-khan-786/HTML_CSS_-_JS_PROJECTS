const input = document.querySelector(".add_item input");
const addButton = document.querySelector(".add_item button");
const listItems = document.querySelector(".list_items");
let isEdit = false;
let replaceItem = null;
function addItem() {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  const span = document.createElement("span");
  span.innerHTML = "&#9998;";
  btn.innerHTML = "&times;";

  if (input.value && isEdit) {
    replaceItem.innerHTML = input.value;
    replaceItem.appendChild(span);
    replaceItem.appendChild(btn);
    saveData();
    replaceItem = null;
    isEdit = false;
  } else {
    if (input.value) {
      li.innerHTML = input.value;
      li.appendChild(span);
      li.appendChild(btn);
      listItems.appendChild(li);
      saveData();
    }
  }
  input.value = "";
}

function manipulateItem(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    isEdit = false;
    saveData();
  }
  if (e.target.tagName === "SPAN") {
    input.value = e.target.parentElement.childNodes[0].data;
    replaceItem = e.target.parentElement;
    isEdit = true;
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

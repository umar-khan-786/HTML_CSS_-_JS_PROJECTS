const form = document.querySelector("form");
const rowsError = document.querySelector(".rows_error");
const colsError = document.querySelector(".cols_error");
const elemsError = document.querySelector(".elems_error");
const mainBox = document.querySelector(".box_container");
const formContainer = mainBox.children[0];
const resultContainer = mainBox.children[1];
const refreshButton = document.querySelector(".refresh");

function fetchData(e) {
  e.preventDefault();
  const rows = document.querySelector(".no_of_rows").value;
  const cols = document.querySelector(".no_of_cols").value;
  const elems = document.querySelector(".no_of_elems").value;

  checkValidData(rows, cols, elems);
}

function changeInto2DArray(cols, elems) {
  const arr = elems.trim().split(" ");
  const twoDimArr = [];
  for (let i = 0; i < arr.length; i += parseInt(cols)) {
    let j = i;
    let n = 0;
    const innerArr = [];
    while (n < cols) {
      innerArr.push(arr[j]);
      j++;
      n++;
    }
    twoDimArr.push(innerArr);
  }
  return twoDimArr;
}

function checkValidData(rows, cols, elems) {
  showError(rows, cols, elems);
  removeError(rows, cols, elems);
  if (
    rows !== "" &&
    cols !== "" &&
    elems !== "" &&
    elems.trim().split(" ").length === rows * cols
  ) {
    const arr = changeInto2DArray(cols, elems);
    checkTypeOfMatrix(rows, cols, elems, arr);
  }
}

function showError(rows, cols, elems) {
  if (rows === "") {
    rowsError.innerHTML = "**Please enter no of rows";
  }
  if (cols === "") {
    colsError.innerHTML = "**Please enter no of columns";
  }
  if (elems === "") {
    elemsError.innerHTML = "**Please enter elements of matrix";
  } else if (
    elems.trim().split(" ").length > rows * cols ||
    elems.trim().split(" ").length < rows * cols
  ) {
    elemsError.innerHTML = `**No of elements should be ${rows * cols}`;
  }
}

function removeError(rows, cols, elems) {
  if (rows !== "") {
    rowsError.innerHTML = "";
  }
  if (cols !== "") {
    colsError.innerHTML = "";
  }
  if (elems !== "" && elems.trim().split(" ").length === rows * cols) {
    elemsError.innerHTML = "";
  }
}
function checkTypeOfMatrix(rows, cols, elems, arr) {
  if (checkSquareMatrix(rows, cols)) {
    if (checkNullMatrix(elems)) {
      setMessage("null matrix", arr, rows, cols);
    } else if (checkIdentityMatrix(arr, rows, cols)) {
      setMessage("Indentity matrix", arr, rows, cols);
    } else if (checkScalarMatrix(arr, rows, cols)) {
      setMessage("Scalar matrix", arr, rows, cols);
    } else if (checkDiagonalMatrix(arr, rows, cols)) {
      setMessage("Diagonal Matrix", arr, rows, cols);
    } else if (checkSymmetricMatrix(arr, rows, cols)) {
      setMessage("Symmetric matrix", arr, rows, cols);
    } else if (checkSkewSymmetricMatrix(arr, rows, cols)) {
      setMessage("Skew Symmetric matrix", arr, rows, cols);
    } else if (checkHermitionMatrix(arr, rows, cols)) {
      setMessage("Hermition matrix", arr, rows, cols);
    } else {
      setMessage("square matrix", arr, rows, cols);
    }
  } else if (checkRectangularMatrix(rows, cols)) {
    if (checkNullMatrix(elems)) {
      setMessage("null matrix", arr, rows, cols);
    } else {
      setMessage("Rectangular matrix", arr, rows, cols);
    }
  } else if (checkColMatrix(cols)) {
    if (checkNullMatrix(elems)) {
      setMessage("null matrix", arr, rows, cols);
    } else {
      setMessage("column matrix", arr, rows, cols);
    }
  } else if (checkRowMatrix(rows)) {
    if (checkNullMatrix(elems)) {
      setMessage("null matrix", arr, rows, cols);
    } else {
      setMessage("row matrix", arr, rows, cols);
    }
  }
  // checkSkewHermitionMatrix(arr, rows, cols);
}

function setMessage(message, arr, rows, cols) {
  showMatrix(arr, rows, cols);
  showOutput(message, rows, cols);
}

function showMatrix(arr, rows, cols) {
  for (let i = 0; i < parseInt(rows); i++) {
    const p = document.createElement("p");
    for (let j = 0; j < parseInt(cols); j++) {
      const span = document.createElement("span");
      span.innerText = arr[i][j];
      p.appendChild(span);
    }
    document.querySelector(".matrix_data").appendChild(p);
  }
}

function showOutput(message, rows, cols) {
  const span = document.createElement("span");
  span.innerHTML = `<b>M</b> is the <b>${message
    .charAt(0)
    .toUpperCase()}${message.slice(1)}</b> of order <b>${rows}-by-${cols}</b>`;
  document.querySelector(".result p").appendChild(span);
  resultContainer.style.display = "block";
  formContainer.style.display = "none";
}
function checkRowMatrix(rows) {
  return rows === "1";
}

function checkColMatrix(cols) {
  return cols === "1";
}

function checkSquareMatrix(rows, cols) {
  return rows === cols;
}

function checkNullMatrix(elems) {
  const arr = elems.trim().split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "0") return false;
  }
  return true;
}

function checkRectangularMatrix(rows, cols) {
  return rows !== "1" && cols !== "1" && rows !== cols;
}

function checkIdentityMatrix(arr, rows, cols) {
  for (let i = 0; i < parseInt(rows); i++) {
    for (let j = 0; j < parseInt(cols); j++) {
      if ((i !== j && arr[i][j] !== "0") || (i === j && arr[i][j] !== "1")) {
        return false;
      }
    }
  }
  return true;
}

function checkScalarMatrix(arr, rows, cols) {
  for (let i = 0; i < parseInt(rows); i++) {
    for (let j = 0; j < parseInt(cols); j++) {
      const temp = arr[0][0];
      if ((i !== j && arr[i][j] !== "0") || (i === j && arr[i][j] !== temp)) {
        return false;
      }
    }
  }
  return true;
}

function checkDiagonalMatrix(arr, rows, cols) {
  for (let i = 0; i < parseInt(rows); i++) {
    for (let j = 0; j < parseInt(cols); j++) {
      if (i !== j && arr[i][j] !== "0") {
        return false;
      }
    }
  }
  return true;
}

function transposeOfMatrix(arr, rows, cols) {
  const transposeArr = [];
  for (let i = 0; i < parseInt(cols); i++) {
    const tempArr = [];
    for (let j = 0; j < parseInt(rows); j++) {
      tempArr.push(arr[j][i]);
    }
    transposeArr.push(tempArr);
  }
  return transposeArr;
}

function checkSymmetricMatrix(arr, rows, cols) {
  const transposeArr = transposeOfMatrix(arr, rows, cols);
  for (let i = 0; i < parseInt(rows); i++) {
    for (let j = 0; j < parseInt(cols); j++) {
      if (arr[i][j] !== transposeArr[i][j]) {
        return false;
      }
    }
  }
  return true;
}

function checkSkewSymmetricMatrix(arr, rows, cols) {
  const transposeArr = transposeOfMatrix(arr, rows, cols);
  for (let i = 0; i < parseInt(rows); i++) {
    for (let j = 0; j < parseInt(cols); j++) {
      if (-parseInt(arr[i][j]) !== parseInt(transposeArr[i][j])) {
        return false;
      }
    }
  }
  return true;
}
function conjugateOfMatrix(arr, rows, cols) {
  const conjugateArr = [];
  for (let i = 0; i < parseInt(rows); i++) {
    const tempArr = [];
    for (let j = 0; j < parseInt(cols); j++) {
      if (arr[i][j].includes("i")) {
        if (arr[i][j].includes("+")) {
          tempArr.push(arr[i][j].replace("+", "-"));
        } else if (arr[i][j].includes("-")) {
          tempArr.push(arr[i][j].replace("-", "+"));
        } else {
          tempArr.push(`-${arr[i][j]}`);
        }
      } else {
        tempArr.push(arr[i][j]);
      }
    }
    conjugateArr.push(tempArr);
  }
  return conjugateArr;
}

function checkHermitionMatrix(arr, rows, cols) {
  const conjugateArr = conjugateOfMatrix(arr, rows, cols);
  const transposeArr = transposeOfMatrix(conjugateArr, rows, cols);

  for (let i = 0; i < parseInt(rows); i++) {
    for (let j = 0; j < parseInt(cols); j++) {
      if (arr[i][j] !== transposeArr[i][j]) {
        return false;
      }
    }
  }
  return true;
}

function checkSkewHermitionMatrix(arr, rows, cols) {
  const conjugateArr = conjugateOfMatrix(arr, rows, cols);
  const transposeArr = transposeOfMatrix(conjugateArr, rows, cols);

  for (let i = 0; i < parseInt(rows); i++) {
    for (let j = 0; j < parseInt(cols); j++) {
      console.log(-parseInt(arr[i][j]), parseInt(transposeArr[i][j]));
      if (-parseInt(arr[i][j]) !== parseInt(transposeArr[i][j])) {
        return false;
      }
    }
  }
  return true;
}

function resetData() {
  resultContainer.style.display = "none";
  formContainer.style.display = "block";
  document.querySelector(".matrix_data").innerHTML = "";
  document.querySelector(".result p").innerHTML = "";
  document.querySelector(".no_of_rows").value = "";
  document.querySelector(".no_of_cols").value = "";
  document.querySelector(".no_of_elems").value = "";
}
form.addEventListener("submit", fetchData);
refreshButton.addEventListener("click", resetData);

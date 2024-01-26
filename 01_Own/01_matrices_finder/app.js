const form = document.querySelector("form");
const rowsError = document.querySelector(".rows_error");
const colsError = document.querySelector(".cols_error");
const elemsError = document.querySelector(".elems_error");
const mainBox = document.querySelector(".box_container");

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
      console.log("null matrix");
    } else if (checkIdentityMatrix(arr, rows, cols)) {
      console.log("Indentity matrix");
    } else if (checkScalarMatrix(arr, rows, cols)) {
      console.log("Scalar matrix");
    } else if (checkDiagonalMatrix(arr, rows, cols)) {
      console.log("Diagonal Matrix");
    } else if (checkSymmetricMatrix(arr, rows, cols)) {
      console.log("Symmetric matrix");
    } else if (checkSkewSymmetricMatrix(arr, rows, cols)) {
      console.log("Skew Symmetric matrix");
    } else if (checkHermitionMatrix(arr, rows, cols)) {
      console.log("Hermition matrix");
    } else {
      console.log("square matrix");
    }
  } else if (checkRectangularMatrix(rows, cols)) {
    if (checkNullMatrix(elems)) {
      console.log("null matrix");
    } else {
      console.log("Rectangular matrix");
    }
  } else if (checkColMatrix(cols)) {
    if (checkNullMatrix(elems)) {
      console.log("null matrix");
    } else {
      console.log("column matrix");
    }
  } else if (checkRowMatrix(rows)) {
    if (checkNullMatrix(elems)) {
      console.log("null matrix");
    } else {
      console.log("row matrix");
    }
  }
  checkSkewHermitionMatrix(arr, rows, cols);
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
      if (arr[i][j].includes("+")) {
        tempArr.push(arr[i][j].replace("+i", "-i"));
      } else if (arr[i][j].includes("-")) {
        tempArr.push(arr[i][j].replace("-i", "+i"));
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
form.addEventListener("submit", fetchData);

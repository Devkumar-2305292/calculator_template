let n1 = "";
let n2 = "";
let oprator = null;
const resultDiv = document.querySelector(".result");

function updateDisplay(value) {
  resultDiv.textContent = value;
}

function numberClick(num) {
  if (!oprator) {
    n1 += num;
    updateDisplay(n1);
  } else {
    n2 += num;
    updateDisplay(n2);
  }
}

function operatorClick(op) {
  if (n1 === "") {
    updateDisplay("Enter a number first!");
    return;
  }

  if (oprator && n2) {
    calculate();
  }
  oprator = op;
}

function calculate() {
  if (n1 === "" || oprator === null || n2 === "") {
    updateDisplay("Incomplete input!");
    return;
  }

  let a = Number(n1);
  let b = Number(n2);
  let result;
  switch (oprator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b === 0 ? "Error" : a / b;
      break;
    default:
      result = "Error";
  }
  updateDisplay(result);
  n1 = result.toString();
  n2 = "";
  oprator = null;
}

for (let i = 0; i <= 9; i++) {
  document
    .getElementById(
      [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
      ][i]
    )
    .addEventListener("click", () => numberClick(i.toString()));
}

// Attach event listeners to operator buttons
document
  .getElementById("plus")
  .addEventListener("click", () => operatorClick("+"));
document
  .getElementById("minus")
  .addEventListener("click", () => operatorClick("-"));
document
  .getElementById("multiply")
  .addEventListener("click", () => operatorClick("*"));
document
  .getElementById("divide")
  .addEventListener("click", () => operatorClick("/"));

// Equal button
document.getElementById("equal").addEventListener("click", calculate);

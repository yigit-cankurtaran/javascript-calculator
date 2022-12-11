const calculatorScreen = document.getElementById("calculator-screen");
const calculatorKeys = document.querySelector(".calculator-keys");
const calculator = document.querySelector(".calculator");

// initialize the calculator screen value to zero
let screenValue = "0";
let hasDecimal = false;
let firstOperand = "";
let operator = "";

// add event listener for when a calculator key is clicked
calculatorKeys.addEventListener("click", (event) => {
  // get the key that was clicked
  const key = event.target;

  // if the key is not a button, return
  if (!key.matches("button")) {
    return;
  }

  // get the key value
  const keyValue = key.textContent;

  // handle the different key types
  if (
    keyValue === "+" ||
    keyValue === "-" ||
    keyValue === "*" ||
    keyValue === "/"
  ) {
    // if the key is an operator, update the first operand and operator variables
    firstOperand = screenValue;
    operator = keyValue;
    hasDecimal = false;
    screenValue = keyValue;
  } else if (keyValue === ".") {
    // if the key is a decimal point, add it to the screen value if it doesn't already have one
    if (!hasDecimal) {
      screenValue += keyValue;
      hasDecimal = true;
    }
  } else if (keyValue === "=") {
    // if the key is the equals sign, evaluate the expression and update the screen value with the result
    const result = eval(`${firstOperand} ${operator} ${screenValue}`);
    screenValue = String(result);
    hasDecimal = String(result).includes(".");
    firstOperand = "";
    operator = "";
    // update the screen with the result of the expression
    if (calculatorScreen) {
      calculatorScreen.textContent = result;
    }
  } else {
    // if the key is a number, add it to the screen value
    screenValue += keyValue;
  }

  // update the screen with the new screen value
  if (calculatorScreen) {
    calculatorScreen.textContent = screenValue;
  }
});

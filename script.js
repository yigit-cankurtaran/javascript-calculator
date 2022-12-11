// Store the current input value
let currentInput = "";

function inputNumber(num) {
  // Update the current input value
  currentInput += num;

  // Update the input field
  document.getElementById('input').innerHTML = currentInput;
}

function inputOperator(operator) {
  // Update the current input value
  currentInput += operator;

  // Update the input field
  document.getElementById('input').innerHTML = currentInput;
}

function calculate() {
  // Calculate the result
  let result = eval(currentInput);
  // Display the result
  document.getElementById('output').innerHTML = result;
}

function clear() {
  //Clears the input field
  document.getElementById('input').innerHTML = '';
}

// mathModule.js
const PI = 3.14159;
const E = 2.71828;

function addNumbers(a, b) {
  return a + b;
}

function subtractNumbers(a, b) {
  return a - b;
}

function multiplyNumbers(a, b) {
  return a * b;
}

function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Export the constants and functions
module.exports = {
  PI,
  E,
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
};

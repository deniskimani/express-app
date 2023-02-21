function add(a, b) {
  // your code here

  const sum = a + b;
  return sum;
}

function subtract(a, b) {
  // your code here
  const less = a - b;
  return less;
}

function multiply(a, b) {
  // your code here
  const multiple = a * b;
  return multiple;
}

function divide(a, b) {
  // your code here
  const dividend = a / b;
  return dividend;
}

function power(a, b) {
  // your code here
  // eslint-disable-next-line no-restricted-properties
  const raisedToPower = Math.pow(a, b);
  return raisedToPower;
}

function round(a) {
  // your code here
  const rounded = Math.round(a);
  return rounded;
}

function roundUp(a) {
  // your code here
  return Math.ceil(a);
}

function roundDown(a) {
  // your code here
  return Math.floor(a);
}

function absolute(a) {
  // your code here
  return Math.abs(a);
}

// eslint-disable-next-line consistent-return
function quotient(a, b) {
  // your code here
  const c = a / b;
  if (c > 0) {
    return Math.floor(c);
  }

  if (c < 0) {
    const positiveC = -1 * c; // -1 * -4.5= 4.5
    const e = Math.floor(positiveC); // Math.floor(4.5)
    return -1 * e;
  }
}

function remainder(a, b) {
  // your code here
  const modulus = a % b;
  return modulus;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder,
};

const calculator = require('./calculator');

// Test the calculator functions
const num1 = 10;
const num2 = 5;

console.log(`Add: ${num1} + ${num2} = ${calculator.add(num1, num2)}`);
console.log(`Subtract: ${num1} - ${num2} = ${calculator.subtract(num1, num2)}`);
console.log(`Multiply: ${num1} * ${num2} = ${calculator.multiply(num1, num2)}`);
console.log(`Divide: ${num1} / ${num2} = ${calculator.divide(num1, num2)}`);
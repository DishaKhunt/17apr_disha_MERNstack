// calculator.js

// Define the calculator functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}

// Export the functions to be used in other files
module.exports = {
    add,
    subtract,
    multiply,
    divide
};

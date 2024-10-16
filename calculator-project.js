//created functions for the operator logic
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
    if(b === 0) {
        return "Error";
    } return a / b;
}
//Cant divide a number by 0 so we set it to return an error

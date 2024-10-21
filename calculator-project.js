//Created 3 different variables for the first #, operator and the second #
let currentOperand = '';
let previousOperand = '';
let operator = null;

//Calling all of the Calculator buttons and the display element
//We use querySelectorAll() to select multiple elements that share the same class or attribute
//And then getElementById() is for when you want to select a single unique element
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const display = document.getElementById('display');



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


//Function To Perform Operation
function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;               
    }
}

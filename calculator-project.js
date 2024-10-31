//Created 3 different variables for the first #, operator and the second #
let currentOperand = ''; //The number/expression the user is currently typing
let previousOperand = ''; //The first number in the operation
let operator = null; //The operator selected by the user
//We set operator to 'null' because it indicates that no operator has been selected yet
//null represents "no value" //This all has to do with the type of data each variable holds


//Calling all of the Calculator buttons and the display element
//We use querySelectorAll() to select multiple elements that share the same class or attribute
//And then getElementById() is for when you want to select a single unique element
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const decimalButton = document.getElementById('decimal');
const percentButton = document.getElementById('percent');
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
            return add(a,b); //Calls add function if operator is '+'
        case '-':
            return subtract(a, b); //Calls subtract function if operator is '-'
        case '*':
            return multiply(a, b); //Calls multiply function if operator is '*'
        case '/':
            return divide(a, b); //Calls divide function if operator is '/'  
        default:
            return null; //Return null if no valid operator is found              
    }
}
//Event Listener for the number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentOperand += button.dataset.number; //Append current number to the operand
        updateDisplay(currentOperand); //Update the display with the new number
    });
});

//Event Listener for the operator buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', () => { 
        if (currentOperand === '') //Prevents operator to be used without a number
            return;
        operator = button.dataset.operator; //Stores the operator
        previousOperand = currentOperand; //Move the current number to previousOperand
        currentOperand = ''; //Clear the current operand for the next input
    });
});

//Event Listener for = button
equalsButton.addEventListener('click', () => {
    if (previousOperand === '' || currentOperand === '') //Do nothing if operand is missing
        return;
    let result = operate(operator, parseFloat(previousOperand), parseFloat(currentOperand));
    //Perform the operation
    updateDisplay(result); //Show the result
    previousOperand = result; //Set the result as the new previousOperand for chained operations
    currentOperand = ''; //Clear the currentOperrand for new input
});

//Event Listener for clear button
clearButton.addEventListener('click', () => {
    currentOperand = ''; //Clear the currentOperand
    previousOperand = ''; //Clear the previousOperand
    operator = null; //Clear the operator
    updateDisplay('0'); //Reset the display to 0
});

//Event Listener for delete button
deleteButton.addEventListener('click', () => {
    if (currentOperand !== '') { 
        currentOperand = currentOperand.slice(0, -1); //Remove last character from currentOperand
        updateDisplay(currentOperand || '0'); //Update the display, shows 0 if currentOperand is empty
    }
});

//Event Listener for decimal button
decimalButton.addEventListener('click', () => {
    if (!currentOperand.includes('.')) { //Checks if current num has a decimal
        currentOperand += '.'; //Adds decimal point
        updateDisplay(); //Updates the display
    }
})

//Event Listener for percent button
percentButton.addEventListener('click', () => {
    if (currentOperand) {
        //Convert currentOperand to a percentage
        currentOperand = (parseFloat(currentOperand) / 100).toString();
        updateDisplay(); //Updates the display
    }
})

//Function to update the display
function updateDisplay(value) {
    display.textContent = value; //Set the text content to the provided value
}



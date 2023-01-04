"use strict";
/**
 *
 * @param a first number
 * @param b second number
 * @returns Adds the two numbers together and returns the sum
 */
function addition(a, b) {
    //turn string into value
    const aValue = parseFloat(a);
    const bValue = parseFloat(b);
    const sum = aValue + bValue;
    return sum;
}
/**
 *
 * @param a first number
 * @param b second number
 * @returns Subtracts the first number from the second and returns the difference
 */
function subtract(a, b) {
    //turn string into value
    const aValue = parseFloat(a);
    const bValue = parseFloat(b);
    const difference = aValue - bValue;
    return difference;
}
/**
 *
 * @param a first number
 * @param b second number
 * @returns Multiplies the two numbers together and returns the product of the two
 */
function multiply(a, b) {
    //turn string into value
    const aValue = parseFloat(a);
    const bValue = parseFloat(b);
    const product = aValue * bValue;
    return product;
}
/**
 *
 * @param a first number
 * @param b second number
 * @returns Divides the first number by the second number and returns the quotient
 */
function divide(a, b) {
    //turn string into value
    const aValue = parseFloat(a);
    const bValue = parseFloat(b);
    const quotient = aValue / bValue;
    return quotient;
}
/**
 *
 * @param a First number
 * @param operator Operator being used
 * @param b Second number
 * @returns Takes the operator being used, and calls the appropriate function.
 */
function operate(a, operator, b) {
    if (operator == "+") {
        return addition(a, b);
    }
    else if (operator == "-") {
        return subtract(a, b);
    }
    else if (operator == "*") {
        return multiply(a, b);
    }
    else {
        return divide(a, b);
    }
}
//DOM FUNCTIONS BELOW
//global 
let value1 = "";
let value2 = "";
let operator = "";
const display = document.getElementById('display');
const errorMessage = "ERROR";
var State;
(function (State) {
    State[State["waitingForValue1"] = 0] = "waitingForValue1";
    State[State["waitingForValue2"] = 1] = "waitingForValue2";
})(State || (State = {}));
let state = State.waitingForValue1;
//function that replaces the button clicked to the display
/**
 *
 * @param e whichever button is pressed
 */
const getNumber = (e) => {
    //get the value of the button clicked
    const inputValue = e.target.value;
    if (state === State.waitingForValue1) {
        value1 += inputValue;
        display.value = value1;
    }
    if (state === State.waitingForValue2) {
        value2 += inputValue;
        display.value = value2;
    }
    /**@TODO: if . is clicked */
    // if (value1[value1.length - 1] === '.') {
    //     display!.
    // }
};
//dom thing that runs through all the number buttons and displays it on the display
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => button.addEventListener('click', getNumber));
//function for operators
/**
 *
 * @param e Whichever button was clicked
 */
const getOperators = (e) => {
    const inputValue = e.target.value;
    if (state === State.waitingForValue1 && value1.length >= 1) {
        state = State.waitingForValue2;
    }
    if (state === State.waitingForValue2 && value2.length >= 1) {
        const displayValue = operate(value1, operator, value2);
        value1 = displayValue.toString();
        display.value = value1;
        value2 = '';
    }
    operator = inputValue;
    console.log(operator);
};
//event listeners for operators
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => button.addEventListener('click', getOperators));
//calculate shit
const equalButton = document.querySelector('.calculate');
equalButton === null || equalButton === void 0 ? void 0 : equalButton.addEventListener('click', () => {
    const displayValue = operate(value1, operator, value2);
    value1 = displayValue.toString();
    display.value = value1;
    if (value2 == '0' && operator == '/') {
        alert(errorMessage);
        state = State.waitingForValue1;
        value1 = '';
        value2 = "";
        operator = "";
        display.value = '00000000000';
    }
    state = State.waitingForValue1;
    value2 = "";
    operator = "";
});
const clearButton = document.querySelector('.clear');
const defaultValues = () => {
    value1 = '';
    operator = '';
    value2 = '';
    display.value = '000000000000';
};
clearButton === null || clearButton === void 0 ? void 0 : clearButton.addEventListener('click', defaultValues);

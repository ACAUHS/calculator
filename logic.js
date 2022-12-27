"use strict";
/**
 *
 * @param a first number
 * @param b second number
 * @returns Adds the two numbers together and returns the sum
 */
function addition(a, b) {
    const sum = a + b;
    return sum;
}
/**
 *
 * @param a first number
 * @param b second number
 * @returns Subtracts the first number from the second and returns the difference
 */
function subtract(a, b) {
    const difference = a - b;
    return difference;
}
/**
 *
 * @param a first number
 * @param b second number
 * @returns Multiplies the two numbers together and returns the product of the two
 */
function multiply(a, b) {
    const product = a * b;
    return product;
}
/**
 *
 * @param a first number
 * @param b second number
 * @returns Divides the first number by the second number and returns the quotient
 */
function divide(a, b) {
    const quotient = a / b;
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
//function that replaces the button clicked to the display
/**
 *
 * @param e whichever button is pressed
 */
function setDisplay(e) {
    //gets the display element
    const display = document.getElementById('calculator').children[0];
    //const makes new text node
    const newDisplay = document.createTextNode(e.target.value);
    display === null || display === void 0 ? void 0 : display.replaceChild(newDisplay, display.childNodes[0]);
}
//dom thing that runs through all the buttons and displays it on the display
const numberButton = document.querySelectorAll('.button');
numberButton.forEach(button => button.addEventListener('click', setDisplay));
//when you click on a button it should accept a string of values until an operator is pressed
// store it in an array? and evaluate the array using reduce?

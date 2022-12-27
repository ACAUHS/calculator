/**
 * 
 * @param a first number
 * @param b second number
 * @returns Adds the two numbers together and returns the sum
 */
function addition(a:number, b:number) {
    const sum = a + b
    return sum
}

/**
 * 
 * @param a first number
 * @param b second number
 * @returns Subtracts the first number from the second and returns the difference
 */
function subtract(a:number, b:number) {
    const difference = a - b
    return difference
}


/**
 * 
 * @param a first number
 * @param b second number
 * @returns Multiplies the two numbers together and returns the product of the two
 */
function multiply (a:number, b:number) {
    const product = a * b
    return product
}

/**
 * 
 * @param a first number
 * @param b second number
 * @returns Divides the first number by the second number and returns the quotient
 */
function divide (a:number, b:number) {
    const quotient = a / b
    return quotient
}


/**
 * 
 * @param a First number
 * @param operator Operator being used
 * @param b Second number
 * @returns Takes the operator being used, and calls the appropriate function. 
 */
function operate(a:number, operator: any, b:number) {

    if (operator == "+") {
        return addition(a, b)
    } else if (operator == "-") {
        return subtract(a, b) 
    } else if (operator == "*") {
        return multiply(a, b)
    } else {
        return divide(a, b)
    }
}

//DOM FUNCTIONS BELOW

//function that replaces the button clicked to the display

/**
 * 
 * @param e whichever button is pressed
 */
function setDisplay(e: any) {


    //gets the display element
    const display = document.getElementById('calculator').children[0]

    console.log(display);

    //const makes new text node
    const newDisplay = document.createTextNode(e.srcElement.value);

    display?.replaceChild(newDisplay, display.childNodes[0])
}

//dom thing that runs through all the buttons

const numberButton = document.querySelectorAll('.button')

numberButton.forEach(button => button.addEventListener('click', setDisplay))

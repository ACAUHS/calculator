/**
 * 
 * @param a first number
 * @param b second number
 * @returns Adds the two numbers together and returns the sum
 */
function addition(a:string, b:string) {

    //turn string into value
    const aValue = parseInt(a)
    const bValue = parseInt(b)

    const sum = aValue + bValue
    return sum
}


/**
 * 
 * @param a first number
 * @param b second number
 * @returns Subtracts the first number from the second and returns the difference
 */
function subtract(a:string, b:string) {

    //turn string into value
    const aValue = parseInt(a)
    const bValue = parseInt(b)

    const difference = aValue - bValue
    return difference
}


/**
 * 
 * @param a first number
 * @param b second number
 * @returns Multiplies the two numbers together and returns the product of the two
 */
function multiply (a:string, b:string) {

    //turn string into value
    const aValue = parseInt(a)
    const bValue = parseInt(b)

    const product = aValue * bValue
    return product
}

/**
 * 
 * @param a first number
 * @param b second number
 * @returns Divides the first number by the second number and returns the quotient
 */
function divide (a:string, b:string) {

    //turn string into value
    const aValue = parseInt(a)
    const bValue = parseInt(b)

    const quotient = aValue / bValue
    return quotient
}


/**
 * 
 * @param a First number
 * @param operator Operator being used
 * @param b Second number
 * @returns Takes the operator being used, and calls the appropriate function. 
 */
function operate(a:string, operator:string, b:string) {

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

//global 
let valueStorage1:string[] = []
let operatorStorage:string[] = []
let valueStorage2:string[] = []

let totalCalculation:string[] = []



//function that replaces the button clicked to the display
/**
 * 
 * @param e whichever button is pressed
 */
const firstNumber = (e: any) => {

    
    //gets the display element
    const display = document.getElementById('display')

    //get the value of the button clicked
    const inputValue = e.target.value

    //pushes the value into an array
    const addValue = valueStorage1.push(inputValue)

    //concatenates the values
    const joinValues = valueStorage1.join('')
    //returns the concatenated values on the display
    display!.value = joinValues

    valueStorage1 = [joinValues]

    console.log(valueStorage1)

    localStorage.setItem('first', joinValues)
}

//dom thing that runs through all the number buttons and displays it on the display

const numberButtons = document.querySelectorAll('.number')

numberButtons.forEach(button => button.addEventListener('click', firstNumber))

//when you click on a button it should accept a string of values until an operator is pressed
// store it in an array? and evaluate the array using reduce?

//function for operators
/**
 * 
 * @param e Whichever button was clicked
 */
const getOperators = (e: any) => {

    const inputValue = e.target.value

    const addOperator = operatorStorage.push(inputValue)

    localStorage.setItem('operator', inputValue)

}

//event listeners for operators
const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach(button => button.addEventListener('click', getOperators))

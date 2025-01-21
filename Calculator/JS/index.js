// Get the display element
const display = document.getElementById('display');

// Variables to store values and operations
let currentInput = '';
let previousInput = '';
let operator = '';

// Get all number buttons
const numberButtons = document.querySelectorAll('.num');
// Get all operator buttons
const operatorButtons = document.querySelectorAll('.operator');
// Get the equal and clear buttons
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');

// Add event listeners for number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.innerText; // Append the number
        display.value = currentInput; // Update display
    });
});

// Add event listeners for operator buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput === '') return; // Do nothing if there's no input

        // Store the operator and current value
        operator = button.getAttribute('data-operator');
        previousInput = currentInput;
        currentInput = ''; // Reset current input
    });
});

// Handle equal button click
equalButton.addEventListener('click', () => {
    if (currentInput === '' || previousInput === '') return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    // Perform the operation
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    // Display the result
    display.value = result;
    currentInput = result.toString(); // Store result for further calculations
    previousInput = '';
});

// Handle clear button click
clearButton.addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '0'; // Reset display
});

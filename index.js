const display = document.getElementById("display");
let currentInput = '';

display.innerText = '0';

function appendToDisplay(value) {
    if (currentInput === '0' && value != '.') {
        currentInput = value;
    }
    else {
        currentInput = currentInput + value;
    }
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function calculate() {
    try {
        display.innerText = eval(currentInput);
        currentInput = " ";
    }
    catch {
        display.innerText = 'Error';
        currentInput = '';
    }
}
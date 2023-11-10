
let display = document.getElementById('display');
    let currentInput = '';
    let btnEvaluate = document.querySelector('btn-btn-sign');

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } 
    catch (error) {
        display.value = 'Error';
    }
}

// let btnEvaluate = document.querySelector('btn-btn-sign');

// btnEvaluate.addEventListener('click', (e) => {
//     if(display.value = currentInput && display.value >= 2){
//         display.value = ''
//     }
// })

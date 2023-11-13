document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("#buttons button");
    let operators = ["+", "-", "*", "/", "."];

    let currentInput = "";

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            const value = button.getAttribute("data-value");
            
            if (operators.includes(value)) {

                // Checks if the operator is already displayed

                if (currentInput.includes(value)) {

                    return; // Operator already used, do nothing

                }
            }
            
            if (value === "=") {

                try {
                    currentInput = eval(currentInput);

                    display.value = currentInput;

                } catch (error) {

                    display.value = "Error";

                }
            } else if (value === "C") {

                currentInput = "";

                display.value = "";

                // Re-initialize operators
                operators.forEach(operator => {

                    const operatorButton = document.querySelector(`[data-value="${operator}"]`);

                    operatorButton.disabled = false;

                });

            } else {

                currentInput += value;

                display.value = currentInput;

                if (operators.includes(value)) {

                    button.disabled = false;
                    
                }
            }
        });
    });
});

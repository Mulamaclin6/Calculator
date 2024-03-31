//Js codes
document.addEventListener("DOMContentLoaded", function () {
  const expressionInput = document.getElementById("expression");
  const answerDisplay = document.getElementById("answer");
  let expression = "";
  let answer = 0;
  let lastClickedCalculation = false; // flag to track if the last clicked button was a calculation button

  const display = (symbol) => {
    if (symbol === "=") {
      calculate();
    } else if (symbol === "AC") {
      allClear();
    } else if (symbol === "C") {
      clear();
    } else if (symbol === "x²") {
      expression += "**2";
      calculate();
    } else if (symbol === "√") {
      expression += "Math.sqrt(";
      calculate();
    } else if (symbol === "%") {
      expression += "/100*";
      calculate();
    } else {
      if (lastClickedCalculation) {
        // If the last clicked button was a calculation button, append the answer to the expression
        expression = answer;
        lastClickedCalculation = false; // Reset the flag
      }
      expression += symbol;
      expressionInput.value = expression;
    }
  };

  const calculate = () => {
    answer = eval(expression);
    answerDisplay.textContent = answer;
    lastClickedCalculation = true; // Set lastClickedCalculation to true after calculation
  };

  const allClear = () => {
    expression = "";
    answer = 0;
    expressionInput.value = expression;
    answerDisplay.textContent = answer;
    lastClickedCalculation = false; // Reset the flag
  };

  const clear = () => {
    expression = expression.slice(0, -1);
    expressionInput.value = expression;
    answer = 0;
    answerDisplay.textContent = answer;
  };

  const buttons = document.querySelectorAll(".padButton");
  buttons.forEach((button) =>
    button.addEventListener("click", function () {
      const symbol = this.textContent;
      display(symbol);
    })
  );
});

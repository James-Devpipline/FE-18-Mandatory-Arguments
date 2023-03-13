/* 
Homework 3/13/2023

Write a program that enforces mandatory arguments for a function (similar to how Python breaks if you don't satisfy a postional argument)
*/

function basicCalculator(mathNum1, mathNum2, mathSymbol) {
  try {
    if (mathSymbol === "+") {
      return console.log(mathNum1 + mathNum2);
    } else if (mathSymbol.toUpperCase() === "X" || mathSymbol === "*") {
      return console.log(mathNum1 * mathNum2);
    } else if (mathSymbol === "/" || mathSymbol === "\\") {
      return console.log(mathNum1 / mathNum2);
    } else {
      return console.log(mathNum1 - mathNum2);
    }
  } catch {
    return console.error("Invalid symbol used for calcuator");
  }
}

const calcAlert = alert(
  "This is a basic calculator. You will be given 3 prompts. First one enter a number, then do the same for the second. The third prompt give any basic math operators and then view the console log \n \n(Accepted Math Operators +, *, x, /, \\, -"
);

let calcuatorPrompt1 = prompt(
  "Please enter your first number for the calculator"
);
let calcuatorPrompt2 = prompt(
  "Please enter your second number for the calculator"
);
let calcuatorPrompt3 = prompt(
  "Please enter your math operator \n \n(Accepted Math Operators +, *, x, /, \\, -"
);

basicCalculator(
  parseInt(calcuatorPrompt1),
  parseInt(calcuatorPrompt2),
  calcuatorPrompt3
);

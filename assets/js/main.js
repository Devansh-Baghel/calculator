const display = document.querySelector(".display h2");
const inputNumbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const submit = document.querySelector(".submit");
const clearButton = document.querySelector(".clear");
const backspaceButton = document.querySelector(".backspace");

let equation = "0";

const operatorArray = ["+", "-", "*", "/"];

// To clear everything when user clicks AC
function clear() {
  equation = "";
  display.innerText = "0";
}

// To remove last index from the equation
function backspace() {
  equation = display.innerText;
  equation = equation.slice(0, equation.length - 1);
  display.innerText = equation;
}

// To evaluate the equation
function operate(string) {
  // This method to calculate the answer uses eval() in strict mode
  const answer = eval?.(`"use strict";(${string})`);
  display.innerText = answer;
  console.log(answer);
  equation = answer;
}


inputNumbers.forEach((number) => {
  number.addEventListener("click", () => {
    equation += number.innerText;
    display.innerText = equation;
  })
})

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if(operatorArray.includes(equation[equation.length-1])){
      return;
    }
    operate(equation);
    equation += operator.innerText;
    display.innerText = equation;
  })
})

// Operating the equation when user clicks enter.
submit.addEventListener("click", () => {
  operate(equation);
})

// Clearing everything when user clicks clear.
clearButton.addEventListener("click", clear);

// Removing last index from equation when user clicks backspace.
backspaceButton.addEventListener("click", backspace);
const display = document.querySelector(".display h2");
const inputNumbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const submit = document.querySelector(".submit");
const clearButton = document.querySelector(".clear");

let equation = "";

const operatorArray = ["+", "-", "*", "/"];

function clear() {
  equation = "";
  display.innerText = "0";
}

function operate(string) {
  // This method to calculate the answer uses eval() in strict mode
  const answer = eval?.(`"use strict";(${string})`);
  display.innerText = answer;
  console.log(answer);
  equation = answer;
}

function appendToEquation(){
  equation += this.innerText;
  display.innerText = equation;
}

inputNumbers.forEach((number) => {
  number.addEventListener("click", appendToEquation)
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
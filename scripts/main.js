const display = document.querySelector(".display h2");
const inputNumbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const submit = document.querySelector(".submit");

let equation = "";
// let counter = 0;
const operatorArray = ["+", "-", "*", "/"];

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

submit.addEventListener("click", () => {
  operate(equation);
})
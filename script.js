let number1 = "";
let number2 = "";
let toOperate = "";
let displayValue = "";

const display = document.querySelector(".display h2");
const inputNumbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const submit = document.querySelector(".submit");


function clear(){
  number1 = "";
  number2 = "";
  toOperate = "";
  displayValue = "";
}

function add(a, b) {
  display.innerText = parseInt(a) + parseInt(b);
  clear();
}


function subtract(a, b) {
  display.innerText = a - b;
  clear();
}

function multiply(a, b) {
  display.innerText = a * b;
  clear();
}

function divide(a, b) {
  display.innerText = a / b;
  clear();
}

function operate(equation){
  for(i in equation){
    if (["+", "-", "/", "*"].includes(equation[i])){
      number1 = equation.slice(0 , i);
      number2 = equation.slice(i);
      toOperate = number2.substring(0, 1);
      number2 = number2.slice(1);
      console.log(number1, number2, toOperate);
    }
  }

  switch (toOperate) {
    case "+":
      add(number1, number2);
      break;
    case "-":
      subtract(number1, number2);
      break;
    case "*":
      multiply(number1, number2);
      break;
    case "/":
      divide(number1, number2);
  }
}




inputNumbers.forEach((number) => {
  number.addEventListener("click", () => {
    displayValue += number.innerText;
    display.innerText = displayValue;
  })
})

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    displayValue += operator.innerText;
    display.innerText = displayValue;

    console.log(displayValue);
  })
})

submit.addEventListener("click", () => {
  operate(displayValue);
})
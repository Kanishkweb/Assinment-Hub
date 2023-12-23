const prompt = require("prompt-sync")();
let num1 = prompt("Enter first no: -->");
let num2 = prompt("Enter second no: -->");
num1 = parseInt(num1);
num2 = parseInt(num2);
if (isNaN(num1) || isNaN(num2)) {
  console.log("Please enter valid numbers.");
}
let key = prompt("Enter the operation which you want to perform + , - , * , /");
let result;
switch (key) {
  case "+":
    result = num1 + num2;
    console.log(result);
    break;
  case "-":
    result = num1 - num2;
    console.log(result);
    break;
  case "*":
    result = num1 * num2;
    console.log(result);
    break;
  case "/":
    result = num1 / num2;
    console.log(result);
    break;
  default:
    console.log("INVALID OPERATOR");
    break;
}

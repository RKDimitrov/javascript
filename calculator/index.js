let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").innerText = num1;
document.getElementById("num2-el").innerText = num2;

sumEl = document.getElementById("sum-el");

function add() {
    sumEl.innerText = "Sum: " + (num1 + num2);
}

function subtract() {
    sumEl.innerText = "Sum: " + (num1 - num2);
}

function divide() {
    sumEl.innerText = "Sum: " + num1 / num2;
}

function multiply() {
    sumEl.innerText = "Sum: " + num1 * num2;
}
let num1 = 4
let num2 = 3

document.getElementById("num-el").textContent= num1;
document.getElementById("num-el2").textContent = num2;

function add(){
    let answer=num1+num2
    sumEl.textContent= answer
}
function subtract(){
    let answer=num1-num2
    sumEl.textContent= answer
}
function multiply(){
    let answer=num1*num2
    sumEl.textContent= answer
}
function divide(){
    let answer=num1/num2
    sumEl.textContent= answer
    // to render/print out the sum in sum para
}
let sumEl = document.getElementById("sum-el")
// to grab a hold on sum para

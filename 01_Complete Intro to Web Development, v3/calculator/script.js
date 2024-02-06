let screen = document.querySelector(".screen")
const buttonClear = document.querySelector(".b_clear")
buttonClear.addEventListener("click", function(){
    screen.innerHTML = "";
});

const buttonBack = document.querySelector(".bBack")
buttonBack.addEventListener("click", function(){
    let screenValue = screen.innerHTML;
    screen.innerHTML = screenValue.slice(0, -1);
});

const bOperator = document.querySelectorAll(".operator");
bOperator.forEach(function (button) {
    button.addEventListener("click", function(){
        let screenValue = screen.innerHTML;
        const operators = "+-X÷"
        if (operators.includes(screenValue.slice(-1))){
            screen.innerHTML = screenValue.slice(0, -1);
            screen.innerHTML += button.innerHTML
        } else{
            screen.innerHTML += button.innerHTML
        };
    });
});

const bNumbers = document.querySelectorAll(".number");
bNumbers.forEach(function (button) {
    button.addEventListener("click", function () {
        screen.innerHTML += button.innerHTML;
    });
});

const bEquality = document.querySelector(".equality");

bEquality.addEventListener("click", function () {
let screenValue = screen.innerHTML;
screenValue = screenValue.replace(/X/g, '*').replace(/÷/g, '/');
const result = eval(screenValue);
screen.innerHTML = result;
});
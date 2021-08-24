let opValue = "";
let display = document.querySelector(".screenText");

function buttonClicked(key) {
    opValue += key;
    display.textContent = opValue;
}

function equalOp() {
    let result = eval(opValue);
    opValue = result;
    display.textContent = opValue;
    opValue = opValue.toString();
}

function clearScreen() {
    opValue = "";
    display.textContent = "0";
}










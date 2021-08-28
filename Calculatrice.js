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


// Moving calculator feature below

let calculatorBlock = document.querySelector(".calculatorBlock");
let mouseDragging = false;

let checkPointMouseX, checkPointMouseY, checkPointBlockX, checkPointBlockY ;

calculatorBlock.style.left= "50%";
calculatorBlock.style.top= "80px";


document.querySelector(".screenBlock").addEventListener("mousedown", (e) => {
    mouseDragging = true;
    checkPointMouseX = e.x;
    checkPointMouseY = e.y;
    checkPointBlockX = calculatorBlock.offsetLeft; 
    checkPointBlockY = calculatorBlock.offsetTop;

});

document.querySelector("html").addEventListener("mousemove", (e) => {

    if (mouseDragging === true) {
        
        calculatorBlock.style.left = checkPointBlockX + e.x - checkPointMouseX + "px";
        calculatorBlock.style.top = checkPointBlockY + e.y - checkPointMouseY + "px";

        console.log(calculatorBlock.offsetLeft);
        console.log(calculatorBlock.offsetTop);
    }
    else {

    }
});

document.querySelector("html").addEventListener("mouseup", (e) => {
    mouseDragging = false;
});





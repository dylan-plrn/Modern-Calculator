let operationsString = "";
let operationsArray = [];

let screenText = document.querySelector(".screenText");
screenText.textContent = "0";


// function buttonClicked(key) {

//     operationsArray.push(key);
//     operationsString = "";
//     for (let i = 0; i < operationsArray.length; i++) {
//         operationsString += operationsArray[i];
//     }
//     screenText.textContent = operationsString;
// }

function buttonClicked(key){
    operationsArray.push(key);
    operationsString += operationsArray[operationsArray.length - 1];
    screenText.textContent = operationsString;
}

function equalOp() {
    let result = eval(operationsString);   // On numérise notre opération mathématique et la stocke dans la variable "result".
    screenText.textContent = result;       // On affiche notre résultat à l'écran.
    operationsArray = [result];            // On remplace notre tabelau plein par le résultat seulement.
    operationsString = result;  
    operationsString = operationsString.toString();
}


function clearScreen() {
    operationsArray = [];
    operationsString = "0";
    screenText.textContent = operationsString;
}


let test ="cheval";
test = test + "chien";
console.log(test);







// document.querySelector(".button0").onclick = () => { operationsArray.push(0);}
// document.querySelector(".button1").onclick = () => { operationsArray.push(1);}
// document.querySelector(".button2").onclick = () => { operationsArray.push(2);}
// document.querySelector(".button3").onclick = () => { operationsArray.push(3);}
// document.querySelector(".button4").onclick = () => { operationsArray.push(4);}
// document.querySelector(".button5").onclick = () => { operationsArray.push(5);}
// document.querySelector(".button6").onclick = () => { operationsArray.push(6);}
// document.querySelector(".button7").onclick = () => { operationsArray.push(7);}
// document.querySelector(".button8").onclick = () => { operationsArray.push(8);}
// document.querySelector(".button9").onclick = () => { operationsArray.push(9);}

// document.querySelector(".buttonDot").onclick = () => { operationsArray.push(".");}

// document.querySelector(".buttonAdd").onclick = () => { operationsArray.push("+");}
// document.querySelector(".buttonSubstract").onclick = () => { operationsArray.push("-");}
// document.querySelector(".buttonMultiply").onclick = () => { operationsArray.push("*");}
// document.querySelector(".buttonDivide").onclick = () => { operationsArray.push("/");}

// document.querySelector(".buttonLeftBracket").onclick = () => { operationsArray.push("(");}
// document.querySelector(".buttonRightBracket").onclick = () => { operationsArray.push(")");}

// document.querySelector(".buttonClear").onclick = () => { operationsArray=[]}

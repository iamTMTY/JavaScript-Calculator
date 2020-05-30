let userInput = document.querySelector(".user-input")
let resultDisplay = document.querySelector(".result-display")
let calcMemory = {value1: "", value2: "", operatorMemory: ""}
let result = "";


//checks calcMemory to bring out numbers and performs appropriate operation
function computeResult() {
    console.log(calcMemory)
    if (calcMemory.operatorMemory.includes("+")) {
        result = (parseFloat(calcMemory.value1)) + (parseFloat(calcMemory.value2))
    } else if ((calcMemory.operatorMemory).includes("-")) {
        result = (parseFloat(calcMemory.value1)) - (parseFloat(calcMemory.value2))
    } else if ((calcMemory.operatorMemory).includes("*")) {
        result = (parseFloat(calcMemory.value1)) * (parseFloat(calcMemory.value2))
    } else if ((calcMemory.operatorMemory).includes("/")) {
        result = (parseFloat(calcMemory.value1)) / (parseFloat(calcMemory.value2))
    }

        resultDisplay.innerText = result
        calcMemory.value1 = result
        calcMemory.value2 = ""
        calcMemory.operatorMemory = ""
}

console.log("" === undefined)
// display and store numbers on-click
document.querySelectorAll('.number-button').forEach(function(numberButton) {
    numberButton.addEventListener('click', function (){

        if (calcMemory.operatorMemory === ""){
            calcMemory.value1 += numberButton.innerText;
        } else if (calcMemory.operatorMemory !== ""){calcMemory.value2 += numberButton.innerText}
    
        userInput.innerText += numberButton.innerText;
    })
})


//(compute previous operation in calcMemory &) display and store operator on-click
document.querySelectorAll('.operator-button').forEach(function(operatorButton) {
    operatorButton.addEventListener('click', function() {
        if (calcMemory.operatorMemory === "" && result !== "") {
            if (operatorButton.innerText.includes('-') && calcMemory.value2 === "") {
                userInput.innerText = `${result}${operatorButton.innerText}`;
                calcMemory.operatorMemory = operatorButton.innerText;
            } else {
                userInput.innerText = `${calcMemory.value1}${operatorButton.innerText}`;
                calcMemory.operatorMemory = operatorButton.innerText;
            }
        } else if(calcMemory.operatorMemory === "" && result === "") {
            if(operatorButton.innerText.includes('-') && calcMemory.value1 === "") {
                userInput.innerText = operatorButton.innerText;
                calcMemory.value1 = operatorButton.innerText
            } else {
            userInput.innerText += `${operatorButton.innerText}`;
            calcMemory.operatorMemory = operatorButton.innerText;
            }
        } else  if (calcMemory.operatorMemory !== "" && calcMemory.value2 === "") {
            if (operatorButton.innerText.includes('-') ) {
                userInput.innerText += operatorButton.innerText;
                calcMemory.value2 = operatorButton.innerText
            }
        } else if(calcMemory.value1 !== "" && calcMemory.operatorMemory !== "" && calcMemory.value2 !== ""){
            computeResult();
            userInput.innerText = `${calcMemory.value1}${operatorButton.innerText}`;
            calcMemory.operatorMemory = operatorButton.innerText;
        }
    });
})


// computes operation in calcMemory
document.querySelector('.equal-button')
.addEventListener('click', computeResult)


// Remove number or operator from display and calcMemory
document.querySelector('.delete-button').addEventListener('click', function() {
    if(calcMemory.value2 !== "") {
        calcMemory.value2 = calcMemory.value2.slice(0,(calcMemory.value2.length) - 1)
    } else if(calcMemory.operatorMemory !== "") {
        calcMemory.operatorMemory = calcMemory.operatorMemory = ""
    } else if(calcMemory.value1 !== "") {
        calcMemory.value1 = calcMemory.value1.slice(0,(calcMemory.value1.length) - 1)
    }

    userInput.innerText = userInput.innerText.slice(0,(userInput.innerText.length) - 1)
})

// Clears everything in calcMemory, displayArea and result
document.querySelector('.clear-button').addEventListener('click', function() {
    result = ""
    userInput.innerText = "";
    calcMemory.value1 = "";
    calcMemory.value2 = "";
    calcMemory.operatorMemory = "";
    resultDisplay.innerText = "";
})

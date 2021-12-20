let numberButtons = Array.from(document.querySelectorAll("[data-number"))
let operationButton  = Array.from(document.querySelectorAll("[data-operation]"))
let deleteButton  = document.querySelector("[data-delete]")
let allClearButton  = document.querySelector("[data-all-clear]")
let equalButton  = document.querySelector("[data-equals]")
let previousOperandText  = document.querySelector("[data-previous-operand]")
let currentOperandText = document.querySelector("[data-current-operand]");


allClearButton.addEventListener("click" ,() =>{
    currentOperandText.innerText = "";
    previousOperandText.innerText = "";
});

//loops throughs each data-number and assigns i
for (let i = 0; i < numberButtons.length; i++) {
    //add eventlistener to each valur[i]
    numberButtons[i].addEventListener("click" , () => {
        //assign each value text-content to currentOperand
        let currentOperand = numberButtons[i].innerText;
        
        
        if (currentOperand === "." && currentOperandText.innerText.includes(".")) return 
        //add each number[i] to currentOperand Text        
        currentOperandText.innerText +=  currentOperand;
    })
};



for (let i = 0; i < operationButton.length; i++) {
    //add eventlistener to each valur[i]
    operationButton[i].addEventListener("click" , () => {
        let currentOperation = operationButton[i].innerText;
        if(currentOperandText.innerText === "") return 
        if(previousOperandText.innerText !== ""){     
            compute(currentOperation);
        }
        previousOperandText.innerText = currentOperandText.innerText;
        currentOperandText.innerText = "";
        //add each number[i] to currentOperation Text   
          
        previousOperandText.innerText +=  currentOperation;
    })
};

equalButton.addEventListener("click" , () => {
    for (let i = 0; i < operationButton.length; i++) {
        console.log(operationButton[i].innerText);
        
        compute(operationButton[i].innerText)  
    }
    
})

deleteButton.addEventListener("click" , () => {
    let current = currentOperandText.innerText.slice(0 , -1);
    if(currentOperandText.innerText === ""){
        previousOperandText.innerText = currentOperandText.innerText
    }
    currentOperandText.innerText = current;
})

function compute(operator){
    let computation ;
    let previousValue = parseFloat(previousOperandText.innerText);
    let currentValue = parseFloat(currentOperandText.innerText);
    if(isNaN(previousValue) || isNaN(currentValue)) return


    
    // computation = previousValue + currentValue
    // pickedOperator = operationButton[i].innerText;
    // console.log(pickedOperator);
    // console.log(operationButton[i].innerText);
    
    switch(operator) {
        case "+":
        computation = previousValue + currentValue
        break;

        case "-":
        computation = previousValue - currentValue
        break;

        case "*":
        computation = previousValue * currentValue
        break;
        
        case "/":
        computation = previousValue / currentValue
        break;

        default:
            return 
}
    currentOperandText.innerText = computation;
    previousOperandText.innerText = "";
    // pickedOperator = undefined;
    console.log(operator);
    console.log(computation);
}
   
    
    
        //     switch(pickedOperator) {
        //         case '+':
        //         computation = previousValue + currentValue
        //         break;
        
        //         case '-':
        //         computation = previousValue - currentValue
        //         break;
        
        //         case "*":
        //         computation = previousValue * currentValue
        //         break;
                
        //         case "/":
        //         computation = previousValue / currentValue
        //         break;
        
        //         default:
        //             return 
        //     }
            
        //  currentOperandText.innerText = computation 
        //  previousOperandText.innerText = "";
         
    
   




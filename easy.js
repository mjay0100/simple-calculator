let numberButtons = Array.from(document.querySelectorAll(".click"));
let output = document.querySelector(".output");

   

numberButtons.map( button => {
    button.addEventListener("click", (e) => {
        
        console.log(e.target);
        
        switch(e.target.innerText) {
            case 'AC':
            output.innerText = ""
            break;

            case 'DEL':
            output.innerText = output.innerText.slice(0, -1);
            break;

            case "=":
                try {
                    
                    output.innerText = eval(output.innerText)
                } catch (error) {
                    output.innerText = "Error"
                }
            break;

            default:
            output.innerText += e.target.innerText ;
        }
    });
});
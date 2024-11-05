// calculator logic

const display = document.getElementById("display");

function append(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function signChange(){
    let currentValue = display.value.trim()
    if(currentValue !== ""){

        let match = currentValue.match(/[-+]?[0-9]*\.?[0-9]+$/);

        if (match){
            let lastNumber = match[0];
            let toggledNumber = parseFloat(lastNumber)  * -1;

            display.value = currentValue.slice(0,-lastNumber.length) + toggledNumber;

        }
    }
}


function calculate(){
    try{
        let currentValue = display.value.replace(/([0-9.]+)\s*\+\s*([0-9.]+)%/g, (match, base, percent) => {
            let baseValue = parseFloat(base);
            let percentValue = parseFloat(percent) / 100 * baseValue;
            
            return (baseValue + percentValue).toString();
        });

        currentValue = currentValue.replace(/([0-9.]+)%/g, (match, num) => {
            return (parseFloat(num) / 100).toString();
        });
    
        display.value = eval(currentValue);
    }
    catch(error){
        display.value = "Error";
    }
   
}
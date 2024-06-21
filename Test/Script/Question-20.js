
const display = document.getElementById("display");

function inputDisplay(input){
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(err){
        display.value = "Error";
    }
}
const display = document.getElementById("display");

function appendToDisplay(expression){
    display.value += expression;
}

function allclear(){
    display.value = "";
}

function calculate(){
    try{
    display.value = eval(display.value);
}
 catch(error){
    display.value = 'Error';
}
}
const display = document.getElementById("display");
const calculator = document.querySelector(".calculator");

function appendValue(value){
    if(display.value==="Error"){
        display.value=value;
    }else{
        display.value+=value;
    }
}

function calculate(){
    try{
        let exp = display.value
            .replaceAll("x","*")
            .replaceAll("÷","/");
        display.value = eval(exp);
    }catch{
        display.value="Error";
    }
}

function clearDisplay(){
    display.value="";
}

function deleteOne(){
    display.value = display.value.slice(0,-1);
}

function toggleCalculatorTheme(){
    calculator.classList.toggle("light");
}

function toggleBackgroundTheme(){
    document.body.classList.toggle("light-bg");
}

// Vamos pegar peçp ID - 
var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;
// currentNumber - Que se trata do número atual. 
function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
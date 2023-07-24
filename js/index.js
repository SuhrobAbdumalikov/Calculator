const btnNumbers = document.querySelector('#dtaNumber');
const btnOperators = document.querySelector('#dtaOperator');
const btnAllClear = document.querySelector('#dtaClearAll');
const btnEquals = document.querySelector('#dtaEqual');
const btnPrevOperation = document.querySelector('#dta-previous-operator');
const btnCurrentOperation = document.querySelector('#dta-current-operator');
const displayOutput = document.querySelector('.output-elements');


//clear function
function clearAll() {
    displayOutput.value = ''
}


//show number when you click
function disPlay(valu) {
    displayOutput.value+=valu;
    return valu
}

//function eval solve the masala
function solve() {  
    let x = displayOutput.value
    let y = eval(x)
    displayOutput.value = y
    return y
}



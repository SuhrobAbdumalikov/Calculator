const btnOperators = document.querySelector('#allOperators');
const btnClearAll = document.querySelector('#dtaClearAll');
const displayOutput = document.querySelector(".output-elements");

// //for bolish operatiri 
// dtaBolish.addEventListener('click',()=>{
//     const val = displayOutput.value
//     if (!val.includes('/')) {
//         displayOutput.value = val+'/';
//     }
// })


// //for qoshish operatiri uchun
// dtaPlus.addEventListener('click',()=>{
//     const val = displayOutput.value
//     if (!val.includes('+')) {
//         displayOutput.value = val+'+';
//     }
// })


//for minus operatori uchun
// dtaMinus.addEventListener('click',()=>{
//     const val = displayOutput.value
//     if (!val.includes('-')) {
//         displayOutput.value = val+'-';
//     }
// })


//kopaytirish operatori uchun
// dtaKopaytirish.addEventListener('click',()=>{
//     const val = displayOutput.value
//    for (let i = 0; i < val.length; i++) {
//     if (!val.includes('*')) {
//         displayOutput.value = val+'*';
//     }
//    }
// })


//bu bizga har doim yozmaslik uchun class qilib chaqirilgan
const myCalculator = {
  firstNumber: null,
  secondNumber: null,
  operator: null,
};


//bizga ammalar bajarilganda keyin ekranni tozalash uchun ishlatiladigan function.
function clearAll() {
  displayOutput.value = "0";
  myCalculator.firstNumber = null;
  myCalculator.secondNumber = null;
  myCalculator.operator = null;
}
btnClearAll.addEventListener('click',()=>{
    clearAll();
})


//bizga hamma click bolganda sonlarni ekaranga chiqaradigan function
function disPlay(value) {
  const val = displayOutput.value;
  if (val === "0") {
    displayOutput.value = value;
  } else {
    displayOutput.value = val + value;
  }
}


//biz bajarmoqchi bolga amalni tanlash uchun ishlatiladigan fucntion
function addOperator(operator) {
    myCalculator.firstNumber = parseFloat(displayOutput.value);
    myCalculator.operator = operator;
  displayOutput.value = "0";
}
btnOperators.addEventListener('click',()=>{
    addOperator(operator)
})


//vergulni olib ulrni hisoblash uchun qilinga function
function fullStop() {
  const val = displayOutput.value;
  if (!val.includes(".")) {
    displayOutput.value = val + ".";
  }
}


//hammasi hisoblash uchun qilinga function
function solve() {
    myCalculator.secondNumber = parseFloat(displayOutput.value);
  let result;
  switch (myCalculator.operator) {
    case "/":
      result = `${myCalculator.firstNumber} ÷ ${myCalculator.secondNumber} = ${myCalculator.firstNumber / myCalculator.secondNumber}`
      break;
    case "*":
      result = `${myCalculator.firstNumber} × ${myCalculator.secondNumber} = ${myCalculator.firstNumber * myCalculator.secondNumber}`
      break;
    case "+":
      result = `${myCalculator.firstNumber} + ${myCalculator.secondNumber} = ${myCalculator.firstNumber + myCalculator.secondNumber}`
      break;
    case "-":
      result = `${myCalculator.firstNumber} - ${myCalculator.secondNumber} = ${myCalculator.firstNumber - myCalculator.secondNumber}`
      break;
    default:
      return;
  }
  displayOutput.value = result.toString();
  myCalculator.firstNumber = result;
  myCalculator.operator = null;
}

// function solve() {
//     for (let i = 0; i < displayOutput.value.length; i++) {
//         if (displayOutput.value.includes('-')) {
//             displayOutput.value =  displayOutput.value[0]-displayOutput.value[i+2];
//          }
//     }
// }


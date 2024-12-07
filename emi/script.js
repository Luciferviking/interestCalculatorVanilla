const principalAmount = document.getElementById("principalAmount");
const output = document.getElementById("demoCont");

/*document.addEventListener("click", principalAmountFunc);

function principalAmountFunc() {
 var x = document.getElementById("principalAmount").value;
 output.textContent =`this is the value ${x}`;
 console.log(x);
}*/

function updateOutput() { 
    output.textContent = `Current input value: ${principalAmount.value}`; 
}

principalAmount.addEventListener('input', updateOutput);

//principalAmountFunc();
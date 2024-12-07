const principalAmount = document.getElementById("principalAmount");
const output = document.getElementById("demoCont");

//const input = document.getElementById('myInput'); 
//const output = document.getElementById('output'); 

principalAmount.addEventListener('input', function() { 
    output.textContent = `Current input value: ${principalAmount.value}`; 
});



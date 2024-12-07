/*
function updateOutput() { 
  output.textContent = `Current input value: ${principalAmount.value}`; 
}

principalAmount.addEventListener('input', updateOutput);*/


const principalAmountCont = document.getElementById("principalAmount");
const rateOfInterestCont = document.getElementById("rateOfInterest");
const timePeriodCont = document.getElementById("timePeriod");
const emiCalculatedCont = document.getElementById("emiCalculated");


const output = document.getElementById("demoCont");


var principalAmount;
var rateOfInterest;
var timePeriod;

function calculateEmi(){
    var emi;

    var frag1 = principalAmount* (rateOfInterest/100)/12;
    var frag2 = Math.pow((1 + (rateOfInterest/100)/12),(timePeriod*12));
    var frag3 = Math.pow((1 + (rateOfInterest/100)/12),(timePeriod*12));
    var frag4 = frag3 - 1;

    //limiting to 4 decimal digits
    frag1 = Math.floor(frag1 * 10000) / 10000;
    frag2 = Math.floor(frag2 * 10000) / 10000;
    frag4 = Math.floor(frag4 * 10000) / 10000;

    emi = ((frag1.toFixed(4)*frag2.toFixed(4))/frag4.toFixed(4)).toFixed(4);

    console.log("frag 1 2 4");
    console.log(frag1.toFixed(4));
    //console.log(frag2);
    //console.log(frag4);
    //console.log(rateOfInterest);
    //console.log(timePeriod);
    return emi;
}

//don't touch it will break
document.addEventListener("input", function(){
 
    output.textContent = `Current input value: ${principalAmountCont.value}`;
    principalAmount = principalAmountCont.value;
    rateOfInterest = rateOfInterestCont.value;
    timePeriod = timePeriodCont.value;
    emiCalculatedCont.textContent = calculateEmi();
    //console.log(rateOfInterest);
    //console.log(timePeriod);
    console.log(calculateEmi());
  });



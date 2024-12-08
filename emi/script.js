/*
function updateOutput() { 
  output.textContent = `Current input value: ${principleAmount.value}`; 
}

principleAmount.addEventListener('input', updateOutput);*/


const principleAmountCont = document.getElementById("principleAmount");
const rateOfInterestCont = document.getElementById("rateOfInterest");
const timePeriodCont = document.getElementById("timePeriod");
const emiCalculatedCont = document.getElementById("emiCalculated");
const pieChartCont = document.getElementById("pieChart");
const interestPaidCont = document.getElementById("interestPaid");

const output = document.getElementById("demoCont");


var principleAmount;
var rateOfInterest;
var timePeriod;

function calculateEmi(){
    var emi;

    var frag1 = principleAmount* (rateOfInterest/100)/12;
    var frag2 = Math.pow((1 + (rateOfInterest/100)/12),(timePeriod*12));
    var frag3 = Math.pow((1 + (rateOfInterest/100)/12),(timePeriod*12));
    var frag4 = frag3 - 1;

    //limiting to 4 decimal digits
    frag1 = Math.floor(frag1 * 10000) / 10000;
    frag2 = Math.floor(frag2 * 10000) / 10000;
    frag4 = Math.floor(frag4 * 10000) / 10000;

    emi = ((frag1.toFixed(4)*frag2.toFixed(4))/frag4.toFixed(4)).toFixed(4);

    //console.log("frag 1 2 4");
    //console.log(frag1.toFixed(4));
    //console.log(frag2);
    //console.log(frag4);
    //console.log(rateOfInterest);
    //console.log(timePeriod);
    return emi;
}
var interestAmount;
//google.charts.load('current', {'packages':['corechart']});
//google.charts.setOnLoadCallback(pieChart);


function pieChart(){
    var PercentInterestOfEmi = interestAmount/ (calculateEmi()* timePeriod * 12);
    var interestAmountDeg  = (Math.floor(((PercentInterestOfEmi*360)*100)/100)).toFixed(2);
    var principleAmountDeg = 360 - interestAmountDeg;
  
    /*const colors = ['red', 'yellow']; // Example colors
    const angles = [interestAmountDeg, principleAmountDeg]; // Corresponding angles

    // Create gradient dynamically
   // const gradient = `conic-gradient(
     // ${colors.map((color, index) => `${color} ${angles[index]}deg`).join(', ')}
    //)`;
    const gradient = `conic-gradient( red ${interestAmountDeg + "deg"} , yellow ${principleAmountDeg + "deg"} )`; 
    
    
    pieChartCont.style.background = gradient;*/

   document.documentElement.style.setProperty('--principleAmountCss', `${principleAmountDeg + "deg"}`);

   document.documentElement.style.setProperty('--interestAmountCss', `${interestAmountDeg + "deg"}`);



    console.log("interest amount");
    console.log(interestAmountDeg);
    console.log("principle amount deg");
    console.log(principleAmountDeg);
}

//don't touch it will break
document.addEventListener("input", function(){
 
    output.textContent = `Current input value: ${principleAmountCont.value}`;
    principleAmount = principleAmountCont.value;
    rateOfInterest = rateOfInterestCont.value;
    timePeriod = timePeriodCont.value;
    emiCalculatedCont.textContent = calculateEmi();
    //console.log(rateOfInterest);
    //console.log(timePeriod);
   // console.log(calculateEmi());
    interestAmount = calculateEmi() * timePeriod * 12 - principleAmount;
    interestAmount = Math.floor((interestAmount*100)/100).toFixed(2);
    pieChart();
    interestPaidCont.textContent = interestAmount; 
  });



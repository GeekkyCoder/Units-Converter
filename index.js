// change this number for different calculations ! 
// let number = 20;

let number= window.prompt('enter the number to start...');

let numberTxt= document.getElementById('myNumber').innerText = number;

let meter=document.getElementById('meter');

let gallon= document.getElementById('gallon');

let kilos= document.getElementById('kilo');


Meter();
Liter();
Kilo();


// 20 meters= 65.620 feet
// 20 feet = 6.096 meters
function Meter(){
    let totalFeet= parseFloat(number * 3.28084).toFixed(3);
    let totalMeters= number * 0.3048;
    let meterText= `${number} meters = ${totalFeet} feet | ${number} feet = ${totalMeters} ` + 'meters';
    meter.innerText= meterText;
}


// 20 liter = 5.28344 gallon
// 20 gallon= 75.7082 liter
function Liter(){
    let totalGallon= parseFloat(number * 3.78541).toFixed(3);
    
    let totalLiter= parseFloat(number * 0.264172).toFixed(3);
    
    let literTxt= `${number} liters= ${totalLiter} gallon | ${number} gallon = ${totalGallon}` + ' ' + "liters";
    
    gallon.innerText = literTxt;
}

// 20 kilo = 44.0925 pounds
// 20 pounds= 9.07185 kilos
function Kilo(){
    let totaKilo= parseFloat(number * 0.453592).toFixed(3);
    
    let totalPounds= parseFloat(number * 2.20462).toFixed(3);
    
    let kiloTxt= `${number} kilo= ${totalPounds} pounds | ${number} pounds=  ${totaKilo}` + ' ' + "kilos";
    
    kilos.innerText = kiloTxt;
    
}




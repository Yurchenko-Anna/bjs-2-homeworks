"use strict"
solveEquation(1, 2, 1);
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2 - 4*a*c;
  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    arr.push((-b)/(2*a));
  } else {
    arr.push((-b + Math.sqrt(discriminant))/(2*a));
    arr.push((-b - Math.sqrt(discriminant))/(2*a));
  }
  console.log(arr);
  return arr;  
}



calculateTotalMortgage(15, 0, 10000, 36.)
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (typeof(percent) !== "number") {
    console.log("false");   
  } else if (typeof(contribution) !== "number") {
    console.log("false");    
  } else if (typeof(amount) !== "number") {
    console.log("false");    
  } else {
    let monthlyInterest = percent / 100 / 12;
    let loanBody = amount - contribution;
    let monthlyPayment = loanBody * (monthlyInterest + (monthlyInterest / (((1 + monthlyInterest)**countMonths) - 1)));
    let totalAmount = monthlyPayment * countMonths;
    totalAmount = +totalAmount.toFixed(2)
    console.log(totalAmount);
    return totalAmount;    
  }    
}
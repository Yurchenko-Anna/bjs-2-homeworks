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



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}
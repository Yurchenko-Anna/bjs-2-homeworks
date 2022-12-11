function getArrayParams(...arr) {
  let minimum = Math.min(...arr);
  let maximum = Math.max(...arr);
  let sumOfNumbers = arr.reduce(function(a, b) {
    return a + b;
  });
  let average = +(sumOfNumbers / arr.length).toFixed(2);
  return {min: minimum, max: maximum, avg: average};
}



function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumOfNumbers = arr.reduce(function(a, b) {
    return a + b;
  });
  return(sumOfNumbers);
}


function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let minimum = Math.min(...arr);
  let maximum = Math.max(...arr);
  let differenceOfValues = maximum - minimum; 
  return(differenceOfValues);
}


function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i=0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  let difference = sumEvenElement - sumOddElement; 
  return(difference);
}


function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i=0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  let averageOfEvenElements = sumEvenElement / countEvenElement;  
  return(averageOfEvenElements);
}



function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (i = 0; i < arrOfArr.length; i++) {
    const newMaximum = func(...arrOfArr[i]);
    if (newMaximum > maxWorkerResult) {
      maxWorkerResult = newMaximum;
    }
  }
  return(maxWorkerResult);
}

getArrayParams(5)
function getArrayParams(...arr) {
  let minimum = Math.min(...arr);
  let maximum = Math.max(...arr);
  let sumOfNumbers = arr.reduce(function(a, b) {
    return a + b;
  });
  let average = +(sumOfNumbers / arr.length).toFixed(2);
  console.log("min: " + minimum + ", max: "  + maximum + ", avg: " + average);
  return { min: minimum, max: maximum, avg: average };
}

summElementsWorker(10, 10, 11, 20, 10)
function summElementsWorker(...arr) {
  if (arr === undefined) {
    return(0);
  }
  let sumOfNumbers = arr.reduce(function(a, b) {
    return a + b;
  });
  console.log(sumOfNumbers);
  return(sumOfNumbers);
}

differenceMaxMinWorker(10, 10, 11, 20, 10)
function differenceMaxMinWorker(...arr) {
  if (arr === undefined) {
    return(0);
  }
  let minimum = Math.min(...arr);
  let maximum = Math.max(...arr);
  let differenceOfValues = maximum - minimum;
  console.log(differenceOfValues);
  return(differenceOfValues);
}

differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)
function differenceEvenOddWorker(...arr) {
  if (arr === undefined) {
    return(0);
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (i=0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  let difference = sumEvenElement - sumOddElement;
  console.log(difference);
  return(difference);
}

averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)
function averageEvenElementsWorker(...arr) {
  if (arr === undefined) {
    return(0);
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (i=0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  let averageOfEvenElements = sumEvenElement / countEvenElement;
  console.log(averageOfEvenElements);
  return(averageOfEvenElements);
}


const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
makeWork(arr, summElementsWorker);
function makeWork (arrOfArr, func) {
  let maxWorkerResult = Infinity;
  for (i = 0; i < arrOfArr.length; i++) {
    const newMaximum[i] = 
    if (newMaximum > maxWorkerResult) {
      maxWorkerResult = newMaximum;
    }
  }
  console.log(maxWorkerResult);
  return(maxWorkerResult);
}

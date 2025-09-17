//Write a function to get the lowest, highest and average value in the array (with and without sort function).
function getStats(arr1) {
  let lowest = arr1[0];
  let highest = arr1[0];
  let sum = 0;

  for (let i = 0; i < arr1.length; i++) {
    let num = arr1[i];
    if (num < lowest) lowest = num;
    if (num > highest) highest = num;
    sum += num;
  }

  let average = sum / arr1.length;

  return {
    lowest: lowest,
    highest: highest,
    average: average
  };
}

let arr1 = [12, 5, 23, 18, 4, 45, 32];
console.log(getStats(arr1)); 

//Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'
function joinWords(arr2) {
  if (arr2.length === 0) return "";
  if (arr2.length === 1) return arr[0];

  let allExceptLast = arr2.slice(0, -1).join(",");

  let lastWord = arr2[arr2.length - 1];

  return `${allExceptLast}, and ${lastWord}`;
}

let arr2 = ["apple", "banana", "cherry", "date"];
console.log(joinWords(arr2));
//Write a function from a given array of numbers and return the second smallest number
function secondSmallest(arr3) {
  if (arr3.length < 2) return null;
  let sorted = [...arr3].sort((a, b) => a - b); 
  return sorted[1];
}
let numbers = [5, 3, 1, 7, 2, 6];
console.log(secondSmallest(numbers)); 

// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
function addArrays(arr4, arr5) {
  if (arr4.length !== arr5.length) {
    throw new Error("Arrays must be of the same length");
  }

  let result = [];
  for (let i = 0; i < arr4.length; i++) {
    result.push(arr4[i] + arr5[i]);
  }

  return result;
}

let a = [1, 2, 3];
let b = [3, 2, 1];
console.log(addArrays(a, b));

function addUniqueElement(arr6, newElement) {

  if (!arr6.includes(newElement)) {
    arr6.push(newElement);
  }
  return arr6;
}

let arr7 = [1, 2, 3, 4];
console.log(addUniqueElement(arr7, 4)); 


let arr8 = [1, 2, 3, 4];
console.log(addUniqueElement(arr8, 7)); 

// Write a function from a given array of mixed data types and return the sum of all the number
  function sumNumbers(arr9) {
  let sum = 0;

  for (let item of arr9) {
    if (typeof item === "number" && !isNaN(item)) {
      sum += item;
    }
  }

  return sum;
}

let mixedArray = ["3", 1, "string", null, false, undefined, 2];
console.log(sumNumbers(mixedArray)); 

// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements).
function insertWithMaxSize(maxSize, ...numbers) {
  return numbers.slice(0, maxSize);
}

let result = insertWithMaxSize(5, 5, 10, 24, 3, 6, 7, 8);
console.log(result);

// Write a function that will combine 2 given array into one array
function combineArrays(arr10, arr11) {
  return arr10.concat(arr11);
}

let arr10 = [1, 2, 3];
let arr11 = [4, 5, 6];
console.log(combineArrays(arr10, arr11));

// Write a function to find duplicate values in an array
function findDuplicates(arr13) {
  let seen = new Set();
  let duplicates = new Set();

  for (let item of arr13) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }

  return [...duplicates]; 
}

let arr13 = [1, 2, 2, 2, 3, 3, 4, 5, 5];
console.log(findDuplicates(arr13));

// Write a function to find the difference in 2 given array
function difference(arr14, arr15) {
  let result = [];

  for (let item of arr14) {
    if (!arr15.includes(item)) {
      result.push(item);
    }
  }

  for (let item of arr15) {
    if (!arr14.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

let arr14 = [1, 2, 3, 4, 5];
let arr15 = [3, 4, 5, 6, 7];
console.log(difference(arr14, arr15));

// Based on the array below write a function that will return primitive data types only
function getPrimitives(arr16) {
  return arr16.filter(item => (
    item === null || (typeof item !== 'object' && typeof item !== 'function')
  ));
}

let arr16 = [1, [], undefined, {}, "string", {}, []];
console.log(getPrimitives(arr16));

// Write a function from the below array of number that will return sum of duplicate values
function sumOfDuplicates(arr17) {
  let counts = {};
  let sum = 0;

  for (let num of arr17) {
    counts[num] = (counts[num] || 0) + 1;
  }

  for (let num in counts) {
    if (counts[num] > 1) {
      sum += Number(num) * counts[num];
    }
  }

  return sum;
}

let arr17 = [10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(sumOfDuplicates(arr17));

// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor
function rockPaperScissors(playerMove) {
  const moves = ["rock", "paper", "scissor"];
  
  const computerMove = moves[Math.floor(Math.random() * moves.length)];
  
  let result = "";
  if (playerMove === computerMove) {
    result = "Draw";
  } else if (
    (playerMove === "rock" && computerMove === "scissor") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissor" && computerMove === "paper")
  ) {
    result = "Win";
  } else {
    result = "Lose";
  }
  
  return `Computer chose ${computerMove}. You ${result}!`;
}

console.log(rockPaperScissors("paper"));
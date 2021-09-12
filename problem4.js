/*
**Problem**
You are given a list of numbers in a "short-hand" range where 
only the significant part of the next number is written because 
we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). 
Some people use different separators for their ranges 
(ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). 
Range limits are always inclusive.

Your job is to return a list of complete numbers.

The possible separators are: ["-", ":", ".."]

  - "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
  - "1-3, 1-2" --> 1, 2, 3, 11, 12
  - "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
  - "104-2" --> 104, 105, ... 112
  - "104-02" --> 104, 105, ... 202
  - "545, 64:11" --> 545, 564, 565, .. 611
          564 to 611
Understanding the Problem

- input:
  - string
- output:
  - an array of integers

- model of problem:
  - when curren number is less than the previous number
    - we need to increment the previous by number by 1 
    - UNTIL the last x number of digits matches the current number
    - that will be our new number

  - ranges represent a series of intgers increasing by 1
    - can be represented with two integers separated by '-', ':', '..'
    - when ever a range exists, we must treat the missing numbers as if they were actually there 
    - separate the two numbers 
      - if the second is less than the first then update second number to correct value
      - add all the integers between the two values to the range

**Examples / Test Cases**
getRange("1, 3, 7, 2, 4, 1") === [1, 3, 7, 12, 14, 21]
getRange("1-3, 1-2") === [1, 2, 3, 11, 12]
getRange("1:5:2") === [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12]
getRange("104-2");      //  104, 105, ... 112
getRange("104-02");     //  104, 105, ... 202
getRange("545, 64:11")  //  545, 564, 565, .. 611


**Data Structures**
- an array to split and hold each element of the input string
- an array to add and hold our return range

**Algorithm**
CalculateNextInt
-takes the previous # or 0, and the current # string
- adds 1 to the previous number
- checks to see if the the last digits of the current # match the last digits of the previous number
  - use length of current # string to get - index of previous number string to match
  - if match return the new number as integer
  - if not repeat

CreateRange
  - function will need the previous value if it exists OR set previous value to 0
  - split range string ito individidaul string numbers
  - create a return array to hold new values and add previous value/0 as first element
  - iterate over the array of string numbers
    - pass the value to CalulateNextInt along with last value in array OR previousInt
    - add the return value to the rangeArray
    - this leaves us with an array on non-consecutive integers
  - pass the rangeArray to fillRange function to fill out
  
FIllRange
  - creates a return array
  - for loop starting with index equal to the rangeMin and going until index <= rangeMax
    - on each loop add the current index to the return array
  - return the array

Get Range
- create an empty array to store final values
- split input string on ', ' to create array of strings
- iterate over those strings
  - if a string contains ["-", ":", ".."] 
    - pass it to createRange function
    - iterate over the return and add each value to the return string
  - else if string converted to number is greater than the last value in the array (or 0 if array empty)
    - add integer version of string to return array
  - else
    - pass string to calculateNextInt function
    - add return value to return array

- return the return array

*/
const RANGE_DELIMITER = new RegExp(/-|:|\.\./);

function getRange(stringRange) {
  let rangeArray = [];
  let stringArray = stringRange.split(', ');

  stringArray.forEach(str => {
    let previousInt = rangeArray[rangeArray.length -1] || 0;
    if (str.match(RANGE_DELIMITER)){
      let subRange = createRange(str, previousInt);
      rangeArray = rangeArray.concat(subRange);
    } else if (parseInt(str, 10) < previousInt) {
      rangeArray.push(calculateNextInt(str, previousInt));
    } else {
      rangeArray.push(parseInt(str, 10));
    }
  });
  return rangeArray;
}


function calculateNextInt(numString, previousInt) {
  let newInt = previousInt;
  let match = false;
  let sliceIndex = numString.length * -1;

  while (!match) {
    newInt += 1;

    let newIntSlice = String(newInt).slice(sliceIndex);
    if (newIntSlice === numString) {
      match = true;
    }
  }
  return newInt;
}

function createRange(rangeStr, previousInt = 0) {
  let rangeArray = [];
  let strArray = rangeStr.split(RANGE_DELIMITER);          // ["-", ":", ".."]

  strArray.forEach(strNum => {
    if (rangeArray.length === 0)
    rangeArray.push(calculateNextInt(strNum, previousInt));
    else {
      rangeArray.push(calculateNextInt(strNum, rangeArray[rangeArray.length -1]));
    }
  });

  rangeArray = fillRange(rangeArray);
  return rangeArray;
}

function fillRange(minMaxArray) {
  let filledArray = [];
  let min = Math.min(...minMaxArray);
  let max = Math.max(...minMaxArray);

  for (let index = min; index <= max; index += 1) {
    filledArray.push(index);
  }

  return filledArray;
}

// Calulate Next Integer
// console.log(calculateNextInt('2', 7));
// console.log(calculateNextInt('1', 3));
// console.log(calculateNextInt('2', 104));
// console.log(calculateNextInt('02', 104));
// console.log(calculateNextInt('11', 564));

// Test Range Min Max Creation
// console.log(createRange("1-3"));           // [ 1, 3 ]
// console.log(createRange("1:5:2"));         // [ 1, 5, 12 ]
// console.log(createRange("104-2"));         // [ 104, 112 ]
// console.log(createRange("104-02"));        // [ 104, 202 ]
// console.log(createRange("64:11", 545));    // [ 564, 611 ]


// Test FilL Range
// console.log(fillRange([ 1, 3 ]));       // 1...3
// console.log(fillRange([ 1, 5, 12 ]));
// console.log(fillRange([ 104, 112 ]));
// console.log(fillRange([ 104, 202 ]));
// console.log(fillRange([ 564, 611 ]));


// Test final implementation
console.log(getRange("1, 3, 7, 2, 4, 1"));  // [1, 3, 7, 12, 14, 21]
console.log(getRange("1-3, 1-2"));   // [1, 2, 3, 11, 12])
console.log(getRange("1:5:2"));   //[1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12]);
console.log(getRange("1-5:2"));   //[1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12]);
console.log(getRange("104-2"));      //  104, 105, ... 112
console.log(getRange("104-02"));     //  104, 105, ... 202
console.log(getRange("545, 64:11"));  //  545, 564, 565, .. 611

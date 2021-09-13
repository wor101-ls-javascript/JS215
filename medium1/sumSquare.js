/*
**Problem**
Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

Understanding the Problem

- input:
  - an integer
- output:
  - an integer

- model of problem:
  - create an inclusive range of all positive integers from 1 up to the input
  - get two different values
    - first: sum the range, then square the result
    - second: square each value, the sum the results
  - subtract the second value from the first
**Examples / Test Cases**


**Data Structures**
- an array to hold all integers in the range
- firstValue
- secondValue

**Algorithm**
- create range of integers
  - create an empty array to hold our integers range
  - create a loop starting at index 1 and looping up until and including the input integer
    - add the index to the array of integers

- determine first value
  - reduce the range to get the sum of all values
  - square the result of the reduced range

- determine second value
  - map the range to square each value (SAVE the map as new array)
  - reduce the new array to get the sum of all values

- return first value minus the second value


*/

function sumSquareDifference(max) {
  let range = [];

  for (let index = 1; index <= max; index += 1) {
    range.push(index);
  }

  let firstNumber = range.reduce((sum, int) => sum + int)**2;
  let secondNumber = range.map(int => int**2).reduce((sum, int) => sum + int);
  return firstNumber - secondNumber;
}



console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
console.log(sumSquareDifference(2));     // 4 --> (1 + 2)**2 - (1**2 + 2**2)
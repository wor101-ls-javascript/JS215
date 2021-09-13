/*
**Problem**
Write a function that rotates the last n digits of a number. 
For the rotation, rotate by one digit to the left, moving the first digit to the end.

Understanding the Problem

- input:
  - integer to be rotated
  - integer defining number of digits at end of other integer to rotate

- output:
  - a single integer that has been rotated

- model of problem:
  - find a way to rotate only the number of digits required
  - moving the first digit to the end

**Examples / Test Cases**


**Data Structures**
- create an array of string digits


**Algorithm**
- turn the integer to be roated into a string and split it into an array
- use the rotation number to splice off the part of the array to be rotated
- unshift the first element of the sliced array
- push that element back onto the sliced array
*/

function rotateRightmostDigits(inputInteger, rotationNumber) {
  let stringDigits = inputInteger.toString().split('');
  let rotationSlice = stringDigits.splice(-1 * rotationNumber);

  rotationSlice.push(rotationSlice[0]);
  rotationSlice.shift();

  let rotatedString = stringDigits.join('') + rotationSlice.join('');
  return parseInt(rotatedString, 10);
}

// console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915'
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
/*
**Problem**
Take the number 735291 and rotate it by one digit to the left, getting 352917. 
Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. 
Keep the first two digits fixed in place and rotate again to get 321759. 
Keep the first three digits fixed in place and rotate again to get 321597. 
Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. 
The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. 
You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

Understanding the Problem

- input:
  - an integer

- output:
  - an integer (don't worry about leading 0's they can be dropped)

- model of problem:
  - step through the input integer one digit at a time 
  - we want to rotate the current digit to the end of the input integer

**Examples / Test Cases**


**Data Structures**
  - strings and slice

**Algorithm**
- create a string out of the input integer
- create a for loop to loop over each character in the string version of the input integer
  - pass the input integer to our rotateRightMostDigits along with the current index as the rotation #
  - save the return as the string
- return the string
*/

function maxRotation(inputInteger) {
  let stringInteger = inputInteger.toString();

  for (let index = 0; index < stringInteger.length; index += 1) {
    rotationNumber = inputInteger.toString().length - index;

    let rotated = rotateRightmostDigits(parseInt(stringInteger, 10), rotationNumber);
    stringInteger = String(rotated);
  }
  return parseInt(stringInteger, 10);
}




function rotateRightmostDigits(inputInteger, rotationNumber) {
  let stringDigits = inputInteger.toString().split('');
  let rotationSlice = stringDigits.splice(-1 * rotationNumber);

  rotationSlice.push(rotationSlice[0]);
  rotationSlice.shift();

  let rotatedString = stringDigits.join('') + rotationSlice.join('');
  return parseInt(rotatedString, 10);
}


console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
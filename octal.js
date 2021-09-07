/*
**Problem**
Write a Function named octalToDecimal that performs octal to decimal conversion. 
When invoked on a String that contains the representation of an octal number, 
the Function returns a decimal version of that value as a Number. 
Implement the conversion yourself: do not use something else to perform the conversion for you.

**Examples / Test Cases**
function octalToDecimal(numberString) {
  // ...
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9

**Data Structures**
- input is  a string representation of an octal number
- output is going to be a decimal Number

**Algorithm**
- create an array of integers
- raise each integer to a power equal to its index position in the array if the array were reversed
- total up all the values and return the sum


1. conver the input string into an array of single integers
  - use .split() to create array
  - use parseInt() to convert to integers
  - reverse are array
2. create a variable to hold the return value and set to 0
3. iterate over our array of single integers
  - on each element raise it to the power of the current index
  - add the result to our return variable
*/

// return integerArray.reduce((total, currentInt, index) => { currentInt * 8**index }, 0);  

function octalToDecimal(numberString) {
  let integerArray = numberString.split('').reverse().map(number => parseInt(number));
  return integerArray.reduce(raiseTo8);
}

function raiseTo8(total, currentValue, currentIndex) {
  return total += currentValue * 8**currentIndex;
}




console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9


// LS Solution
// function octalToDecimal(numberString) {
//   let decimalParts = numberString.split('').map((digitChar, index) => {
//     return Number(digitChar) * Math.pow(8, numberString.length - index - 1);
//   });

//   return decimalParts.reduce((sum, number) => sum + number);
// }

// or

// function octalToDecimal(numberString) {
//   return numberString.split('').reduce((sum, digitChar, index) => {
//     return sum + Number(digitChar) * Math.pow(8, numberString.length - index - 1);
//   }, 0);
// }
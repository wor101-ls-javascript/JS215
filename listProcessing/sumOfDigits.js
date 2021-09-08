/*
**Problem**
Write a function that takes one argument, a positive integer, and returns the sum of its digits. 
Do this without using for, while, or do...while loops 
- instead, use a series of method calls to perform the sum.

**Examples / Test Cases**
sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

**Data Structures**


**Algorithm**
1. turn input integer into a string
2. split the string into an array of characters
3. use transformation / map to turn the array into an array of integers
4. use reduce to sum all the elements of the integer array
5. return the sum

*/

// function sum(integer) {
//   let arrayOfCharacters = String(integer).split('');
//   let arrayOfIntegers = arrayOfCharacters.map(character => parseInt(character, 10));
//   return arrayOfIntegers.reduce((sum, int) => sum + int);
// }

//ls solution
function sum(integer) {
  return String(integer).split('').reduce((sum, stringDigit) => sum + Number(stringDigit), 0);
}
console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45


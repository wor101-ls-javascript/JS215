/*
**Problem**
Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; otherwise, return false. 
Ignore characters that are not alphabetic.

**Examples / Test Cases**


**Data Structures**


**Algorithm**
1. iterate over string with for loop
2. check each string against regex to see if non-alphabetic
  - skip if non-alphabetic
3. check each string(now confirmed alphabetic) to see if capitalized with regex [A-Z]
  - if not return false
*/

// function isUppercase(str) {
//   for (let index = 0; index < str.length; index += 1) {
//     let char = str[index];
//     if (char.match(/[^a-z]/ig)) {
//       continue;
//     } else if (char.match(/[A-Z]/)) {
//       continue;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

function isUppercase(str) {
  return !/[a-z]/.test(str);
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
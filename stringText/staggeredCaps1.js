/*
**Problem**
Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. 
Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. 
Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

**Examples / Test Cases**


**Data Structures**


**Algorithm**
1. split string into array and use map to transform (if i can use index)
*/

function staggeredCase(str) {
  let upper = true;
  return str
    .split('')
    .map((char) => {
      if (/[a-z]/i.test(char)) {
        if (upper) {
          upper = false;
          return char.toUpperCase();
        } else {
          upper = true;
          return char.toLowerCase();
        }
      } else {
        upper = !upper;
        return char;
      }
    })
    .join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

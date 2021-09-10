/*
**Problem**
Write a function that takes a string as an argument and returns that string with 
every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. 
Leave all other characters unchanged.

**Examples / Test Cases**


**Data Structures**


**Algorithm**
1. split string into an array
2. create new string
3. iterate over array
  - check if character is lowercase [a-z]
    - if so call toUpperCase() on character and add to new string
  - check if character is uppercase [A-Z]
    - if so call toLowerCase() on character and add to new string
  - else add character to new string
4. return new string
*/

function swapCase(str) {
  let chars = str.split('');
  let swapped = '';

  chars.forEach(char => {
    if (char.match(/[a-z]/)) {
      swapped += char.toUpperCase();
    } else if (char.match(/[A-Z]/)) {
      swapped += char.toLowerCase();
    } else {
      swapped += char;
    }
  });
  return swapped;
}


console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
/*
**Problem**
Implement a function that determines whether a string has any character that appears more than once. 
The function should return true if, and only if, all characters in the string are unique. 
We should ignore multiple spaces and case differences; 
focus instead on the non-space characters without regard to case.

**Examples / Test Cases**
function isAllUnique(string) {
  // ...
}

isAllUnique('The quick brown fox jumped over a lazy dog');  // false
isAllUnique('123,456,789');                                 // false
isAllUnique('The big apple');                               // false
isAllUnique('The big apPlE');                               // false
isAllUnique('!@#$%^&*()');                                  // true
isAllUnique('abcdefghijklmnopqrstuvwxyz');                  // true

**Data Structures**


**Algorithm**
1. create lowercase version of string
2. split string by empty spaces into an array of characters
3. iterate over the array of characters
  - starting with the first character, iterate over the remaining characters
    - if any of the remaining charactesr match the first, return false
    - if no characters match, move to second character and repeat
4. if false has not been returned after iterating over array, return true
*/

// array implementation
// function isAllUnique(string) {
//   let lowerCaseString = string.toLowerCase();
//   characterArray = lowerCaseString.split('');

//   for (let i = 0; i < characterArray.length; i += 1) {
//     let currentCharacter = characterArray[i];
//     if (currentCharacter === ' ') {
//       continue;
//     }
//     let remainingCharacters = characterArray.slice(i + 1);
//     for (let j = 0; j < remainingCharacters.length; j += 1) {
//       if (currentCharacter === remainingCharacters[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// object implementation
function isAllUnique(string) {
  let seen = {};
  let lowercaseString = string.toLowerCase();

  for (let index = 0; index < lowercaseString.length; index += 1) {
    let currentCharacter = lowercaseString[index];
    
    if (currentCharacter === ' ') {
      continue;
    } else if (seen[currentCharacter]) {
      return false;
    } else {
      seen[currentCharacter] = true;
    }    
  }
  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true
/*
**Problem**
Write a function that takes a string argument and returns a list of substrings of that string. 
Each substring should begin with the first letter of the word, 
and the list should be ordered from shortest to longest.

**Examples / Test Cases**
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

**Data Structures**


**Algorithm**
1. split string into array of characters
2. transform / map the array of characters
  - for each character, get a slice of the original array from index 0 up to and including the current index position
  - join that slice and return it as the new value for that element
3. sort the array from shortest to longest 
  - (string1, string2) => string1.length - string2.length
*/

// function leadingSubstrings(string) {
//   let characters = string.split('');

//   return characters.map((char, index) => {
//     return characters.slice(0, index + 1).join('');
//   });
// }

//ls non list processing functions solution
function leadingSubstrings(string) {
  let substrings = [];

  for (let index = 1; index <= string.length; index += 1) {
    substrings.push(string.slice(0, index));
  }
  return substrings;
} 


console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
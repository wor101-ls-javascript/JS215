/*
**Problem**
Write a function that returns a list of all substrings of a string. 
Order the returned list by where in the string the substring begins. 
This means that all substrings that start at index position 0 should come first, 
then all substrings that start at index position 1, and so on. 
Since multiple substrings will occur at each position, 
return the substrings at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise:



**Examples / Test Cases**
substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

**Data Structures**


**Algorithm**
1. create allSubstrings array to be returned
2. create for loop to iterate over each character in input string
  - for each character create submit a string from that character to the last character to the leadingSubstrings function
  - use the return value to add to a single element based of current index in the return array
3. concatanate all arrays within allSubstrings and return
*/

function leadingSubstrings(string) {
  let characters = string.split('');

  return characters.map((char, index) => {
    return characters.slice(0, index + 1).join('');
  });
}

function substrings(string) {
  let allSubstrings = [];

  for (let index = 0; index < string.length; index += 1) {
    let substring = string.slice(index);
    allSubstrings.push(leadingSubstrings(substring));
  }
  return allSubstrings.reduce((finalArray, currentArray) => finalArray.concat(currentArray));
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
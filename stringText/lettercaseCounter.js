/*
**Problem**
Write a function that takes a string and returns an object containing three properties: 
one representing the number of characters in the string that are lowercase letters, 
one representing the number of characters that are uppercase letters, 
and one representing the number of characters that are neither.


**Examples / Test Cases**


**Data Structures**


**Algorithm**
1. use regex to use match to return array of chars that are lowercase [a-z]g
2. use regex w/ match to return array of chars that are uppercase [A-Z]g
3. set neither equal to length of original string - length of lowercase - length of uppercase
4. create and return object
*/

function letterCaseCount(str) {
  let lowercase = str.match(/[a-z]/g) || [];
  let uppercase = str.match(/[A-Z]/g) || [];
  let neither = str.match(/[^a-z]/ig) || [];
  return { lowercase: lowercase.length, uppercase: uppercase.length, neither: neither.length}
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
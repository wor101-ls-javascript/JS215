/*
**Problem**
Implement a function that takes a string as an argument and returns a new string that contains the original string in reverse.

**Examples / Test Cases**


**Data Structures**


**Algorithm**
1. split string into array
2. reverse array
3. rejoin and return as string
*/


function reverse(string) {
  return string.split('').reverse().join('');
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"
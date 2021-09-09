/*
**Problem**
Write a function that takes a string as an argument and returns true if the string contains properly balanced parentheses, false otherwise. 
Parentheses are properly balanced only when '(' and ')' occur in matching pairs, with each pair starting with '('.

**Examples / Test Cases**


**Data Structures**


**Algorithm**
regex?
- match 0+ of any character Except ')'
- match '('
- match 0+ of any character 
- match ')'
- can match all of the above 0+ times

1. start a count and set to 0
2. iterate over the string
  - for each '(' add 1 to the count
  - for each ')' subtract 1 from the count
  - if count goes negative, return false
3. after iterating return true if count equals 0


*/

function isBalanced(str) {
  let count = 0;
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === '(') {
      count += 1;
    } else if (str[index] === ')') {
      count -= 1;
    }
    if (count < 0) {
      return false;
    }
  }
  return (count === 0);
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
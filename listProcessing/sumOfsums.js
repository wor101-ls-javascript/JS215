/*
**Problem**
Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. 
Examine the examples to see what we mean. 
You may assume that the array always contains at least one number.

**Examples / Test Cases**
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

**Data Structures**


**Algorithm**
1. use transformation map on the input array
  - keep track of the index
  - use the index to take a slice of the original array from 0 up to and INCLUDING current index
  - use reduce to compute the sum of that slice
  - return the sum as the new element value in the array

*/

function sumOfSums(array) {
  return array.map((number, index) => {
    let subsequence = array.slice(0, index + 1);
    return subsequence.reduce((sum, number) => sum + number);
  }).reduce((total, sum) => total + sum);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

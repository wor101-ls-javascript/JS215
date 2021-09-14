/*
**Problem**
Write a function that takes two sorted arrays as arguments and returns a new array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays.



Understanding the Problem

- input:
  - two arrays
    - each array is sorted from low to high
    - an array can be empty
    - they do not have to be the same length

- output:
  - a signle array
    -sorted from low to high

- model of problem:
  - DO NOT MUTATE the original array
  - build a new array ordered from lowest to highest
    -  must find the lowest number in each array and add it to the new array
    
  - option 1
    - create copies of the original so as to not mutate it
    - shift numbers from each array
      - add whichever is less and then shift the next number from that array
      - compare again and repeat
      
  - option 2
    - loop over one of the arrays while keeping an index count for the second
      - compare each number of the first array with numbers of the second
        - only if it does NOT find a number that is greater, add it to the new array
        - otherwise add number from second array and update index count to reflect new start of search (use slice)

**Examples / Test Cases**


**Data Structures**
- create copies of each input array
- create a new empty array to be returned


**Algorithm**
- create a new empty array
- create a secondArrayIndex variable and set to -1
- loop over the first input array
  - loop through the second array with index
    - if no number in 2nd array is less than current number in first
      - add first number to array and continue outer loop
    - else the first time a number is less than current number && the index is greater than secondArrayIndex
      - add number from 2nd array to empty array
      - update the secondArrayIndex variable to current index in the 2nd array
  - repeat the process until number from first array can be added to empty array

*/

function merge(array1, array2) {
  let newArray = [];
  
  let copy1 = array1.slice(0);
  let copy2 = array2.slice(0);
  
  while (copy1.length > 0 && copy2.length > 0) {
    newArray.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }
  
  return newArray.concat(copy1.length === 0 ? copy2 : copy1);
}


merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]
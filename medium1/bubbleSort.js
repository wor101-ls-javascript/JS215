/*
**Problem**
'Bubble Sort' is one of the simplest sorting algorithms available. 
Although it is not an efficient algorithm, it is an excellent exercise for student developers. 
In this exercise, you will write a function that sorts an array using the bubble sort algorithm.

A bubble sort works by making multiple passes (iterations) through an array. 
On each pass, the two values of each pair of consecutive elements are compared. 
If the first value is greater than the second, the two elements are swapped. 
This process is repeated until a complete pass is made without performing any swaps — at which point the array is completely sorted.

We can stop iterating the first time we make a pass through the array without making any swaps because this means that the entire array is sorted.

Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. 
The sorting should be done "in-place" — that is, the function should mutate the array. 
You may assume that the array contains at least two elements.

Understanding the Problem

- input:
  - an array with integers, strings and ??  
- output:
  - the mutated and sorted array

- model of problem:
  - iterate over the array checking the current element with the next element
  - if the current element is greater (what does that mean?) than the next, swap them
  - keep doing this until you iterate through the array without making any swaps (keep a count)

**Examples / Test Cases**


**Data Structures**


**Algorithm**
- create a swap count and set to 0
- do while count != 0
  - reset swap count to 0
  - for loop starting at 0 and going up until 2 less than the length of the array
    - check to see if the arrays current element is greater than the next
      - if so, swap the elements [array[index], array[index + 1]] = [array[index + 1], array[index]]
      - add 1 swap count
- return the input array
*/

function bubbleSort(inputArray) {
  let swapCount = 0;

  do {
    swapCount = 0;

    for (let index = 0; index < inputArray.length - 1; index += 1) {
      if (inputArray[index] > inputArray[index + 1]) {
        [inputArray[index], inputArray[index + 1]] = [inputArray[index + 1], inputArray[index]];
        swapCount += 1
      }
    }
  } while (swapCount !== 0)
  return inputArray;
}


const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
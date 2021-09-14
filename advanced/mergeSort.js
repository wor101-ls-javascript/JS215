/*
**Problem**
Merge sort is a recursive sorting algorithm that works by breaking down an array's elements into nested subarrays, then combining those nested subarrays back together in sorted order. It is best explained with an example. Given the array [9, 5, 7, 1], let's walk through the process of sorting it with merge sort. We'll start off by breaking the array down into nested subarrays:

  [9, 5, 7, 1] -->
  [[9, 5], [7, 1]] -->
  [[[9], [5]], [[7], [1]]]

We then work our way back to a flat array by merging each pair of nested subarrays back together in the proper order:

  [[[9], [5]], [[7], [1]]] -->
  [[5, 9], [1, 7]] -->
  [1, 5, 7, 9]

Write a function that takes an array argument and returns a new array that contains the values from the input array in sorted order. The function should sort the array using the merge sort algorithm as described above. You may assume that every element of the array will be of the same data type—either all numbers or all strings.

Feel free to use the merge function you wrote in the previous exercise.

Understanding the Problem

- input:
  - an unsorted array 
    - all elements will either be integers or strings

- output:
  - a sorted array

- model of problem:
  - break array down into subarrays until each subarray is only length 1
    - divide length by 2 and use splice to divide array into two sub arrays
    - if either subarray has a length greater than 1 we need to repeat the process
    - once all arrays have length one add them
  - once broken down start with most nested subarrays, join and sort
  - work way back up until only 1 sorted array remaining

**Examples / Test Cases**
[6, 2, 7, 1, 4]) --> [[6, 2, 7], [1, 4]] --> [[[6, 2], 7], [[1], [4]]] --> [[[[6], [2]], [7]], [[1], [4]]]

**Data Structures**


**Algorithm**
BREAKDOWN ARRAY
-  create newArray variable
- splice the input array by length / 2
- if either splice portion is length 1, push it to the new Array
- else pass length greater than 1 pieces back to breakdown function
- return the new array

REMERGE ARRAY
- create a mergedArray variable and set to []
- iterate over the array until there are no more array elements
  - *** check until only a length one array that holds a string or integer
  - on each element check to see if its size is 1 AND the element is a string/integer
  - if yes, run merge function on it and the mergedArray
  - if no, pass the element to the remergeArray function
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


function mergeSort(inputArray) {
  let arrayCopy = inputArray.splice(0);
  
  let breakdown = breakdownArray(arrayCopy);
  //console.log(breakdown);
  
  let mergedArray = remergeArray(breakdown);
  console.log(mergedArray);
}

function remergeArray(breakdown) {
  let mergedArray = [];
  
  breakdown.forEach(element => {
    if (element.length === 1 && !Array.isArray(element[0])) {
      // console.log('Array1:');
      // console.log(element);
      // console.log('');
      // console.log('Array2:');
      // console.log(mergedArray);
      // console.log('');
      // console.log('Merged Array:');
      // console.log(merge(element, mergedArray));
      mergedArray = merge(element, mergedArray);
      // console.log('');
      // console.log('Merge w/out variables:');
      // console.log(merge([3], [5]));
      // console.log('');
    } else {
      mergedArray = merge(remergeArray(element, []), mergedArray);
    }
  });
  return mergedArray;
}



function breakdownArray(arrayCopy) {
  let newArray = [];
  
  let arraySplice = arrayCopy.splice(arrayCopy.length / 2);
  
  if (arrayCopy.length <= 1) {
    newArray.push(arrayCopy);
  } else {
    newArray.push(breakdownArray(arrayCopy));
  }
  
  if (arraySplice.length <= 1) {
    newArray.push(arraySplice);
  } else {
    newArray.push(breakdownArray(arraySplice));
  }
  return newArray;
}




mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]
mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]



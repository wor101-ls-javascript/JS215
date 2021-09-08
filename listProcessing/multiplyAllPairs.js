/*
**Problem**
Write a function that takes two array arguments, each containing a list of numbers, 
and returns a new array containing the products of all combinations of number pairs 
that exist between the two arrays. 
The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

**Examples / Test Cases**
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

**Data Structures**


**Algorithm**
1. create variable to hold returned array
2. find the longer of the two input arrays
3. iterate over the longer array
  - for each number iterate over the shorter array
    - multiply the current number of the long array by the current number of the short array
    - push the product to the return array
4. sort the return array (make sure to pass callback function)
5. return the storted array of products
*/

function multiplyAllPairs(array1, array2) {
  let productArray = [];

  array1.forEach(num1 => {
    array2.forEach(num2 => productArray.push(num1 * num2));
  });
  return productArray.sort((num1, num2) => num1 - num2);
}


console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
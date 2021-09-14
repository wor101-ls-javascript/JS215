/*
**Problem**
In the previous exercise, you wrote a function that transposed a 3x3 matrix represented by an array of arrays.

Matrix transposes are not limited to 3x3 matrices, or even square matrices. Any matrix can be transposed simply by switching columns with rows.

Modify your transpose function from the previous exercise so that it works with any MxN matrix with at least one row and one column.

Understanding the Problem

- input:
  - an array with one or more subarrays
    - each subarray can have one or more integers
    - Do all subarrays always have an equal number of elements? 
      - assume yes for now
      - if have to fix later,we'll add null values

- output:
  - an array with 1 or more subarrays
    - the number of subarrays will equal the length of the input subarrays
    - the length of the subarrays will equal the length of the input array

- model of problem:
  - create a new array object
    - a number of subarrays equal to length of a subarray from the inputarray
    - each subarray will end up having a length equal to the length of the input array
  - iterate over the input arrays
    - for each subarray iterate over the elements with INDEX
      - use the index to push the current element to the corresponding subarray in the newArray
  - return new array

**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/

function transpose(inputArray) {
  let newArray =[];
  
  addSubArrays(inputArray, newArray);
  
  inputArray.forEach(subArray => {
    subArray.forEach((element, index) => newArray[index].push(element));
  });
  console.log(newArray);
  return newArray;
}

function addSubArrays(inputArray, newArray) {
  let numberOfSubArrays = inputArray[0].length;
  for (let index = 0; index < numberOfSubArrays; index += 1) {
    newArray.push([]);
  }
}

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
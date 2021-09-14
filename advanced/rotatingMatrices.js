/*
**Problem**
As we saw in the previous exercises, a matrix can be represented by an array of arrays. For example, the 3x3 matrix shown below:

  1  5  8
  4  7  2
  3  9  6

is represented by the following array of arrays:

  const matrix = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6],
  ];

A 90-degree rotation of a matrix produces a new matrix in which each side of the matrix is rotated clockwise by 90 degrees. For example, the 90-degree rotation of the matrix shown above is:

  3  4  1
  9  7  5
  6  2  8

A 90-degree rotation of a non-square matrix is similar. For example, given the following matrix:

  3  4  1
  9  7  5

its 90-degree rotation is:

  9  3
  7  4
  5  1

Write a function that takes an arbitrary MxN matrix, rotates it clockwise by 90-degrees as described above, and returns the result as a new matrix. The function should not mutate the original matrix.


Understanding the Problem

- input:
  - an array of 1+ sub arrays
    - each subarray has 1+ integers

- output:
  - an array of 1+ sub arrays
    - each subarray has 1+ integers

- model of problem:
  - create and populate a new array of subarrays
    - the number of subarrays will equal the length of a subarray in the input array
    - the number of elements in the subarray will equal the number of subarrays in the input array
  - an elements index position in the subarray of the input array
    - equates to the index of the subarray in the new Array

**Examples / Test Cases**


**Data Structures**
- arrays

**Algorithm**
- create new array object
  -  populate array with empty subarrays
    -  find length of subarray in inputarray
    - add that many empty arrays to our new array object

- iterate over the subarrays of the input array
  - for each subarray, input over the integers with index
    - use the index to determine the subarray of the newArray to unshift the integer to

- return new array

*/

function rotate90(inputMatrix) {
  let newArray = [];
  
  addSubArrays(inputMatrix, newArray);
  
  inputMatrix.forEach(subArray => {
    subArray.forEach((element, index) => newArray[index].unshift(element));
  });
  
  return newArray;
}


function addSubArrays(inputMatrix, newArray) {
  let numberOfSubArrays = inputMatrix[0].length;
  for (let index = 0; index < numberOfSubArrays; index += 1) {
    newArray.push([]);
  }
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const myMatrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15]
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));
const myNewMatrix = rotate90(myMatrix);

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
console.log('');
console.log(myNewMatrix);    // [[11, 6, 1], [12, 7, 2], [13, 8, 3], [14, 9, 4], [15, 10, 5]]
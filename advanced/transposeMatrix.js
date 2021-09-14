/*
**Problem**
A 3x3 matrix can be represented by an array of arrays: an outer array containing three subarrays that each contain three elements. For example, the 3x3 matrix shown below:

  1  5  8
  4  7  2
  3  9  6

is represented by the following array of arrays:

  const matrix = [
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6],
  ];

The transpose of a 3x3 matrix is the matrix that results from exchanging the rows and columns of the original matrix. For example, the transposition of the matrix shown above is:

  1  4  3
  5  7  9
  8  2  6
  
Write a function that takes an array of arrays that represents a 3x3 matrix and returns the transpose of the matrix. You should implement the function on your own, without using any external libraries.

Take care not to modify the original matrix — your function must produce a new matrix and leave the input matrix array unchanged.

Understanding the Problem

- input:
  - a two dimensional array
    [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

- output:
  -  a two dimensional array (not the same objects!)
  [[1, 4, 3], [5. 7.9], [3, 9, 6]]

- model of problem:
  - take a nested array that creates a 3 x 3 matrix
  - populate a new array object 
    - the index of each element in a nested array, equals the index of the nested array it should be added to

**Examples / Test Cases**
const myMatrix = [
  [1, 2 ,3],
  [4, 5, 6],
  [7, 8 ,9]
];

transpose(myMatrix);    // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

**Data Structures**
- two dimensional arrays

**Algorithm**
- create newMatrix object with three empty nextsed arrays [[], [], []]
- iterate over the input Matrix (forEach)
  - each element is a one of the nested arrays ([1, 2, 3])
  - iterate over the elements of the nested array WITH INDEX
    - use the index to push the element to that index location in the newMatrix
- return newMatrix

*/
function transpose(matrixInput) {
  let newMatrix = [ [], [], [] ];

  matrixInput.forEach(nestedArray => {
    nestedArray.forEach((element, index) => newMatrix[index].push(element));
  });
  
  return newMatrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
console.log('');

const myMatrix = [
  [1, 2 ,3],
  [4, 5, 6],
  [7, 8 ,9]
];

let newMyMatrix = transpose(myMatrix);    // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
console.log(newMyMatrix);
console.log(myMatrix);

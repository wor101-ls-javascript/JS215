/*
**Problem**
Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

  - If the input is not an array, return undefined.
  - If the input is an empty array, return an empty array.

Review the test cases below, then implement the solution accordingly.

Understanding the Problem

- input:
  - an Array, an empty array, or something else
  - 
- output:
  - if input is an array, then a new array with the first element moved to the end
  - if input is an empty array, then an empty array
  - if input not an array, then undefined

- model of problem:
  - DO NOT MUTATE the original array
    - slice() / shallow copy (careful about objects)
    - iterate over the array and add elements to a new array 1 at a time
      -if an element is an object
        - get the keys of the object
        - use the keys to access the values and build a new object
        - add the new object to the new array

**Examples / Test Cases**


**Data Structures**


**Algorithm**
- create a new empty array object
- test if input is not an array
  - return undefined
- test to see if array is of length 0
  - return the new empty array object

- use a for loop starting at index of 1 and looping while less than length of input array
  - check to see if element referenced by index in input array is typeof object
    - if NOT an object, add the value to the new array
    - if IT IS an object, 
      - pass the object to objectCopy function
      - push the return object to the new Array
- check to see if first element is an object
  - if NOT an object, push it to the new Array
  - if IT IS an object, 
    - pass object to objectCopy function
    - push the return object to the new Array
  
- objectCopy function
  - check to see if object is Array Array.isArray([])
    - if an Array, create a new Array
    - iterate over elements of input array
      - check to see if typeof objject
        - if NOT add to new array
        - if IS add to objectCopy function add return to new array
  - get keys of the object and iterate over the values
    - check to see if a value is an object
      - if NOT add key and value pair to a new object
      - if YES then send to objectCopy function and add return value to new array
  - return new array or new object

- 

*/

function rotateArray(inputArray) {
  if (!Array.isArray(inputArray)) {
    return undefined;
  } else if (inputArray.length === 0) {
    return [];
  }

  let newArray = [];
  for (let index = 1; index < inputArray.length; index += 1) {
    if (typeof inputArray[index] !== 'object') {
      newArray.push(inputArray[index]);
    } else {
      newArray.push(copyObject(inputArray[index]));
    }
  }

  if (typeof inputArray[0] !== 'object') {
    newArray.push(inputArray[0]);
  } else {
    newArray.push(copyObject(inputArray[0]));
  }

  return newArray;
}

function copyObject(originalObject) {
  let newObject;

  if (Array.isArray(originalObject)) {
    newObject = [];
    originalObject.forEach(element => {
      if (typeof element !== 'object') {
        newObject.push(element);
      } else {
        newObject.push(copyObject(element));
      }
    });
  } else {
    newObject = {};
    let objectKeys = Object.keys(originalObject);

    objectKeys.forEach(key => {
      if (typeof originalObject[key] !== 'object') {
        newObject[key] = originalObject[key];
      } else {
        newObject[key] = copyObject(originalObject[key]);
      }      
    });
  }
  return newObject;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
/*
**Problem**
A triangle is classified as follows:

  - Equilateral: All three sides are of equal length.
  - Isosceles: Two sides are of equal length, while the third is different.
  - Scalene: All three sides are of different lengths.

To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, 
and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 
'equilateral', 'isosceles', 'scalene', or 'invalid'.

Understanding the Problem

- input:
  - three Numbers (each represent the length of a side of a triangle)

- output:
  - one of four strings: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

- model of problem:
  - confirm if triangle is valid
    - sum of two shortest sides must be greater than longest side
      - need to identify shortest and logest sides
    - all sides must have a length greater than 0
  - confirm if equilateral (all three sides are equal)
  - confirm if isosceles (2 sides are equal)
  - else it must be scalene

**Examples / Test Cases**


**Data Structures**
- use an array to hold all three sides


**Algorithm**
- create array with three values, each equal to an input side
- sort the array
  - callback function should short by shortest first

- check if triangle is valid
  - if any side equals 0, return false
  - if the sum of the shortest two sides (first two elements of the array) is lass than or equal to the last element of the array, return false
  - else return true
- if the triangle is invalid, return "invalid"

- chekc if equilateral
  - if all three elements of array are equal
  - return true
- if equilateral return "equilateral"

- check if isosceles
  - if side 1 and side 2 equal, or side 1 and side 3, or side 2 and side 3
  - return true
- return "isosceles"

- else return "scalene"
*/

function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3].sort((x, y) => x - y);
  
  if (!validTriangle(sides)) {
    return "invalid";
  } else if (equilateralTriangle(sides)) {
    return "equilateral";
  } else if (isoscelesTriangle(sides)) {
    return "isosceles";
  } else {
    return "scalene";
  }
}

function validTriangle(sides) {
  if (sides.includes(0)) {
    return false;
  } else if (sides[0] + sides[1] <= sides[2]) {
    return false;
  } else {
    return true;
  }
}

function equilateralTriangle(sides) {
  return sides[0] === sides[1] && sides[1] === sides[2];
}

function isoscelesTriangle(sides) {
  return (sides[0] === sides[1] || sides[0] === sides[2] || sides[1] == sides[2]);
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"'
console.log(triangle(3, 2, 0.5));      // invalid
console.log(triangle(10, 4, 4));       // invalid
console.log(triangle(4, 20, 20));      // 'isocleles'
console.log(triangle(20, 15, 5));      // invalid
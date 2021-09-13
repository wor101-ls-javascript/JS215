/*
**Problem**
A triangle is classified as follows:

  - Right: One angle is a right angle (exactly 90 degrees).
  - Acute: All three angles are less than 90 degrees.
  - Obtuse: One angle is greater than 90 degrees.

To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. 
If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and 
returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. 
You may also assume that the arguments are in degrees.

Understanding the Problem

- input:
  - three integers (each represents the degrees of a single angle in a triangle)

- output:
  - one of four strings ('right', 'acute', 'obtuse', or 'invalid')

- model of problem:
  - determine if it is a valid triangle
    - all angles must total 180
    - all angles must be greater than 0
  - determine type of triangle
    - if any angle equals 90 it is 'right'
    - if all angles less than 90 then acute
    - if an angle greater than 90, obtuse

**Examples / Test Cases**


**Data Structures**
- array to hold angles


**Algorithm**
- create angles array with three elements each equal to an angle

- check if valid
  - use reduce to sum up the angles in the array
    - if does not equal 180 return false
    - else return true
- if NOT valid return 'invalid'

- check type of triangle
  - use Math.max on the array to get the largest angle
  - if greater than 90, return 'obtuse'
  - if equal to 90, return 'right'
  - else return 'acute'
*/

function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];

  let largestAngle = Math.max(...angles);
  if (!validTriangle(angles)){
    return 'invalid';
  } else if (largestAngle > 90) {
    return 'obtuse';
  } else if (largestAngle === 90) {
    return 'right';
  } else {
    return 'acute';
  }
}


function validTriangle(angles) {
  if (angles.reduce((total, angle) => total + angle) !== 180) {
    return false
  } else if (Math.min(...angles) <= 0) {
    return false;
  } else {
    return true;
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
console.log(triangle(178, 1, 1));        // obtuse
console.log(triangle(180, 0, 0));        // invalid
console.log(triangle(40, 40, 40));       // invalid
console.log(triangle(-10, 170, 20));     // invalid

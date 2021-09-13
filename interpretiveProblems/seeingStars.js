/*
**Problem**
Write a function that displays an 8-pointed star in an nxn grid, 
where n is an odd integer that is supplied as an argument to the function. 
The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

Understanding the Problem

- input:
  - Integer 
    - always odd
    - always 7+

- output:
  - string / strings to console
    - consist of * and spaces
      - *'s
        - all but the middle line contain three *'s
        - the middle line is n # of *'s
      - whitespace 
        - all but the middle line will have n - 3 characters of whitespace
        - the middle line will have no whitespace
    - n # of lines total
      - top line *'s start out at furthest edge and centere
      - each consecutive line, white space increased by one on edges
    - lines are n # of characters wide


- model of problem:
  - determine whitespace padding
    - outer incrases by a total of 2 each time
    - inner decreases by a total of 2 each time
  

**Examples / Test Cases**


**Data Structures**
- an array of strings starting 
  - first element represents the top line
  - seconde elemente the second from top, etc
  - last element will be the middle line

**Algorithm**
- create an array to hold are string elements 
- determine total whitespace (input - 3)
- set outer padding to 0
- set inner padding to whitespace / 2

- build the top lines (not the middle)
  - loop a # of times equal to the input / 2 and rounded down
  - create the individual line (breakout into own function?)
    - create a string with
      - starting white space equal to outer padding +
      - * +
      - white space equal to inner padding +
      - * + (do we need additional whitespace
      - white space equal to inner padding) +
      - * + 
      - white space equal to outer padding (.repeat())

    - add string to the array at our current index
    - increase outer padding by 1
    - decrease inner padding by 1

- build middle line (*'s .repeat(inputIteger))
- loop over the array of lines
  - log each string element to the console
- log the middle line to the console
- reverse the array of lines
- loop over the reversed array  
  - log each string elmenent to the console
*/

function star(size) {
  const TOTAL_WHITE_SPACE = size - 3;
  let starLines = [];

  let outerPadding = 0;
  let innerPadding = TOTAL_WHITE_SPACE / 2;

  for (let index = 0; index < Math.floor(size / 2); index += 1) {
    starLines.push(' '.repeat(outerPadding) + '*' + ' '.repeat(innerPadding) + '*' + ' '.repeat(innerPadding) + '*' + ' '.repeat(outerPadding));
    outerPadding += 1;
    innerPadding -= 1;
  }

  let middleLine = '*'.repeat(size);

  starLines.forEach(line => console.log(line));
  console.log(middleLine);
  starLines.reverse().forEach(line => console.log(line));
}


star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

console.log('');
star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

console.log('');
star(13);
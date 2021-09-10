/*
**Problem**
Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. 
You may assume that the argument will always be an odd integer.

**Examples / Test Cases**


**Data Structures**
- string for each line of the diamond
- width of line determined by odd integer
- number of lines determined by odd integer
- half way (all diamonds) is going to be 1/2 the odd integer rounded up
- create array to hold strings up to the middle of the diamond and then reuse them for the second half


**Algorithm**
1. create lines variable as an array to hold strings for each line
  - creat a string variable to hold stars and start at 1
2. create a for loop that is going to loop through starting at 1 and until equal to odd integer / 2  + 1
  - use current index to get how many stars to enter
    - if index = 1 than add none to stars variabl
    - otherwise add 2
  - determine whitespace
    - odd integer minus the length of the current stars string
    - divide by 2 to find out how much to pad each side
  - construct string with white space plus *'s plus white space
  - add string to array
3. iterate through our array
  - log to console each element
4. reverse the array
  - skip the first element if its our halfway line
  - log to console each element

*/
function diamond(oddInteger) {
  let lines = [];
  let stars = '*';
  let middleLine = Math.round(oddInteger / 2);

  for (let index = 1; index <= middleLine; index += 1) {
    if (index === 1) {
      whiteSpacePadding = calculateWhiteSpace(oddInteger, stars);
      lines.push(constructLine(whiteSpacePadding, stars));
    } else {
      stars += '**';
      whiteSpacePadding = calculateWhiteSpace(oddInteger, stars);
      lines.push(constructLine(whiteSpacePadding, stars));
    }
  }
  lines.forEach(line => console.log(line));
  lines.reverse().slice(1).forEach(line => console.log(line));
}

function constructLine(whiteSpace, stars) {
  return whiteSpace + stars + whiteSpace;
}

function calculateWhiteSpace(oddInteger, stars) {
  let numberOfWhiteSpaces = (oddInteger - stars.length) / 2;
  return ' '.repeat(numberOfWhiteSpaces);
}


diamond(1);
// logs
// *


diamond(3);
// logs
//  *
// ***
//  *



diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
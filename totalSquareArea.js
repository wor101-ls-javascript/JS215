/*
**Problem**
For this practice problem, we'll represent rectangles as Arrays with two elements: a height and a width.

Write a Function named totalArea that takes an Array of rectangles as an argument. 
The Function should return the total area covered by all the rectangles.

**Examples / Test Cases**
let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalArea(rectangles);    // 141

**Data Structures**


**Algorithm**
*/
function totalArea(rec) {
  return rec.reduce(calcArea, 0);
}

function calcArea(total, rectangle) {
  return total += rectangle[0] * rectangle[1];
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

// LS solution:
// function totalArea(rectangles) {
//   let areas = rectangles.map(rectangle => rectangle[0] * rectangle[1]);
//   return areas.reduce((sum, area) => sum + area);
// }

// problem:
// Now, write a second Function named totalSquareArea. 
// This Function should calculate the total area of a set of rectangles, just like totalArea. 
// However, it should only include squares in its calculations: it should ignore rectangles that aren't square.

// Algorithm:
// 1. use filter to select only elements of rectangles in which both elements are equal
// 2. invoke totalArea method and pass new filtered array as argument
// 3. return result

function totalSquareArea(rectangles) {
  let squareRectangles = rectangles.filter(rec => rec[0] === rec[1]);

  return totalArea(squareRectangles);
}

console.log(totalSquareArea(rectangles));     // 121
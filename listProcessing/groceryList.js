/*
**Problem**
Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. 
Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. 
The output array is such that each fruit name appears the number of times equal to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. 
Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

**Examples / Test Cases**
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

**Data Structures**
- Input: a two dimensional array [['itemName', quantity], ['itemName', quantity],['itemName', quantity]]
- Ouput: a one dimensional array ['itemName', 'itemName', 'itemName', etc]



**Algorithm**
1. create items array to eventually return
2. iterate over the input array
  - on each element:  
    - add the 0 indexed element to the return array
    - repeat until added a number of times equal to the second element
3. return items array

*/

// function buyFruit(groceryList) {
//   let items = [];

//   groceryList.forEach(item => {
//     let itemName = item[0];
//     let itemCount = item[1];
//     let count = 0;
//     while (count < itemCount) {
//       items.push(itemName);
//       count += 1;
//     } 
//   });
//   return items;
// }

function buyFruit(groceryList) {
  return groceryList.map(fruit => repeat(fruit))
                    .reduce((finalArray, subArray) => finalArray.concat(subArray));
}

function repeat(fruit) {
  let result = [];

  for (let i = 0; i < fruit[1]; i += 1) {
    result.push(fruit[0]);
  }
  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
/*
**Problem**
It is quite common to find yourself in a situation where you need to perform a search on some data to find something you're looking for. Imagine that you need to search through the yellow pages to find the phone number of a particular business. A straightforward way to do this would be to go through the yellow pages one business at a time, checking if the current business name is the one you're trying to find.

This may be a simple and easy way to search, but it's not very efficient. In the worst case scenario, it could mean having to search through every single business name before finding out that the business isn't listed—or, slightly better, having to go through every letter from 'A' to 'Z' before finding the business. A linear search such as this can take quite a long time.

A binary search algorithm is a much more efficient alternative. This algorithm allows you to cut the search area in half on each iteration by discarding the half that you know your search term doesn't exist in. The binary search algorithm is able to do this by relying on the data being sorted. Going back to the yellow pages example, let's say that we're searching the following yellowPages data for the search item 'Pizzeria':

  // Yellow pages list of business names data:
  const yellowPages = ['Apple Store', 'Bags Galore',
                       'Bike Store',  'Donuts R Us',
                       'Eat a Lot',   'Good Food',
                       'Pasta Place', 'Pizzeria',
                       'Tiki Lounge', 'Zooper'];
                       
In a binary search, however, the following sequence happens:

  -  Retrieve the middle value from the data (assume truncation to integer) --> 'Eat a Lot'.
  -  If the middle value is equal to 'Pizzeria', stop the search.
  -  If the middle value is less than 'Pizzeria':
    -  Discard the lower half, including the middle value --> ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R        Us', 'Eat a Lot'].
    -  Repeat the process from the top, using the upper half as the starting data --> ['Good Food', 'Pasta Place',          'Pizzeria', 'Tiki Lounge', 'Zooper'].
  -  If the middle value is greater than 'Pizzeria', do the same as the previous step, but with opposite halves.

Using the process described above, the search successfully ends on the second iteration when the middle value is 'Pizzeria'.

Implement a binarySearch function that takes an array and a search item as arguments, and returns the index of the search item if found, or -1 otherwise. You may assume that the array argument will always be sorted.

Understanding the Problem

- input:
  - an array argument
    - sorted (integers or strings)
  - a string search term
    - do we ignore case?

- output:
  - an integer
    - the index number where the search term appears in the array argument
    - or -1 if the search term does not appear

- model of problem:
  - find the middle of the array argument (round to an integer)
  - if the element at the middle index is the search term, return that index
  - otherwise, check if the value at the middle index is less than the search term
    - if less than, discard the lower half, and repeat
    - else, discard the higher half, and repeat process
**Examples / Test Cases**


**Data Structures**


**Algorithm**
- create variable called termIndex and set to 0;
- set middleIndex variable to equal length of searchArray / 2 rounded down
- check if searchTerm equals the value at the middleIndex in the searchArray
  - if yes, set termIndex equal to middleIndex
- check if searchTerm is > value at middleIndex in searchArray
  - if yes, 
    -  slice Array at middleIndex 
    - passed slice as first argument to our binarySearch function (2nd argument is searchTerm)
    - set termIndex = middleIndex + 1 + the return index from our nested binarySearch
  - if no,
    - slice array from 0 index up to BUT NOT including middleIndex
    - pass slice as first argument to our binarySearch function (2nd argument is searchTerm)
    - set termIndex = middleIndex - the retrun index from our nested binarySearch
- return termIndex;
*/

function binarySearch(searchArray, searchTerm) {
  let high = searchArray.length - 1;
  let low = 0;
  
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (searchArray[mid] === searchTerm) {
      return mid;
    } else if (searchArray[mid] < searchTerm) {
      low = mid + 1;
    } else {
      high = mid -1;
    }
  }
  return -1;
}


const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];

console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0
console.log(binarySearch(yellowPages, 'Zooper'));                     // 9

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 102);   // 8


binarySearch([1, 5, 7, 11, 23, 45, 65, 89], 7);   // 2
binarySearch([1, 5, 7, 11, 23, 45, 65, 89], 1);   // 0
binarySearch([1, 5, 7, 11, 23, 45, 65, 89], 89);  // 7


// binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
// binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6
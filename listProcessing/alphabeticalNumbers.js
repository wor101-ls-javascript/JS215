/*
**Problem**
Write a function that takes an array of integers between 0 and 19 and 
returns an array of those integers sorted based on the English word for each number:
  
  ----
  zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen
  ----
Do not mutate the argument.

**Examples / Test Cases**
alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

**Data Structures**


**Algorithm**
1. create array where each element is a string word representing its index
2. Use map/transformation to iterate over input array and return string word in place of number (save to new array object)
3. sort new array of numeric words
4. use map to transform numeric word array
  - use findIndex on each element and use that as new value
5. return result of map
*/

// function alphabeticNumberSort(array) {
//   const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
//                        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

//   let arrayOfWords = array.map(number => numberWords[number]).sort();
//   return arrayOfWords.map(word => numberWords.findIndex(number => number === word));
// }

function wordSort(num1, num2) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
                       'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  return [...array].sort(wordSort);
}


console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
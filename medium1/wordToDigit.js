/*
**Problem**
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" 
— 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

Understanding the Problem

- input:
  -  a string
    - contains letters, punctuation
- output:
  - a string

- model of problem:
  - need to recongize word versions of numbers and replace them with their numerical version
    - numbers higher than 10?
    - some word numbers have punctuation after them

**Examples / Test Cases**


**Data Structures**
- object where the key is the word version of a number and value is the string digit version
{ one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', 
  eight: '8', nine: '9', ten: '10', eleven: '11', twelve: '12', thirteen: '13',
  fourteen: '14', fifteen: '15', sixteen: '16', seventeen: '17', eighteen: '18',
  nineteen: '19', twenty: '20'}

**Algorithm**
- split the input string into an array on ' ' 
- iterate over the array
  - get only the alphabetic portions of the string using match and regex
    - use replace to switch all non-alphabetic charcters with ''
  - use the alphabetic portion of the string as a key in the object
    - if it returns a value, replace the alphabetic portion with the returned value
*/

const NUMBERS = { one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', 
                  eight: '8', nine: '9', ten: '10', eleven: '11', twelve: '12', thirteen: '13',
                  fourteen: '14', fifteen: '15', sixteen: '16', seventeen: '17', eighteen: '18',
                  nineteen: '19', twenty: '20'};

function wordToDigit(inputString) {
  let wordArray = inputString.split(' ');
  
  return wordArray.map(word => {
    let cleanedWord = word.replace(/[^a-z]/i, '');
      if (NUMBERS[cleanedWord]) {
        return word.replace(cleanedWord, NUMBERS[cleanedWord]);
      } else {
        return word;
      }
    }).join(' ');
}

// function wordToDigit(inputString) {
//   Object.keys(NUMBERS).forEach(word => {
//     let regex = new RegExp('\\b' + word + '\\b', 'g')
//     inputString = inputString.replace(regex, NUMBERS[word]);
//   });
//   return inputString;
// }

console.log(wordToDigit('five'));
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log('The weight is done.');
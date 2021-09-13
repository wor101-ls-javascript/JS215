/*
**Problem**
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. 
For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. 
Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.


Understanding the Problem

- input:
  - an integer

- output:
  - an integer
    - larger than the input
    - and is a 'featured' number

- model of problem:
  - a feature number must:
    - be odd
    - be a multiple of 7
    - each digit can only occur once

**Examples / Test Cases**


**Data Structures**
- input integer
- an array of string digits from the input integer

**Algorithm**

- find next multiple of 7 (function) and set as candidate variable
- loop until featured number is found
  - check candidate to see if featured (function)
  - if true, break
  - else, add 7 and repeat
- return candidate

- nextMultipleOf7(inputInteger)
  - loop until true
    - add 1 tio inputInteger
    - inputInteger % 7 === 0
    - say true
  - return multiple

- isFeatured(candidate)
  - if even return false
  - split into an array of string digits
  - iterate over the string
    - for each character filter the array to only charcters equal to the current on
    - test the length of the filtered array and return false if greater than 1
  - return true

*/
function featured(inputInteger) {
  let candidate = nextMultipleOf7(inputInteger);
  
  while (!isFeatured(candidate)) {
    candidate += 7;
  }
  console.log(candidate);
  return candidate;  
}

function isFeatured(candidate) {
  if (candidate % 2 === 0) {
    return false;
  }

  let stringDigits = candidate.toString().split('');

  for (let index = 0; index < stringDigits.length; index += 1) {
    let charCount = stringDigits.filter(element => element === stringDigits[index]).length;
    if (charCount > 1) {
      return false;
    }
  }
  return true;
}

function nextMultipleOf7(candidate) {
  do {
    candidate += 1;
  } while (candidate % 7 !== 0)
  return candidate;
}




featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."
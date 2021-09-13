/*
**Problem**
Write a function that takes a string and returns an object containing the following three properties:

  - the percentage of characters in the string that are lowercase letters
  - the percentage of characters that are uppercase letters
  - the percentage of characters that are neither

You may assume that the string will always contain at least one character.

Understanding the Problem

- input:
  - a string
    - contains any mixture of alpha numeric and non alpha numberic charcters including whitepsace


- output:
  - an object
    - keys are going to be 'lowercase', 'uppercase', and 'neither'
    - values are going to be string representations of floating point numbers with 2 decimal digits
- model of problem:
  - count the number of lowercase characters
  - count the number of uppercase characters
  - count total of all other characters
  - use totals to find percentages to two decimal places for all 3 categories
  - create an object  using string versions of the percentages as values

**Examples / Test Cases**


**Data Structures**


**Algorithm**
- calculate # of lowercase characters using regex and getting length of return array
- calculate # of uppercase characters using regex and getting lenght of return array
- neither is going to equal to length of input string - lowercase - uppercase
- calculate percent lowercase by dividing total lowercase by total length of input
  - use toFixed(2) to get two decimal places
  - convert to string
- calculate percent uppercase by dividing total uppercase by total length of input
  - used toFixed(2) to get two decimal places
  - conver to string
- calculate neither by diviing neighter by total, etc, etc
- construct and return object using the values
*/

function letterPercentages(inputString) {
  let total = inputString.length;
  let totalLowercase = (inputString.match(/[a-z]/g) || []).length
  let totalUppercase = (inputString.match(/[A-Z]/g) || []).length
  let totalNeither = total - totalLowercase - totalUppercase;

  let percentLowercase = toPercentString(totalLowercase, total);
  let percentUppercase = toPercentString(totalUppercase, total);
  let percentNeither = toPercentString(totalNeither, total);
  
  return { lowercase: percentLowercase, uppercase: percentUppercase, neither: percentNeither };
  
}

function toPercentString(charCount, total) {
  let percent = ((charCount / total) * 100).toFixed(2);
  return percent;
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


console.log(letterPercentages('903942031-:::IjK       89789'));

console.log(letterPercentages('abc EFG 1234'));
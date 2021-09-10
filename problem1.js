/*
**Problem**
Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages.
Other than digits, the number may also contain special characters such as space, dash, dot and parentheses that should be ignored

Rules are as follows:
  - if the # is less than 10 digits assume that is is a bad number
  - if the # is 10 digits assume it is a good number
  - if the # is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
  - if the # is 11 digits and the first number is NOT a 1, then it is a bad number
  - if the # is more than 11 digits assume it is a bad number 
  - return a string of 10 '0' for a bad number

Understanding the Problem

- input:
  - string? (can it take integers?)
    - ignore any space, dash, dots or parentheses (bad if any other non-digit character??)
    - must contain 10 or 11 digits
      - if 11 digits, the first digit must be a 1 and must be trimmed so its only 10 digits long

- output:
  - a string or integer for valid #?
  - bad number should return string up 10 '0''s  

- model of problem:
  - validate the number is okay
    - if any non space, dash, dots or parentheses its bad
    - if after removing space, dash, dots or parentheses it is more than 11 digits its bad
    - if its 11 digits and the first digit is not a 1, it is bad
    - if its less than 10 digits it is bad

**Examples / Test Cases**
cleanNumber('1234567890') === '1234567890'
cleanNumber('123456789') === '0000000000'
cleanNumber('12345678901') === '2345678901'
cleanNumber('92345678901') === '0000000000'
cleanNumber('123-4567-890') === '1234567890'
cleanNumber('123 4567 89 0') === '1234567890'
cleanNumber('12.34..56.7890') === '1234567890'
cleanNumber('1(2(345(678)90') === '1234567890'
cleanNumber('12 3(45).-67-8 90') === '1234567890'
cleanNumber('12345678A901') === '0000000000'
cleanNumber('123456%890') === '0000000000'

**Data Structures**
- string for validation and cleanup of valid but non-numerical characters
- return a string


**Algorithm**

- model of problem:
  - validate the number is okay
    - if any non space, dash, dots or parentheses its bad
    - if after removing space, dash, dots or parentheses it is more than 11 digits its bad
    - if its 11 digits and the first digit is not a 1, it is bad
    - if its less than 10 digits it is bad


  - replace valid but non-numerical characters with ''
  - validate the number using match and regex (should only be numbers left)
  - validate the number is good (correct length)
    - if 10 digits it is good
    - if it is 11 digits
      - if first digit is 1, remove first digit from string
      - if first digit is not 1, bad number
  - return the cleaned up string

*/

function cleanNumber(dirtyNumber) {
  const BAD_NUMBER = '0000000000';
  let validNonDigitsRemoved = dirtyNumber.replace(/[ -.()]/g, '');
  if (nonDigits(validNonDigitsRemoved)) {
    return BAD_NUMBER;
  } else if (validNumber(validNonDigitsRemoved)) {
    return trimToTenDigits(validNonDigitsRemoved);
  } else {
    return BAD_NUMBER;  
  }
}

function trimToTenDigits(stringNum) {
  return stringNum.length === 10 ? stringNum : stringNum.slice(1);
}

function nonDigits(stringNum) {
  return stringNum.match(/[^0-9]/);
}

function validNumber(stringNum) {
  if (stringNum.length === 10) {
    return true;
  } else if (stringNum.length === 11 && stringNum[0] === '1') {
    return true;
  } else {
    return false;
  }  
}

console.log(cleanNumber('1234567890') === '1234567890');
console.log(cleanNumber('123456789') === '0000000000');
console.log(cleanNumber('12345678901') === '2345678901');
console.log(cleanNumber('92345678901') === '0000000000');
console.log(cleanNumber('123-4567-890') === '1234567890');
console.log(cleanNumber('123 4567 89 0') === '1234567890');
console.log(cleanNumber('12.34..56.7890') === '1234567890');
console.log(cleanNumber('1(2(345(678)90') === '1234567890');
console.log(cleanNumber('12 3(45).-67-8 90') === '1234567890');
console.log(cleanNumber('12345678A901') === '0000000000');
console.log(cleanNumber('123456;890') === '0000000000');
console.log(cleanNumber('A1234--  567890') === '0000000000');
console.log(cleanNumber('-1234--  567890') === '1234567890');
console.log(cleanNumber('-91234--  567890') === '0000000000');
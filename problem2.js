/*
**Problem**
The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, 
such as credit card numbers and Canadian Social Insurance Numbers.

The formula verifies a number against its included check digit, 
which is usually appended to a partial number to generate the full number. 

This number must pass the following test:
  - Counting from the rightmost digit and moving left, double the value of every second digit
  - For any digit that thus become 10 or more, subtract 9 from the result
    - 1111 becomes 2121
    - 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)

  - Add all these digits together
    - 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
    - 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), 
then the number is valid according to the Luhn Formula; else it is not valid. 
Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid per the Luhn formula. 
This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.

Understanding the Problem

- input:
  - string
    - is the string always a certain length? is it always divided into groupings of 4 numbers?
    - i am going to assume any length and remove all non-digit characters

- output:
  - true if checksum has no remainder when divided by 10
  - false otherwise

- model of problem:
  - getting a string and removing all non-digit characters
  - iterate over that string from right to left and mutating every other digit
  - sum the digits to get the checksum total
  - check to see if that chesum is evenly divisble by 10 and return a boolean

**Examples / Test Cases**

validLuhn('2323 2005 7766 3554') === true
validLuhn('1111') === false
validLuhn('8763') === true
validLuhn('2323az- 2005 pp7766[] 3554') === true
validLuhn('11111') === false

**Data Structures**
- array
  - clean up the input string and split into integers
  - reverse it to better iterate
  - eventually reduce the array for a sum
- return a boolean


**Algorithm**
- clean up string using replace and regex to remove all non-digits
- split the string into an array and reverse that array
- transform / map the array to explicitly convert each string element into an integer element
- map / transform over the array using the index
  - every even numbered index we leave the element unchanged
  - for every odd numbered index we double the value
    - if the value is 10 or greater subtract 9 from the value
- reduce the array into a single number
- check if reduced number is evenly divisible by 10
  - return true if it is
  - return false if it is not
*/

function validLuhn(stringNum) {
  stringNum = stringNum.replace(/\D/g, '');
  let digits = stringNum.split('').reverse().map(str => Number(str));
  let doubledDigits = digits.map((dig, index) => {
                        if (index % 2 === 0) {
                          return dig;
                        } else {
                          return dig * 2 < 10 ? (dig * 2) : ((dig * 2) - 9);
                        }
                 });
  let checksum = doubledDigits.reduce((total, dig) => total + dig);
  return checksum % 10 === 0;
}

console.log(validLuhn('2323 2005 7766 3554') === true);
console.log(validLuhn('1111') === false);
console.log(validLuhn('8763') === true);
console.log(validLuhn('2323az- 2005 pp7766[] 3554') === true);
console.log(validLuhn('11111') === false);
console.log(validLuhn('8767') === false);
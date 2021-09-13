/*
**Problem**
Write a function that implements the Caesar Cipher. 
The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. 
It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. 
For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. 
This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case). 
Any other character is left as is. The substituted letters are in the same letter case as the original letter. 
If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

Understanding the Problem

- input:
  - a string to be cyphered
  - an integer representing key
    - key represents # to be shifted

- output:
  - a string, cyphered

- model of problem:
  - change each character in a string 
    - finding the letter n #'s latter in the alphabet
    - if shifting exceeds length of alphabet, wrap around to beginning
      - lowercase: 'a' = 97, 'z' = 122
      - uppercase: 'A' = 65, 'Z' = 90
    - must preserve case
    - ONLY encrypts letters (if not a letter just keep it?) 


**Examples / Test Cases**


**Data Structures**
  - split the input string into an array of characters
  - use transformation map on each character in the array
    - if it is not a alphabetic character return the character as is
    - otherwise get the charcode
      - if charcode is  90 or less shift using uppercase (pass charcode, and shift)
      - else shift using lowercase (pass charcode, and shift)
      - take return value and add it to cyphered string


  - uppercaseShift(charcode, shift)
    - add shift to charcode
    - if new value is 90 or less return the string version of the charcode
    - else subtract 26 from the new value and return the string version of new value
  - lowercaseShift(charcode, shift)
    - add shift to charcod
    - if  value is 122 or less return string version of charcode
    - else subtract 26 and return string version of new value

**Algorithm**
*/

function caesarEncrypt(str, shift) {
  let chars = str.split('');

  return chars.map(char => {
      if (char.match(/[^a-zA-Z]/)) {
        return char;
      } else {
        let charCode = char.charCodeAt();
        if (charCode <= 90) {
          return upperCaseShift(charCode, shift);
        } else {
          return lowerCaseShift(charCode, shift);
        }
      }
  }).join('');

}

function upperCaseShift(charCode, shift) {
  let newValue = charCode + shift;
  // console.log(charCode);
  // console.log(newValue);
  if (newValue <= 90) {
    return String.fromCharCode(newValue);
  } else {
    newValue -= 26;
    return String.fromCharCode(newValue);
  }
}

function lowerCaseShift(charCode, shift) {
  let newValue = charCode + shift;

  if (newValue <= 122) {
    return String.fromCharCode(newValue);
  } else {
    newValue -= 26;
    return String.fromCharCode(newValue);
  }
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) === "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) === "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");
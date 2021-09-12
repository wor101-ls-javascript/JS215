/*
**Problem**
The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. 
It uses a series of Caesar Ciphers based on the letters of a keyword. 
Each letter of the keyword is treated as a shift value. 
For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. 
In other words, the shift value used for a letter is equal to its index value in the alphabet. 
This means that the letters 'a'-'z' are equivalent to the numbers 0-25. 
The uppercase letters 'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. 
To make this more concrete, let's look at the following example:

    plaintext: Pineapples don't go on pizzas!
    keyword: meat

    Applying the Vigenere Cipher for each alphabetic character:
    plaintext : Pine appl esdo ntgo onpi zzas
    shift     : meat meat meat meat meat meat
    ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

    result: Bmnxmtpeqw dhz'x gh ar pbldal!

Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. 
Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

Write a function that implements the Vigenere Cipher. 
The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

For a quick lookup of a ciphertext per character, you may consult this tabula recta. 
Each row of the table corresponds to a Caesar Cipher encryption using the columns' character letter as a shift value.

Understanding the Problem

- input:
  - string of message to be cyphered
  - string of key to cipher
- output:
  - string ciphered

- model of problem:
  - we are given a string to cipher
  - we are going to iterate over each character 
    - we are going to pass that character as to a caesar cypher
    - we are going to get a value between 0 and 25 from our string key to pass to the caesar cypher as well
    - we can skip non alphabetic characters BUT do NOT advance the key

**Examples / Test Cases**


**Data Structures**
vigenereCipher("Pineapples don't go on pizzas!", 'meat') === "Bmnxmtpeqw dhz'x gh ar pbldal!"

**Algorithm**
- reuse our old caesar cipher 
- split our input string into an array of characters
- create a count for keyIndex and set to 0
- use map / transformation on the input string 
  - if the current character is NOT aplhabetic return that character
  - if it is alphabetic
    - check if keyIndex is still valid
      - if keyIndex is >= length of key the reset to 0
    - get shift count by using keyIndex on the key and comparing it to array of letters
    - add 1 to the keyIndex
    - pass current character and shift count to caesar cipher and return result
- join the updated array and return

*/

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function vigenereCipher(message, key) {
  let chars = message.split('');
  let keyIndex = 0;

  return chars.map(char => {
    if (char.match(/[^a-zA-Z]/)) {
      return char;
    } else {
      keyIndex = validateKeyIndex(keyIndex, key);
      let shift = ALPHABET.indexOf(key[keyIndex].toUpperCase());
      keyIndex += 1;
      return caesarEncrypt(char, shift);
    }
  }).join('');
}

function validateKeyIndex(keyIndex, key) {
  if (keyIndex >= key.length) {
    return 0;
  } else {
    return keyIndex;
  }
}


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

console.log(vigenereCipher("Pineapples don't go on pizzas!", 'meat') === "Bmnxmtpeqw dhz'x gh ar pbldal!");
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'meat'));

console.log(vigenereCipher("abcdefg", 'abcd'));

console.log(vigenereCipher("Dog", "rabbit"));
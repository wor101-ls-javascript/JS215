/*
**Problem**
Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.

**Examples / Test Cases**


**Data Structures**


**Algorithm**
1. try to use replace with regex and g qualifier to replace anything matching vowel with ''
*/

function removeVowels(array) {
  return array.map(string => {
    return string.replace(/[aeiou]/ig, '');
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
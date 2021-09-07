/*
**Problem**
Write a Function named anagram that takes two arguments: a word and an array of words. 
Your function should return an array that contains all the words from the array argument that are anagrams of the word argument. 
For example, given the word "listen" and an array of candidate words like "enlist", "google", "inlets", and "banana", 
the program should return an array that contains "enlist" and "inlets".

**Examples / Test Cases**


**Data Structures**
- input:
  - string
  - array w/ string elements
- output: 
  - array w/ string elements

**Algorithm**
1. iterate over input array
  - if lenght of current word does not equal length of input word return false
  - split current word into array and sort
  - split input word into array and sort
  -iterate over input array characters with index
    - if character does not match character in current word at same index return false
  - return true

*/


function anagram(word, list) {
  return list.filter(element => areAnagrams(element, word));
}

function areAnagrams(candidate, word) {
  let candidateLetters = candidate.split('').sort();
  let wordLetters = word.split('').sort();
  return compareArrays(candidateLetters, wordLetters);
}

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } 

  return array1.every((letter, index) => letter === array2[index]);
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
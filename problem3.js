/*
**Problem**
A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. 
You can also only use each block once.

Write a function that takes a word string as an argument, 
and returns true if the word can be spelled using the set of blocks, or false otherwise. 
You can consider the letters to be case-insensitive when you apply the rules.


Understanding the Problem

- input:
  - string
    - can be mixed case
    - white space? other chars? (assume no for now)

- output:
  - a boolean

- model of problem:
  - the alphabet is split into 13 two letter pairs
  - if the input word can be spelled using using a pair only 1 time return true
    - each time a pair is used, both letters are no longer available for use (remove block)
  - if a pair has to be used more than once, return false

**Examples / Test Cases**
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true

**Data Structures**
- two-dimensional array to hold blocks [['B','O'], ['G','T'], ['V','I'], ['X','K'], ['R','E'], ['L','Y'], ['D','Q'], ['F','S'], ['Z','M'], ['C','P'], ['J','W'], ['N','A'], ['H','U']]
- array of characters to hold individual letters from input string
- boolean to return
- object storing letter with count of occurences

**Algorithm**
- split the input into an array of uppercase characters
- iterate over the array of characters
  - for each character iterate over the array of blocks with index
    - check if a block includes the character
    - if it does we want to splice out the block using the index
    - if NO block includes the character we return false
- return true
*/

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M



// function isBlockWord(word) {
//   let blocks = [['B','O'], ['G','T'], ['V','I'], ['X','K'], ['R','E'], ['L','Y'], ['D','Q'], ['F','S'], ['Z','M'], ['C','P'], ['J','W'], ['N','A'], ['H','U']];
//   let letters = word.split('').map(char => char.toUpperCase());
//   let valid = true;

//   letters.forEach(letter => {
//     let index = findBlockIndex(letter, blocks);

//     if (typeof index === 'number') {
//       blocks.splice(index, 1);
//     } else {
//       valid = false;
//     }
//   });
//   return valid;
// }

function findBlockIndex(letter, blocks) {
  for (let index = 0; index < blocks.length; index += 1) {
    if (blocks[index].includes(letter)) {
      return index;
    }
  }
  return false;
}

function isBlockWord(word) {
  let blocks = ['B:O', 'G:T', 'V:I', 'X:K', 'R:E', 'L:Y', 'D:Q', 'F:S', 'Z:M', 'C:P', 'J:W', 'N:A', 'H:U'];
  let letters = word.split('').map(char => char.toUpperCase());
  let valid = true;

  letters.forEach(letter => {
    let index = false;
    for (let i = 0; i < blocks.length; i += 1) {
      let charRegex = new RegExp(letter);
      if (blocks[i].match(charRegex)) {
        index = i;
        blocks.splice(i, 1);
        break
      }
    }
    if (typeof index !== 'number') {
      valid = false;
    }
  });

  return valid;  
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('Will'));       // false
console.log(isBlockWord('rosie'));      // false
console.log(isBlockWord('Rocky'));      // true
